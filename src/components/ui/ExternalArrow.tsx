import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

/**
 * The ↗ icon that marks a link to another site. A non-breaking space keeps
 * it on the same line as the link's last word.
 */
export default function ExternalArrow({
    className = "size-3.5",
}: {
    className?: string;
}) {
    return (
        <span className="whitespace-nowrap">
            {" "}
            <ArrowUpRightIcon
                aria-hidden="true"
                className={`inline -mt-0.5 text-primary ${className}`}
            />
        </span>
    );
}
