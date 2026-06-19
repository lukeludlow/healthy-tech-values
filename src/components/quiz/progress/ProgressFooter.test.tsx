import { expect, test } from "vitest";
import { Route, Routes } from "react-router";
import ProgressFooter from "@/components/quiz/progress/ProgressFooter.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";

const TOTAL_QUESTIONS = QUESTION_DATA.questions.length;

test("progress text reflects the number of distinctly answered questions", async () => {
    const answers = QUESTION_DATA.questions
        .slice(0, 3)
        .map((q) => q.options[0]);

    const { getByText } = await renderWithProviders(<ProgressFooter />, {
        initialAtomValues: [
            [currentQuestionIndexAtom, 0],
            [answersAtom, answers],
        ],
    });

    await expect
        .element(getByText(`3 of ${TOTAL_QUESTIONS} questions`))
        .toBeInTheDocument();
});

test("Next is disabled when the current question has no answer", async () => {
    const { getByRole } = await renderWithProviders(<ProgressFooter />, {
        initialAtomValues: [
            [currentQuestionIndexAtom, 1],
            [answersAtom, []],
        ],
    });

    await expect
        .element(getByRole("button", { name: /next/i }))
        .toBeDisabled();
});

test("Next is enabled when the current question already has an answer", async () => {
    const question = QUESTION_DATA.questions[1];

    const { getByRole } = await renderWithProviders(<ProgressFooter />, {
        initialAtomValues: [
            [currentQuestionIndexAtom, 1],
            [answersAtom, [question.options[0]]],
        ],
    });

    await expect.element(getByRole("button", { name: /next/i })).toBeEnabled();
});

test("Back on the first question navigates home", async () => {
    const { getByRole, getByText } = await renderWithProviders(
        <Routes>
            <Route path="/quiz" element={<ProgressFooter />} />
            <Route path="/" element={<div>Home stand-in</div>} />
        </Routes>,
        {
            route: "/quiz",
            initialAtomValues: [
                [currentQuestionIndexAtom, 0],
                [answersAtom, []],
            ],
        },
    );

    await getByRole("button", { name: /back/i }).click();
    await expect.element(getByText("Home stand-in")).toBeInTheDocument();
});

test("Next on the last question navigates to results", async () => {
    const lastIndex = TOTAL_QUESTIONS - 1;
    const lastQuestion = QUESTION_DATA.questions[lastIndex];

    const { getByRole, getByText } = await renderWithProviders(
        <Routes>
            <Route path="/quiz" element={<ProgressFooter />} />
            <Route path="/results" element={<div>Results stand-in</div>} />
        </Routes>,
        {
            route: "/quiz",
            initialAtomValues: [
                [currentQuestionIndexAtom, lastIndex],
                [answersAtom, [lastQuestion.options[0]]],
            ],
        },
    );

    await getByRole("button", { name: /next/i }).click();
    await expect.element(getByText("Results stand-in")).toBeInTheDocument();
});
