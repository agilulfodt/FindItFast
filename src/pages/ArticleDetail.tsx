import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ArticleCard from '../components/ArticleCard';
import Advertisement from '../components/Advertisement';
import { articles, Article } from '../data/articles';
import { CalendarIcon, Clock, ChevronLeft, Share2, Edit } from 'lucide-react';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const currentArticle = articles.find(a => a.id === id) || null;
    setArticle(currentArticle);
    
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
        <div className="container mx-auto px-6 md:px-0">
          <div className="max-w-3xl mx-auto mb-8 px-0 md:px-12">
            <Link 
              to="/articles" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to articles
            </Link>
          </div>
          
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
              
              <div className="flex items-center space-x-2">
                <Link 
                  to={`/article/${id}/edit`}
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Edit article"
                >
                  <Edit size={18} />
                </Link>
                <button 
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label="Share article"
                >
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="mb-10 animate-scale-in">
            <div className="aspect-[16/9] max-w-5xl mx-auto overflow-hidden rounded-xl">
              <img 
                src={article.coverImage} 
                alt={article.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto px-0 md:px-8 animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:flex-[3]">
                <div 
                  className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                <Advertisement position="inline" className="my-10" />
                
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
              
              <div className="lg:flex-1">
                <div className="sticky top-28 space-y-6">
                  <Advertisement position="sidebar" />
                  
                  <div className="bg-card border border-border/50 rounded-xl p-6">
                    <h3 className="font-medium mb-4">About the author</h3>
                    <div className="flex items-center mb-4">
                      <img 
                        src={article.author.avatar} 
                        alt={article.author.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover" 
                      />
                      <div>
                        <h4 className="font-medium">{article.author.name}</h4>
                        <p className="text-sm text-muted-foreground">Writer & Editor</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expert writer with a passion for creating insightful content on a wide range of topics.
                    </p>
                  </div>
                  
                  <Advertisement position="sidebar" />
                </div>
              </div>
            </div>
          </div>
          
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticleDetail;
