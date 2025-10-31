import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Hero from "@/components/Hero";
import PhotoGrid from "@/components/PhotoGrid";
export default function HomePage() {
    return (_jsxs(_Fragment, { children: [_jsx(Hero, { imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" }), _jsxs("main", { className: "px-6 md:px-10 py-10", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Welcome" }), _jsx("p", { className: "mt-2 max-w-2xl text-gray-700", children: "A bright, flexible space for weddings, showers, birthdays, corporate events, and community gatherings in the Fredericksburg region." })] }), _jsx(PhotoGrid, {})] }));
}
