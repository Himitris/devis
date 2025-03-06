export const colors = {
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#4338ca',
    800: '#3730a3',
    900: '#312e81',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
  },
  text: {
    primary: '#1e293b',
    secondary: '#64748b',
    tertiary: '#94a3b8',
  },
  border: '#e2e8f0',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
};

export const typography = {
  h1: {
    fontSize: 32,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
  },
  h2: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
  },
  h3: {
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
  body1: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.primary,
  },
  body2: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
  },
  caption: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.tertiary,
  },
  button: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
  },
};