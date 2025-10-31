import React from "react";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";

export default function HomePage() {
  return (
    <>
      <Hero imageUrl="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" />
      <main className="px-6 md:px-10 py-10">
        <h2 className="text-2xl md:text-3xl font-bold">Welcome</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          A bright, flexible space for weddings, showers, birthdays, corporate events, and
          community gatherings in the Fredericksburg region.
        </p>
      </main>
      <PhotoGrid />
    </>
  );
}
