
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';
import { CalendarIcon, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  className?: string;
  style?: React.CSSProperties;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, className = '', style }) => {
  return (
    <div 
      className={`group bg-card overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:shadow-md hover:border-border ${className}`}
      style={style}
    >
      <Link to={`/article/${article.id}`} className="block overflow-hidden relative aspect-[16/9]">
        <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-all duration-300"></div>
        <img 
          src={article.coverImage} 
          alt={article.title} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
        />
      </Link>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-foreground/80">
            {article.category}
          </span>
          <div className="flex items-center text-xs text-muted-foreground">
            <CalendarIcon size={12} className="mr-1" />
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock size={12} className="mr-1" />
            {article.readTime}
          </div>
        </div>
        
        <h3 className="font-serif text-lg font-semibold mb-2 text-balance leading-tight">
          <Link to={`/article/${article.id}`} className="hover:text-primary/70 transition-colors">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center mt-4">
          <img 
            src={article.author.avatar} 
            alt={article.author.name} 
            className="w-8 h-8 rounded-full mr-3 object-cover" 
          />
          <span className="text-sm font-medium">{article.author.name}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
