import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

const CURRENT_VERSION = "0.0.3";

// Runs before hydration so stale quiz state from an older app version is
// cleared before any atom reads localStorage.
if (localStorage.getItem("app_version") !== CURRENT_VERSION) {
    localStorage.removeItem("isQuizInProgress");
    localStorage.removeItem("currentQuestionIndex");
    localStorage.removeItem("answers");
    localStorage.setItem("app_version", CURRENT_VERSION);
}

hydrateRoot(
    document,
    <StrictMode>
        <HydratedRouter />
    </StrictMode>,
);
