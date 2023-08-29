/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      colors: {
        'main-purple': '#476BF0',
        'main-black': '#1E222E',

        'main-green': '#6A9F48',
        'main-red': '#E55C5C',

        'text-dark-gray': '#696E82',

        'bg-purple': '#E9EDFD',
        'bg-block': '#F4F6FA',

        'checkbox-hover': '#476bf01f',
        'checkbox-checked': '#476bf0',

        'border-light': '#476bf066',
        'border-regular': '#476bf0',
        'border-bold': '#476bf099',
        'border-gray': '#E2E6EA',
      },
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
      },
      border: {},
      fontSize: {
        headline: ['40px', '48px'],
        caption: [
          '32px',
          {
            fontWeight: '700',
          },
        ],
      },
      spacing: {
        15: '60px', // 15 * 4 = 60, т.к. Tailwind использует 4px scale
        10: '40px', // 10 * 4 = 40
        8: '32px', // 8 * 4 = 32
        6: '24px', // 6 * 4 = 24
        4: '16px', // 4 * 4 = 16
        3: '12px', // 3 * 4 = 12
      },
      borderRadius: {
        main: '8px',
      },
      maxWidth: {},
      height: {},
    },
  },

  plugins: [],
};
