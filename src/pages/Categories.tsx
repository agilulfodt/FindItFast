
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles } from '../data/articles';

const Categories = () => {
  // Extract unique categories
  const categories = [...new Set(articles.map(article => article.category))];
  
  // Group articles by category
  const categorizedArticles = categories.map(category => ({
    name: category,
    articles: articles.filter(article => article.category === category),
    coverImage: articles.find(article => article.category === category)?.coverImage
  }));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">Categories</h1>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              Explore our articles by topic to find content that interests you the most.
            </p>
          </div>
          
          {/* Categories grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-scale-in">
            {categorizedArticles.map((category, index) => (
              <div 
                key={category.name}
                className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={`/categories/${category.name.toLowerCase()}`} className="block relative aspect-[16/9]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 z-10"></div>
                  <img 
                    src={category.coverImage} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                    <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-3">{category.name}</h2>
                    <p className="text-white/80 mb-4">
                      {category.articles.length} article{category.articles.length !== 1 ? 's' : ''}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium border-b border-white/0 group-hover:border-white/50 transition-all">
                      Browse {category.name} articles
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
