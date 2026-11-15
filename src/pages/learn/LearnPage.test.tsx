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
        .element(getByRole("button", { name: "Continue the Core Values Quiz" }))
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

test("offers the healthy tech plan template as a free download and print", async () => {
    const { getByRole } = await renderWithProviders(<LearnPage />, {
        initialAtomValues: [[isQuizInProgressAtom, false]],
    });

    const pdf = "/images/Our%20Healthy%20Tech%20Plan%20Template.pdf";
    const section = getByRole("region", { name: "Our Healthy Tech Plan" });

    const download = section.getByRole("link", { name: "Free Download" });
    await expect
        .element(download)
        .toHaveAttribute("download", "Our Healthy Tech Plan.pdf");
    expect((download.element() as HTMLAnchorElement).href).toMatch(
        new RegExp(`${pdf}$`),
    );

    const print = section.getByRole("link", { name: "Print" });
    await expect.element(print).toHaveAttribute("target", "_blank");
    expect((print.element() as HTMLAnchorElement).href).toMatch(
        new RegExp(`${pdf}$`),
    );
});
