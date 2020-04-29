import React from 'react';

const Pattern = ({ d, ...props }) => (
  <svg className="pattern" viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d={d} fill="currentColor" />
    <path d="M177 1v472H1V1h176zm-12 12H13v448h152V13z" fill="none" strokeWidth={2} stroke="currentColor" />
  </svg>
);

export default Pattern;