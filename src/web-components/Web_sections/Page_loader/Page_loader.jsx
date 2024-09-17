import React, { useState, useEffect } from 'react';

function Page_loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // To control when the loader is removed from the DOM

  useEffect(() => {
    window.addEventListener('load', () => {
      // Simulating page load delay for demo
      setTimeout(() => {
        setIsLoading(false); // Start fading out
        setTimeout(() => {
          setIsVisible(false); // Remove from DOM after fade out
        }, 1000); // Match this delay to the transition duration
      }, 1000); // Initial load delay for demo
    });

    return () => window.removeEventListener('load', () => {}); // Cleanup event listener
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-opacity-50 bg-gray-800 z-50 transition-opacity duration-500 ${
            isLoading ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-t-blue-500 border-gray-200 h-20 w-20 mb-4"></div>
        </div>
      )}
    </>
  );
}

export default Page_loader;
