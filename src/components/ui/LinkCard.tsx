import ExternalArrow from "@/components/ui/ExternalArrow.tsx";
import { focusRing } from "@/components/ui/styles.ts";

export type LinkCardProps = {
    name: string;
    url: string;
    description: string;
    /** Small label shown above the name, e.g. "Author's Profile" or "Podcast". */
    tag?: string;
    /** Outline the card in green to mark it as featured. */
    highlighted?: boolean;
    extraUrl?: string;
    extraLabel?: string;
    /** "white" cards sit on light green; "tint" cards sit on white. */
    tone?: "white" | "tint";
};

/** A card for an outside resource: the name is the link. */
export default function LinkCard({
    name,
    url,
    description,
    tag,
    highlighted = false,
    extraUrl,
    extraLabel,
    tone = "white",
}: LinkCardProps) {
    const surface = tone === "white" ? "bg-white" : "bg-base-200";
    const tagSurface = tone === "white" ? "bg-base-200" : "bg-white";

    return (
        <div
            className={`grid content-start gap-1.5 px-[22px] py-5 rounded-[20px] ${surface} ${
                highlighted
                    ? "shadow-[inset_0_0_0_2px_var(--color-primary)]"
                    : ""
            }`}
        >
            {tag && (
                <span
                    className={`justify-self-start mb-1 px-2.5 py-[3px] rounded-full text-[13px] font-[650] text-ink ${tagSurface}`}
                >
                    {tag}
                </span>
            )}
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`justify-self-start rounded-[3px] text-lg font-[650] leading-[1.3] text-ink underline decoration-primary/50 decoration-[1.5px] underline-offset-[5px] hover:decoration-primary hover:decoration-[2.5px] ${focusRing}`}
            >
                {name}
                <ExternalArrow />
            </a>
            <p className="text-base leading-[1.55] text-ink-muted">
                {description}
            </p>
            {extraUrl && extraLabel && (
                <a
                    href={extraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`justify-self-start mt-0.5 rounded-[3px] text-[15px] font-semibold text-ink underline decoration-primary decoration-[1.5px] underline-offset-4 hover:decoration-[2.5px] ${focusRing}`}
                >
                    {extraLabel}
                    <ExternalArrow className="size-[13px]" />
                </a>
            )}
        </div>
    );
}
