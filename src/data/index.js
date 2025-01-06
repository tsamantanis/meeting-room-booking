const mockVenues = [
  {
    id: "1",
    name: {
      en: "Blossom Private Space",
      nl: "Blossom Privéruimte",
    },
    description: {
      en: "With a spacious garden can host teams up to...",
      nl: "Met een ruime tuin kan teams tot...",
    },
    images: ["./Blossom_hero_widget.jpg"],
    capacity: 20,
    area: 70,
  },
  {
    id: "2",
    name: {
      en: "Aurora Private Space",
      nl: "Aurora Privéruimte",
    },
    description: {
      en: "With a spacious garden can host teams up to...",
      nl: "Met een ruime tuin kan teams tot...",
    },
    images: ["./Aurora_hero_widget.jpg"],
    capacity: 20,
    area: 70,
  },
];

const mockEventPackages = [
  {
    id: "1",
    zoho_id: "294101000000450227",
    duration_hours: 8,
    duration_minutes: 0,
    short_description: {
      en: "Full Day",
      nl: "Volledige Dag",
    },
    description: {
      en: "Includes Post-its, markers & Presentation screen.",
      nl: "Inclusief Post-its, markeerstiften & presentatiescherm.",
    },
    is_multi_day: true,
    is_increment_rate: null,
    rate: 590.0,
  },
  {
    id: "2",
    zoho_id: "294101000000450240",
    duration_hours: 4,
    duration_minutes: 0,
    short_description: {
      en: "Half Day",
      nl: "Halve Dag",
    },
    description: {
      en: "Includes Post-its, markers & Presentation screen.",
      nl: "Inclusief Post-its, markeerstiften & presentatiescherm.",
    },
    is_multi_day: true,
    is_increment_rate: null,
    rate: 390.0,
  },
  {
    id: "3",
    zoho_id: "294101000000450262",
    duration_hours: 1,
    duration_minutes: 0,
    short_description: {
      en: "Hourly Rate",
      nl: "Uurtarief",
    },
    description: {
      en: "Includes Post-its, markers & Presentation screen.",
      nl: "Inclusief Post-its, markeerstiften & presentatiescherm.",
    },
    is_multi_day: false,
    is_increment_rate: 1,
    rate: 120.0,
  },
];

const facilities = [
  {
    id: 3,
    zoho_id: "294101000000057154",
    title: {
      en: "Conference System",
      nl: "Conferentiesysteem",
    },
    price: 50,
    description: {
      en: "Wide angle camera with external microphones.",
      nl: "Groothoekcamera met externe microfoons.",
    },
    image: "./conference_form_m.jpg",
  },
  {
    id: 4,
    zoho_id: "294101000000302075",
    title: {
      en: "Flip Charts",
      nl: "Flip-overs",
    },
    price: 30,
    description: {
      en: "Set of 2 flip-charts with paper.",
      nl: "Set van 2 flip-overs met papier.",
    },
    image: "./flipcharts_form_m.jpg",
  },
];

const catering = [
  {
    id: 4,
    zoho_id: "294101000000057128",
    title: {
      en: "Lunch",
      nl: "Lunch",
    },
    price: 24,
    description: {
      en: "Via catering partners. Time of delivery specified later.",
      nl: "Via cateringpartners. Levertijd wordt later gespecificeerd.",
    },
    image: "./lunch_form_m.jpg",
  },
  {
    id: 1,
    zoho_id: "294101000000134831",
    title: {
      en: "Beverages",
      nl: "Dranken",
    },
    price: 7,
    description: {
      en: "Unlimited Coffee, tea and soft drinks.",
      nl: "Onbeperkt koffie, thee en frisdrank.",
    },
    image: "./beverages_form_m.jpg",
  },
  {
    id: 2,
    zoho_id: "294101000000124242",
    title: {
      en: "Fruits & Snacks",
      nl: "Fruit & Snacks",
    },
    price: 10,
    description: {
      en: "Fresh fruit, cake, energy bars, chocolate bites.",
      nl: "Vers fruit, cake, energierepen, chocoladesnacks.",
    },
    image: "./snacks_form_m.jpg",
  },
  {
    id: 3,
    zoho_id: "294101000000057137",
    title: {
      en: "Breakfast",
      nl: "Ontbijt",
    },
    price: 18,
    description: {
      en: "Via catering partners. Time of delivery specified later.",
      nl: "Via cateringpartners. Levertijd wordt later gespecificeerd.",
    },
    image: "./breakfast_form_m.jpg",
  },
];
