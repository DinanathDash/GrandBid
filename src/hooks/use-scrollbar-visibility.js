import { useEffect } from 'react';

/**
 * Hook to completely hide scrollbar while maintaining scroll functionality
 * Scrollbars will be completely hidden but scrolling will still work
 */
const useScrollbarVisibility = () => {
  useEffect(() => {
    // Helper function to create style element
    const createStyleElement = () => {
      const styleEl = document.createElement('style');
      styleEl.id = 'hide-scrollbar-style';
      styleEl.textContent = `
        /* Completely hide all scrollbars */
        html, body {
          scrollbar-width: none !important; /* Firefox */
          -ms-overflow-style: none !important; /* IE and Edge */
          overflow-y: auto !important; /* Ensure scroll functionality still works */
        }
        
        /* Hide all scrollbars from all elements */
        *::-webkit-scrollbar {
          width: 0px !important;
          height: 0px !important;
          background: transparent !important;
          display: none !important;
        }
        
        /* Apply to all elements that could potentially have scrollbars */
        div, section, article, aside, nav, main, 
        header, footer, form, iframe {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
        
        /* Ensure overflow elements still scroll but hide scrollbar */
        .overflow-auto, .overflow-scroll, .overflow-y-auto, 
        .overflow-y-scroll, .overflow-x-auto, .overflow-x-scroll {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
        }
      `;
      document.head.appendChild(styleEl);
    };
    
    // Apply the styles
    createStyleElement();
    
    // Cleanup
    return () => {
      const styleEl = document.getElementById('hide-scrollbar-style');
      if (styleEl) styleEl.remove();
    };
  }, []);
};

export default useScrollbarVisibility;
