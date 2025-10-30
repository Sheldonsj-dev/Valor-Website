export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} The Valor Venue. All rights reserved.</p>
        <p className="text-gray-500">Fredericksburg, VA • Open by appointment</p>
      </div>
    </footer>
  );
}
