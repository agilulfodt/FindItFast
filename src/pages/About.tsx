
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4">About Topic Trove</h1>
            <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
              A blog dedicated to exploring diverse subjects through thoughtful, well-researched articles.
            </p>
          </div>
          
          {/* About content */}
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none animate-fade-in">
              <p>
                Topic Trove was founded with a simple mission: to create a space for deep, thoughtful exploration of ideas across a wide range of disciplines. In a media landscape often dominated by hot takes and clickbait, we believe there's still tremendous value in well-researched, nuanced writing that takes the time to explore subjects with the complexity they deserve.
              </p>
              
              <p>
                Our writers come from diverse backgrounds and bring expertise in fields ranging from technology and design to food culture and architecture. What unites them is a commitment to clarity, accuracy, and insight. Each article is carefully researched and crafted to provide both accessible entry points for newcomers and meaningful depth for those already familiar with the subject.
              </p>
              
              <h2>Our Approach</h2>
              
              <p>
                We approach each topic with curiosity and intellectual honesty. Rather than pushing a particular agenda, we aim to illuminate subjects from multiple perspectives, highlighting both consensus views and thoughtful dissent. We believe in questioning assumptions, following evidence, and acknowledging complexity.
              </p>
              
              <p>
                While we strive for comprehensiveness, we recognize that no single article can capture the full depth of complex topics. Instead, we aim to provide valuable starting points for further exploration, with carefully chosen references and resources for readers who wish to go deeper.
              </p>
              
              <h2>Our Values</h2>
              
              <ul>
                <li><strong>Intellectual curiosity</strong> - We approach subjects with genuine openness and a desire to understand.</li>
                <li><strong>Evidence-based reasoning</strong> - We ground our writing in careful research and logical thinking.</li>
                <li><strong>Clarity and accessibility</strong> - We strive to make complex ideas understandable without oversimplification.</li>
                <li><strong>Nuance and context</strong> - We recognize that most important questions don't have simple answers.</li>
                <li><strong>Diverse perspectives</strong> - We seek out varied viewpoints and acknowledge the limitations of any single perspective.</li>
              </ul>
              
              <h2>Join Us</h2>
              
              <p>
                Topic Trove is more than just a collection of articles—it's a community of curious minds. We invite you to join the conversation by subscribing to our newsletter, following us on social media, and engaging with our content. If you have expertise or insight to share, we're also open to submissions from new contributors.
              </p>
              
              <p>
                Thank you for being part of our journey as we explore the fascinating complexity of our world, one article at a time.
              </p>
            </div>
            
            {/* Team section */}
            <div className="mt-16 pt-8 border-t border-border animate-fade-in">
              <h2 className="text-2xl font-serif font-semibold mb-8 text-center">Our Team</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Alex Morgan" 
                    className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-border" 
                  />
                  <h3 className="text-xl font-medium">Alex Morgan</h3>
                  <p className="text-muted-foreground">Founder & Editor-in-Chief</p>
                  <p className="mt-3 text-sm">
                    Technology writer and researcher with a background in cognitive science.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="Sofia Patel" 
                    className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-border" 
                  />
                  <h3 className="text-xl font-medium">Sofia Patel</h3>
                  <p className="text-muted-foreground">Managing Editor</p>
                  <p className="mt-3 text-sm">
                    Architectural journalist with expertise in sustainable design and urban spaces.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact section */}
            <div className="mt-16 pt-8 border-t border-border animate-fade-in">
              <h2 className="text-2xl font-serif font-semibold mb-6 text-center">Contact Us</h2>
              
              <p className="text-center mb-8">
                Have questions, feedback, or want to work with us? We'd love to hear from you.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
                
                <div className="md:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 flex justify-center mt-2">
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
