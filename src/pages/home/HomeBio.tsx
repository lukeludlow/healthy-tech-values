export default function HomeBio() {
    return (
        <section
            aria-labelledby="meet-jessica"
            className="bg-base-200 py-16 px-6"
        >
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 md:flex-row md:items-center">
                <img
                    src="/images/Jessica.webp"
                    alt="Jessica Ludlow"
                    width={399}
                    height={533}
                    loading="lazy"
                    className="w-48 md:w-64 shrink-0 aspect-[3/4] object-cover rounded-2xl shadow-md"
                />
                <div className="text-center md:text-left">
                    <p className="text-primary font-semibold mb-2">Who I am</p>
                    <h2 id="meet-jessica" className="text-3xl font-bold mb-2">
                        Hi, I'm Jessica Ludlow
                    </h2>
                    <p className="text-gray-600 mb-6">
                        <span className="whitespace-nowrap">
                            Screen Addiction Treatment & Prevention
                        </span>{" "}
                        ·{" "}
                        <span className="whitespace-nowrap">
                            Director, Accepted Therapy
                        </span>
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        My husband of 31 years and I are raising four beautiful,
                        neurodivergent children. For nearly three decades, I've
                        been a fierce advocate for better-quality mental health
                        access.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        I studied Psychology and Nursing at UNR and BYU, and
                        I've traveled the world working in the medical,
                        educational, and tech fields. Today I specialize in
                        screen addiction treatment and prevention, and as
                        director of Accepted Therapy I help others find healing
                        from traumas and addictions.
                    </p>
                    <p className="text-lg text-gray-700">
                        I'm based in central Utah and travel nationally to give
                        presentations for youth, parents, and young adults. I
                        was recently featured in <em>Women to Know in Utah</em>.
                    </p>
                </div>
            </div>
        </section>
    );
}
