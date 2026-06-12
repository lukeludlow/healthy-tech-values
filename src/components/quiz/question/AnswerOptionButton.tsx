import { useAtom } from "jotai";
import { answersAtom } from "@/state/state.ts";
import { type AnswerOption } from "@/data/questionData.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";

type Props = {
    option: AnswerOption;
};

export default function AnswerOptionButton({ option }: Props) {
    const [selectedChoices, setSelectedChoices] =
        useAtom<AnswerOption[]>(answersAtom);

    const isSelected = selectedChoices.some(
        (selectedChoice) => selectedChoice.text === option.text,
    );

    return (
        <Button
            color={isSelected ? "primary" : undefined}
            outline={!isSelected || undefined}
            className="rounded-2xl h-auto w-full p-3"
            onClick={handleButtonClick}
        >
            <span className={"px-5 py-2"}>{option.text}</span>
        </Button>
    );

    function handleButtonClick() {
        if (isSelected) {
            setSelectedChoices((prev) =>
                prev.filter((c) => c.text !== option.text),
            );
        } else {
            setSelectedChoices((prev) => [...prev, option]);
        }
    }
}
