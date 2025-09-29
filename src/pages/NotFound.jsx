import React from "react";
import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-8 max-w-md mx-auto px-4">
        <div className="relative">
          <h1 className="text-9xl font-bold text-primary/20 animate-float">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🚀</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Oops! Page not found</h2>
          <p className="text-base-content/70">
            Looks like this page took a coffee break. Let's get you back on track!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary btn-gradient">
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <Link to="/courses" className="btn btn-outline">
            <Search className="h-4 w-4" />
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;