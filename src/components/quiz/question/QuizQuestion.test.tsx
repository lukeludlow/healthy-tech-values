import { expect, test } from "vitest";
import { Route, Routes } from "react-router";
import QuizQuestion from "@/components/quiz/question/QuizQuestion.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";

test("Next Question is disabled until an answer is selected, and re-disables on deselect", async () => {
    const firstOption = QUESTION_DATA.questions[0].options[0];

    const { getByRole } = await renderWithProviders(<QuizQuestion />, {
        initialAtomValues: [
            [currentQuestionIndexAtom, 0],
            [answersAtom, []],
        ],
    });

    const nextButton = getByRole("button", { name: /next question/i });
    await expect.element(nextButton).toBeDisabled();

    await getByRole("button", { name: firstOption.text }).click();
    await expect.element(nextButton).toBeEnabled();

    await getByRole("button", { name: firstOption.text }).click();
    await expect.element(nextButton).toBeDisabled();
});

test("clicking Next Question advances to the next question's text", async () => {
    const firstOption = QUESTION_DATA.questions[0].options[0];
    const secondQuestion = QUESTION_DATA.questions[1];

    const { getByRole, getByText } = await renderWithProviders(<QuizQuestion />, {
        initialAtomValues: [
            [currentQuestionIndexAtom, 0],
            [answersAtom, []],
        ],
    });

    await getByRole("button", { name: firstOption.text }).click();
    await getByRole("button", { name: /next question/i }).click();

    await expect
        .element(getByText(secondQuestion.question))
        .toBeInTheDocument();
});

test("on the last question, the button reads 'See My Results' and navigates to /results", async () => {
    const lastIndex = QUESTION_DATA.questions.length - 1;
    const lastOption = QUESTION_DATA.questions[lastIndex].options[0];

    const { getByRole, getByText } = await renderWithProviders(
        <Routes>
            <Route path="/quiz" element={<QuizQuestion />} />
            <Route path="/results" element={<div>Results stand-in</div>} />
        </Routes>,
        {
            route: "/quiz",
            initialAtomValues: [
                [currentQuestionIndexAtom, lastIndex],
                [answersAtom, []],
            ],
        },
    );

    const seeResultsButton = getByRole("button", { name: /see my results/i });
    await expect.element(seeResultsButton).toBeVisible();

    await getByRole("button", { name: lastOption.text }).click();
    await seeResultsButton.click();

    await expect.element(getByText("Results stand-in")).toBeInTheDocument();
});
