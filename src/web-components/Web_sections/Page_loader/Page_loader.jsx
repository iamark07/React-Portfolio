import React, { useState, useEffect } from "react";
import "./Page_loader.css";

function Page_loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // To control when the loader is removed from the DOM

  useEffect(() => {
    // Function to hide loader when the page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false); // Start fading out
        setTimeout(() => {
          setIsVisible(false); // Remove from DOM after fade out
        }, 500); // Adjust the duration to match the fade-out transition
      }, 300); // Initial load delay (optional)
    };

    if (document.readyState === "complete") {
      // If the document is already loaded
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup listener
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-opacity-50 bg-gray-800 z-50 transition-opacity duration-500 ${
            isLoading ? "opacity-100" : "opacity-0"
          }`}
        >
          <div class="loader">
            <div class="scanner">
              <span>Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page_loader;
