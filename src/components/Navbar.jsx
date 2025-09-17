import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, User, LogOut, BookOpen, Plus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock auth state
  const [userRole, setUserRole] = useState("student"); // Mock user role

  const user = {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  };

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="drawer">
      <input 
        id="mobile-drawer" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={isDrawerOpen}
        onChange={(e) => setIsDrawerOpen(e.target.checked)}
      />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50">
          <div className="navbar-start">
            {/* Mobile menu button */}
            <div className="dropdown lg:hidden">
              <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
                <Menu className="h-5 w-5" />
              </label>
            </div>
            
            {/* Logo */}
            <Link to="/" className="btn btn-ghost text-xl font-bold gradient-text">
              Skillex
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/" className="btn btn-ghost">Home</Link></li>
              <li><Link to="/courses" className="btn btn-ghost">Courses</Link></li>
              <li><Link to="/contact" className="btn btn-ghost">Contact</Link></li>
              
              {/* Instructor Dropdown - Only for mentors/admins */}
              {(userRole === "mentor" || userRole === "admin") && (
                <li className="dropdown dropdown-hover">
                  <label tabIndex={0} className="btn btn-ghost">
                    Instructor
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </label>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#add-course"><Plus className="h-4 w-4" />Add Course</a></li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          
          <div className="navbar-end gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Auth Section */}
            {!isLoggedIn ? (
              <div className="flex gap-2">
                <Link to="/login" className="btn btn-outline btn-sm">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm btn-gradient">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li className="menu-title">
                    <span>{user.name}</span>
                  </li>
                  <li><Link to="/profile"><User className="h-4 w-4" />Profile</Link></li>
                  <li><a><BookOpen className="h-4 w-4" />My Courses</a></li>
                  <li><button onClick={handleLogout}><LogOut className="h-4 w-4" />Logout</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Drawer */}
      <div className="drawer-side lg:hidden">
        <label htmlFor="mobile-drawer" className="drawer-overlay"></label>
        <aside className="w-80 min-h-full bg-base-200">
          <div className="flex items-center justify-between p-4 border-b border-base-300">
            <h2 className="text-xl font-bold gradient-text">Skillex</h2>
            <label htmlFor="mobile-drawer" className="btn btn-ghost btn-circle">
              <X className="h-5 w-5" />
            </label>
          </div>
          
          <ul className="menu p-4 w-full">
            <li><Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link></li>
            <li><Link to="/courses" onClick={() => setIsDrawerOpen(false)}>Courses</Link></li>
            <li><Link to="/contact" onClick={() => setIsDrawerOpen(false)}>Contact</Link></li>
            
            {(userRole === "mentor" || userRole === "admin") && (
              <>
                <li className="menu-title mt-4">Instructor</li>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#add-course">Add Course</a></li>
              </>
            )}
            
            {!isLoggedIn ? (
              <>
                <li className="mt-4"><Link to="/login" onClick={() => setIsDrawerOpen(false)}>Login</Link></li>
                <li><Link to="/signup" onClick={() => setIsDrawerOpen(false)}>Sign Up</Link></li>
              </>
            ) : (
              <>
                <li className="menu-title mt-4">Account</li>
                <li><Link to="/profile" onClick={() => setIsDrawerOpen(false)}>Profile</Link></li>
                <li><a>My Courses</a></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </>
            )}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Navbar;