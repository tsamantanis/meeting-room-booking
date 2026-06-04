# Reservation Form — Implementation Plan

Implementation plan for the changes in [`reservation-form-requested-changes.md`](../reservation-form-requested-changes.md).

## Confirmed decisions (from clarifying questions)

| Topic | Decision |
|---|---|
| Header | Main title **"Get a tailored quote in 3 steps"** + a **persistent step indicator** (`① Basic details · ② Extras · ③ About you`) shown on every step, current step highlighted. Each step also shows its full-phrase heading. |
| Durations | Three options become **8h / 4h / 2h**. Weekend/Evening base = **€270** for 2 hrs. |
| Extra hours | **One unified extra-hours picker on step 1** (catering-style stepper), **€60 / extra hour**, capped so `duration + extra ≤ 12h`. The separate step-2 "Extra Time" upsell from the doc is **not** built. |
| Layout | Section heading → **"What layout do you require?"**; options **Boardroom / U-shape / Classroom / Circle / Theatre** (drop "Intimate"); the venue card is kept as a **display-only** image (no "Choose" button). |
| Catering | Replace the paragraph copy with **"If you want to keep your energy high choose your preferred catering options."** (drops the catering-options link). |
| Final step | Heading → **"Tell us who you are"**; remove the "reply within 10 minutes" sentence; remove the duplicate **nav-row** submit button (keep Back); keep the in-form button, renamed **"Request Quote"**. All other submit buttons (mobile bar/drawer) relabeled to "Request Quote" too. |

### Step heading flow

- Step 1: **Give us the basic details**
- Step 2: **Choose your extras**
- Step 3: **Tell us who you are**

## Zoho integration

The widget's **displayed** total comes from `src/data/index.js` prices; the **Zoho estimate** amounts come from each Zoho item's configured price. Both new items already exist in org `20113447459` at the right price, so **no Zoho-side changes are needed** — only the correct item IDs in the data file:

1. **Weekend/Evening = €270 / 2 hrs** — package 3 `zoho_id` set to `936322000000090488`.
2. **Extra hours = €60 / hr** — `extraHourZohoId` set to `936322000000090454` (sent with `quantity = extraHours × days`).
3. **Layout choice** is sent to the Zoho estimate `notes` (`Layout: {tableSetup}`) AND to Google Sheets as a new **trailing** column (appended after `adsID`, so no existing columns shift). ⚠️ The Google Sheet must have a "Layout" header column added at the far right to receive it.
4. **Event end time** includes extra hours (departure = last day's package hours + extra hours). **Extra hours** also appear in the Sheets "Duration" field (`8 (+2h extra)`) and the Zoho `custom_subject`.

## File-by-file changes

### `src/data/index.js`
- Package 3: `duration_hours: 1 → 2`; `short_description` `"Hourly Rate"/"Uurtarief"` → `"Weekend / Evening"/"Weekend / Avond"`.
- `mockVenuePackages` ids 3 & 6: `price 120 → 270`.
- Add exports: `EXTRA_HOUR_RATE = 60`, `MAX_TOTAL_HOURS = 12`, `extraHourZohoId` (placeholder).

### `src/components/ui/step-indicator.jsx` (new)
Renders the main title + the 3-step progress indicator with the active step highlighted.

### `src/components/ui/quantity-stepper.jsx` (new)
Extracted, **enabled** −/value/+ stepper (the catering card's stepper is currently hard-coded `disabled`). Used for the extra-hours picker. Props: `value`, `onChange`, `min`, `max`, optional label.

### `src/components/booking-widget.jsx`
- New `extraHours` state (default `0`); clamp/reset when the selected duration changes.
- Render `<StepIndicator currentStep>` above the step switch (steps 1–3); remove the old step-1 intro `<h2>/<p>`.
- Pricing `useEffect`: add `extraHours * EXTRA_HOUR_RATE` (per day, mirroring facilities/catering).
- Pass `extraHours` / `setExtraHours` to `Step1` and `Overview`.
- Zoho `line_items`: push extra-hours item (`quantity = extraHours × days`); add layout to `custom_subject`/`notes`.
- Step-3 desktop nav row: **remove the submit button, keep Back**.

### `src/components/booking-widget-step-1.jsx`
- Duration cards show **label + duration** (`"Full day" / "8 hours"`); the Weekend/Evening card shows `"2 hrs @ €270"`.
- Add the **extra-hours stepper** below the duration cards (shown once a duration is picked; `max = 12 − duration`; live €60×n cost).
- Add the step heading **"Give us the basic details"**.
- Venue section: heading → **"What layout do you require?"**; venue card **display-only**; `Select` options → Boardroom / U-shape / Classroom / Circle / Theatre.

### `src/components/ui/card-option.jsx`
Add an optional subtitle/meta line (duration / price). Keep `aria-label` = the label.

### `src/components/ui/venue-card-option.jsx`
Add a `displayOnly` prop that hides the "Choose" button (card stays present; selection still wired).

### `src/components/booking-widget-step-2.jsx`
- Heading → **"Choose your extras"**.
- Replace the catering paragraph with the new sentence.

### `src/components/booking-widget-step-3.jsx`
- Heading → **"Tell us who you are"**.
- Remove the "reply within 10 minutes" sentence.
- Button label/aria → **"Request Quote"**.

### `src/components/booking-widget-overview.jsx`
- Add an "Extra hours × n" line + cost when `extraHours > 0`.
- Relabel the mobile-bar/drawer submit buttons to **"Request Quote"**.

### Tests
Update assertions affected by copy/label changes (`booking-widget`, `step-1`, `step-2`, `step-3`, `overview` test files): step headings, duration aria-labels (`8 Hours`→`Full day`, `4 Hours`→`Half day`), and submit-button labels (`Request Proposal*`→`Request Quote*`). Run `npm run test` + `npm run lint`.

## Out of scope / left as-is
- `thank-you.jsx` "within 10 minutes" copy (unchanged unless requested).
- Catering card quantity stepper stays disabled (separate pre-existing behavior).
- New UI copy is English-only (matches the existing hardcoded-heading convention); bilingual data fields get both `en`/`nl`.
