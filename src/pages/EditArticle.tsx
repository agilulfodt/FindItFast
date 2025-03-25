
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articles, Article } from '../data/articles';
import { toast } from "sonner";
import { ChevronLeft, Save } from 'lucide-react';

const EditArticle = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    content: '',
    coverImage: ''
  });
  
  useEffect(() => {
    // Find the article to edit
    const articleToEdit = articles.find(a => a.id === id) || null;
    
    if (articleToEdit) {
      setArticle(articleToEdit);
      setFormData({
        title: articleToEdit.title,
        excerpt: articleToEdit.excerpt,
        category: articleToEdit.category,
        content: articleToEdit.content,
        coverImage: articleToEdit.coverImage
      });
    }
  }, [id]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would update the database
    // For this demo, let's just show a toast
    toast.success("Article updated successfully!");
    
    // In a real implementation, we would update the articles array
    // For now, just redirect back to the article
    navigate(`/article/${id}`);
  };
  
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
          {/* Back link */}
          <div className="max-w-3xl mx-auto mb-8 px-0 md:px-12">
            <Link 
              to={`/article/${id}`} 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to article
            </Link>
          </div>
          
          {/* Edit form */}
          <div className="max-w-3xl mx-auto px-0 md:px-12 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Edit Article</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="excerpt" className="text-sm font-medium">Excerpt</label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Technology">Technology</option>
                  <option value="Design">Design</option>
                  <option value="Productivity">Productivity</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Food">Food</option>
                  <option value="Culture">Culture</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="coverImage" className="text-sm font-medium">Cover Image URL</label>
                <input
                  type="url"
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">Content (HTML)</label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={15}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 font-mono text-sm"
                  required
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Save size={18} className="mr-2" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EditArticle;
