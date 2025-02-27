import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: "federation_provider",
      exposes: {
        "./button": "./src/button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
});
