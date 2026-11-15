import { sectionHeading } from "@/components/ui/styles.ts";

const bodyText =
    "mb-3.5 last:mb-0 text-[17px] leading-[1.65] text-ink-muted text-pretty";

export default function HomeBio() {
    return (
        <section
            aria-labelledby="meet-jessica"
            className="bg-base-200 px-6 py-18"
        >
            <div className="max-w-[1040px] mx-auto flex flex-col items-center gap-10 md:flex-row md:gap-14">
                <picture className="contents">
                    <source
                        type="image/avif"
                        srcSet="/images/jessica-576.avif 576w, /images/jessica-864.avif 864w"
                        sizes="min(72vw, 288px)"
                    />
                    <img
                        src="/images/jessica-576.jpg"
                        srcSet="/images/jessica-576.jpg 576w, /images/jessica-864.jpg 864w"
                        sizes="min(72vw, 288px)"
                        alt="Jessica Ludlow"
                        width={576}
                        height={768}
                        loading="lazy"
                        decoding="async"
                        className="w-[min(72vw,288px)] h-auto aspect-[3/4] object-cover rounded-[20px] shadow-photo md:shrink-0"
                    />
                </picture>
                <div className="max-w-[62ch]">
                    <h2 id="meet-jessica" className={`mb-3 ${sectionHeading}`}>
                        Hi, I'm Jessica Ludlow
                    </h2>
                    <p className="mb-7 text-[15px] leading-normal text-ink-muted">
                        <span className="whitespace-nowrap">
                            Screen Addiction Treatment & Prevention
                        </span>{" "}
                        ·{" "}
                        <span className="whitespace-nowrap">
                            Director, Accepted Therapy
                        </span>
                    </p>
                    <p className="mb-5 text-[22px] font-medium leading-[1.45] text-ink text-pretty">
                        My husband of over 30 years and I are raising four
                        beautiful, neurodivergent children.
                    </p>
                    <p className={bodyText}>
                        For nearly three decades, I've been a fierce advocate
                        for better-quality mental health access. I studied
                        Psychology and Nursing at UNR and BYU, and I've traveled
                        the world working in the medical, educational, and tech
                        fields.
                    </p>
                    <p className={bodyText}>
                        Today I specialize in screen addiction treatment and
                        prevention, and as director of Accepted Therapy I help
                        others find healing from traumas and addictions. I'm
                        based in central Utah and travel nationally to give
                        presentations for youth, parents, and young adults. I
                        was recently featured in <em>Women to Know in Utah</em>.
                    </p>
                </div>
            </div>
        </section>
    );
}
