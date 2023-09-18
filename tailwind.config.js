/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'categorizor': "url('/images/categorizor.png')",
                'conch': "url('/images/conch.png')",
                'easyToLove': "url('/images/easyToLove.png')",
                'fiethMobile': "url('/images/fiethMobile.png')",
                'goGirl': "url('/images/goGirl.png')",
                'hieofone': "url('/images/hieofone.png')",
                'listnr': "url('/images/listnr.png')",
                'webdesignprocess': "url('/images/webdesignprocess.pdf')",
                'webdesignprocess2': "url('/images/webdesignprocess2.pdf')",
            }
        },
    },
    plugins: [],
}