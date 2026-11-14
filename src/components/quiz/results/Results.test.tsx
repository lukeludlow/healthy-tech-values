import { expect, test } from "vitest";
import Results from "@/components/quiz/results/Results.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";
import { answersAtom } from "@/state/state.ts";
import type { AnswerOption } from "@/data/questionData.ts";

const FIXTURE_ANSWERS: AnswerOption[] = [
    { text: "a1", value: "Health & Harmony" },
    { text: "a2", value: "Health & Harmony" },
    { text: "a3", value: "Health & Harmony" },
    { text: "a4", value: "Growth & Mastery" },
    { text: "a5", value: "Growth & Mastery" },
    { text: "a6", value: "Adventure & Exploration" },
];

test("ranks values by frequency, highest first, with correct point counts", async () => {
    const { getByText, container } = await renderWithProviders(<Results />, {
        initialAtomValues: [[answersAtom, FIXTURE_ANSWERS]],
    });

    await expect.element(getByText("Health & Harmony")).toBeInTheDocument();
    await expect.element(getByText("Growth & Mastery")).toBeInTheDocument();
    await expect
        .element(getByText("Adventure & Exploration"))
        .toBeInTheDocument();
    await expect.element(getByText("3 pts")).toBeInTheDocument();
    await expect.element(getByText("2 pts")).toBeInTheDocument();
    await expect.element(getByText("1 pt")).toBeInTheDocument();

    const text = container.textContent ?? "";
    const harmonyIndex = text.indexOf("Health & Harmony");
    const masteryIndex = text.indexOf("Growth & Mastery");
    const explorationIndex = text.indexOf("Adventure & Exploration");

    expect(harmonyIndex).toBeLessThan(masteryIndex);
    expect(masteryIndex).toBeLessThan(explorationIndex);
});

test("clicking a value card reveals its suggested goals, and clicking again hides them", async () => {
    const { getByText } = await renderWithProviders(<Results />, {
        initialAtomValues: [[answersAtom, FIXTURE_ANSWERS]],
    });

    const goalText =
        "Establish a morning routine that sets a calm tone for the day";

    await expect.element(getByText(goalText)).not.toBeInTheDocument();

    await getByText("Health & Harmony").click();
    await expect.element(getByText(goalText)).toBeVisible();

    await getByText("Health & Harmony").click();
    await expect.element(getByText(goalText)).not.toBeInTheDocument();
});

test("with no answers yet, shows a prompt to take the quiz instead of an empty list", async () => {
    const { getByText, getByRole } = await renderWithProviders(<Results />, {
        initialAtomValues: [[answersAtom, []]],
    });

    await expect
        .element(
            getByText("Answer the quiz questions to see your ranked values."),
        )
        .toBeInTheDocument();
    await expect
        .element(getByRole("link", { name: "Take the Core Values Quiz" }))
        .toHaveAttribute("href", "/quiz");
});
