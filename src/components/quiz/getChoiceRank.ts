import {
    type ChoiceData,
    QUESTION_DATA,
} from "@/components/quiz/question/questionData.ts";

export function getChoiceRank(
    choice: ChoiceData,
    selectedChoices: ChoiceData[],
) {
    const questionChoices = QUESTION_DATA.filter((question) =>
        question.choices.includes(choice),
    ).flatMap((question) => question.choices);

    const selectedIndex = selectedChoices
        .filter((selectedChoice) => questionChoices.includes(selectedChoice))
        .findIndex((selectedChoice) => selectedChoice.text === choice.text);

    return selectedIndex >= 0 ? selectedIndex + 1 : null;
}
