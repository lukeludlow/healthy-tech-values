import QuizBody from "@/components/quiz/QuizBody.tsx";
import Seo from "@/components/seo/Seo.tsx";

export default function QuizPage() {
    return (
        <div className={"flex flex-col flex-1 h-full min-h-0"}>
            <Seo
                title="Core Values Quiz | Healthy Tech Balance"
                description="Take our free 5-minute quiz to discover which core values matter most to you and get personalized guidance on building healthier tech habits."
                path="/quiz"
            />
            <QuizBody />
        </div>
    );
}
