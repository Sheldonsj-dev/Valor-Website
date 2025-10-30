import React from "react";

type Props = { imageUrl: string };

export default function Hero({ imageUrl }: Props) {
  return (
    <header
      className="w-full h-[48vh] md:h-[60vh] bg-center bg-cover flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
      role="img"
      aria-label="Event space hero image"
    >
      <div className="bg-white/85 px-6 py-8 md:px-10 md:py-12 rounded-xl shadow">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          The Valor Venue
        </h1>
        <p className="mt-3 md:mt-4 text-base md:text-lg text-gray-700">
          Modern, welcoming, and affordable. Book your next celebration with confidence.
        </p>
      </div>
    </header>
  );
}
