/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // COLORES BASE
        mainText: "#1e1e1e", // gris muy oscuro casi negro (textos principales)
        secondText: "#808080", // gris medio (textos secundarios, bordes)
        mainBg: "#f5f5f5", // gris muy claro (ideal para fondos)
        secondBg: "#75e2fb", // celeste claro (hover, detalles, fondos secundarios)
        accent: "#4da6ff", // celeste saturado (botones, elementos destacados)
        inputBg: "#BFE5D7", //verde claro (fondo de los inputs de los formularios de register y login)
        navAuthBg: "#D9D9D9", //gris claro (forndo del Navbar Usuarios)

        // COLORES SECUNDARIOS
        pending: "#F3C623", // Amarillo suave para Pendiente
        process: "#4DA6FF", // Celeste saturado para En proceso (ya está en la paleta, mantiene coherencia)
        resolved: "#8AD247", // Verde suave para Resuelto
      },
      backgroundImage: {
        banner: 'url("https://ik.imagekit.io/SolvexCompany/gestionIncidentes.png?updatedAt=1752250793840")',
      },
    },
  },
  plugins: [],
};
