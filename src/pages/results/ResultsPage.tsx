import Results from "@/components/quiz/results/Results.tsx";
import Seo from "@/components/seo/Seo.tsx";

export default function ResultsPage() {
    return (
        <div className="flex flex-col flex-1 h-full min-h-0">
            <Seo
                title="Your Core Values Results | Healthy Tech Balance"
                description="View your personalized core values quiz results and discover next steps for aligning your technology use with what matters most to you."
                path="/results"
                noindex
            />
            <Results />
        </div>
    );
}
