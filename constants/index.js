// Screen sizes
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

// GTR

export const GTR = {
  XS: "8px",
  S: "16px",
  M: "24px",
  L: "32px",
  XL: "40px",
  XXL: "64px",
};

export const DEVICE = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

// Five Three One
export const WEEK_ONE_WARM_UP_SETS = [
  { percentage: 0.4, sets: 1, reps: 5 },
  { percentage: 0.5, sets: 1, reps: 5 },
  { percentage: 0.6, sets: 1, reps: 3 },
];
export const WEEK_ONE_WORKING_SETS = [
  { percentage: 0.65, sets: 1, reps: 5 },
  { percentage: 0.75, sets: 1, reps: 5 },
  { percentage: 0.85, sets: 1, reps: "5+" },
];
export const WEEK_ONE_COOL_DOWN_SETS = [{ percentage: 0.65, sets: 5, reps: 5 }];

export const WEEK_ONE = [
  {
    title: "Warm Up",
    sets: [
      { percentage: 0.4, sets: 1, reps: 5 },
      { percentage: 0.5, sets: 1, reps: 5 },
      { percentage: 0.6, sets: 1, reps: 3 },
    ],
  },
  {
    title: "Working Sets",
    sets: [
      { percentage: 0.65, sets: 1, reps: 5 },
      { percentage: 0.75, sets: 1, reps: 5 },
      { percentage: 0.85, sets: 1, reps: "5+" },
    ],
  },
  {
    title: "Cool Down",
    sets: [{ percentage: 0.65, sets: 5, reps: 5 }],
  },
];
