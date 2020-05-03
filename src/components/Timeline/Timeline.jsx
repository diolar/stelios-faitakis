import React from 'react';
import './style.scss';

const Timeline = ({ events }) => (
  <ul className="timeline">
    {events.map(({ year, title, description }, index) => (
      <li key={year} className="timeline__item">
        <div className="timeline-link">
          <div className="timeline-link__year">
            <div className="content">
              {year}
            </div>
          </div>

          <div className="timeline-link__icon">
            <div className="icon">
              <svg className="link-to-eye" viewBox="0 0 85 148" xmlns="http://www.w3.org/2000/svg">
                <g className="link">
                  <path d="M44.875,1 L40.125,1 C35.375,17 33,29 33,37 C33,45 35.375,57 40.125,73 L44.875,73 C49.625,61 52,49 52,37 C52,25 49.625,13 44.875,1 Z" />
                  <path d="M44.875,75 L40.125,75 C35.375,91 33,103 33,111 C33,119 35.375,131 40.125,147 L44.875,147 C49.625,135 52,123 52,111 C52,99 49.625,87 44.875,75 Z" />
                </g>
                <g className="eye-link">
                  <path d="M83.5 74c0-30.945-16.438-57.958-40.88-72.5-13.663 8.129-24.825 20.155-32.013 34.587C4.937 47.47 1.74 60.353 1.74 74c0 30.945 16.438 57.959 40.88 72.5C67.062 131.959 83.5 104.945 83.5 74z" />
                  <path d="M69.5 73.742c0 15.046-12.197 27.243-27.243 27.243S15.014 88.788 15.014 73.742c0-15.045 12.197-27.242 27.243-27.242S69.5 58.697 69.5 73.742z" />
                </g>
              </svg>
            </div>
          </div>

          <div className="timeline-link__events">
            <div className="content">
              <i className="title">{title}</i>
            </div>
            {description && (
              <div className="description">
                <p className="content">{description}</p>
              </div>
            )}
          </div>
        </div>
        {index === events.length - 1 ? (
          <div className="timeline-spacing timeline-spacing--end">
            <div className="timeline-link__icon">
              <div className="icon">
                <svg viewBox="0 0 45 155" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.875 1h-4.75C15.375 17 13 29 13 37s2.375 20 7.125 36h4.75C29.625 61 32 49 32 37s-2.375-24-7.125-36z" />
                  <path className="filled" d="M25.584 74l-1.83 69.565c3.244-4.394 6.069-7.31 8.477-8.747 2.408-1.438 6.664-2.75 12.769-3.939v3.939c-6.273 0-11.273 2.013-15 6.04-3.727 4.026-5.809 8.74-6.245 14.142h-2.907c.105-3.833-1.464-8.155-4.706-12.966-3.243-4.81-8.623-7.216-16.142-7.216v-3.939c5.959 1.032 10.248 2.345 12.867 3.939 2.62 1.594 5.28 4.51 7.98 8.747L19.35 74h6.234z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className="timeline-spacing">
            <div className="timeline-link__icon">
              <div className="icon stroked-icon">
                <svg viewBox="0 0 85 148" xmlns="http://www.w3.org/2000/svg">
                  <use xlinkHref="#link-icon" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
);

export default Timeline;