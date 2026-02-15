export type QuestionData = {
    scenario: ScenarioData;
    choices: ChoiceData[];
};

export type ScenarioData = {
    title: string;
    body: string;
};

export type ChoiceData = {
    healthyTechValue: string;
    text: string;
};

// export enum HealthyTechValue {
//     Connection = "Connection",
//     Order = "Order",
//     Safety = "Safety",
//     Peace = "Peace",
//     Growth = "Growth",
// }

export const QUESTION_DATA: QuestionData[] = [
    {
        scenario: {
            title: "Tuesday Night Crunch",
            body: "It’s 6:00 PM. Homework is happening, dinner is being prepped, and the house is loud. Regarding technology in this moment, which action feels most aligned with your ideal family culture?",
        },
        choices: [
            {
                healthyTechValue: "Connection",
                text: "All phones are put in a basket so we can talk while we eat, even if it means missing urgent messages.",
            },
            {
                healthyTechValue: "Order",
                text: "I am using my phone to update the shared family calendar and order groceries so the rest of the week runs smoothly.",
            },
            {
                healthyTechValue: "Safety",
                text: "I am actively monitoring my teenager’s screen as they use the computer to ensure they are safe online.",
            },
            {
                healthyTechValue: "Peace",
                text: 'The house is tech-free and quiet; we are embracing the "slow down," even if it feels a bit boring or chaotic.',
            },
            {
                healthyTechValue: "Growth",
                text: "We are using a device together to watch a tutorial on how to solve a math problem or learn a new recipe.",
            },
        ],
    },
    {
        scenario: {
            title: "Saturday Afternoon",
            body: "You finally have two hours of downtime with the kids. How would you ideally prefer technology to fit into this block of time?",
        },
        choices: [
            {
                healthyTechValue: "Peace",
                text: "We leave all devices at home and go for a hike or walk to completely disconnect from the world.",
            },
            {
                healthyTechValue: "Connection",
                text: "We use technology to FaceTime grandparents or look at old family photos together to strengthen bonds.",
            },
            {
                healthyTechValue: "Safety",
                text: "I spend this time auditing the kids' apps and adjusting privacy settings to ensure their digital environment is clean.",
            },
            {
                healthyTechValue: "Growth",
                text: "We watch a high-quality documentary or listen to an uplifting podcast/audiobook together.",
            },
            {
                healthyTechValue: "Order",
                text: "I use this quiet time to clear out my inbox and organize digital photos so I don't feel overwhelmed next week.",
            },
        ],
    },
    {
        scenario: {
            title: "Waiting Room",
            body: "You are waiting at the dentist or in the carpool line with a restless child. How do you handle the device in your pocket?",
        },
        choices: [
            {
                healthyTechValue: "Growth",
                text: "I hand them the phone, but only if they play an educational game that builds skills (like chess or math).",
            },
            {
                healthyTechValue: "Connection",
                text: 'I keep the phone away and use the boredom as a chance to talk or play "I Spy" with them.',
            },
            {
                healthyTechValue: "Order",
                text: "I let them use the phone so I can quickly reply to texts and coordinate rides for the other siblings.",
            },
            {
                healthyTechValue: "Safety",
                text: "I don't allow the phone because I am worried about what they might accidentally click on in a public setting.",
            },
            {
                healthyTechValue: "Peace",
                text: "I keep the phone away to teach them (and myself) the value of patience and being comfortable with silence.",
            },
        ],
    },
];
