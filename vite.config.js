import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /** set cổng 3000 */
  // server: {
  //   port: 3000,
  // },
  server: {
    port: 3000,
  },
});
