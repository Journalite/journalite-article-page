import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const NotificationIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" 
      fill={color}
    />
    <path 
      d="M13.73 21a2 2 0 0 1-3.46 0" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ThoughtIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" 
      fill={color}
    />
    <path 
      d="M8 3l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" 
      fill={color}
      opacity="0.6"
    />
  </svg>
);

export const CommentIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ThumbsUpIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
      fill={color}
    />
  </svg>
);

export const ThinkingIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="17" r="1" fill={color}/>
  </svg>
);

export const BulbIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M9 21h6m-6 0v-1a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1m-6 0h6m-1-9a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <polygon 
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
      fill={color}
    />
  </svg>
);

export const WarningIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="12" y1="9" x2="12" y2="13" stroke={color} strokeWidth="2"/>
    <circle cx="12" cy="17" r="1" fill={color}/>
  </svg>
);

export const SendIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13" stroke={color} strokeWidth="2"/>
    <polygon points="22,2 15,22 11,13 2,9" fill={color}/>
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="18" cy="5" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="6" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="18" cy="19" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" stroke={color} strokeWidth="2"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" stroke={color} strokeWidth="2"/>
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const InspirationIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z" 
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <circle cx="12" cy="12" r="3" fill={color} opacity="0.3"/>
  </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="13.5" cy="6.5" r=".5" fill={color}/>
    <circle cx="17.5" cy="10.5" r=".5" fill={color}/>
    <circle cx="8.5" cy="7.5" r=".5" fill={color}/>
    <circle cx="6.5" cy="12.5" r=".5" fill={color}/>
    <path 
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" 
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export const LoadingIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ animation: 'spin 1s linear infinite' }}
  >
    <circle 
      cx="12" 
      cy="12" 
      r="10" 
      stroke={color} 
      strokeWidth="2" 
      strokeDasharray="60"
      strokeDashoffset="20"
      fill="none"
      strokeLinecap="round"
    />
    <style jsx>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </svg>
);

export const ReflectionIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" 
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <path 
      d="M7 12h10m-5-4v8" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="8" r="1" fill={color}/>
  </svg>
);

export const AutoIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M12 2v6.5l4.5-4.5M12 22v-6.5l-4.5 4.5M22 12h-6.5l4.5-4.5M2 12h6.5L4 7.5" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const DiceIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="8" cy="8" r="1" fill={color}/>
    <circle cx="12" cy="12" r="1" fill={color}/>
    <circle cx="16" cy="16" r="1" fill={color}/>
  </svg>
);

export const LockClosedIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="16" r="1" fill={color}/>
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 1v6m0 10v6m11-7h-6m-10 0H1m15.5-3.5L19 9.5m-14 5L7.5 12M16.5 7.5L19 5m-14 14l2.5-2.5" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ComputerIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" stroke={color} strokeWidth="2" fill="none"/>
    <line x1="8" y1="21" x2="16" y2="21" stroke={color} strokeWidth="2"/>
    <line x1="12" y1="17" x2="12" y2="21" stroke={color} strokeWidth="2"/>
  </svg>
);

export const TheaterIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M2 12c3-5 7-8 10-8s7 3 10 8c-3 5-7 8-10 8s-7-3-10-8z" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M8 2l1.5 4L12 2l2.5 4L16 2" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const EnhancedIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22l1.18-7.86-5-4.87 6.91-1.01L12 2z" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M12 8v8m-4-4h8" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const AtmosphereIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M10 16c0-1.1.9-2 2-2s2 .9 2 2" stroke={color} strokeWidth="2" fill="none"/>
    <circle cx="12" cy="8" r="1" fill={color}/>
  </svg>
);

export const WriteIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke={color} strokeWidth="2" fill="none"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke={color} strokeWidth="2" fill="none"/>
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" stroke={color} strokeWidth="2"/>
    <line x1="6" y1="6" x2="18" y2="18" stroke={color} strokeWidth="2"/>
  </svg>
);

export const ReplyIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M9 17l-4-4 4-4M5 13h11a4 4 0 0 1 0 8h-1" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DotsVerticalIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="1" fill={color}/>
    <circle cx="12" cy="5" r="1" fill={color}/>
    <circle cx="12" cy="19" r="1" fill={color}/>
  </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line x1="10" y1="11" x2="10" y2="17" stroke={color} strokeWidth="2"/>
    <line x1="14" y1="11" x2="14" y2="17" stroke={color} strokeWidth="2"/>
  </svg>
);

export const EditIcon: React.FC<IconProps> = ({ size = 20, color = 'currentColor', className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path 
      d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" 
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
); 