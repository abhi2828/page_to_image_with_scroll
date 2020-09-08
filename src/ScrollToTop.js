import React, { useState } from 'react';


const ScrollToTop = () => {

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <>
      <div class="container-fluid">
        <div className="text-right mx-auto scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }}>
          <i class="fas fa-arrow-circle-up arrow"></i>
        </div>
      </div>
    </>
  );
}

export default ScrollToTop;