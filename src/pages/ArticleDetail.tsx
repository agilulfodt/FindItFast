
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import { articles, Article } from '../data/articles';
import { CalendarIcon, Clock, ChevronLeft, Share2 } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    // Scroll to top when component mounts or ID changes
    window.scrollTo(0, 0);
    
    // Find the current article
    const currentArticle = articles.find(a => a.id === id) || null;
    setArticle(currentArticle);
    
    // Find related articles (same category)
    if (currentArticle) {
      const related = articles
        .filter(a => a.category === currentArticle.category && a.id !== currentArticle.id)
        .slice(0, 3);
      setRelatedArticles(related);
    }
  }, [id]);
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
        <Link to="/articles" className="text-primary hover:text-primary/80 transition-colors">
          Browse all articles
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-28 pb-16">
        <article className="container mx-auto px-6 md:px-0">
          {/* Back link */}
          <div className="max-w-3xl mx-auto mb-8 px-0 md:px-12">
            <Link 
              to="/articles" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to articles
            </Link>
          </div>
          
          {/* Article header */}
          <div className="max-w-3xl mx-auto mb-10 px-0 md:px-12 animate-fade-in">
            <div className="flex items-center space-x-3 mb-4">
              <Link 
                to={`/categories/${article.category.toLowerCase()}`} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
              >
                {article.category}
              </Link>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon size={14} className="mr-1.5" />
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock size={14} className="mr-1.5" />
                {article.readTime}
              </div>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={article.author.avatar} 
                  alt={article.author.name} 
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                />
                <span className="font-medium">{article.author.name}</span>
              </div>
              
              <button 
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Share article"
              >
                <Share2 size={18} />
              </button>
            </div>
          </div>
          
          {/* Featured image */}
          <div className="mb-10 animate-scale-in">
            <div className="aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-xl">
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-3xl mx-auto px-0 md:px-12 animate-fade-in">
            <div 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Article footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-muted-foreground mr-2">Tags:</span>
                <Link 
                  to={`/categories/${article.category.toLowerCase()}`} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                >
                  {article.category}
                </Link>
                <Link 
                  to="/tags/mindfulness" 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                >
                  Mindfulness
                </Link>
                <Link 
                  to="/tags/society" 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                >
                  Society
                </Link>
              </div>
            </div>
          </div>
          
          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <div className="max-w-5xl mx-auto mt-16 px-0 md:px-12">
              <h2 className="text-2xl font-serif font-semibold mb-8">Related Articles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {relatedArticles.map(article => (
                  <ArticleCard key={article.id} article={article} className="animate-scale-in" />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
