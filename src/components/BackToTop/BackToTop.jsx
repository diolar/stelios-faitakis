import React, {useEffect, useRef, useState} from 'react';
import Icon from '../Icon';

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    const newObserver = new IntersectionObserver(handleObserverEvent, { threshold: 0 });
    newObserver.observe(observerRef.current);
  }, []);

  const handleObserverEvent = entries => {
    entries.forEach(({ isIntersecting }) => {
      setShow(!isIntersecting);
    })
  };
  return (
    <>
      <div id="top" className="observable">
        <div ref={observerRef} className="observable__inner" />
      </div>
      <div className={`back-to-top ${show ? 'back-to-top--visible' : ''}`}>
        <button
          onClick={() => window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })}>
          <Icon
            viewBox="0 0 83 150"
            d="M41.5 1c0 12.15 9.85 22 22 22M41.5 7v140.297M81 108.5C81 86.684 63.315 69 41.5 69S2 86.684 2 108.5 19.685 148 41.5 148 81 130.316 81 108.5zM41.5 1c0 12.15-9.85 22-22 22">
            <text fontSize="48" transform="translate(2 4)">
              <tspan x="16.056" y="120">U P</tspan>
            </text>
          </Icon>
        </button>
      </div>
    </>
  );
};

export default BackToTop;