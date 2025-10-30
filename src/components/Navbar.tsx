import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const item = "px-3 py-2 rounded-md text-sm font-medium hover:bg-white/60";
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? item + " bg-white/80" : item;

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-blue-600">
          The Valor Venue
        </Link>
        <nav className="flex gap-1">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/gallery" className={active}>Gallery</NavLink>
          <NavLink to="/pricing" className={active}>Pricing</NavLink>
          <NavLink to="/contact" className="ml-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Book a Tour</NavLink>
        </nav>
      </div>
    </header>
  );
}
