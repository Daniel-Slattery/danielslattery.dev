module.exports = {
  content: [
    // Paths to your files where Tailwind should look for classes to be included in the production build.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
    // Add more paths here if you have additional directories with components or templates.
  ],
  theme: {
    extend: {
      // Extend the default Tailwind theme here
      // For example, you can add custom colors, spacing, etc.
      colors: {
        'custom-blue': '#243c5a'
        // Add more custom colors here
      },
      rotate: {
        20: '20deg' // This adds a 'rotate-20' utility
      }
    }
  },
  variants: {
    // Configure the variants here
  },
  daisyui: {
    themes: true,
    darkTheme: 'night',
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
  plugins: [require('daisyui')],
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
}
