import React from 'react';

export const TechIcon = ({ name, className = "w-10 h-10" }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'html':
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 20.4L12 22.2L18.4 20.4L20 3H4Z" fill="#E44D26"/>
          <path d="M12 4.6V20.4L17 19L18.3 4.6H12Z" fill="#F16529"/>
          <path d="M12 7.7H7.7L8 10.9H12V7.7ZM12 14.1L8.3 14L8.1 12.3H6.5L6.9 16.1L12 17.5V14.1Z" fill="#EBEBEB"/>
          <path d="M12 7.7V10.9H16L15.6 15.6L12 16.6V17.5L16.4 16.3L16.9 10.9H12ZM12 4.6H18.4L18 7.7H12V4.6Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 3L5.6 20.4L12 22.2L18.4 20.4L20 3H4Z" fill="#1572B6"/>
          <path d="M12 4.6V20.4L17 19L18.3 4.6H12Z" fill="#38BDF8"/>
          <path d="M12 7.7H7.7L8.4 14.1H12V10.9H9.7L9.5 9.3H12V7.7ZM12 16.6L9.6 15.6L9.4 14.5H7.8L8.2 17.5L12 18.5V16.6Z" fill="#EBEBEB"/>
          <path d="M16.3 7.7H12V9.3H16.1L15.7 13.9L12 14.9V16.6L16.4 15.4L16.9 9.3H12V7.7H16.3Z" fill="#FFFFFF"/>
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
          <path d="M7 17.5C7.8 18.2 8.7 18.6 9.8 18.6C11.5 18.6 12.5 17.6 12.5 15.8V9.5H10.4V15.7C10.4 16.6 9.9 17 9.2 17C8.6 17 8.1 16.7 7.7 16.2L7 17.5ZM14.1 17.2C14.8 18.1 15.9 18.6 17.2 18.6C19.1 18.6 20.3 17.5 20.3 15.8C20.3 14.2 19.3 13.5 17.8 12.9L17.2 12.6C16.3 12.2 15.8 11.9 15.8 11.2C15.8 10.6 16.3 10.1 17 10.1C17.7 10.1 18.3 10.4 18.7 11.1L19.9 9.9C19.2 8.9 18.2 8.5 17 8.5C15.3 8.5 14.1 9.6 14.1 11.2C14.1 12.7 15.1 13.4 16.5 14L17.1 14.3C18.1 14.7 18.6 15.1 18.6 15.9C18.6 16.7 17.9 17.2 17.1 17.2C16.1 17.2 15.3 16.6 14.8 15.7L14.1 17.2Z" fill="#000000"/>
        </svg>
      );

    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M11.9 2C8.7 2 6.7 3.4 6.7 5.8V7.8H12.1V8.6H4.8C2.5 8.6 1.1 10.4 1.1 12.8C1.1 15.2 2.7 16.9 5 16.9H6.4V14.6C6.4 12.8 7.9 11.2 9.7 11.2H14.4C15.8 11.2 16.9 10.1 16.9 8.7V5.8C16.9 3.4 15.1 2 11.9 2ZM9.5 4.1C10.1 4.1 10.6 4.6 10.6 5.2C10.6 5.8 10.1 6.3 9.5 6.3C8.9 6.3 8.4 5.8 8.4 5.2C8.4 4.6 8.9 4.1 9.5 4.1Z" fill="#387EB8"/>
          <path d="M12.1 22C15.3 22 17.3 20.6 17.3 18.2V16.2H11.9V15.4H19.2C21.5 15.4 22.9 13.6 22.9 11.2C22.9 8.8 21.3 7.1 19 7.1H17.6V9.4C17.6 11.2 16.1 12.8 14.3 12.8H9.6C8.2 12.8 7.1 13.9 7.1 15.3V18.2C7.1 20.6 8.9 22 12.1 22ZM14.5 19.9C13.9 19.9 13.4 19.4 13.4 18.8C13.4 18.8 13.9 17.7 14.5 17.7C15.1 17.7 15.6 18.2 15.6 18.8C15.6 19.4 15.1 19.9 14.5 19.9Z" fill="#FFE052"/>
        </svg>
      );

    case 'php':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="8" fill="#777BB4"/>
          <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif">PHP</text>
        </svg>
      );

    case 'jaringan':
    case 'jaringankomputer':
    case 'network':
    case 'networking':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          {/* Background subtle container */}
          <rect width="24" height="24" rx="5" fill="#0284C7" fillOpacity="0.15" stroke="#38BDF8" strokeWidth="0.8"/>
          {/* Top Router / Central Switch */}
          <rect x="7.5" y="3.5" width="9" height="5" rx="1.5" stroke="#38BDF8" strokeWidth="1.4" fill="#082F49"/>
          <circle cx="10" cy="6" r="0.8" fill="#38BDF8"/>
          <circle cx="12" cy="6" r="0.8" fill="#38BDF8"/>
          <circle cx="14" cy="6" r="0.8" fill="#34D399"/>
          {/* Central Bus Backbone */}
          <line x1="12" y1="8.5" x2="12" y2="12" stroke="#38BDF8" strokeWidth="1.4"/>
          <line x1="5.5" y1="12" x2="18.5" y2="12" stroke="#38BDF8" strokeWidth="1.4"/>
          <line x1="5.5" y1="12" x2="5.5" y2="15" stroke="#38BDF8" strokeWidth="1.4"/>
          <line x1="12" y1="12" x2="12" y2="15" stroke="#38BDF8" strokeWidth="1.4"/>
          <line x1="18.5" y1="12" x2="18.5" y2="15" stroke="#38BDF8" strokeWidth="1.4"/>
          {/* Connected Workstation / Server Nodes */}
          <rect x="3" y="15" width="5" height="4.5" rx="1" stroke="#38BDF8" strokeWidth="1.2" fill="#0F172A"/>
          <rect x="9.5" y="15" width="5" height="4.5" rx="1" stroke="#38BDF8" strokeWidth="1.2" fill="#0F172A"/>
          <rect x="16" y="15" width="5" height="4.5" rx="1" stroke="#38BDF8" strokeWidth="1.2" fill="#0F172A"/>
          <circle cx="5.5" cy="17.25" r="0.6" fill="#38BDF8"/>
          <circle cx="12" cy="17.25" r="0.6" fill="#38BDF8"/>
          <circle cx="18.5" cy="17.25" r="0.6" fill="#38BDF8"/>
        </svg>
      );

    case 'laravel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M9.8 15.2L4 12.1V5.9L9.8 9V15.2Z" fill="#FF2D20"/>
          <path d="M10.2 15.2L16 12.1V5.9L10.2 9V15.2Z" fill="#E6281B"/>
          <path d="M16 12.1L21.8 9V2.8L16 5.9V12.1Z" fill="#FF2D20"/>
          <path d="M4 5.9L9.8 2.8L15.6 5.9L9.8 9L4 5.9Z" fill="#FF4438"/>
          <path d="M9.8 15.2L15.6 18.3L21.4 15.2L15.6 12.1L9.8 15.2Z" fill="#E6281B"/>
          <path d="M15.6 18.3V21.4L9.8 18.3V15.2L15.6 18.3Z" fill="#CC2419"/>
        </svg>
      );

    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#00758F"/>
          <path d="M5 8C5 6.3 8.1 5 12 5C15.9 5 19 6.3 19 8V16C19 17.7 15.9 19 12 19C8.1 19 5 17.7 5 16V8Z" fill="#F29111" fillOpacity="0.25"/>
          <text x="12" y="14" textAnchor="middle" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">SQL</text>
        </svg>
      );

    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M8 12C5.79 12 4 10.21 4 8C4 5.79 5.79 4 8 4H12V12H8Z" fill="#F24E1E"/>
          <path d="M12 4H16C18.21 4 20 5.79 20 8C20 10.21 18.21 12 16 12H12V4Z" fill="#FF7262"/>
          <path d="M12 12H16C18.21 12 20 13.79 20 16C20 18.21 18.21 20 16 20C13.79 20 12 18.21 12 16V12Z" fill="#1ABCFE"/>
          <path d="M8 20C5.79 20 4 18.21 4 16C4 13.79 5.79 12 8 12H12V16C12 18.21 10.21 20 8 20Z" fill="#0ACF83"/>
          <circle cx="16" cy="12" r="4" fill="#A259FF"/>
        </svg>
      );

    case 'uiux':
    case 'uiuxdesign':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.2"/>
          {/* Layout frame mockup */}
          <rect x="4" y="5" width="16" height="4" rx="1.5" fill="#38BDF8" fillOpacity="0.8"/>
          <rect x="4" y="11" width="7" height="8" rx="1.5" fill="#38BDF8" fillOpacity="0.3"/>
          <rect x="13" y="11" width="7" height="3.5" rx="1.5" fill="#38BDF8" fillOpacity="0.5"/>
          <rect x="13" y="16" width="7" height="3" rx="1.5" fill="#38BDF8" fillOpacity="0.3"/>
          <circle cx="18" cy="7" r="1" fill="#FFFFFF"/>
        </svg>
      );

    case 'responsive':
    case 'responsivewebdesign':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          {/* Desktop screen */}
          <rect x="2" y="4" width="14" height="10" rx="2" stroke="#38BDF8" strokeWidth="1.5" fill="#0F172A"/>
          <line x1="6" y1="17" x2="12" y2="17" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="9" y1="14" x2="9" y2="17" stroke="#38BDF8" strokeWidth="1.5"/>
          {/* Mobile screen in front */}
          <rect x="15" y="9" width="7" height="11" rx="2" stroke="#34D399" strokeWidth="1.5" fill="#020617"/>
          <line x1="17.5" y1="18.5" x2="19.5" y2="18.5" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-300 font-bold ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
