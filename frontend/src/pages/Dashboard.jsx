function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Total Enquiries</h3>
          <p className="text-3xl font-bold text-primary">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Resolved</h3>
          <p className="text-3xl font-bold text-green-500">0</p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-2">Pending</h3>
          <p className="text-3xl font-bold text-yellow-500">0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
