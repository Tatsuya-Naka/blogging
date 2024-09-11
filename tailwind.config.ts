// tailwind.config.tsx
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import type { PluginAPI, PluginUtils } from "tailwindcss/types/config";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        logInBg: 'rgba(59, 73, 223, .1)',
        loginText: 'rgb(64, 64, 64)',
        loginHover: 'rgb(47, 58, 178)',
        createAccountBG: 'rgb(59, 73, 223)',
        createBorderHover: 'rgb(47, 58, 178)',
        engineBorderColor: 'rgb(23, 23, 23)',
        borderColor: "rgb(212, 212, 212)",
        engineMarkBG: "rgb(229, 229, 229)",
        engineMarkBGHover: 'rgba(59, 73, 223, 0.1)',
        editColor: "rgb(38, 38, 38)",
        bg: "rgb(245, 245, 245)",
        leftBoxText: "rgb(82, 82, 82)",
        buttonHover: "rgba(0, 0, 0, 0.035)",
        sidebarfooter: "rgb(115, 115, 115)",
        tagBg: "rgba(113, 234, 139, 0.10)",
        removeText: "rgb(220, 38, 38)",
        removeHoverText: "rgb(185, 28, 28)",
        topicEdit: "rgba(245, 158, 11, 0.1)",
      },
      appearance: {
        none: 'none',
      },
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.17, 0.67, 0.5, 0.71)',
      },
      transitionDuration: {
        '100': '100ms',
      },
      verticalAlign: {
        '-2': '-2px',
      },
      screens: {
        'breakPointEngine': '768px', // Adjust this value as needed
      },
      // boxSizing: {
      //   'border-box': 'border-box',
      //   'content-box': 'content-box',
      // },
      flex: {
        '1-auto': '1 auto',
      },
      boxShadow: {
        'custom-light-border': '0 0 0 1px rgba(23, 23, 23, 0.05)',
        'customForCenterPage': "0px 8px 16px rgba(0, 0, 0, 0.06)",
        'topicShadow': "0 -1px 5px rgba(0, 0, 0, 0.2);", 
      },
      borderRadius: {
        'custom': 'max(0px, min(0.375rem, calc((100vw - 4px - 100%) * 9999)))',
        'customForCenterPage': "Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) / 0.375rem",
      },
      padding: {
        'custom': 'clamp(0.25rem, 0.25em, 0.5em) 0.5em',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI ) {
      addUtilities(
        {
          '.dropdown-showing': {
            '--dropdown-transform': 'translateY(0) rotateX(0)',
            '--dropdown-opacity': '1',
            '--dropdown-visibility': 'visible',
            transform: 'var(--dropdown-transform)',
            opacity: 'var(--dropdown-opacity)',
            visibility: 'var(--dropdown-visibility)',
          },
        },
        ['responsive', 'hover'] as any
      );
    },
  ],
};

export default config;
