import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.VITE_AZURE_CLIENT_ID': JSON.stringify(env.VITE_AZURE_CLIENT_ID),
      'process.env.VITE_AZURE_AUTHORITY_URL': JSON.stringify(env.VITE_AZURE_CLIENT_ID)
    },
    plugins: [remix(), tsconfigPaths()],
  }
})
