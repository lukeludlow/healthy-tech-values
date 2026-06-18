const SITE_URL = "https://www.healthytechbalance.org";
const SITE_NAME = "Healthy Tech Balance";

export interface SeoProps {
    title: string;
    description: string;
    path: string;
    noindex?: boolean;
    jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function Seo({
    title,
    description,
    path,
    noindex = false,
    jsonLd,
}: SeoProps) {
    const url = `${SITE_URL}${path}`;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />
            <meta
                name="robots"
                content={noindex ? "noindex,follow" : "index,follow"}
            />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </>
    );
}
