
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <Heart className="h-6 w-6 text-medical-red animate-heartbeat" />
          <span className="font-semibold text-xl text-medical-blue">CardioPredict AI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6 flex-1">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-medical-blue">
            Home
          </Link>
          <Link to="/risk-tool" className="text-sm font-medium transition-colors hover:text-medical-blue">
            Risk Tool
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-medical-blue">
            How It Works
          </Link>
          <Link to="/clinical-use" className="text-sm font-medium transition-colors hover:text-medical-blue">
            Clinical Use
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-medical-blue">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-medical-blue">
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" className="hidden md:flex">Sign In</Button>
          <Button className="bg-medical-blue hover:bg-medical-blue/90 text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
