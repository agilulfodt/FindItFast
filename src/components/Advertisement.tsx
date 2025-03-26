
import React from 'react';

interface AdvertisementProps {
  className?: string;
  position: 'sidebar' | 'inline' | 'banner';
  hideOnMobile?: boolean;
}

const Advertisement: React.FC<AdvertisementProps> = ({ className = '', position, hideOnMobile = false }) => {
  let adContent;
  
  // Different ad formats based on position
  switch (position) {
    case 'sidebar':
      adContent = (
        <div className={`bg-secondary/50 border border-border/60 rounded-xl overflow-hidden p-4 text-center ${hideOnMobile ? 'hidden sm:block' : ''} ${className}`}>
          <div className="text-xs text-muted-foreground uppercase mb-2">Advertisement</div>
          <div className="aspect-[4/5] bg-secondary/70 flex items-center justify-center">
            <span className="text-muted-foreground">Ad Space (300×250)</span>
          </div>
        </div>
      );
      break;
    case 'inline':
      adContent = (
        <div className={`bg-secondary/50 border border-border/60 rounded-xl overflow-hidden p-4 text-center my-6 ${hideOnMobile ? 'hidden sm:block' : ''} ${className}`}>
          <div className="text-xs text-muted-foreground uppercase mb-2">Advertisement</div>
          <div className="aspect-[2/1] bg-secondary/70 flex items-center justify-center">
            <span className="text-muted-foreground">Ad Space (728×90)</span>
          </div>
        </div>
      );
      break;
    case 'banner':
      adContent = (
        <div className={`bg-secondary/50 border border-border/60 rounded-xl overflow-hidden p-4 text-center my-4 ${hideOnMobile ? 'hidden sm:block' : ''} ${className}`}>
          <div className="text-xs text-muted-foreground uppercase mb-2">Advertisement</div>
          <div className="aspect-[21/9] bg-secondary/70 flex items-center justify-center">
            <span className="text-muted-foreground">Ad Space (970×250)</span>
          </div>
        </div>
      );
      break;
  }
  
  return adContent;
};

export default Advertisement;
