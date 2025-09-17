export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Custom Skillex colors - all HSL format
        primary: 'hsl(var(--primary))',
        'primary-content': 'hsl(var(--primary-content))',
        secondary: 'hsl(var(--secondary))',
        'secondary-content': 'hsl(var(--secondary-content))',
        accent: 'hsl(var(--accent))',
        'accent-content': 'hsl(var(--accent-content))',
        neutral: 'hsl(var(--neutral))',
        'neutral-content': 'hsl(var(--neutral-content))',
        'base-100': 'hsl(var(--base-100))',
        'base-200': 'hsl(var(--base-200))',
        'base-300': 'hsl(var(--base-300))',
        'base-content': 'hsl(var(--base-content))',
        info: 'hsl(var(--info))',
        success: 'hsl(var(--success))',
        warning: 'hsl(var(--warning))',
        error: 'hsl(var(--error))',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(267, 88%, 59%) 0%, hsl(194, 100%, 43%) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, hsl(174, 72%, 56%) 0%, hsl(267, 88%, 59%) 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        // Dark theme (default)
        dark: {
          "primary": "#7B2FF7",
          "primary-content": "#ffffff",
          "secondary": "#2EC4B6",
          "secondary-content": "#ffffff", 
          "accent": "#00B4D8",
          "accent-content": "#ffffff",
          "neutral": "#1E293B",
          "neutral-content": "#F8F9FA",
          "base-100": "#0D1117",
          "base-200": "#161B22",
          "base-300": "#21262D",
          "base-content": "#F8F9FA",
          "info": "#3ABFF8",
          "success": "#10B981",
          "warning": "#FACC15",
          "error": "#EF4444",
        },
        // Light theme
        light: {
          "primary": "#4F46E5",
          "primary-content": "#ffffff",
          "secondary": "#2EC4B6",
          "secondary-content": "#ffffff",
          "accent": "#7B2FF7", 
          "accent-content": "#ffffff",
          "neutral": "#F3F4F6",
          "neutral-content": "#1E293B",
          "base-100": "#FFFFFF",
          "base-200": "#F9FAFB",
          "base-300": "#F3F4F6",
          "base-content": "#1E293B",
          "info": "#3ABFF8",
          "success": "#10B981",
          "warning": "#FACC15",
          "error": "#EF4444",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};