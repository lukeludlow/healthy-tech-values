import { expect, test } from "vitest";
import QuizProgress from "@/components/quiz/progress/QuizProgress.tsx";
import { renderWithProviders } from "@/test/renderWithProviders.tsx";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import { QUESTION_DATA } from "@/data/questionData.ts";

const TOTAL_QUESTIONS = QUESTION_DATA.questions.length;

test("progress text and bar reflect the number of distinctly answered questions", async () => {
    const answers = QUESTION_DATA.questions
        .slice(0, 3)
        .map((q) => q.options[0]);

    const { getByText, getByRole } = await renderWithProviders(
        <QuizProgress />,
        {
            initialAtomValues: [
                [currentQuestionIndexAtom, 0],
                [answersAtom, answers],
            ],
        },
    );

    await expect
        .element(getByText(`3 of ${TOTAL_QUESTIONS} questions`))
        .toBeInTheDocument();
    await expect
        .element(getByRole("progressbar", { name: "Questions answered" }))
        .toHaveAttribute("aria-valuenow", "3");
});
