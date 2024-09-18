// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true, // Añadido para asegurar las rutas en servidores estáticos
  images: {
    unoptimized: true,
  },
  // Puedes añadir otras configuraciones aquí si es necesario
};

export default nextConfig;