import React from 'react';

const Icon = ({
  d,
  viewBox,
  className = '',
  responsive,
  pathProps,
  children,
  ...props
}) => (
  <svg
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svgIcon ${className} ${responsive ? 'svgIcon--responsive' : ''}`}
    {...props}>
    <path d={d} {...pathProps} />
    {children}
  </svg>
);

export default Icon;