import { useEffect, useState } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
    CheckIcon,
    ClipboardDocumentIcon,
    EnvelopeIcon,
    XMarkIcon,
} from "@heroicons/react/16/solid";
import { focusRing, pillLink, textLink } from "@/components/ui/styles.ts";

export const CONTACT_EMAIL = "help@healthytechbalance.com";

const COPIED_MS = 2000;

/**
 * Floating contact tab, fixed to the bottom-right corner on every page.
 * A held surface (Sheet shadow) so it stays legible over white, light green
 * and the green Quiz Callout band.
 */
export default function ContactTab() {
    return (
        <Popover className="fixed z-40 right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] md:right-6 md:bottom-6 print:hidden">
            {({ open }) => (
                <>
                    <PopoverButton
                        aria-label={
                            open ? "Close contact details" : "Contact Jessica"
                        }
                        className={`inline-flex items-center justify-center gap-2 size-13 sm:size-auto sm:min-h-13 sm:px-5 rounded-full border-[1.5px] border-primary bg-white text-[15px] font-semibold text-ink shadow-sheet cursor-pointer transition-colors duration-160 ease-gentle hover:bg-base-200 data-open:bg-base-200 ${focusRing}`}
                    >
                        {open ? (
                            <XMarkIcon
                                aria-hidden="true"
                                className="size-5 text-primary"
                            />
                        ) : (
                            <EnvelopeIcon
                                aria-hidden="true"
                                className="size-5 text-primary"
                            />
                        )}
                        <span aria-hidden="true" className="hidden sm:inline">
                            Contact
                        </span>
                    </PopoverButton>
                    <PopoverPanel
                        anchor={{ to: "top end", gap: 8, padding: 16 }}
                        transition
                        className="z-50 w-[min(320px,calc(100vw-32px))] p-5 rounded-2xl bg-white shadow-sheet ring-1 ring-primary/20 focus:outline-none origin-bottom-right transition duration-160 ease-gentle data-closed:scale-95 data-closed:opacity-0 motion-reduce:transition-none"
                    >
                        <ContactDetails />
                    </PopoverPanel>
                </>
            )}
        </Popover>
    );
}

function ContactDetails() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = window.setTimeout(() => setCopied(false), COPIED_MS);
        return () => window.clearTimeout(id);
    }, [copied]);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(CONTACT_EMAIL);
            setCopied(true);
        } catch {
            // Clipboard unavailable: the address stays visible and selectable.
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <p className="text-[17px] font-[650] leading-[1.35] tracking-[-0.01em] text-ink text-balance">
                    Questions? I'd love to hear from you.
                </p>
                <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className={`self-start select-all text-[17px] ${textLink}`}
                >
                    {CONTACT_EMAIL}
                </a>
            </div>
            <button
                type="button"
                onClick={copyEmail}
                className={`self-start ${pillLink}`}
            >
                {copied ? (
                    <CheckIcon
                        aria-hidden="true"
                        className="size-4 text-primary"
                    />
                ) : (
                    <ClipboardDocumentIcon
                        aria-hidden="true"
                        className="size-4 text-primary"
                    />
                )}
                {copied ? "Copied" : "Copy email"}
            </button>
            <span aria-live="polite" className="sr-only">
                {copied ? "Email address copied" : ""}
            </span>
        </div>
    );
}
