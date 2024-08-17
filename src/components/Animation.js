import React from 'react'
import { useEffect } from 'react';
const Animation = ({ message, onClose }) => {
    useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 1500);
  
      return () => clearTimeout(timer);
    }, [onClose]);
  
    return (
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded">
        {message}
      </div>
    );
  };
  

export default Animation