import type { Config } from "@react-router/dev/config";

export default {
    appDirectory: "src",
    // Static site generation: no server at runtime. Each route below is
    // rendered to HTML at build time so crawlers see the full content.
    ssr: false,
    prerender: ["/", "/learn", "/quiz", "/resources", "/results"],
} satisfies Config;
