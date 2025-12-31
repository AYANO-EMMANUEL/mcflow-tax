import { Outlet } from 'react-router-dom';
import APISidebar from '../components/APISidebar';

export default function APIReferenceLayout() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar - Always visible on API Reference pages */}
      <APISidebar />

      {/* Main Content - Changes based on route */}
      <Outlet />
    </div>
  );
}
