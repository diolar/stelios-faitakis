import React from 'react';
import Pattern from '../Pattern';

const PageLetter = ({ id, patternLeft, patternRight, className = '' }) => (
  <div className={`page__letter ${className}`} role="presentation">
    <div>
      <Pattern useSvgId={patternLeft} />
    </div>
    <div className="letter">
      <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`#${id}`} />
      </svg>
    </div>
    <div>
      <Pattern useSvgId={patternRight} />
    </div>
  </div>
);

export default PageLetter;
