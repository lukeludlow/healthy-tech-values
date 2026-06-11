import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import {
    type AnswerOption,
    QUESTION_DATA,
    type QuestionData,
} from "@/data/questionData.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";

type Props = {
    option: AnswerOption;
};

export default function AnswerOptionButton({ option }: Props) {
    const [selectedChoices, setSelectedChoices] =
        useAtom<AnswerOption[]>(answersAtom);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useAtom(
        currentQuestionIndexAtom,
    );

    const isSelected = selectedChoices.some(
        (selectedChoice) => selectedChoice.text === option.text,
    );

    return (
        <Button
            color={isSelected ? "primary" : undefined}
            outline={!isSelected || undefined}
            className="rounded-full h-auto w-full p-3"
            onClick={handleButtonClick}
        >
            <span className={"px-5 py-2"}>{option.text}</span>
        </Button>
    );

    function handleButtonClick() {
        const isNowSelected = !isSelected;
        if (isNowSelected) {
            removeAnswersForQuestion();
            addChoice();
            goToNextQuestion();
        } else {
            removeChoice(option.text);
        }
    }

    function addChoice() {
        setSelectedChoices((prev) => [...prev, option]);
    }

    function goToNextQuestion() {
        setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }, 200);
    }

    function removeChoice(choiceText: string) {
        setSelectedChoices((prev) =>
            prev.filter((selectedChoice) => selectedChoice.text !== choiceText),
        );
    }

    function removeAnswersForQuestion() {
        const answerOptions: QuestionData = QUESTION_DATA.questions.find(
            (question) =>
                question.options.some(
                    (answerOption) => answerOption.text === option.text,
                ),
        )!;
        answerOptions.options.forEach((answerOption) => {
            removeChoice(answerOption.text);
        });
    }
}
