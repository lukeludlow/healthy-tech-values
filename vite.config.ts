import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [reactRouter(), tailwindcss()],
    // primereact ships ESM with directory imports Node cannot resolve, so
    // bundle it into the prerender build instead of loading it from Node.
    ssr: { noExternal: ["primereact"] },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
