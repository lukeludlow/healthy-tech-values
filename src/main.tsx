import "@/App.css";
// @ts-expect-error inter is CSS only
import "@fontsource-variable/inter";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@/pages/home/HomePage.tsx";
import { PrimeReactProvider } from "primereact/api";
import TopNavBar from "@/components/navbar/TopNavBar.tsx";
import QuizPage from "@/pages/quiz/QuizPage.tsx";
import LearnPage from "@/pages/learn/LearnPage.tsx";
import ResultsPage from "@/pages/results/ResultsPage.tsx";
import { Analytics } from "@vercel/analytics/react";

const CURRENT_VERSION = "0.0.2";

if (localStorage.getItem("app_version") !== CURRENT_VERSION) {
    sessionStorage.clear(); // Clears all session atoms
    localStorage.setItem("app_version", CURRENT_VERSION);
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PrimeReactProvider value={{ ripple: true }}>
            <div className={"bg-E5F0FF"}>
                <BrowserRouter>
                    <div className={"flex flex-col h-screen w-full print:h-auto"}>
                        <div className="print:hidden">
                            <TopNavBar />
                        </div>
                        <div className={"flex-1 overflow-auto print:overflow-visible"}>
                            <Routes>
                                <Route path={"/"} element={<HomePage />} />
                                <Route
                                    path={"/learn"}
                                    element={<LearnPage />}
                                />
                                <Route path={"/quiz"} element={<QuizPage />} />
                                <Route
                                    path={"/results"}
                                    element={<ResultsPage />}
                                />
                            </Routes>
                        </div>
                    </div>
                    <Analytics />
                </BrowserRouter>
            </div>
        </PrimeReactProvider>
    </StrictMode>,
);
