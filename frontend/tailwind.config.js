/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'hsl(240, 100%, 60%)',
                    dark: 'hsl(240, 100%, 50%)',
                    light: 'hsl(240, 100%, 70%)',
                },
                secondary: 'hsl(280, 80%, 55%)',
                accent: 'hsl(320, 90%, 60%)',
                dark: {
                    bg: 'hsl(240, 10%, 8%)',
                    card: 'hsl(240, 8%, 12%)',
                    lighter: 'hsl(240, 6%, 16%)',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glow': '0 0 40px rgba(96, 96, 255, 0.3)',
                'glow-lg': '0 0 60px rgba(96, 96, 255, 0.4)',
            }
        },
    },
    plugins: [],
}
