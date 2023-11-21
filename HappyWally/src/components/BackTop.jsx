import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const BackTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="contained"
          color="primary"
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            
          }}
        >
          <KeyboardArrowUpIcon />
          Back to Top
        </Button>
      )}
    </>
  );
};

export default BackTop;
