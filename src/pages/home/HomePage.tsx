import Seo from "@/components/seo/Seo.tsx";
import {
    organizationJsonLd,
    websiteJsonLd,
} from "@/data/organizationJsonLd.ts";
import HomeBio from "@/pages/home/HomeBio.tsx";
import HomeHero from "@/pages/home/HomeHero.tsx";
import HomeSections from "@/pages/home/HomeSections.tsx";

export default function HomePage() {
    return (
        <div className={"w-full"}>
            <Seo
                title="Healthy Tech Balance | Discover Your Core Values"
                description="Take a free 5-minute quiz to uncover your core values and learn how to build a healthier relationship with technology in your family's daily life."
                path="/"
                jsonLd={[organizationJsonLd, websiteJsonLd]}
            />
            <HomeHero />
            <HomeBio />
            <HomeSections />
        </div>
    );
}
