import "@/App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "@/pages/home/HomePage.tsx";
import { PrimeReactProvider } from "primereact/api";
import Header from "@/components/Header.tsx";
import QuizPage from "@/pages/quiz/QuizPage.tsx";
import LearnPage from "@/pages/learn/LearnPage.tsx";
import AboutPage from "@/pages/about/AboutPage.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PrimeReactProvider value={{ ripple: true }}>
            <div className={"bg-E5F0FF"}>
                <BrowserRouter>
                    <div className={"flex flex-col h-screen w-full"}>
                        <Header />
                        <div className={"flex-1 overflow-auto"}>
                            <Routes>
                                <Route path={"/"} element={<HomePage />} />
                                <Route
                                    path={"/about"}
                                    element={<AboutPage />}
                                />
                                <Route
                                    path={"/learn"}
                                    element={<LearnPage />}
                                />
                                <Route path={"/quiz"} element={<QuizPage />} />
                            </Routes>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </PrimeReactProvider>
    </StrictMode>,
);
