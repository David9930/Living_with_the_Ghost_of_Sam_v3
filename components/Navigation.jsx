// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Or use your Astro equivalent

const Navigation = ({ currentPage = '' }) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Scripts', path: '/scripts' },
    { name: 'Character Bible', path: '/character-bible' },
    { name: 'About the Writer', path: '/about' },
    { name: "Sam's Corner", path: '/sams-corner' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="w-full bg-black py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto">
        <ul className="flex flex-wrap justify-center gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                to={`/living-with-the-ghost-of-sam${item.path}`} 
                className={`text-lg font-medium px-4 py-2 rounded transition-all ${
                  currentPage === item.name.toLowerCase() 
                    ? 'text-yellow-400 border-b-2 border-yellow-400' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
