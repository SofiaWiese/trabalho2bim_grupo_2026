import { useState } from 'react';

export const Menu = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'topo' },
    { label: 'Chinelos', id: 'Chinelos' },
    { label: 'Tênis-Masculino', id: 'tenis-masculino' },
    { label: 'Tênis-Feminino', id: 'tenis-feminino' },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* MOBILE */}
        <div className="flex justify-between items-center py-3 md:hidden">
          <span>Menu</span>
          <button onClick={() => setOpen(!open)}>☰</button>
        </div>

        {/* DESKTOP */}
        <ul className="hidden md:flex gap-8 py-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="hover:text-purple-400"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* MOBILE ABERTO */}
        {open && (
          <ul className="flex flex-col gap-4 pb-4 md:hidden">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block text-left w-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};