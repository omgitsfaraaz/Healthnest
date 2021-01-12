import { useState } from 'react';
import Navbar from './components/navbar/Navbar';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  }

  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <h1>Heathnest Dashboard</h1>
    </div>
  );
}

export default App;
