import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false; // Deshabilitar la caché de Webpack
    return config;
  },
  // Puedes agregar otras opciones aquí si es necesario
};

export default nextConfig;
