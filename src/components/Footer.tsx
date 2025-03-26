
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/40 mt-auto">
      <div className="max-w-screen-xl mx-auto py-12 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-serif font-semibold tracking-tight">
              Find It Fast
            </Link>
            <p className="mt-3 text-muted-foreground">
              Exploring diverse subjects through thoughtful, well-researched articles
              that inform, inspire, and challenge conventional thinking.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/technology" className="text-muted-foreground hover:text-foreground transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/categories/design" className="text-muted-foreground hover:text-foreground transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/categories/productivity" className="text-muted-foreground hover:text-foreground transition-colors">
                  Productivity
                </Link>
              </li>
              <li>
                <Link to="/categories/food" className="text-muted-foreground hover:text-foreground transition-colors">
                  Food
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Find It Fast. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
