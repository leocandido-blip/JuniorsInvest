export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-gray-100 flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6 tracking-wide">Juniors Invest</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-blue-400 transition">Dashboard</a>
        <a href="#" className="hover:text-blue-400 transition">Investments</a>
        <a href="#" className="hover:text-blue-400 transition">Analytics</a>
        <a href="#" className="hover:text-blue-400 transition">Settings</a>
      </nav>
    </aside>
  );
}
