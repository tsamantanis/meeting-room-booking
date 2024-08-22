// import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: [
//         { find: '@', replacement: path.resolve(__dirname, 'src') },
//     ],
//   }
// })

import path from "path";
// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
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
  },
});
