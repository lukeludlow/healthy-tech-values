import { expect, test } from "vitest";
import { Route, Routes } from "react-router";
import LearnPage from "@/pages/learn/LearnPage.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";
import { isQuizInProgressAtom } from "@/state/state.ts";

test("shows 'Take the Core Values Quiz' when no quiz is in progress", async () => {
    const { getByRole } = await renderWithProviders(<LearnPage />, {
        initialAtomValues: [[isQuizInProgressAtom, false]],
    });

    await expect
        .element(getByRole("button", { name: "Take the Core Values Quiz" }))
        .toBeInTheDocument();
});

test("shows 'Continue the Core Values Quiz' when a quiz is already in progress", async () => {
    const { getByRole } = await renderWithProviders(<LearnPage />, {
        initialAtomValues: [[isQuizInProgressAtom, true]],
    });

    await expect
        .element(
            getByRole("button", { name: "Continue the Core Values Quiz" }),
        )
        .toBeInTheDocument();
});

test("clicking the quiz CTA navigates to /quiz", async () => {
    const { getByRole, getByText } = await renderWithProviders(
        <Routes>
            <Route path="/learn" element={<LearnPage />} />
            <Route path="/quiz" element={<div>Quiz stand-in</div>} />
        </Routes>,
        {
            route: "/learn",
            initialAtomValues: [[isQuizInProgressAtom, false]],
        },
    );

    await getByRole("button", { name: "Take the Core Values Quiz" }).click();
    await expect.element(getByText("Quiz stand-in")).toBeInTheDocument();
});
