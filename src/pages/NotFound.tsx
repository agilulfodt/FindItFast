
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-6 md:px-0">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-6xl font-serif font-bold mb-6">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
            <a 
              href="/" 
              className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Return to Home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
