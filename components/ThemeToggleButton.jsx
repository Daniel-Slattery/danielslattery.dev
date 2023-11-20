import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'; // or any other icon library you prefer

const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleColorMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleColorMode}
      className={`p-2 rounded ${darkMode ? 'bg-orange-400' : 'bg-purple-500'}`}
      aria-label="Toggle theme"
    >
      {darkMode ? <SunIcon className="h-5 w-5 text-white" /> : <MoonIcon className="h-5 w-5 text-white" />}
    </button>
  );
};

export default ThemeToggleButton;
