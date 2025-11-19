/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'cherry-blossom': {
                    300: '#ffb7b2',
                    400: '#ff9aa2',
                    500: '#ff8090',
                },
                'pink': {
                    300: '#ffdac1',
                    400: '#ffb7b2',
                },
                'champagne-pink': {
                    300: '#ffe5ec',
                    400: '#ffc2d1',
                    500: '#ffb3c6',
                },
                'mountbatten': {
                    200: '#9d8189',
                    300: '#7d6169',
                    400: '#5d4149',
                }
            },
            fontFamily: {
                'gochi': ['"Gochi Hand"', 'cursive'],
                'pacifico': ['"Pacifico"', 'cursive'],
                'playfair': ['"Playfair Display"', 'serif'],
                'poppins': ['"Poppins"', 'sans-serif'],
                'quicksand': ['"Quicksand"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
