/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#D0E8FF", // สีฟ้าอ่อน
          DEFAULT: "#3B82F6", // สีฟ้าหลัก (Tailwind Blue 500)
          dark: "#1E3A8A", // สีฟ้าเข้ม
        },
        secondary: {
          light: "#E9D5FF", // สีม่วงอ่อน
          DEFAULT: "#8B5CF6", // สีม่วงหลัก (Tailwind Purple 500)
          dark: "#6D28D9", // สีม่วงเข้ม
        },
        background: {
          light: "#F9FAFB", // สีขาวอ่อน (พื้นหลัง)
          DEFAULT: "#F3F4F6", // สีเทาอ่อน (พื้นหลัง)
          dark: "#1F2937", // สีเทาเข้ม (พื้นหลัง)
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
