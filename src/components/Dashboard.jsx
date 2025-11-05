export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Übersicht</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-xl p-6">Card 1</div>
        <div className="bg-white shadow rounded-xl p-6">Card 2</div>
        <div className="bg-white shadow rounded-xl p-6">Card 3</div>
      </div>
    </div>
  );
}
