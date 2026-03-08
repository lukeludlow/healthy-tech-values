import QuizQuestion from "@/components/quiz/question/QuizQuestion.tsx";
import ProgressFooter from "@/components/quiz/progress/ProgressFooter.tsx";

export default function QuizBody() {
    return (
        <div className={"flex flex-col flex-1 justify-between min-h-0 h-full"}>
            <QuizQuestion />
            <ProgressFooter />
        </div>
    );
}
