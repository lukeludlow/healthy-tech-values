import { type ChoiceData } from "@/components/quiz/question/questionData.ts";
import clsx from "clsx";
import { useAtom } from "jotai";
import { selectedChoicesAtom } from "@/state/state.ts";
import { getChoiceRank } from "@/components/quiz/getChoiceRank.ts";

type Props = {
    choice: ChoiceData;
};

export default function ChoiceButton({ choice }: Props) {
    const [selectedChoices, setSelectedChoices] =
        useAtom<ChoiceData[]>(selectedChoicesAtom);

    const isSelected = selectedChoices.some(
        (selectedChoice) => selectedChoice.text === choice.text,
    );

    const rank: number | null = getChoiceRank(choice, selectedChoices);

    return (
        <div
            className={clsx(
                "btn",
                { "btn-primary": isSelected },
                { "btn-soft": !isSelected },
                "h-auto rounded-full px-5 py-2 w-full indicator",
            )}
            onClick={handleButtonClick}
        >
            {isSelected && (
                <span className="indicator-item indicator-start indicator-middle badge badge-ghost badge-primary ml-5">
                    {rank}
                </span>
            )}
            <span className={"px-5"}>{choice.text}</span>
        </div>
    );

    function handleButtonClick() {
        const nowSelectedStatus = !isSelected;
        if (nowSelectedStatus) {
            setSelectedChoices((prev) => [...prev, choice]);
        } else {
            setSelectedChoices((prev) =>
                prev.filter(
                    (selectedChoice) => selectedChoice.text !== choice.text,
                ),
            );
        }
    }
}
