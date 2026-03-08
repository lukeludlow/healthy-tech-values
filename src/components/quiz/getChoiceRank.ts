import { type AnswerOption, QUESTION_DATA } from "@/data/questionData.ts";

export function getChoiceRank(
    choice: AnswerOption,
    selectedChoices: AnswerOption[],
) {
    const questionChoices = QUESTION_DATA.questions
        .filter((question) => question.options.includes(choice))
        .flatMap((question) => question.options);

    const selectedIndex = selectedChoices
        .filter((selectedChoice) => questionChoices.includes(selectedChoice))
        .findIndex((selectedChoice) => selectedChoice.text === choice.text);

    return selectedIndex >= 0 ? selectedIndex + 1 : null;
}
