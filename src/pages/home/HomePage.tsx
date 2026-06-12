import HomeHero from "@/pages/home/HomeHero.tsx";
import HomeSections from "@/pages/home/HomeSections.tsx";

export default function HomePage() {
    return (
        <div className={"w-full"}>
            <HomeHero />
            <HomeSections />
        </div>
    );
}
