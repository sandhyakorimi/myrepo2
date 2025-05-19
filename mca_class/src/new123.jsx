// import React, { useState } from 'react';
// import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const deviceData = [
//   { name: 'Fans', value: 10 },
//   { name: 'Lights', value: 20 },
//   { name: 'Routers', value: 5 },
//   { name: 'Bulbs', value: 15 }
// ];

// const floorComparison = [
//   { name: 'Floor 1', Fans: 5, Lights: 10 },
//   { name: 'Floor 2', Fans: 3, Lights: 8 },
//   { name: 'Floor 3', Fans: 2, Lights: 2 }
// ];

// const floors = [
//   {
//     id: 1,
//     name: 'Floor 1',
//     image: '/floor1.png',
//     rooms: [
//       {
//         id: '101',
//         name: 'Room 101',
//         image: '/room101.png',
//         details: { Fans: 2, Lights: 4, Routers: 1 }
//       },
//       {
//         id: '102',
//         name: 'Room 102',
//         image: '/room102.png',
//         details: { Fans: 1, Lights: 3, Routers: 0 }
//       }
//     ]
//   }
// ];

// export default function PropertyDashboard() {
//   const [selectedFloor, setSelectedFloor] = useState(null);
//   const [selectedRoom, setSelectedRoom] = useState(null);

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
//         <h2 className="text-xl font-bold mb-4">Property Dashboard</h2>
//         <ul className="space-y-2">
//           <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard Overview</li>
//           <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Floor List</li>
//           <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Bay/Room View</li>
//           <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Reports</li>
//           <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
//         </ul>
//       </div>

//       {/* Main Dashboard */}
//       <div className="flex-1 p-6 overflow-y-auto">
//         <h3 className="text-2xl font-semibold mb-4">Dashboard Overview</h3>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Card>
//             <CardContent>
//               <h4 className="text-lg font-semibold mb-2">Device Distribution</h4>
//               <PieChart width={300} height={300}>
//                 <Pie data={deviceData} dataKey="value" outerRadius={100}>
//                   {deviceData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardContent>
//               <h4 className="text-lg font-semibold mb-2">Floor Comparison</h4>
//               <BarChart width={350} height={300} data={floorComparison}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="Fans" fill="#8884d8" />
//                 <Bar dataKey="Lights" fill="#82ca9d" />
//               </BarChart>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="mt-6">
//           <h4 className="text-xl font-semibold mb-4">Interactive Floor List</h4>
//           <div className="flex gap-4">
//             {floors.map(floor => (
//               <Button key={floor.id} onClick={() => setSelectedFloor(floor)}>{floor.name}</Button>
//             ))}
//           </div>

//           {selectedFloor && (
//             <div className="mt-4">
//               <img src={selectedFloor.image} alt={selectedFloor.name} className="w-full max-w-md" />
//               <div className="flex gap-4 mt-2">
//                 {selectedFloor.rooms.map(room => (
//                   <Button key={room.id} onClick={() => setSelectedRoom(room)}>{room.name}</Button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {selectedRoom && (
//             <div className="mt-4">
//               <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full max-w-md" />
//               <ul className="mt-2 space-y-1">
//                 {Object.entries(selectedRoom.details).map(([key, value]) => (
//                   <li key={key} className="text-sm">{key}: {value}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }





// Dashboard.jsx
import React from 'react';
import '../src/App.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="charts">
        <div className="chart pie">Pie Chart (Device Distribution)</div>
        <div className="chart bar">Bar Graph (Floor/Room Comparison)</div>
      </div>
      <div className="device-count">
        <div className="device">Fans: 20</div>
        <div className="device">Lights: 50</div>
        <div className="device">Routers: 10</div>
        <div className="device">Bulbs: 30</div>
      </div>
      <div className="sliders">
        <div className="slider">Bulb Usage (On/Off)</div>
      </div>
    </div>
  );
};

export default Dashboard;