import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("pages/home/HomePage.tsx"),
    route("learn", "pages/learn/LearnPage.tsx"),
    route("quiz", "pages/quiz/QuizPage.tsx"),
    route("results", "pages/results/ResultsPage.tsx"),
    route("resources", "pages/resources/ResourcesPage.tsx"),
] satisfies RouteConfig;
