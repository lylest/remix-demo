import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("teams", "routes/teams/route.tsx", () => {
            route("team-form", "routes/teams/team-form.tsx");
          });
        route("teams-details/:teamId", "routes/teams/team-details.tsx", () => {
            //route("team-form", "routes/teams/team-form.tsx");
          });
          route("tracker", "routes/tracker/route.tsx", () => {
             //route("team-form", "routes/teams/team-form.tsx");
          });
          route("profile", "routes/profile/route.tsx", () => {
           // route("team-form", "routes/teams/team-form.tsx");
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});

