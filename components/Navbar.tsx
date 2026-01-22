import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-dark-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wide">VenTech</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Innovate. Validate. Launch</span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-reverse space-x-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary bg-white/5'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Registration Button (Desktop) */}
          <div className="hidden md:block">
            <NavLink
              to="/register"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-primary/50 text-sm"
            >
              انضم للمنافسة
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">فتح القائمة</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-white bg-primary/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-primary text-white px-3 py-3 rounded-md font-bold"
            >
              انضم للمنافسة
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;