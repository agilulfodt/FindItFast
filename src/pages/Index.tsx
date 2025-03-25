
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/articles';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  // Find featured articles
  const featuredArticles = articles.filter(article => article.featured);
  const mainFeatured = featuredArticles[0] || articles[0];
  
  // Group articles by category
  const categories = [...new Set(articles.map(article => article.category))];
  const recentArticles = [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  ).slice(0, 6);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-12">
          <FeaturedArticle article={mainFeatured} />
          
          {/* Recent Articles */}
          <div className="my-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold">Recent Articles</h2>
              <Link 
                to="/articles" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
              >
                View all articles
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recentArticles.map(article => (
                <ArticleCard 
                  key={article.id} 
                  article={article}
                  className="animate-scale-in" 
                />
              ))}
            </div>
          </div>
          
          {/* Categories Showcase */}
          <div className="my-16">
            <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8">Explore by Category</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {categories.slice(0, 4).map(category => {
                const categoryArticles = articles.filter(article => article.category === category);
                const firstArticle = categoryArticles[0];
                
                return (
                  <div key={category} className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-md animate-fade-in">
                    <Link to={`/categories/${category.toLowerCase()}`} className="block relative aspect-[16/9]">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/0 z-10"></div>
                      <img 
                        src={firstArticle.coverImage} 
                        alt={category} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold mb-2">{category}</h3>
                        <p className="text-white/80 text-sm">
                          {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="my-16 p-8 md:p-12 bg-primary text-primary-foreground rounded-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-4">Stay updated with our latest articles</h2>
              <p className="text-primary-foreground/80 mb-6 md:text-lg">
                Join our newsletter and receive the best content on technology, design, productivity and more.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button 
                  type="submit" 
                  className="px-5 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="mt-4 text-xs text-primary-foreground/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
