/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rumoney110: "#311804",
        rumoney100: "#512907",
        rumoney90: "#7A3D0B",
        rumoney80: "#A3510E",
        rumoney70: "#CB6612",
        rumoney60: "#F47A15",
        rumoney50: "#F47A15",
        rumoney40: "#F6903C",
        rumoney30: "#F9BC8A",
        rumoney20: "#FBD3B1",
        rumoney10: "#FDE4D0",
        black110: "#060606",
        black100: "#0A0A0A",
        black90: "#0F0F0F",
        black80: "#141414",
        black70: "#191919",
        black60: "#1E1E1E",
        black50: "#444444",
        black40: "#696969",
        black30: "#8E8E8E",
        black20: "#B4B4B4",
        black10: "#D2D2D2",
        error: "#F41515",
        success: "#09BE1B",
        rumoneybg: "FFFAF6",
      },
      backgroundImage: {
        'contact-banner': "url('/src/assets/images/ContactUs.png')",
        'about-banner': "url('/src/assets/images/AboutUs.png')",
        'email-list': "url('/src/assets/images/EmailList.png')",
        'what-image': "url('/src/assets/images/What.png')",
        'unique-sme': "url('/src/assets/images/UniqueSME.png')",
        'unique-student': "url('/src/assets/images/UniqueStudents.png')",
        'our-journey': "url('/src/assets/images/OurJourney.png')",
        
      }
    },
  },
  plugins: [],
};
