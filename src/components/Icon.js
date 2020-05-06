import React from 'react';

const Icon = ({
  d,
  viewBox,
  className = '',
  responsive,
  pathProps,
  ...props
}) => (
  <svg
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svgIcon ${className} ${responsive && 'svgIcon--responsive'}`}
    {...props}>
    <path d={d} {...pathProps} />
  </svg>
);

export default Icon;