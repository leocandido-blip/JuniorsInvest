export default function Topbar() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hallo, Leo 👋</span>
        <img
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="Profil"
          className="w-10 h-10 rounded-full border border-gray-300"
        />
      </div>
    </header>
  );
}
