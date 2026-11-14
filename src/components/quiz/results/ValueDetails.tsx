import { VALUE_GOALS } from "@/data/goalsData.ts";

type Props = {
    value: string;
    /** True when the goals sit inside a light green (top value) row. */
    onTint?: boolean;
};

export default function ValueDetails({ value, onTint = false }: Props) {
    const goals = VALUE_GOALS[value] ?? [];
    return (
        <ul className="grid gap-2 sm:grid-cols-2">
            {goals.map((goal) => (
                <li
                    key={goal}
                    className={`px-3.5 py-3 rounded-xl text-[15px] leading-[1.45] text-ink ${
                        onTint ? "bg-white" : "bg-base-200"
                    }`}
                >
                    {goal}
                </li>
            ))}
        </ul>
    );
}
