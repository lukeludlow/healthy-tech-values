import { atom } from "jotai";
import {
    type ChoiceData,
    QUESTION_DATA,
    type QuestionData,
} from "@/components/quiz/question/questionData.ts";

export const isQuizInProgressAtom = atom<boolean>(false);

export const currentQuestionIndexAtom = atom<number>(0);

export const currentQuestionAtom = atom<QuestionData>((get) => {
    const index = get(currentQuestionIndexAtom);
    return QUESTION_DATA[index];
});

export const selectedChoicesAtom = atom<ChoiceData[]>([]);
