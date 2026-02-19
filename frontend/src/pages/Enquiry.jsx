import { useState, useRef, useEffect } from 'react';

function Enquiry() {
  // Mock Data generation for 10x10 table
  const columns = [
    { id: 'id', label: 'ID', width: 80 },
    { id: 'date', label: 'Date', width: 120 },
    { id: 'customer', label: 'Customer', width: 150 },
    { id: 'email', label: 'Email', width: 200 },
    { id: 'topic', label: 'Topic', width: 150 },
    { id: 'priority', label: 'Priority', width: 100 },
    { id: 'status', label: 'Status', width: 100 },
    { id: 'sentiment', label: 'Sentiment', width: 100 },
    { id: 'assigned', label: 'Assigned To', width: 150 },
    { id: 'actions', label: 'Actions', width: 100 },
  ];

  const initialData = Array.from({ length: 10 }, (_, i) => ({
    id: `#100${i + 1}`,
    date: `2023-10-${10 + i}`,
    customer: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`,
    topic: ['Payment', 'Delivery', 'Product', 'Return'][i % 4],
    priority: ['High', 'Medium', 'Low', 'Critical'][i % 4],
    status: ['New', 'Open', 'Pending', 'Resolved'][i % 4],
    sentiment: ['Positive', 'Neutral', 'Negative'][i % 3],
    assigned: ['Support A', 'Support B', 'AI Bot'][i % 3],
    actions: 'View',
  }));

  const [tableData, setTableData] = useState(initialData);
  const [columnWidths, setColumnWidths] = useState(
    columns.reduce((acc, col) => ({ ...acc, [col.id]: col.width }), {})
  );

  const [resizing, setResizing] = useState(null);
  const resizingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (resizing) {
        const diff = e.clientX - resizing.startX;
        const newWidth = Math.max(50, resizing.startWidth + diff); // Min width 50px
        setColumnWidths((prev) => ({
          ...prev,
          [resizing.columnId]: newWidth,
        }));
      }
    };

    const handleMouseUp = () => {
      if (resizing) {
        setResizing(null);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
      }
    };

    if (resizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizing]);

  const handleResizeStart = (e, columnId) => {
    e.preventDefault();
    setResizing({
      columnId,
      startX: e.clientX,
      startWidth: columnWidths[columnId],
    });
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'text-red-500 bg-red-500/10';
      case 'High': return 'text-orange-500 bg-orange-500/10';
      case 'Medium': return 'text-yellow-500 bg-yellow-500/10';
      default: return 'text-green-500 bg-green-500/10';
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Enquiries</h1>
          <p className="text-gray-400">Manage and prioritize customer support tickets</p>
        </div>
        <div className="flex gap-3">
           <button className="btn btn-secondary px-4 py-2">Export</button>
           <button className="btn btn-primary px-4 py-2">+ New Enquiry</button>
        </div>
      </div>

      <div className="card p-0 overflow-hidden flex-1 flex flex-col">
        <div className="overflow-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-800 bg-dark-lighter sticky top-0 z-10">
                {columns.map((col) => (
                  <th
                    key={col.id}
                    style={{ width: columnWidths[col.id], minWidth: columnWidths[col.id] }}
                    className="p-4 font-semibold text-gray-300 relative group"
                  >
                    <div className="flex items-center justify-between">
                      {col.label}
                      {/* Resize Handle */}
                      <div
                        className="absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-primary transition-colors z-20"
                        onMouseDown={(e) => handleResizeStart(e, col.id)}
                      ></div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-800/50 transition-colors">
                  <td className="p-4 text-gray-400 font-mono text-sm">{row.id}</td>
                  <td className="p-4">{row.date}</td>
                  <td className="p-4 font-medium text-white">{row.customer}</td>
                  <td className="p-4 text-gray-400">{row.email}</td>
                  <td className="p-4">{row.topic}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(row.priority)}`}>
                      {row.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded text-xs font-medium bg-gray-700 text-gray-300">
                      {row.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">{row.sentiment}</td>
                  <td className="p-4 text-sm text-gray-400">{row.assigned}</td>
                  <td className="p-4">
                    <button className="text-primary hover:text-white transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-gray-800 text-sm text-gray-500 flex justify-between">
            <span>Showing 10 of 245 entries</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 rounded hover:bg-gray-800 disabled:opacity-50">Prev</button>
                <button className="px-3 py-1 rounded hover:bg-gray-800">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiry;
