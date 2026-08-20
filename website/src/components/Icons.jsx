import React from 'react';

export const LinkedinIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true" 
    {...props}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.5 1.5 0 0 0-1.5 1.5c0 .83.67 1.5 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5c0-.83-.67-1.5-1.5-1.5z"/>
  </svg>
);

export const GithubIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true" 
    {...props}
  >
    <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19.01c.49.09.67-.21.67-.47v-1.72c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.32 1.08 2.89.83.09-.64.35-1.08.63-1.33-2.18-.25-4.47-1.09-4.47-4.86 0-1.07.38-1.95 1.02-2.64-.1-.25-.44-1.25.1-2.61 0 0 .83-.27 2.69 1.01A9.28 9.28 0 0 1 12 6.43c.83 0 1.66.11 2.44.33 1.86-1.28 2.69-1.01 2.69-1.01.54 1.36.2 2.36.1 2.61.64.69 1.02 1.57 1.02 2.64 0 3.78-2.3 4.61-4.49 4.85.35.31.67.93.67 1.89v2.8c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z"/>
  </svg>
);

export const KaggleIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true" 
    {...props}
  >
    <path d="M5 3.25h3.28v7.03l5.36-7.03h3.94l-6.2 8 6.63 9.45h-3.9l-5-7.2-1.83 2.32v4.88H5V3.25Z"/>
  </svg>
);

export const TwitterIcon = ({ className = 'w-4 h-4', ...props }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    aria-hidden="true" 
    {...props}
  >
    <path d="M18.9 2.25h3.68l-8.04 9.2L24 21.75h-7.4l-5.8-7.58-6.63 7.58H.48l8.6-9.83L0 2.25h7.58l5.24 6.93 6.08-6.93Zm-1.29 17.3h2.04L6.47 4.34H4.29L17.61 19.55Z"/>
  </svg>
);
