// import React, { useEffect } from 'react';
// import './AnimatedCursor.css';

// const AnimatedCursor = () => {
//   useEffect(() => {
//     const cursor = document.querySelector('.cursor');
//     const circle = document.querySelector('.circle');

//     let mouseX = 0;
//     let mouseY = 0;
//     let circleX = 0;
//     let circleY = 0;

//     const handleMouseMove = (event) => {
//       mouseX = event.clientX;
//       mouseY = event.clientY;
//       cursor.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`; // Directly update cursor position
//     };

//     const updateCircle = () => {
//       circleX += (mouseX - circleX) * 0.2;
//       circleY += (mouseY - circleY) * 0.2;
//       circle.style.transform = `translate3d(${circleX - 25}px, ${circleY - 25}px, 0)`; // Adjusted to center circle

//       requestAnimationFrame(updateCircle);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     requestAnimationFrame(updateCircle);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div className="cursor"></div>
//       <div className="circle"></div>
//     </>
//   );
// };

// export default AnimatedCursor;



import React, { useEffect } from 'react';
import './AnimatedCursor.css';

const AnimatedCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const circle = document.querySelector('.circle');

    let mouseX = 0;
    let mouseY = 0;
    let circleX = 0;
    let circleY = 0;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      }
    };

    const updateCircle = () => {
      if (circle) {
        circleX += (mouseX - circleX) * 0.2;
        circleY += (mouseY - circleY) * 0.2;
        circle.style.transform = `translate3d(${circleX - 25}px, ${circleY - 25}px, 0)`;
      }

      requestAnimationFrame(updateCircle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(updateCircle);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="circle"></div>
    </>
  );
};

export default AnimatedCursor;
