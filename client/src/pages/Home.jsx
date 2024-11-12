import React from 'react';
import Twriter from '../components/Twriter';
import Footer from '../components/Footer.jsx';
import  { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Homepage from '../components/Homepage.jsx';
import ClipLoader from 'react-spinners/ClipLoader';
import Spinner from '../components/Spinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const videoRef = useRef(null); 
  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoading(true);
    }

    const handleLoadedData = () => setIsLoading(false);
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener('loadeddata', handleLoadedData);
    }

    // Fallback timeout to hide spinner after 5 seconds
    const timeoutId = setTimeout(() => setIsLoading(false), 4000);

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadeddata', handleLoadedData);
      }
      clearTimeout(timeoutId);
    };
  }, [location.pathname]);
  return (
    <div className="relative min-h-screen">
      {isLoading ? (
        <Spinner/>
      ) : (
        <Homepage ref={videoRef}isLoading={isLoading} setisLoading ={setIsLoading}/> // Your main homepage content
      )}
    </div>
  );
};

export default Home;
