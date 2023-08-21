import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

const supportedExtensions = ["png", "jpg", "jpeg"];

export default defineConfig({
  plugins: [imagetools(), sveltekit()],
});
