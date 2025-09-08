import { Link, Outlet } from "react-router-dom";
import { Home, QrCode, Wrench, Package, ClipboardCheck } from "lucide-react";

function Dashboard() {
  return (
    <div className='dashboard-container shadow-lg min-h-screen'>
      {/* navbar */}
      <nav className='bg-white text-blue-700 p-4 flex flex-row justify-between items-center gap-6 shadow'>
        <img
          src='/RailwaysEmblem.png'
          alt='railways-logo'
          className='h-[70px] w-auto'
        />
        <div className='links flex flex-row gap-6 text-lg font-medium'>
          <Link
            to='/dashboard'
            className='flex items-center gap-1 hover:text-gray-500'
          >
            <Home size={20} /> Home
          </Link>
          <Link
            to='/dashboard/qr'
            className='flex items-center gap-1 hover:text-gray-500'
          >
            <QrCode size={20} /> QR
          </Link>
          <Link
            to='/dashboard/tms'
            className='flex items-center gap-1 hover:text-gray-500'
          >
            <Wrench size={20} /> TMS
          </Link>
          <Link
            to='/dashboard/udm'
            className='flex items-center gap-1 hover:text-gray-500'
          >
            <Package size={20} /> UDM
          </Link>
          <Link
            to='/dashboard/report'
            className='flex items-center gap-1 hover:text-gray-500'
          >
            <ClipboardCheck size={20} /> Report
          </Link>
        </div>
      </nav>

      {/* yahan child route render hoga */}
      <main className='p-6'>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
