import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-center sm:text-left lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold gradient-text">Skillex</h3>
            <p className="text-sm lg:text-base text-base-content/70">
              Transform your skills with our modern learning management system. 
              Join thousands of learners worldwide.
            </p>
            <div className="flex space-x-3 justify-center sm:justify-start">
              <a href="#" className="btn btn-ghost btn-circle btn-sm hover:btn-primary">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-ghost btn-circle btn-sm hover:btn-primary">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-ghost btn-circle btn-sm hover:btn-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="btn btn-ghost btn-circle btn-sm hover:btn-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:space-y-4 text-center sm:text-left">
            <h4 className="text-base lg:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-1 lg:space-y-2">
              <li><Link to="/" className="link link-hover text-sm lg:text-base">Home</Link></li>
              <li><Link to="/courses" className="link link-hover text-sm lg:text-base">Courses</Link></li>
              <li><Link to="/contact" className="link link-hover text-sm lg:text-base">Contact</Link></li>
              <li><a href="#" className="link link-hover text-sm lg:text-base">About Us</a></li>
              <li><a href="#" className="link link-hover text-sm lg:text-base">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3 lg:space-y-4 text-center sm:text-left">
            <h4 className="text-base lg:text-lg font-semibold">Support</h4>
            <ul className="space-y-1 lg:space-y-2">
              <li><a href="#" className="link link-hover text-sm lg:text-base">Help Center</a></li>
              <li><a href="#" className="link link-hover text-sm lg:text-base">Privacy Policy</a></li>
              <li><a href="#" className="link link-hover text-sm lg:text-base">Terms of Service</a></li>
              <li><a href="#" className="link link-hover text-sm lg:text-base">FAQ</a></li>
              <li><a href="#" className="link link-hover text-sm lg:text-base">Community</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 lg:space-y-4 text-center sm:text-left">
            <h4 className="text-base lg:text-lg font-semibold">Contact Info</h4>
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs lg:text-sm">support@skillex.com</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs lg:text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-xs lg:text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider my-6 lg:my-8"></div>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs lg:text-sm text-base-content/70 text-center sm:text-left">
            © 2024 Skillex. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs lg:text-sm link link-hover">Privacy</a>
            <a href="#" className="text-xs lg:text-sm link link-hover">Terms</a>
            <a href="#" className="text-xs lg:text-sm link link-hover">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;