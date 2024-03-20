import React, { useRef, useEffect, useState } from 'react';
import './slide.css';

const ResizableBox = ({ initialWidth, initialHeight }) => {
  const refBox = useRef(null);

  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);

  useEffect(() => {
    const resizeableElement = refBox.current;
    const styles = window.getComputedStyle(resizeableElement);
    let xCord = 0;
    let yCord = 0;

    // Top
    const onMouseMoveTopResize = (event) => {
      const dy = event.clientY - yCord;
      setHeight((prevHeight) => prevHeight - dy);
      yCord = event.clientY;
    };

    const onMouseDownTopResize = (event) => {
      yCord = event.clientY;
      document.addEventListener('mousemove', onMouseMoveTopResize);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMoveTopResize);
      });
    };

    // Right
    const onMouseMoveRightResize = (event) => {
      const dx = event.clientX - xCord;
      setWidth((prevWidth) => prevWidth + dx);
      xCord = event.clientX;
    };

    const onMouseDownRightResize = (event) => {
      xCord = event.clientX;
      document.addEventListener('mousemove', onMouseMoveRightResize);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMoveRightResize);
      });
    };

    // Bottom
    const onMouseMoveBottomResize = (event) => {
      const dy = event.clientY - yCord;
      setHeight((prevHeight) => prevHeight + dy);
      yCord = event.clientY;
    };

    const onMouseDownBottomResize = (event) => {
      yCord = event.clientY;
      document.addEventListener('mousemove', onMouseMoveBottomResize);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMoveBottomResize);
      });
    };

    // Left
    const onMouseMoveLeftResize = (event) => {
      const dx = event.clientX - xCord;
      setWidth((prevWidth) => prevWidth - dx);
      xCord = event.clientX;
    };

    const onMouseDownLeftResize = (event) => {
      xCord = event.clientX;
      document.addEventListener('mousemove', onMouseMoveLeftResize);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMouseMoveLeftResize);
      });
    };

    const resizerTop = resizeableElement.querySelector('.rt');
    resizerTop.addEventListener('mousedown', onMouseDownTopResize);

    const resizerRight = resizeableElement.querySelector('.rr');
    resizerRight.addEventListener('mousedown', onMouseDownRightResize);

    const resizerBottom = resizeableElement.querySelector('.rb');
    resizerBottom.addEventListener('mousedown', onMouseDownBottomResize);

    const resizerLeft = resizeableElement.querySelector('.rl');
    resizerLeft.addEventListener('mousedown', onMouseDownLeftResize);

    return () => {
      resizerTop.removeEventListener('mousedown', onMouseDownTopResize);
      resizerRight.removeEventListener('mousedown', onMouseDownRightResize);
      resizerBottom.removeEventListener('mousedown', onMouseDownBottomResize);
      resizerLeft.removeEventListener('mousedown', onMouseDownLeftResize);
    };
  }, []);

  return (
    <div ref={refBox} className="resizeable-box" style={{ width, height }}>
      <div className="resizer rl"></div>
      <div className="resizer rt"></div>
      <div className="resizer rr"></div>
      <div className="resizer rb"></div>
      <p>This is some HTML content.</p>
    </div>
  );
};

const Slide = () => {
  return (
    <div className="wrapper">
      <div className="top-section">
        <ResizableBox initialWidth={460} initialHeight={200} />
        <ResizableBox initialWidth={900} initialHeight={200} />
      </div>
      <div className="bottom-section">
      <ResizableBox initialWidth="100%" initialHeight={400} />
      </div>
    </div>
  );
};

export default Slide;
