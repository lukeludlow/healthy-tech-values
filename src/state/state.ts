import { atom } from "jotai";
import {
    type ChoiceData,
    QUESTION_DATA,
    type QuestionData,
} from "@/components/quiz/question/questionData.ts";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<any>(() => sessionStorage);

export const isQuizInProgressAtom = atomWithStorage<boolean>(
    "isQuizInProgress",
    false,
    storage,
);

export const currentQuestionIndexAtom = atomWithStorage<number>(
    "currentQuestionIndex",
    0,
    storage,
);

export const currentQuestionAtom = atom<QuestionData>((get) => {
    const index = get(currentQuestionIndexAtom);
    return QUESTION_DATA[index];
});

export const selectedChoicesAtom = atom<ChoiceData[]>([]);
