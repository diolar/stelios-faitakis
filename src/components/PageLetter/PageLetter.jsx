import React from 'react';
import Pattern from '../Pattern';

const PageLetter = ({ children, patternLeft, patternRight, className = '' }) => (
  <div className={`page__letter ${className}`} role="presentation">
    <div>
      <Pattern d={patternLeft} />
    </div>
    <div className="letter">
      {children}
    </div>
    <div>
      <Pattern d={patternRight} />
    </div>
  </div>
);

export default PageLetter;
