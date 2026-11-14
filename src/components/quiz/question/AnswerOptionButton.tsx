import { useAtom } from "jotai";
import { CheckIcon } from "@heroicons/react/16/solid";
import { answersAtom } from "@/state/state.ts";
import { type AnswerOption } from "@/data/questionData.ts";

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
        <button
            type="button"
            aria-pressed={isSelected}
            onClick={handleButtonClick}
            className="group flex items-start gap-3.5 w-full px-[18px] py-4 rounded-2xl border-[1.5px] border-primary/35 bg-white text-left text-[17px] leading-[1.45] text-ink cursor-pointer transition-colors duration-160 ease-gentle hover:border-primary aria-pressed:border-primary aria-pressed:bg-base-200 aria-pressed:shadow-[inset_0_0_0_1px_var(--color-primary)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
        >
            <span
                aria-hidden="true"
                className="grid place-items-center shrink-0 size-[22px] mt-px rounded-[7px] border-[1.5px] border-primary bg-white text-transparent transition-colors duration-160 group-aria-pressed:bg-primary group-aria-pressed:text-white"
            >
                <CheckIcon className="size-[15px]" />
            </span>
            <span>{option.text}</span>
        </button>
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
