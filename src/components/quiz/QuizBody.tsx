import QuizProgress from "@/components/quiz/progress/QuizProgress.tsx";
import QuizQuestion from "@/components/quiz/question/QuizQuestion.tsx";

export default function QuizBody() {
    return (
        <div className="flex-1 min-h-full px-3 pt-6 pb-24 md:pt-12 bg-base-200">
            <div className="max-w-[680px] mx-auto px-5 py-7 md:px-11 md:py-10 rounded-[28px] bg-white shadow-sheet">
                <QuizProgress />
                <QuizQuestion />
            </div>
        </div>
    );
}
