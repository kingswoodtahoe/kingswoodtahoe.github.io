import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";

export default {
  root: resolve(__dirname, "src"),
  server: {
    port: 8080,
    hot: true,
  },
  resolve: {
    alias: {
      "~bootstrap": resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
    }),
  ],
};
