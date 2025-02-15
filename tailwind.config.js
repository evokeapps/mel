module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        theme: {
            extend: {
                fontfamily: {
                    'sans-serif': ['Work Sans', 'sans-serif'],
                }
            },
        },
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography'),
    ],
    daisyui: {
        themes: ['forest']
    }
}