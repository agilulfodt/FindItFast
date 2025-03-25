
import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../data/articles';
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl mb-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10"></div>
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <img 
          src={article.coverImage} 
          alt={article.title} 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 p-8 md:p-12 lg:p-16 h-[500px] md:h-[600px] flex flex-col justify-end text-white">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex flex-wrap items-center gap-4 mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm">
              {article.category}
            </span>
            <div className="flex items-center text-sm text-white/80">
              <CalendarIcon size={14} className="mr-1.5" />
              <time dateTime={article.publishedAt}>
                {new Date(article.publishedAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </time>
            </div>
            <div className="flex items-center text-sm text-white/80">
              <Clock size={14} className="mr-1.5" />
              {article.readTime}
            </div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-balance leading-tight">
            {article.title}
          </h2>
          
          <p className="text-white/80 mb-6 md:text-lg max-w-2xl">
            {article.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-10 h-10 rounded-full mr-3 border-2 border-white/30" 
              />
              <span className="font-medium">{article.author.name}</span>
            </div>
            
            <Link 
              to={`/article/${article.id}`}
              className="inline-flex items-center text-white font-medium group/btn"
            >
              Read article 
              <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
