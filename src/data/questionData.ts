export type QuizData = {
    instructions: string;
    valueCategories: string[];
    questions: QuestionData[];
};

export type QuestionData = {
    id: number;
    question: string;
    options: AnswerOption[];
};

export type AnswerOption = {
    text: string;
    value: string; // TODO maybe healthy tech value enum?
};

export const QUESTION_DATA: QuizData = {
    instructions:
        "Read each question and choose all answers that best describe your honest feelings or desires. There are no right or wrong answers.",
    valueCategories: [
        "Stability & Security",
        "Health & Harmony",
        "Achievement & Influence",
        "Growth & Mastery",
        "Adventure & Exploration",
        "Connection & Love",
        "Integrity & Ethics",
        "Independence & Freedom",
        "Contribution & Service",
        "Tradition & Spirituality",
    ],
    questions: [
        {
            id: 1,
            question: "How do you recharge your energy?",
            options: [
                {
                    text: "Quiet contemplation, meditation, or prayer.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Taking care of my body with a nap, a snack, or exercise.",
                    value: "Health & Harmony",
                },
                {
                    text: "Spending time on a hobby.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Working on a project or repair.",
                    value: "Independence & Freedom",
                },
            ],
        },

        {
            id: 2,
            question: "What would you want to do with a free weekend?",
            options: [
                {
                    text: "Try something new.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Participate in a community event.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Do something physical like hiking for playing sports.",
                    value: "Health & Harmony",
                },
                {
                    text: "Volunteer for a local charity or community project.",
                    value: "Contribution & Service",
                },
            ],
        },
        {
            id: 3,
            question: "What makes you feel most fulfilled?",
            options: [
                {
                    text: "Accomplishing something hard.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Being honest and/or responsible.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Having the autonomy to make my own choices.",
                    value: "Independence & Freedom",
                },
                {
                    text: "Spending quality time with the people I love.",
                    value: "Connection & Love",
                },
            ],
        },
        {
            id: 4,
            question:
                "When facing a major decision, what is the most important factor?",
            options: [
                {
                    text: "My financial future.",
                    value: "Stability & Security",
                },
                {
                    text: "Doing what's morally right and fair.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Opportunity for personal growth.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Maintaining independence.",
                    value: "Independence & Freedom",
                },
            ],
        },
        {
            id: 5,
            question: "How do you WANT technology to be used in your life?",
            options: [
                {
                    text: "To help figure out how to do specific tasks.",
                    value: "Growth & Mastery",
                },
                {
                    text: "To learn about my cultural heritage and traditions.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "To collaborate with peers and foster empathy.",
                    value: "Connection & Love",
                },
                {
                    text: "To explore the world and satisfy my curiosity.",
                    value: "Adventure & Exploration",
                },
            ],
        },
        {
            id: 6,
            question: "What do you value most in a career?",
            options: [
                {
                    text: "Predictable income.",
                    value: "Stability & Security",
                },
                {
                    text: "Being really good at it.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Making a positive impact on other people's lives.",
                    value: "Contribution & Service",
                },
                {
                    text: "Being able to set my own schedule.",
                    value: "Independence & Freedom",
                },
            ],
        },
        {
            id: 7,
            question: "How do you approach financial planning?",
            options: [
                {
                    text: "Being ready for emergencies.",
                    value: "Stability & Security",
                },
                {
                    text: "Being able to afford nice things.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Being completely independent.",
                    value: "Independence & Freedom",
                },
                {
                    text: "Being able to donate to important causes.",
                    value: "Contribution & Service",
                },
            ],
        },
        {
            id: 8,
            question: "How do you prefer to handle conflict?",
            options: [
                {
                    text: "Restore peace and calm as quickly as possible.",
                    value: "Health & Harmony",
                },
                {
                    text: "Have a frank, honest discussion about the issue.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Defer to the wisdom of experts or elders.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Show empathy and forgiveness.",
                    value: "Connection & Love",
                },
            ],
        },
        {
            id: 9,
            question: "Your dream vacation would include...",
            options: [
                {
                    text: "Exciting adventures.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Relaxing at a spa.",
                    value: "Health & Harmony",
                },
                {
                    text: "Visiting a museum.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Creating memories with loved ones.",
                    value: "Connection & Love",
                },
            ],
        },
        {
            id: 10,
            question: "A project is successful if...",
            options: [
                {
                    text: "It was executed perfectly.",
                    value: "Growth & Mastery",
                },
                {
                    text: "People recognized and appreciated my work.",
                    value: "Achievement & Influence",
                },
                {
                    text: "It brought me satisfaction and inner peace.",
                    value: "Health & Harmony",
                },
                {
                    text: "It helped my team or community.",
                    value: "Contribution & Service",
                },
            ],
        },
        {
            id: 11,
            question:
                "What role do you want social media to play in your life?",
            options: [
                {
                    text: "A tool to build influence and express myself.",
                    value: "Achievement & Influence",
                },
                {
                    text: "A way to connect with distant friends and family.",
                    value: "Connection & Love",
                },
                {
                    text: "A resource for discovering new ideas, skills, and perspectives.",
                    value: "Growth & Mastery",
                },
                {
                    text: "I limit it strictly to protect my privacy.",
                    value: "Independence & Freedom",
                },
            ],
        },
        {
            id: 12,
            question:
                "What principles would you want to instill most in your children?",
            options: [
                {
                    text: "Always tell the truth and take responsibility for your actions.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Be brave and willing to try new things.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Show empathy and care for others.",
                    value: "Connection & Love",
                },
                {
                    text: "Work hard to become successful.",
                    value: "Achievement & Influence",
                },
            ],
        },
        {
            id: 13,
            question: "How do you prefer to manage your household routines?",
            options: [
                {
                    text: "With regular, organized schedules.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "With flexibility so we can adapt to other plans.",
                    value: "Independence & Freedom",
                },
                {
                    text: "Exactly how our parents did.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "By utilizing the best tools for max efficiency.",
                    value: "Growth & Mastery",
                },
            ],
        },
        {
            id: 14,
            question: "When choosing a place to live, my ideal neighborhood...",
            options: [
                {
                    text: "Has the lowest crime rates.",
                    value: "Stability & Security",
                },
                {
                    text: "Is a tight-knit community.",
                    value: "Contribution & Service",
                },
                {
                    text: "Has high-end amenities and reputation.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Is near parks, trails, and gyms.",
                    value: "Health & Harmony",
                },
            ],
        },
        {
            id: 15,
            question: "When plans change unexpectedly, I...",
            options: [
                {
                    text: "Try to regain control of the situation immediately.",
                    value: "Stability & Security",
                },
                {
                    text: "Embrace the variety and look for a new adventure.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Focus on staying calm and balanced.",
                    value: "Health & Harmony",
                },
                {
                    text: "Treat it as a problem-solving skill builder.",
                    value: "Growth & Mastery",
                },
            ],
        },
        {
            id: 16,
            question:
                "In a romantic relationship, the most important thing is...",
            options: [
                {
                    text: "Complete transparency and trust.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Deep affection and emotional intimacy.",
                    value: "Connection & Love",
                },
                {
                    text: "Supporting each other's ambitions and goals.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Respecting each other's need for personal space.",
                    value: "Independence & Freedom",
                },
            ],
        },
        {
            id: 17,
            question: "How do you define a life well-lived?",
            options: [
                {
                    text: "Leaving behind a legacy of helping others.",
                    value: "Contribution & Service",
                },
                {
                    text: "Achieving significant wealth, influence, or recognition.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Remaining faithful to my religious or spiritual beliefs.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Continually developing my intellect and wisdom.",
                    value: "Growth & Mastery",
                },
            ],
        },
        {
            id: 18,
            question: "What kind of apps do you use most?",
            options: [
                {
                    text: "Banking and home security.",
                    value: "Stability & Security",
                },
                {
                    text: "Communicating with loved ones.",
                    value: "Connection & Love",
                },
                {
                    text: "Educational and skill-building.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Fitness trackers and meditation guides.",
                    value: "Health & Harmony",
                },
            ],
        },
        {
            id: 19,
            question: "How do you prefer to solve a difficult problem?",
            options: [
                {
                    text: "By collaborating with a team to find a fair solution.",
                    value: "Contribution & Service",
                },
                {
                    text: "By relying on my own logical thinking and expertise.",
                    value: "Growth & Mastery",
                },
                {
                    text: "By looking at how things were done in the past.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "By experimenting with unusual and creative approaches.",
                    value: "Adventure & Exploration",
                },
            ],
        },
        {
            id: 20,
            question: "When adopting new tech at home, my primary goal is...",
            options: [
                {
                    text: "Ensuring my systems/networks are safe and reliable.",
                    value: "Stability & Security",
                },
                {
                    text: "Bringing people together for shared activities.",
                    value: "Connection & Love",
                },
                {
                    text: "Learning new skills and expanding capabilities.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Automating tasks to give me more free time.",
                    value: "Independence & Freedom",
                },
            ],
        },
    ],
};
