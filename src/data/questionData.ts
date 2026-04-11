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
        "Read each question and choose the single answer that best describes your honest feelings or desires. There are no right or wrong answers.",
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
            question: "What is your preferred way to recharge your energy?",
            options: [
                {
                    text: "Engaging in prayer, faith, or quiet contemplation.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Focusing on my physical fitness and eating well.",
                    value: "Health & Harmony",
                },
                {
                    text: "Diving into a hobby I am deeply passionate about.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Taking a solo trip to enjoy complete self-sufficiency.",
                    value: "Independence & Freedom",
                },
            ],
        },

        {
            id: 2,
            question:
                "How do you prefer to spend a free weekend with your family?",
            options: [
                {
                    text: "Trying an exciting new activity we have never done before.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Participating in a religious or cultural community event.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Doing physical activities like hiking or playing sports.",
                    value: "Health & Harmony",
                },
                {
                    text: "Volunteering for a local charity or community project.",
                    value: "Contribution & Service",
                },
            ],
        },
        {
            id: 3,
            question: "What makes you feel most fulfilled in your daily life?",
            options: [
                {
                    text: "Reaching a difficult milestone or gaining recognition.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Knowing I acted honestly and responsibly.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Having the autonomy to make my own choices.",
                    value: "Independence & Freedom",
                },
                {
                    text: "Spending quality time with my loved ones.",
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
                    text: "Protecting my financial stability and future predictability.",
                    value: "Stability & Security",
                },
                {
                    text: "Doing what is morally right and fair.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Choosing the path that offers the most personal growth.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Maintaining my independence from outside interference.",
                    value: "Independence & Freedom",
                },
            ],
        },
        {
            id: 5,
            question: "How should technology be used in your life?",
            options: [
                {
                    text: "To achieve excellence and master complex subjects.",
                    value: "Growth & Mastery",
                },
                {
                    text: "To learn about my cultural heritage and traditions.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "To foster empathy and collaborate with peers.",
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
            question: "What do you value most in a long-term career?",
            options: [
                {
                    text: "Knowing my job is safe and my income is predictable.",
                    value: "Stability & Security",
                },
                {
                    text: "Climbing the ladder and gaining authority in my field.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Making a positive impact on other people's lives.",
                    value: "Contribution & Service",
                },
                {
                    text: "Having the flexibility to set my own schedule.",
                    value: "Independence & Freedom",
                },
            ],
        },
        {
            id: 7,
            question: "How do you approach financial planning?",
            options: [
                {
                    text: "Building a safety net to protect against emergencies.",
                    value: "Stability & Security",
                },
                {
                    text: "Investing to afford a luxurious and successful lifestyle.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Achieving enough wealth to never rely on anyone else.",
                    value: "Independence & Freedom",
                },
                {
                    text: "Setting aside money to donate to important causes.",
                    value: "Contribution & Service",
                },
            ],
        },
        {
            id: 8,
            question:
                "What is the best way to handle a conflict within the family?",
            options: [
                {
                    text: "Restoring peace and calm as quickly as possible.",
                    value: "Health & Harmony",
                },
                {
                    text: "Having a frank, honest discussion about the issue.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Deferring to the wisdom of elder family members.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Showing empathy and forgiving each other.",
                    value: "Connection & Love",
                },
            ],
        },
        {
            id: 9,
            question: "When traveling for vacation, what do you look for?",
            options: [
                {
                    text: "Thrilling experiences and going off the beaten path.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Relaxing at a spa or wellness retreat to recharge.",
                    value: "Health & Harmony",
                },
                {
                    text: "Visiting museums and learning about local history.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Creating lasting memories with my family and friends.",
                    value: "Connection & Love",
                },
            ],
        },
        {
            id: 10,
            question: "How do you evaluate the success of a personal project?",
            options: [
                {
                    text: "By how perfectly I executed the necessary skills.",
                    value: "Growth & Mastery",
                },
                {
                    text: "By how many people praised or recognized my work.",
                    value: "Achievement & Influence",
                },
                {
                    text: "By how much inner peace and satisfaction it brought me.",
                    value: "Health & Harmony",
                },
                {
                    text: "By how much it helped my community or team.",
                    value: "Contribution & Service",
                },
            ],
        },
        {
            id: 11,
            question: "What role should social media play in your life?",
            options: [
                {
                    text: "A tool to build influence and a strong personal brand.",
                    value: "Achievement & Influence",
                },
                {
                    text: "A way to stay in touch with distant relatives and friends.",
                    value: "Connection & Love",
                },
                {
                    text: "A resource for discovering new ideas and learning.",
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
                "What principle do you most want to instill in your children?",
            options: [
                {
                    text: "Always tell the truth and take responsibility for your actions.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Be brave and never fear trying new things.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "Show empathy and care for everyone you meet.",
                    value: "Connection & Love",
                },
                {
                    text: "Work hard to become successful and powerful.",
                    value: "Achievement & Influence",
                },
            ],
        },
        {
            id: 13,
            question: "How do you prefer to manage your household routines?",
            options: [
                {
                    text: "With strict discipline and orderly schedules.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "With flexibility so we can change plans freely.",
                    value: "Independence & Freedom",
                },
                {
                    text: "By following customs passed down from our parents.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "By utilizing tools for maximum efficiency.",
                    value: "Growth & Mastery",
                },
            ],
        },
        {
            id: 14,
            question:
                "When choosing a neighborhood to live in, what is the priority?",
            options: [
                {
                    text: "Low crime rates and a predictable environment.",
                    value: "Stability & Security",
                },
                {
                    text: "A tight-knit community where neighbors help each other.",
                    value: "Contribution & Service",
                },
                {
                    text: "High-end amenities and an exclusive reputation.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Access to parks, trails, and wellness centers.",
                    value: "Health & Harmony",
                },
            ],
        },
        {
            id: 15,
            question: "How do you respond to unexpected changes in your plans?",
            options: [
                {
                    text: "I try to regain control of the situation immediately.",
                    value: "Stability & Security",
                },
                {
                    text: "I embrace the variety and look for a new adventure.",
                    value: "Adventure & Exploration",
                },
                {
                    text: "I focus on keeping my emotions balanced and calm.",
                    value: "Health & Harmony",
                },
                {
                    text: "I treat it as a challenge to test my problem-solving skills.",
                    value: "Growth & Mastery",
                },
            ],
        },
        {
            id: 16,
            question:
                "What do you feel is the most important aspect of a romantic relationship?",
            options: [
                {
                    text: "Complete transparency and unwavering trust.",
                    value: "Integrity & Ethics",
                },
                {
                    text: "Deep affection and emotional intimacy.",
                    value: "Connection & Love",
                },
                {
                    text: "Supporting each other's ambitions and career goals.",
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
                    text: "Achieving significant wealth and public recognition.",
                    value: "Achievement & Influence",
                },
                {
                    text: "Remaining faithful to my religious or spiritual beliefs.",
                    value: "Tradition & Spirituality",
                },
                {
                    text: "Constantly developing my intellect and wisdom.",
                    value: "Growth & Mastery",
                },
            ],
        },
        {
            id: 18,
            question: "What kind of apps do you use most frequently?",
            options: [
                {
                    text: "Banking and home security monitors.",
                    value: "Stability & Security",
                },
                {
                    text: "Messaging apps to chat with loved ones.",
                    value: "Connection & Love",
                },
                {
                    text: "Educational platforms and skill-building tools.",
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
            question:
                "When adopting a new technology at home, what is your primary goal?",
            options: [
                {
                    text: "Ensuring our home network is safe and reliable.",
                    value: "Stability & Security",
                },
                {
                    text: "Bringing the family together for shared activities.",
                    value: "Connection & Love",
                },
                {
                    text: "Learning new skills and expanding our capabilities.",
                    value: "Growth & Mastery",
                },
                {
                    text: "Automating tasks to give us more free time.",
                    value: "Independence & Freedom",
                },
            ],
        },
    ],
};
