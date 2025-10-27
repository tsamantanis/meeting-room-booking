# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **meeting room booking widget** built as a React application using Vite. The widget allows users to book meeting room venues (primarily "Blossom") with event packages, facilities, and catering options. It's designed to be embedded as an iframe on the Creative Point website and supports both English and Dutch locales.

The application collects booking information through a multi-step form and submits data to:
- Google Sheets (via a wrapper API)
- Zoho CRM for estimate creation
- Optionally Comidor (currently implemented but not actively used)

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Run all tests
npm run test

# Run tests in watch mode (during development)
npm run test -- --watch

# Run a specific test file
npm run test src/components/booking-widget.test.jsx
```

## Architecture

### Multi-Step Form Flow

The application uses a step-based wizard pattern managed in `src/components/booking-widget.jsx`:

1. **Step 1** (`booking-widget-step-1.jsx`): Venue and event package selection
   - Number of guests, date/time selection
   - Single or multi-day event toggle
   - Venue selection (venue capacity validation)
   - Event package selection (Full Day, Half Day, Hourly)
   - Table setup preference

2. **Step 2** (`booking-widget-step-2.jsx`): Facilities and catering
   - Optional facility add-ons (Conference System, Flip-charts)
   - Catering options with quantity selection (Lunch, Beverages, Snacks, Breakfast)
   - Comments field

3. **Step 3** (`booking-widget-step-3.jsx`): Contact information
   - Company name, first name, last name, email, phone
   - Terms and conditions checkbox
   - Form validation with regex patterns

4. **Overview Panel** (`booking-widget-overview.jsx`):
   - Persistent sidebar showing booking summary and total cost
   - Mobile: Fixed bottom drawer with navigation
   - Desktop: Right sidebar

5. **Step 4**: Thank you page (redirects to main website)

### Data Structure

All data is centralized in `src/data/index.js`:
- `mockVenues`: Venue definitions with capacity, images, bilingual names/descriptions
- `mockEventPackages`: Event duration packages with Zoho IDs
- `mockVenuePackages`: Pricing matrix linking venues to packages
- `facilities`: Add-on equipment with Zoho IDs
- `catering`: Food/beverage options with Zoho IDs

Each data entity includes:
- Unique IDs for internal tracking
- `zoho_id` for CRM integration
- Bilingual content (`en` and `nl` keys)
- Pricing information

### Internationalization

Language detection is URL-based:
- If `/nl/` is present in the pathname, Dutch locale is used
- Otherwise, English is the default
- Language state is stored in the `language` state variable and passed to all child components

### External Integrations

**Google Sheets API**: Submissions are sent to a wrapper service at `VITE_GSAPI_WRAPPER_URL`
- Endpoint: `/append-data`
- Data includes all form fields, calculated totals, timestamps, and ad tracking ID

**Zoho CRM API**: Creates customers and estimates via wrapper at `VITE_ZOHO_WRAPPER_URL`
- First creates/retrieves customer via `/create-customer`
- Then creates estimate via `/create-estimate` with line items
- Line items use `zoho_id` from data files

**Comidor** (legacy): Authentication and reservation creation code exists but is not actively called in the submit flow

### Component Structure

- **UI Components** (`src/components/ui/`): shadcn/ui-based components
  - Custom components: `venue-card-option.jsx`, `facility-card.jsx`, `catering-card.jsx`, `date-picker.jsx`
  - Standard shadcn/ui components: button, input, dialog, calendar, etc.

- **Icons** (`src/components/icons.jsx`): Custom SVG icon components (Arrow, Calendar, Clock, etc.)

### State Management

All state is managed via React `useState` in the main `BookingWidget` component with props drilling to child components. Key state includes:
- Form field values (guests, dates, venue, packages, etc.)
- Error states for validation (per-field error messages)
- Current step tracking
- Submission loading state

### Validation

- **Step 1 validation**: Guest count, date, time, venue selection, package selection, capacity checks
- **Step 3 validation**: Regex-based validation for company name, names (with accents), email, phone (international format)
- Errors are displayed inline and trigger scroll-to-top behavior via `widgetRef`

### Pricing Calculation

Total pricing is calculated via `useEffect` in `booking-widget.jsx`:
- Event package pricing from `mockVenuePackages` (venue + package specific)
- Facility pricing (flat rate per item, multiplied by days for multi-day)
- Catering pricing (per-person per-item, multiplied by quantity and days)
- All prices exclude VAT

### Environment Variables

Required in `.env.local` or `.env`:
- `VITE_GSAPI_WRAPPER_URL`: Google Sheets API wrapper endpoint
- `VITE_ZOHO_WRAPPER_URL`: Zoho CRM API wrapper endpoint

## Testing

Tests use Vitest + React Testing Library + jsdom:
- Test files follow the pattern `*.test.jsx` alongside components
- Setup file: `vitest.setup.js`
- Tests primarily use user interaction simulation and accessibility queries

## Build & Deployment

The application builds as a standard Vite SPA. The production build is embedded as an iframe on the main website:
- On successful submission, the app redirects the top frame: `window.top.location.href = 'https://www.creativepoint.nl/thank-you/'`
- Language-specific URLs use `/nl/` path prefix

## Path Aliases

The project uses `@` as an alias for the `src/` directory in imports (configured in both `vite.config.js` and `vitest.config.js`).

## Known Issues / Technical Debt

- Supabase integration code exists but is commented out (lines 2, 12-314 in `booking-widget.jsx`)
- Comidor integration exists but is not used in the submit flow
- Mock data is hardcoded; no dynamic fetching from backend
- Some commented-out code blocks remain for reference (Dialog wrapper in `App.jsx`, lib build config in `vite.config.js`)
