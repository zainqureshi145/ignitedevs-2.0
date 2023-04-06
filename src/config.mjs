const CONFIG = {
  name: 'Digitalization and Marketing Solutions',
  origin: 'https://ignitedevs.com',
  basePathname: '/',
  trailingSlash: false,
  title: 'ignitedevs',
  description:
    'Welcome to ignitedevs',
  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"
  language: 'en',
  textDirection: 'ltr',
  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),
};

export const SITE = { ...CONFIG };
export const DATE_FORMATTER = CONFIG.dateFormatter;