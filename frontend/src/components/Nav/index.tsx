/**
 * Navbar page for different pages to visit
 * @returns Navbar
 */

export default function Nav() {
  return (
    <div className="flex justify-center shadow-md py-4 mb-2 gap-4">
      <a href="/">Home</a>
      <a href="/viewer/table">Table</a>
    </div>
  );
}
