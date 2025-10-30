import React from "react";

type Package = {
  name: string;
  bestFor: string;
  hours: string;
  cap: string;
  price: string;
  blurb: string;
};

const PACKAGES: Package[] = [
  {
    name: "Venue-Only Half Day",
    bestFor: "Showers, birthdays, workshops, pop-ups",
    hours: "5",
    cap: "Up to 80",
    price: ",000–,500",
    blurb:
      "Space rental for shorter events. Includes tables and chairs, layout diagram, AV basics, load-in help, and trash removal.",
  },
  {
    name: "Venue-Only Full Day",
    bestFor: "Weddings, quince, galas",
    hours: "10–12",
    cap: "Up to 120",
    price: ",500–,500",
    blurb:
      "All-day access for a calm timeline. Adds bridal suite and vendor staging in addition to the Half Day inclusions.",
  },
  {
    name: "Micro-Wedding Weekday",
    bestFor: "Ceremony + mini reception",
    hours: "3.5",
    cap: "40–60",
    price: ",400–,900",
    blurb:
      "A beautiful, simple wedding on a weekday. Includes a coordinator, ceremony layout, Tier 1 décor access, two mics, Bluetooth music, livestream station, and trash removal.",
  },
  {
    name: "All-Inclusive Lite",
    bestFor: "Easy button weddings",
    hours: "8–10",
    cap: "100–120",
    price: ",800–,200",
    blurb:
      "Coordinator, Tier 2 décor access, AV, flip team, cleaning crew, timeline management, and vendor concierge.",
  },
  {
    name: "Corporate Daypart",
    bestFor: "Meetings, trainings, mixers",
    hours: "4",
    cap: "Up to 120",
    price: ",600–,900",
    blurb:
      "Defined blocks with AV pack, podium, confidence monitor, seating diagram, and water or coffee setup area. Add an hour as needed.",
  },
];

const ADDONS = [
  { title: "Décor Library Access", detail: "Tier 1 , Tier 2 " },
  { title: "Event Coordinator", detail: " up to 6 hours if not included" },
  { title: "Photo Social Package", detail: "60 edited phone clips in 48 hours " },
  { title: "Aisle + Arch Setup", detail: " ceremony focal point and styling" },
  { title: "Kitchen Staging Access", detail: "Refrigerators, warmer, sinks, 20A circuits " },
  { title: "Hybrid Meeting Kit", detail: "Capture device, tripod, light, cables " },
  { title: "Tech Check", detail: "30-minute pre-event test " },
  { title: "Security Deposit / Damage Waiver", detail: " refundable or  flat" },
];

export default function PricingPlaybook() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">The Valor Venue Pricing Playbook</h1>
        <p className="mt-2 text-sm text-gray-600">
          Clear packages, inclusions, and add-ons so planning is simple.
        </p>
      </header>

      {/* Packages */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Packages at a glance</h2>
        <p className="mt-1 text-sm text-gray-600">
          Weekend premium: add – by month. Overtime:  per venue hour,  per staff hour if staffing is included.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className="rounded-2xl border border-gray-200 p-5 shadow-sm"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span className="text-sm font-medium">{p.price}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">{p.bestFor}</p>
              <dl className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div className="rounded-lg bg-gray-50 p-2">
                  <dt className="text-gray-500">Hours</dt>
                  <dd className="font-medium">{p.hours}</dd>
                </div>
                <div className="rounded-lg bg-gray-50 p-2">
                  <dt className="text-gray-500">Guest cap</dt>
                  <dd className="font-medium">{p.cap}</dd>
                </div>
              </dl>
              <p className="mt-3 text-sm">{p.blurb}</p>
              <div className="mt-4">
                <a
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Check date and get a quote
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Inclusions Snapshot */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Inclusions snapshot</h2>
        <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-xl bg-gray-50 p-3">
            Tables and chairs, floor plan, AV basics: two wireless mics, Bluetooth, projector, screen
          </li>
          <li className="rounded-xl bg-gray-50 p-3">Load-in help and post-event trash removal</li>
          <li className="rounded-xl bg-gray-50 p-3">Full Day adds bridal suite and vendor staging</li>
          <li className="rounded-xl bg-gray-50 p-3">Micro-Wedding adds a coordinator and Tier 1 décor access</li>
          <li className="rounded-xl bg-gray-50 p-3">All-Inclusive adds flip team and cleaning crew</li>
        </ul>
        <p className="mt-3 text-xs text-gray-600">
          Cleanup roles: we handle floors and trash removal. Caterers clear food and bar. Décor items return to the cart. COI required for alcohol service and third-party vendors.
        </p>
      </div>

      {/* Add-ons */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Add-ons</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ADDONS.map((a) => (
            <div key={a.title} className="rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-gray-700">{a.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Beverage Options */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold">Beverage options</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
          <li>Open Bar by Person. Set price per guest for beer, wine, and optional spirits tiers.</li>
          <li>Consumption Bar with Live Tracker. Pay only for what is poured, tracked in real time.</li>
          <li>BYO with ABC compliance. Client-supplied alcohol with our ABC checklist and guidance.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-gray-900 p-6 text-white">
        <h2 className="text-xl font-semibold">Ready to hold a date</h2>
        <p className="mt-1 text-sm text-gray-200">
          Ask about weekday micro-weddings and corporate dayparts. We reply fast and hold dates for qualified inquiries.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Contact us
          </a>
          <a
            href="/packages"
            className="inline-flex items-center rounded-xl border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          >
            View packages
          </a>
        </div>
      </div>
    </section>
  );
}
