import clsx from "clsx";
import { useAtom } from "jotai";
import { answersAtom, currentQuestionIndexAtom } from "@/state/state.ts";
import {
    type AnswerOption,
    QUESTION_DATA,
    type QuestionData,
} from "@/data/questionData.ts";

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
        <div
            className={clsx(
                "btn",
                { "btn-primary": isSelected },
                { "btn-soft": !isSelected },
                "h-auto rounded-full p-3 w-full indicator",
            )}
            onClick={handleButtonClick}
        >
            <span className={"px-5"}>{option.text}</span>
        </div>
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
