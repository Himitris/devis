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
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  accent: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
  info: '#0ea5e9',
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    card: '#ffffff',
  },
  text: {
    primary: '#1e293b',
    secondary: '#64748b',
    tertiary: '#94a3b8',
    inverse: '#ffffff',
  },
  border: '#e2e8f0',
  divider: '#e2e8f0',
};

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const borderRadius = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  full: 9999,
};

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
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
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 16,
  },
};

export const typography = {
  h1: {
    fontSize: 32,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
    lineHeight: 40,
  },
  h2: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.text.primary,
    lineHeight: 32,
  },
  h3: {
    fontSize: 20,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    lineHeight: 24,
  },
  body1: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.primary,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.secondary,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors.text.tertiary,
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    lineHeight: 24,
  },
  smallButton: {
    fontSize: 14,
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors.text.primary,
    lineHeight: 20,
  },
};

// Animations
export const animationConfig = {
  timing: {
    default: {
      type: 'timing',
      duration: 300,
    },
    fast: {
      type: 'timing',
      duration: 200,
    },
    slow: {
      type: 'timing',
      duration: 500,
    },
  },
  spring: {
    default: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
    bouncy: {
      type: 'spring',
      damping: 5,
      stiffness: 90,
    },
    gentle: {
      type: 'spring',
      damping: 20,
      stiffness: 80,
    },
  },
};

// Gradients
export const gradients = {
  primary: ['#4f46e5', '#6366f1'],
  secondary: ['#0d9488', '#2dd4bf'],
  accent: ['#f97316', '#fb923c'],
  success: ['#16a34a', '#22c55e'],
  warning: ['#d97706', '#eab308'],
  error: ['#dc2626', '#ef4444'],
};

// Design System Components
export const designSystem = {
  card: {
    default: {
      backgroundColor: colors.background.card,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.sm,
    },
    elevated: {
      backgroundColor: colors.background.card,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.md,
    },
    interactive: {
      backgroundColor: colors.background.card,
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      ...shadows.sm,
    },
  },
  button: {
    primary: {
      backgroundColor: colors.primary[600],
      borderRadius: borderRadius.lg,
      padding: spacing.md,
    },
    secondary: {
      backgroundColor: colors.secondary[600],
      borderRadius: borderRadius.lg,
      padding: spacing.md,
    },
    outline: {
      backgroundColor: 'transparent',
      borderRadius: borderRadius.lg,
      padding: spacing.md,
      borderWidth: 1,
      borderColor: colors.primary[600],
    },
    text: {
      backgroundColor: 'transparent',
      padding: spacing.md,
    },
  },
};