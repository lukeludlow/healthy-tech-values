import { expect, test } from "vitest";
import { Route, Routes } from "react-router";
import HomeHero from "@/pages/home/HomeHero.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";
import { isQuizInProgressAtom } from "@/state/state.ts";

test("clicking Start Here navigates to /quiz", async () => {
    const { getByRole, getByText } = await renderWithProviders(
        <Routes>
            <Route path="/" element={<HomeHero />} />
            <Route path="/quiz" element={<div>Quiz stand-in</div>} />
        </Routes>,
        {
            route: "/",
            initialAtomValues: [[isQuizInProgressAtom, false]],
        },
    );

    await getByRole("button", { name: "Start Here" }).click();
    await expect.element(getByText("Quiz stand-in")).toBeInTheDocument();
});
