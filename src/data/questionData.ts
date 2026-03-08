export type QuizData = {
    quizTitle: string;
    instructions: string;
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

// export enum HealthyTechValue {
//     Connection = "Connection",
//     Order = "Order",
//     Safety = "Safety",
//     Peace = "Peace",
//     Growth = "Growth",
// }

export const HEALTHY_TECH_VALUES = [
    {
        id: "Connection",
        description:
            "Love, family, friendship, compassion, loyalty, and acceptance.",
    },
    {
        id: "Well-being",
        description:
            "Peace, health, security, inner harmony, forgiveness, and certainty.",
    },
    {
        id: "Integrity",
        description:
            "Honesty, accountability, discipline, ethics, respect, and commitment.",
    },
    {
        id: "Growth",
        description:
            "Wisdom, meaningful work, contribution, success, and intelligence.",
    },
    {
        id: "Authenticity",
        description:
            "Tradition, religion, spirituality, uniqueness, and truthfulness.",
    },
    {
        id: "Autonomy",
        description:
            "Freedom, independence, privacy, control, and self-reliance.",
    },
    {
        id: "Joy",
        description:
            "Pleasure, creativity, curiosity, adventure, excitement, and passion.",
    },
];

export const QUESTION_DATA: QuizData = {
    quizTitle: "Healthy Tech Values Assessment",
    instructions:
        "Read each question and choose the single answer that best describes your honest feelings or desires. There are no right or wrong answers.",
    questions: [
        {
            id: 1,
            question:
                "When the internet goes down at home, what is your first thought?",
            options: [
                {
                    text: "We can finally talk and bond as a family.",
                    value: "Connection",
                },
                {
                    text: "I feel relieved to have some quiet time away from notifications.",
                    value: "Well-being",
                },
                {
                    text: "I can use this time to read a book or practice a skill.",
                    value: "Growth",
                },
                {
                    text: "We can go outside and find a fun physical activity.",
                    value: "Joy",
                },
            ],
        },
        {
            id: 2,
            question:
                "What bothers you most about excessive phone use at the dinner table?",
            options: [
                {
                    text: "It prevents us from having genuine, undistracted conversations.",
                    value: "Authenticity",
                },
                {
                    text: "It feels disrespectful and breaks the rules we agreed upon.",
                    value: "Integrity",
                },
                {
                    text: "It creates an emotional barrier between family members.",
                    value: "Connection",
                },
                {
                    text: "It shows a lack of self-control over digital habits.",
                    value: "Autonomy",
                },
            ],
        },
        {
            id: 3,
            question:
                "How do you most want to spend a completely free Saturday afternoon?",
            options: [
                {
                    text: "Hiking, exploring, or trying a new creative hobby offline.",
                    value: "Joy",
                },
                {
                    text: "Working on a personal project or learning something new.",
                    value: "Growth",
                },
                {
                    text: "Enjoying uninterrupted, quality time with my spouse or children.",
                    value: "Connection",
                },
                {
                    text: "Resting, meditating, and recharging away from all screens.",
                    value: "Well-being",
                },
            ],
        },
        {
            id: 4,
            question:
                "If you found out a family member was hiding their screen time, what would worry you most?",
            options: [
                {
                    text: "The dishonesty and lack of personal accountability.",
                    value: "Integrity",
                },
                {
                    text: "How the hidden content might be negatively affecting their mental health.",
                    value: "Well-being",
                },
                {
                    text: "The emotional distance and secrecy it creates in our relationship.",
                    value: "Connection",
                },
                {
                    text: "That they feel they cannot be their true selves around me.",
                    value: "Authenticity",
                },
            ],
        },
        {
            id: 5,
            question:
                "What is the main reason you want to reduce video game time in your home?",
            options: [
                {
                    text: "To encourage more independence and self-directed offline play.",
                    value: "Autonomy",
                },
                {
                    text: "To make room for real-world adventures and hands-on hobbies.",
                    value: "Joy",
                },
                {
                    text: "To establish better discipline and follow through on household chores.",
                    value: "Integrity",
                },
                {
                    text: "To lower stress levels and create a calmer, quieter household.",
                    value: "Well-being",
                },
            ],
        },
        {
            id: 6,
            question:
                "When you set boundaries around technology, what is your primary goal?",
            options: [
                {
                    text: "Protecting our family's privacy and independence from outside influence.",
                    value: "Autonomy",
                },
                {
                    text: "Staying true to our family's core traditions and spiritual beliefs.",
                    value: "Authenticity",
                },
                {
                    text: "Ensuring everyone is developing their real-world talents.",
                    value: "Growth",
                },
                {
                    text: "Keeping everyone physically rested and mentally healthy.",
                    value: "Well-being",
                },
            ],
        },
        {
            id: 7,
            question:
                "What feels most rewarding after a day of being completely unplugged?",
            options: [
                {
                    text: "Feeling deeply connected to the people around me.",
                    value: "Connection",
                },
                {
                    text: "Feeling a sense of peace and inner harmony.",
                    value: "Well-being",
                },
                {
                    text: "Knowing I had the self-control to stay offline all day.",
                    value: "Autonomy",
                },
                {
                    text: "Having experienced genuine fun and laughter without needing a screen.",
                    value: "Joy",
                },
            ],
        },
        {
            id: 8,
            question:
                "How do you approach your own smartphone use around your family?",
            options: [
                {
                    text: "I try to model honesty and take responsibility for my own habits.",
                    value: "Integrity",
                },
                {
                    text: "I put it away to ensure I am fully present and genuine with them.",
                    value: "Authenticity",
                },
                {
                    text: "I limit my use to make sure I am focusing on personal development.",
                    value: "Growth",
                },
                {
                    text: "I keep it out of sight so I can focus purely on loving my family.",
                    value: "Connection",
                },
            ],
        },
        {
            id: 9,
            question: "What concerns you most about social media?",
            options: [
                {
                    text: "It promotes fake, curated lifestyles instead of real life.",
                    value: "Authenticity",
                },
                {
                    text: "It steals precious time that could be used for learning or working.",
                    value: "Growth",
                },
                {
                    text: "It can cause anxiety, comparison, and disrupt inner peace.",
                    value: "Well-being",
                },
                {
                    text: "It tracks our data and takes away our personal privacy.",
                    value: "Autonomy",
                },
            ],
        },
        {
            id: 10,
            question:
                "When a spouse or child chooses a screen over a family outing, how do you react?",
            options: [
                {
                    text: "I feel sad that we are missing out on bonding time.",
                    value: "Connection",
                },
                {
                    text: "I feel frustrated that they are missing out on a real adventure.",
                    value: "Joy",
                },
                {
                    text: "I worry that they are becoming too dependent on the device.",
                    value: "Autonomy",
                },
                {
                    text: "I feel upset because we had agreed to spend time together.",
                    value: "Integrity",
                },
            ],
        },
        {
            id: 11,
            question:
                "What is the best way to handle tech-free zones in the house, like bedrooms?",
            options: [
                {
                    text: "They should be places of ultimate rest, safety, and security.",
                    value: "Well-being",
                },
                {
                    text: "They should be respected as a firm rule that everyone follows.",
                    value: "Integrity",
                },
                {
                    text: "They should encourage independent activities like reading or journaling.",
                    value: "Autonomy",
                },
                {
                    text: "They should be spaces where we can be our true selves without distraction.",
                    value: "Authenticity",
                },
            ],
        },
        {
            id: 12,
            question:
                "If an adult child living at home is constantly online, what is your main hope for them?",
            options: [
                {
                    text: "That they find a meaningful career or passion to pursue offline.",
                    value: "Growth",
                },
                {
                    text: "That they build strong, face-to-face friendships in the real world.",
                    value: "Connection",
                },
                {
                    text: "That they discover activities that bring them genuine happiness.",
                    value: "Joy",
                },
                {
                    text: "That they learn to manage their own time and responsibilities.",
                    value: "Integrity",
                },
            ],
        },
        {
            id: 13,
            question: "Why is it important to you to have screen-free meals?",
            options: [
                {
                    text: "To practice our family traditions and say grace together.",
                    value: "Authenticity",
                },
                {
                    text: "To show basic respect and listen to each other about our day.",
                    value: "Integrity",
                },
                {
                    text: "To focus on enjoying our food and relaxing our minds.",
                    value: "Joy",
                },
                {
                    text: "To foster love and empathy through meaningful conversation.",
                    value: "Connection",
                },
            ],
        },
        {
            id: 14,
            question: "How do you want your family to view technology?",
            options: [
                {
                    text: "As a tool for learning, creating, and advancing in life.",
                    value: "Growth",
                },
                {
                    text: "As something we have complete control over, rather than it controlling us.",
                    value: "Autonomy",
                },
                {
                    text: "As something that should never compromise our mental or physical health.",
                    value: "Well-being",
                },
                {
                    text: "As something we use honestly without hiding our activities from each other.",
                    value: "Integrity",
                },
            ],
        },
        {
            id: 15,
            question:
                "When you see someone successfully balance their tech use, what do you admire most?",
            options: [
                {
                    text: "Their self-reliance and complete freedom from digital addiction.",
                    value: "Autonomy",
                },
                {
                    text: "Their ability to stay grounded in their spiritual or personal truths.",
                    value: "Authenticity",
                },
                {
                    text: "Their rich, exciting life full of offline hobbies and adventures.",
                    value: "Joy",
                },
                {
                    text: "Their consistent pursuit of excellence and wisdom.",
                    value: "Growth",
                },
            ],
        },
        {
            id: 16,
            question: "What is the biggest benefit of doing a digital detox?",
            options: [
                {
                    text: "Rebuilding trust and intimacy with your loved ones.",
                    value: "Connection",
                },
                {
                    text: "Giving your mind and body a chance to truly heal.",
                    value: "Well-being",
                },
                {
                    text: "Remembering how to have pure fun in the physical world.",
                    value: "Joy",
                },
                {
                    text: "Reconnecting with your true, unfiltered self.",
                    value: "Authenticity",
                },
            ],
        },
        {
            id: 17,
            question:
                "If a teenager breaks a rule about late-night gaming, what is the core issue?",
            options: [
                {
                    text: "The lack of sleep that will inevitably affect their health.",
                    value: "Well-being",
                },
                {
                    text: "The breach of trust and breaking of established family rules.",
                    value: "Integrity",
                },
                {
                    text: "The loss of their ability to self-regulate and make independent choices.",
                    value: "Autonomy",
                },
                {
                    text: "The missed opportunity to study and prepare for their future.",
                    value: "Growth",
                },
            ],
        },
        {
            id: 18,
            question:
                "What is your favorite alternative to watching TV together in the evening?",
            options: [
                {
                    text: "Playing a loud, highly competitive, and fun board game.",
                    value: "Joy",
                },
                {
                    text: "Having a deep, genuine discussion about our beliefs and our day.",
                    value: "Authenticity",
                },
                {
                    text: "Working together on a puzzle or a household improvement project.",
                    value: "Growth",
                },
                {
                    text: "Cuddling on the couch and talking about our feelings.",
                    value: "Connection",
                },
            ],
        },
        {
            id: 19,
            question: "How should a family decide on their tech rules?",
            options: [
                {
                    text: "By focusing on what keeps everyone safe and emotionally secure.",
                    value: "Well-being",
                },
                {
                    text: "By agreeing on ethical guidelines that everyone respects and follows.",
                    value: "Integrity",
                },
                {
                    text: "By prioritizing rules that foster family unity and deep love.",
                    value: "Connection",
                },
                {
                    text: "By ensuring everyone has enough freedom to make their own choices.",
                    value: "Autonomy",
                },
            ],
        },
        {
            id: 20,
            question:
                "What do you hope your family will remember about your home in ten years?",
            options: [
                {
                    text: "The laughter, creativity, and incredible adventures we shared.",
                    value: "Joy",
                },
                {
                    text: "The strong morals, discipline, and honesty we practiced.",
                    value: "Integrity",
                },
                {
                    text: "The deep bonds and unwavering emotional support we had for each other.",
                    value: "Connection",
                },
                {
                    text: "The environment that helped everyone learn and reach their full potential.",
                    value: "Growth",
                },
            ],
        },
    ],
};
