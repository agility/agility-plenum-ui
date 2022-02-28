// eslint-disable-next-line
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            muli: ['Muli', 'sans-serif']
        },
        extend: {}
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/forms')]
};
