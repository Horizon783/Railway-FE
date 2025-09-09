import { Link, Outlet } from "react-router-dom";
import {
  IoHome,
  IoCubeOutline,
  IoQrCodeOutline,
  IoBusinessOutline,
} from "react-icons/io5";

function Dashboard2() {
  return (
    <div className='manufacture-dashboard bg-[#07222e] text-white min-h-screen'>
      {/* Navbar */}
      <nav className='bg-[#001e2b] text-white p-4 flex flex-row justify-between items-center shadow'>
        {/* Left Logo */}
        <img
          src='/gem-new-logo-v6.png'
          alt='Logo'
          className='h-[80px] w-auto'
        />

        {/* Right Links */}
        <div className='links flex flex-row gap-6 text-lg font-medium'>
          <Link
            to='/dashboard2'
            className='flex items-center gap-2 hover:text-gray-400 transition'
          >
            <IoHome size={18} /> Home
          </Link>
          <Link
            to='/dashboard2/part'
            className='flex items-center gap-2 hover:text-gray-400 transition'
          >
            <IoCubeOutline size={18} /> Parts
          </Link>
          <Link
            to='/dashboard2/qr'
            className='flex items-center gap-2 hover:text-gray-400 transition'
          >
            <IoQrCodeOutline size={18} /> QR
          </Link>
          <Link
            to='/dashboard2/vendor'
            className='flex items-center gap-2 hover:text-gray-400 transition'
          >
            <IoBusinessOutline size={18} /> Vendor
          </Link>
        </div>
      </nav>

      {/* Content Area with White Background */}
      <main className='p-6 bg-white text-black min-h-[calc(100vh-80px)]'>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard2;
