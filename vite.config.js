import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import vercel from "vite-plugin-vercel";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      {
        name: "configure-response-headers",
        configureServer: (server) => {
          server.middlewares.use((_req, res, next) => {
            res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
            res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
            next();
          });
        },
      },
      nodePolyfills({
        process: true,
      }),
    ],
    // define: {
    //   "process.env.NODE_ENV": JSON.stringify(
    //     process.env.NODE_ENV || "production",
    //   ), // Set default NODE_ENV
    //   process: {}, // This adds a polyfill for process.env
    // },
    postcss: "./postcss.config.js", // If you have a PostCSS config
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    build: {
      lib: {
        entry: "src/main.jsx", // entry point of your component
        name: "MeetingRoomBookingWidget", // name of your component
        fileName: (format) => `meeting-room-booking-widget.${format}.js`,
      },
      rollupOptions: {
        // Make sure to externalize dependencies that shouldn't be bundled
        external: [],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
      cssCodeSplit: true, // Enable this to split CSS into a separate file
    },
  };
});
