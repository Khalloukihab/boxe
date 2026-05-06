import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Membership', path: '/membership' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-background border-b-4 border-primary">
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <Trophy className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
          <span className="font-headline text-2xl font-black text-primary tracking-tighter uppercase italic">
            Iron & Impact
          </span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "nav-link relative",
                location.pathname === item.path ? "text-primary" : "text-on-background"
              )}
            >
              {item.name}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 w-full h-1 bg-primary"
                />
              )}
            </Link>
          ))}
        </nav>
        
        <button className="bg-primary text-background font-headline font-black px-6 py-2 uppercase brutal-border hover:hard-shadow transition-all active:translate-x-1 active:translate-y-1">
          Join Now
        </button>
      </div>
    </header>
  );
}
