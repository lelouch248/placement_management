import { useState } from 'react';
import './styles/navigationbar.css';
const NavigationBar = () => {
    const [activeState, setActiveState] = useState(null);
  return (
    <div className="m-3 navigation-bar">
      <div className="nav-item">block 1</div>
      <div className="nav-item">block 1</div>
      <div className="nav-item">block 1</div>
      <div className="nav-item">block 1</div>
      <div className="nav-item">block 1</div>
    </div>
  );
};

export default NavigationBar;
