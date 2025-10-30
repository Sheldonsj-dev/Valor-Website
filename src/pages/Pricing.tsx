import React from "react";
import { TIERS } from "@/data/pricing";

export default function PricingPage() {
  return (
    <main className="px-6 md:px-10 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {TIERS.map(tier => (
          <div key={tier.name} className="rounded-xl border shadow-sm p-6">
            <h3 className="text-xl font-bold">{tier.name}</h3>
            <p className="mt-2 text-3xl font-extrabold text-blue-600">{tier.price}</p>
            <p className="mt-2 text-gray-700">{tier.desc}</p>
            {tier.details?.length ? (
              <ul className="mt-4 space-y-1 list-disc list-inside text-sm text-gray-700">
                {tier.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            ) : null}
            <button className="mt-5 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
              Check availability
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
