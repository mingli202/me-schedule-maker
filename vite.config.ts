/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/me-schedule-maker/",
  // build: {
  //   modulePreload: {
  //     polyfill: false
  //   }
  // }
});
