"use client"
import { useEffect, useState } from 'react';

const Footer = () => {
  // Initialize the view count from localStorage or set it to 20 if it doesn't exist
  const initialViews = parseInt(localStorage.getItem('viewCount') || '20');
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    // Increment the view count by 1 and store it in localStorage
    const incrementViewCount = () => {
      const newViews = views + 1;
      setViews(newViews);
      localStorage.setItem('viewCount', newViews.toString());
    };

    // Check if the view count has been incremented on this visit
    const hasViewed = localStorage.getItem('hasViewed');

    if (!hasViewed) {
      // If not, increment the view count
      incrementViewCount();
      // Set a flag in localStorage to indicate that the view count has been incremented
      localStorage.setItem('hasViewed', 'true');
    }

    // Simulate real-time updates every 10 seconds (this part remains the same)
    const intervalId = setInterval(incrementViewCount, 10000); // 10 seconds

    return () => clearInterval(intervalId);
  }, [views]);

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
        <p className="text-center text-xs sm:text-sm text-black">
          &copy; 2023 Drop ship, Inc. All rights reserved. Made with ❤️{' '}
          <a href="https://vishwa.vercel.app" target="_blank">
            <>vishwa.offl</>
          </a>
          <span className="ml-2 text-gray-400">
            {views}k+ Views
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
