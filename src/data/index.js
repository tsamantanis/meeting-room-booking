export const mockVenues = [
  {
    id: "1",
    name: {
      en: "Blossom",
      nl: "Blossom",
    },
    description: {
      en: "Perfect for workshops, trainings & team events",
      nl: "Ideaal voor workshops, trainingen en teamevenementen",
    },
    images: ["../Blossom_hero_widget.jpg"],
    capacity: 20,
    area: 70,
  },
  {
    id: "2",
    name: {
      en: "Aurora",
      nl: "Aurora",
    },
    description: {
      en: "Perfect for workshops, trainings & team events",
      nl: "Ideaal voor workshops, trainingen en teamevenementen",
    },
    images: ["../Aurora_hero_widget.jpg"],
    capacity: 16,
    area: 65,
  },
];

export const mockEventPackages = [
  {
    id: "1",
    zoho_id: "294101000000450227",
    duration_hours: 8,
    duration_minutes: 0,
    short_description: {
      en: "Full Day",
      nl: "Hele Dag",
    },
    description: {
      en: "Arrive at your convenience. Self check-in / out system available.",
      nl: "Kom op uw gemak aan. Zelf in- en uitchecksysteem beschikbaar.",
    },
    is_multi_day: true,
    is_increment_rate: null,
    rate: 600.0,
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
      en: "Part of day. Morning until 1:00pm - Evening slot from 2:00pm.",
      nl: "Dagdeel. Ochtend tot 13:00 uur - Avondslot vanaf 14:00 uur.",
    },
    is_multi_day: true,
    is_increment_rate: null,
    rate: 400.0,
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
      en: "During weekends or evenings. Minimum booking for 2 hours.",
      nl: "In het weekend of 's avonds. Minimale boeking voor 2 uur.",
    },
    is_multi_day: false,
    is_increment_rate: 1,
    rate: 120.0,
  },
];

export const mockVenuePackages = [
  {
    id: "1",
    venue_id: "1",
    package_id: "1",
    price: 600,
  },
  {
    id: "2",
    venue_id: "1",
    package_id: "2",
    price: 400,
  },
  {
    id: "3",
    venue_id: "1",
    package_id: "3",
    price: 120,
  },
  {
    id: "4",
    venue_id: "2",
    package_id: "1",
    price: 600,
  },
  {
    id: "5",
    venue_id: "2",
    package_id: "2",
    price: 400,
  },
  {
    id: "6",
    venue_id: "2",
    package_id: "3",
    price: 120,
  },
];

export const facilities = [
  {
    id: 3,
    zoho_id: "294101000000057154",
    title: {
      en: "Remote Attendees",
      nl: "Deelnemers op afstand",
    },
    price: 50,
    description: {
      en: "Conference system with Wide angle camera with external microphones.",
      nl: "conferentiesysteem met groothoekcamera met externe microfoons.",
    },
    image: "../conference_form_m.jpg",
  },
  {
    id: 4,
    zoho_id: "294101000000302075",
    title: {
      en: "Flip-charts",
      nl: "Flip-overs",
    },
    price: 40,
    description: {
      en: "Set of 2 flip-charts with paper.",
      nl: "Set van 2 flip-overs met papier.",
    },
    image: "../flipcharts_form_m.jpg",
  },
];

export const catering = [
  {
    id: 4,
    zoho_id: "294101000000057128",
    title: {
      en: "Lunch",
      nl: "Lunch",
    },
    price: 24,
    description: {
      en: "Vegan & vegetarian options as well. We provide a form to order online conveniently.",
      nl: "Ook veganistische en vegetarische opties. We bieden een formulier om gemakkelijk online te bestellen.",
    },
    image: "../lunch_form_m.webp",
  },
  {
    id: 1,
    zoho_id: "294101000000278273",
    title: {
      en: "Beverages",
      nl: "Drankjes",
    },
    price: 7,
    description: {
      en: "Unlimited Coffee, tea and soft drinks.",
      nl: "Onbeperkt koffie, thee en frisdrank.",
    },
    image: "../beverages_form_m.jpg",
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
      en: "Fresh fruit basket, cake, energy bars, chocolate bites.",
      nl: "Vers fruit basket, cake, energierepen, chocoladesnacks.",
    },
    image: "../snacks_form_m.jpg",
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
      en: "Freshly baked pastries, yogurt with fruit and small sandwiches.",
      nl: "Versgebakken broodjes, yoghurt met fruit en kleine broodjes.",
    },
    image: "../breakfast_form_m.webp",
  },
];
