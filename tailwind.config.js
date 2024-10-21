/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/*.html"],
    theme: {
        fontFamily: {
            'Vazir_Light': "Vazir_Light",
            "Vazir_Bold": "Vazir_Bold",
        },
        screens: {
            "sm": "640px",
            "md": "840px",
            "lg": "1024px",
            "xl": "1280px",
            "2xl": "1536px",
        },
        extend: {
            fontSize: {
                clamp: "clamp(0.7rem,1vw,1rem)",
                clamp_intro: "clamp(01.5rem,2vw,2rem)",
                clamp_dis: "clamp(1rem,1.2vw,2rem)",
                clamp_super_dis: "clamp(0.9rem,1vw,2rem)",
            },
            colors: {
                green_snap: '#21aa58',
                text_nav: '#414141',
                bg_gray: '#f2f5f8',
                text_bg: '#404040',
                text_muted: '#eeeeee',
                bg_muted: 'rgba(255,255,255,0.05)',
                bg_nav_res: 'rgba(0,0,0,0.5)',
                bg_dark1: '#242424',
                bg_dark2: '#000000',
            }
        },
    },
    plugins: [],
}

