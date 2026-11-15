import { Link } from "react-router";
import Seo from "@/components/seo/Seo.tsx";
import ExternalArrow from "@/components/ui/ExternalArrow.tsx";
import LinkCard from "@/components/ui/LinkCard.tsx";
import QuizCallout from "@/components/ui/QuizCallout.tsx";
import SectionJumpMenu from "@/pages/resources/SectionJumpMenu.tsx";
import {
    onGreenButton,
    pageHeading,
    sectionHeading,
    sectionIntro,
    textLink,
} from "@/components/ui/styles.ts";
import { useStartQuiz } from "@/state/useStartQuiz.ts";

const pageSections = [
    { id: "quizzes", title: "Quizzes & Self-Assessments" },
    { id: "organizations", title: "Organizations & Websites" },
    { id: "articles", title: "Articles" },
    { id: "books", title: "Books" },
    { id: "podcasts-and-documentaries", title: "Podcasts & Documentaries" },
    { id: "social-accounts", title: "Social Accounts to Follow" },
    { id: "framework", title: "The Healthy Tech Balance Framework" },
];

const orgs = [
    {
        name: "Screen Time Clinic",
        url: "https://screentimeclinic.com/jessica-ludlow/",
        description:
            "Resources, speaking, consulting, coaching, and guided detoxes.",
        highlighted: true,
        tag: "Author's Profile",
    },
    {
        name: "JoinRaise.org",
        url: "https://www.joinraise.com/",
        description:
            "Nonprofit. Parenting in a digital age — app and resources.",
    },
    {
        name: "ScreenStrong.com",
        url: "https://screenstrong.org/",
        description:
            "Nonprofit. Great resources tab, Facebook parent support group, and podcast.",
        extraUrl:
            "https://drive.google.com/file/d/1KKCETTmzi7JkRGsWsLCiL4cbEsefD3zf/view?usp=sharing",
        extraLabel: "Free 5-tip one-sheeter",
    },
    {
        name: "ScreenTimeNetwork.org",
        url: "https://screentimenetwork.org/",
        description:
            "Nonprofit. A vast library of science-based information and support for all ages and categories.",
    },
];

const schoolOrgs = [
    {
        name: "EverySchool.org",
        url: "https://www.everyschool.org/",
        description:
            "Learn what constitutes educational tech vs. big tech trojan horses and lobbying in schools.",
    },
    {
        name: "ScreensAndKids.us",
        url: "http://www.screensandkids.us/",
        description:
            "Science-based resources advocating for healthy screen use in schools.",
    },
];

const safetyOrgs = [
    {
        name: "ProtectYoungEyes.com",
        url: "https://protectyoungeyes.com/",
        description:
            "Nonprofit. Great resources, parent/professional app and game reviews, legislative advocacy, Instagram account, and podcast.",
    },
    {
        name: "DefendYoungMinds.com",
        url: "https://www.defendyoungminds.com/",
        description:
            "Pornography resilience and body safety resources for younger kids.",
    },
    {
        name: "Utah Coalition Against Pornography (UCAP)",
        url: "https://utahcoalition.org/media/",
        description:
            "Nonprofit. Excellent keynotes from experts in pornography, addiction, healthy sexuality, relationships, and mental health — recorded and archived on their website.",
    },
];

const mentalHealthOrgs = [
    {
        name: "ParentGuidance.org",
        url: "https://parentguidance.org/",
        description:
            "Nonprofit. Phenomenal and FREE mental health and relationship resources.",
        extraUrl:
            "https://parentguidance.org/mhs-topic/effects-of-screen-time-childrens-mental-health/",
        extraLabel: "Course: Effects of Screen Time & Children's Mental Health",
    },
    {
        name: "HelpGuide.org — Smartphone Addiction",
        url: "https://www.helpguide.org/articles/addictions/smartphone-addiction.htm",
        description: "Mental health facts and resources.",
    },
    {
        name: "AACAP",
        url: "https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/FFF-Guide/Children-And-Watching-TV-054.aspx",
        description:
            "Science-based resources on children, teens, and screen use from the American Academy of Child & Adolescent Psychiatry.",
    },
    {
        name: "HealthyChildren.org (AAP)",
        url: "https://www.healthychildren.org/English/family-life/Media/Pages/default.aspx",
        description:
            "The American Academy of Pediatrics' official family resource for media and screen use guidance.",
    },
    {
        name: "BetterScreenTime.com",
        url: "http://betterscreentime.com",
        description:
            "A balanced approach to screen time with printable guides and practical resources.",
    },
];

const articles = [
    {
        title: "10 Ways to Protect the Brain from Daily Screen Time",
        source: "Psychology Today",
        url: "https://yourot.com/parenting-club/2016/5/16/why-our-children-are-so-bored-at-school-cant-wait-and-get-so-easily-frustrated",
    },
    {
        title: "Reasons Today's Kids Are Bored, Entitled, Impatient With Few Real Friends",
        source: "Victoria Prooday, OT",
        url: "https://yourot.com/parenting-club/2016/5/16/why-our-children-are-so-bored-at-school-cant-wait-and-get-so-easily-frustrated",
    },
    {
        title: "Association of Screen Time and Depression in Adolescence",
        source: "JAMA Pediatrics",
        url: "https://jamanetwork.com/journals/jamapediatrics/article-abstract/2737909",
    },
    {
        title: "Electronic Screen Syndrome: An Unrecognized Disorder?",
        source: "Psychology Today",
        url: "https://www.psychologytoday.com/us/blog/mental-wealth/201207/electronic-screen-syndrome-unrecognized-disorder",
    },
    {
        title: "The Science and Tragedy Behind The New York Times' 'Screen Addiction Is Taking a Toll on Children'",
        source: "HuffPost",
        url: "https://www.huffpost.com/entry/the-science-and-tragedy-behind-the-new-york-times-screen-addiction-is-taking-a-toll-on-children_b_7765790",
    },
    {
        title: "Is 'Gaming Disorder' An Illness? WHO Says Yes, Adding It To Its List Of Diseases",
        source: "NPR",
        url: "https://www.npr.org/2019/05/28/727585904/is-gaming-disorder-an-illness-the-who-says-yes-adding-it-to-its-list-of-diseases",
    },
    {
        title: "Screen Time and Children: How to Guide Your Child",
        source: "Mayo Clinic",
        url: "https://www.mayoclinic.org/healthy-lifestyle/childrens-health/in-depth/screen-time/art-20047952",
    },
    {
        title: "What Is 'Brain Hacking'? Tech Insiders on Why You Should Care",
        source: "60 Minutes, CBS News",
        url: "https://www.cbsnews.com/news/brain-hacking-tech-insiders-60-minutes/",
    },
    {
        title: "Screen Time Up as Reading Scores Drop. Is There a Link?",
        source: "Education Week — Sarah D. Sparks, Nov. 2019",
        url: "https://www.edweek.org/teaching-learning/screen-time-up-as-reading-scores-drop-is-there-a-link/2019/11",
    },
    {
        title: "MRIs Show Screen Time Linked to Lower Brain Development in Preschoolers",
        source: "CNN — Sandee LaMotte",
        url: "https://www.cnn.com/2019/11/04/health/screen-time-lower-brain-development-preschoolers-wellness/index.html",
    },
    {
        title: "Children's Health in the Digital Age",
        source: "International Journal of Environment and Public Health",
        url: "https://www.mdpi.com/1660-4601/17/9/3240/htm",
    },
    {
        title: "4 Parent-Tested Systems You Can Use to Limit Screen Time",
        source: "Today's Parent — Claire Gagne",
        url: "https://www.todaysparent.com/family/parenting/parent-tested-systems-you-can-use-to-limit-screen-time/",
    },
    {
        title: "All That Screen Time Does Real-Life Harm: Here's How Much Kids Should Actually Be Getting",
        source: "Today's Parent",
        url: "https://www.todaysparent.com/kids/kids-health/all-that-screen-time-does-real-life-harm-heres-how-much-kids-should-actually-be-getting/",
    },
    {
        title: "The Canadian Paediatric Society Announced New Guidelines Around Screen Time for Kids",
        source: "Today's Parent — Jill Buchner",
        url: "https://www.todaysparent.com/kids/kids-health/all-that-screen-time-does-real-life-harm-heres-how-much-kids-should-actually-be-getting/",
    },
    {
        title: "Hey Parents—Put Down Those Devices: Seven Ways Reducing Parental Screen Time Makes Managing Kids' Use Easier",
        source: "Psychology Today",
        url: "https://www.psychologytoday.com/us/blog/mental-wealth/201706/hey-parents-put-down-those-devices",
    },
    {
        title: "Is Guilt Affecting How You Manage Your Child's Screen Time?",
        source: "Psychology Today",
        url: "https://www.psychologytoday.com/us/blog/mental-wealth/201701/is-guilt-affecting-how-you-manage-your-childs-screentime",
    },
    {
        title: "Going Screen-Free: Sheer Madness or Sheer Genius?",
        source: "Psychology Today",
        url: "https://www.psychologytoday.com/us/blog/mental-wealth/201511/going-screenfree-sheer-madness-or-sheer-genius",
    },
    {
        title: "Screen Time Linked to Language Delays in Children (2020 Meta-Analysis)",
        source: "EdWeek / JAMA",
        url: "http://blogs.edweek.org/edweek/inside-school-research/2020/03/new_warnings_on_screen_time_language_delays.html",
    },
    {
        title: "Screen Time Associated with Myopia in Children",
        source: "PubMed",
        url: "https://pubmed.ncbi.nlm.nih.gov/31943280/",
    },
    {
        title: "Social Media Use and Depression and Suicide Risk in Adolescents (2017)",
        source: "Clinical Psychological Science",
        url: "https://journals.sagepub.com/doi/abs/10.1177/2167702617723376",
    },
    {
        title: "WHO Guidelines: Children Ages 2–5 Should Have No More Than 1 Hour of Screen Time Per Day (April 2019)",
        source: "World Health Organization",
        url: "https://apps.who.int/iris/bitstream/handle/10665/311664/9789241550536-eng.pdf",
    },
    {
        title: "Heavy Screen Time Linked to Lower Cognitive Skills in Pre-Adolescents",
        source: "EdWeek Digital Education",
        url: "https://blogs.edweek.org/edweek/DigitalEducation/2018/12/early_results_of_study_show_sc.html",
    },
    {
        title: "Six Facts About Screens and Teen Mental Health That a Recent New York Times Article Ignores",
        source: "Jean Twenge — Institute for Family Studies",
        url: "https://ifstudies.org/blog/six-facts-about-screens-and-teen-mental-health-that%20a-recent-new-york-times-article-ignores",
    },
    {
        title: "Screen Time and Insomnia for Teens",
        source: "Sleep Foundation",
        url: "https://www.sleepfoundation.org/teens-and-sleep/screen-time-and-insomnia-for-teens",
    },
    {
        title: "15 Prompts for Balancing Tech Use at Home and in Our Lives",
        source: "Liahona — Alyssa Bradford, Mar. 2024",
        url: "https://www.churchofjesuschrist.org/study/liahona/2024/03/digital-only/15-prompts-for-balancing-tech-use-at-home-and-in-our-lives?lang=eng",
    },
    {
        title: "Technology Tips",
        source: "Friend — Noelle Barrus, Mar. 2022",
        url: "https://www.churchofjesuschrist.org/study/friend/2022/03/technology-tips?lang=eng",
    },
    {
        title: "Purpose — Taking Charge of Technology",
        source: "The Church of Jesus Christ of Latter-day Saints — Youth manual",
        url: "https://www.churchofjesuschrist.org/study/manual/taking-charge-of-technology/02-purpose?lang=eng",
        videoUrl:
            "https://players.brightcove.net/1241706627001/bi4qWa4xw_default/index.html?videoId=6328562466112",
    },
];

const books = [
    {
        title: "iGen",
        url: "https://www.amazon.com/dp/1501151983",
        note: "By Jean Twenge. Research-driven look at how smartphones are reshaping the first generation to grow up with them.",
    },
    {
        title: "Glow Kids",
        url: "https://a.co/d/9ypyvp7",
        note: "A great starting point for understanding tech's effect on children.",
    },
    {
        title: "Breaking the Trance",
        url: "https://a.co/d/dNqWW0J",
        note: "Another excellent first read alongside Glow Kids.",
    },
    {
        title: "The Collapse of Parenting",
        url: "https://a.co/d/7KcipGQ",
        note: "Read this after Glow Kids or Breaking the Trance.",
    },
    {
        title: "Boys Adrift",
        url: "https://a.co/d/2y6fe2L",
        note: "By Leonard Sax. Essential reading for understanding why boys are disengaging from real life.",
    },
    {
        title: "Girls On the Edge",
        url: "https://a.co/d/bxjmX38",
        note: "By Leonard Sax. Explores the factors driving the epidemic of anxiety and depression in girls.",
    },
    {
        title: "Reset Your Child's Brain",
        url: "https://a.co/d/iEm59No",
        note: "Helps create and successfully execute a screen reset.",
    },
    {
        title: "Hold On to Your Kids",
        url: "https://a.co/d/1sIwn9c",
        note: "Critical for understanding healthy attachment and why phones and peers shouldn't become the primary influencer.",
    },
    {
        title: "The Anxious Generation",
        url: "https://a.co/d/bReu6aQ",
        note: "Wonderful — highly recommended for all parents.",
    },
    {
        title: "Assassination Generation",
        url: "https://www.amazon.com/Killing-Psychological-Cost-Learning-Society/dp/0316040932",
        note: "Lt. Col. David Grossman. Recommended for gamer families.",
    },
    {
        title: "Screen Ed",
        url: "https://a.co/d/gLi8HaB",
        note: "A great workbook to go through with your child/teen before handing over a smartphone.",
    },
    {
        title: "Creating a Tech Healthy Family",
        url: "https://a.co/d/6kXMdX0",
        note: "Another great guide for families navigating tech together.",
    },
    {
        title: "30 Days of Sex Talks",
        url: "https://a.co/d/bz40P1E",
        note: "Critical series for creating an environment where kids learn to ask YOU the important questions. Available in secular and LDS versions. The single greatest factor in preventing predation.",
        extraUrl: "https://a.co/d/9nj7TL0",
        extraLabel: "LDS version",
    },
];

const podcasts = [
    {
        title: "Screen Strong Families Podcast",
        url: "https://podcasts.apple.com/us/podcast/screenstrong-families/id1474681355",
        description:
            "Takes a pretty hard line against all video gaming, but offers very high quality information and guests.",
        type: "Podcast",
    },
    {
        title: "Huberman Lab with Dr. Jonathan Haidt",
        url: "https://www.hubermanlab.com/episode/dr-jonathan-haidt-how-smartphones-social-media-impact-mental-health-the-realistic-solutions",
        description:
            "Smartphones, social media, and mental health. Keep in mind that Discord, Reddit, and any game with a chat feature qualifies as social media.",
        type: "Podcast",
    },
    {
        title: "Huberman Lab — Video Gaming Addiction",
        url: "https://www.youtube.com/watch?reload=9&v=soe31_LEn48",
        description: "Deep dive into the science of video gaming addiction.",
        type: "Podcast",
    },
];

const documentaries = [
    {
        title: "Brain Heart World",
        url: "https://youtu.be/_aIXdMzHAcs?si=f90Yybv65DGtx9wZ",
        description:
            "3-part docu-series by Fight The New Drug about the impact of pornography on developing brains, relationships, and the world. Each episode is one hour. Recommend parents watch with kids age 9+.",
        type: "Documentary",
    },
    {
        title: "Raised On Porn",
        url: "https://youtu.be/hzPylqS01qU?si=G0LLWOMnZsyopWu9",
        description:
            "36 minutes. Critical for all parents and caregivers to understand the growing epidemic of sexual violence among youth. Very candid — not for children.",
        type: "Documentary",
    },
    {
        title: "Childhood 2.0",
        url: "https://youtu.be/5tdY_ct0qlo?si=5EyAzUgQrXCMz688",
        description:
            "Focused on screens, phones, and games. Good for the whole family; may not be very engaging for kids under 6.",
        type: "Documentary",
    },
    {
        title: "The Social Dilemma",
        url: "https://www.netflix.com/title/81254224",
        description:
            "Netflix. A look inside the tech industry's role in shaping attention and behavior. Good to watch and discuss as a family.",
        type: "Documentary",
    },
];

const socials = [
    {
        handle: "@protectyoungeyes",
        note: "Weekly tech updates and full app/game reviews",
    },
    { handle: "@healthyscreenhabits" },
    { handle: "@betterscreentime" },
    { handle: "@mindfulfamilytech" },
    { handle: "@beintouch.org.za" },
    { handle: "@familytechwellness" },
    { handle: "@smart_digital_kids" },
    {
        handle: "@thegamereducator",
        note: "Good for staying open-minded and educated about specific games/platforms",
    },
];

type FrameworkStep = {
    letter: string;
    word: string;
    description: string;
    linkLabel?: string;
};

const mapSteps: FrameworkStep[] = [
    {
        letter: "M",
        word: "Meaning",
        description:
            "Determine your core values. I built a free quiz right here to help with this.",
        linkLabel: "Take the quiz",
    },
    {
        letter: "A",
        word: "Aim",
        description: "Develop goals that align with your values.",
    },
    {
        letter: "P",
        word: "Power",
        description:
            "Harness tech to achieve your goals and become who you want to be in the world.",
    },
];

const lightSteps: FrameworkStep[] = [
    {
        letter: "L",
        word: "Learn",
        description: "Start by identifying your values.",
    },
    {
        letter: "I",
        word: "Identify",
        description: "Clarify goals that reflect your values.",
    },
    {
        letter: "G",
        word: "Goal-set",
        description: "Create clear, measurable steps.",
    },
    {
        letter: "H",
        word: "Harness",
        description: "Educate yourself about the right tech tools.",
    },
    {
        letter: "T",
        word: "Transform",
        description: "Use tech to turn goals into reality.",
    },
];

const frameworks = [
    { name: "MAP", subtitle: "Meaning · Aim · Power", steps: mapSteps },
    {
        name: "LIGHT",
        subtitle: "Learn · Identify · Goal-set · Harness · Transform",
        steps: lightSteps,
    },
];

const secondaryQuizzes = [
    {
        name: "Love Languages Quiz",
        description:
            "Discover your primary love language and how you best give and receive love.",
        url: "https://5lovelanguages.com/quizzes/love-language",
    },
    {
        name: "Apology Languages Quiz",
        description:
            "Learn which type of apology resonates most deeply with you and the people you love.",
        url: "https://5lovelanguages.com/quizzes/apology-language",
    },
];

const featuredOrg = orgs.find((org) => org.highlighted);

const orgGroups = [
    {
        title: "Screen Time & Families",
        items: orgs.filter((org) => !org.highlighted),
    },
    { title: "Schools & Education", items: schoolOrgs },
    { title: "Online Safety & Pornography Prevention", items: safetyOrgs },
    { title: "Mental Health", items: mentalHealthOrgs },
];

export default function ResourcesPage() {
    const { isQuizInProgress, startQuiz } = useStartQuiz();

    return (
        <div className="w-full">
            <Seo
                title="Resources | Screen Time & Tech Balance for Families"
                description="A curated library of organizations, articles, books, podcasts, and documentaries to help families navigate screen time and technology with intention."
                path="/resources"
            />
            {/* Section 1 — Hero */}
            <section className="bg-base-200 px-6 pt-22 pb-18">
                <div className="max-w-[1040px] mx-auto">
                    <div className="max-w-[720px]">
                        <h1 className={`mb-5 ${pageHeading}`}>Resources</h1>
                        <p className="mb-4 text-[clamp(1.25rem,2.6vw,1.5rem)] font-medium leading-[1.45] text-ink text-pretty">
                            A curated collection of organizations, articles,
                            books, podcasts, and documentaries from{" "}
                            <a
                                href="https://healthytechbalance.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={textLink}
                            >
                                Healthy Tech Balance
                            </a>{" "}
                            to help families navigate technology with intention.
                        </p>
                        <p className="text-lg leading-[1.65] text-ink-muted text-pretty">
                            The latest studies show that until nearly age 25,
                            even{" "}
                            <strong className="font-bold text-ink">
                                20 minutes a day
                            </strong>{" "}
                            of screen activity produces visible physical changes
                            in the brain. We are seeing record numbers of young
                            people suffering from decreased resilience,
                            depression, anxiety, ADHD, self-harm, and suicide as
                            a result of unhealthy technology use. We have
                            compiled these resources to educate and empower
                            families to create the healthiest possible
                            environment for their children.
                        </p>
                    </div>
                </div>
            </section>

            <SectionJumpMenu sections={pageSections} />

            {/* Section 2 — Quizzes */}
            <section id="quizzes" className="scroll-mt-16 bg-white px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        Quizzes &amp; Self-Assessments
                    </h2>
                    <p className={sectionIntro}>
                        Free tools to help you and your family understand
                        yourselves and each other better.
                    </p>

                    {/* Featured: Core Values Quiz */}
                    <div className="grid justify-items-start gap-[18px] mt-10 px-7 py-10 md:p-12 rounded-[28px] bg-primary shadow-panel">
                        <h3 className="text-[clamp(2rem,4.5vw,2.75rem)] font-[750] leading-[1.05] tracking-[-0.03em] text-white">
                            Core Values Quiz
                        </h3>
                        <p className="max-w-[52ch] text-[19px] font-bold leading-[1.5] text-white">
                            Discover the values that drive your decisions, shape
                            your relationships, and define how technology should
                            — and shouldn't — fit into your life.
                        </p>
                        <button
                            type="button"
                            onClick={startQuiz}
                            className={`mt-1.5 ${onGreenButton}`}
                        >
                            {isQuizInProgress ? "Continue" : "Take"} the Core
                            Values Quiz
                        </button>
                    </div>

                    {/* Secondary quizzes */}
                    <div className="grid gap-x-14 mt-10 md:grid-cols-2">
                        {secondaryQuizzes.map((quiz) => (
                            <div
                                key={quiz.name}
                                className="py-6 border-t border-primary/35"
                            >
                                <h3 className="mb-1.5 text-xl font-[650] tracking-[-0.015em] text-ink">
                                    {quiz.name}
                                </h3>
                                <p className="mb-3 text-base leading-[1.55] text-ink-muted">
                                    {quiz.description}
                                </p>
                                <a
                                    href={quiz.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-[15px] ${textLink}`}
                                >
                                    Take the quiz
                                    <ExternalArrow />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 — Organizations & Websites */}
            <section id="organizations" className="scroll-mt-16 bg-base-200 px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`${sectionHeading}`}>
                        Organizations &amp; Websites
                    </h2>
                    {orgGroups.map((group, groupIndex) => (
                        <div key={group.title} className="mt-11">
                            <h3 className="text-[22px] font-bold leading-[1.2] tracking-[-0.015em] text-ink">
                                {group.title}
                            </h3>
                            <div className="grid gap-3 mt-4 md:grid-cols-2">
                                {groupIndex === 0 && featuredOrg && (
                                    <LinkCard {...featuredOrg} />
                                )}
                                {group.items.map((org) => (
                                    <LinkCard key={org.name} {...org} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3 — Articles */}
            <section id="articles" className="scroll-mt-16 bg-white px-6 py-20">
                <div className="max-w-[760px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>Articles</h2>
                    <p className={sectionIntro}>
                        Research and perspectives from leading health,
                        education, and science publications.
                    </p>
                    <div className="grid items-center gap-[18px] sm:grid-cols-[200px_1fr] mt-8 p-5 sm:p-6 rounded-[20px] bg-base-200">
                        <img
                            src="/images/Screen Time Guidelines.png"
                            alt="Screen Time Guidelines chart"
                            width={1056}
                            height={816}
                            loading="lazy"
                            className="w-full max-w-[220px] h-auto rounded-xl shadow-photo"
                        />
                        <div>
                            <h3 className="mb-1.5 text-xl font-bold tracking-[-0.015em] text-ink">
                                Screen Time Guidelines (WHO, CDC, APA)
                            </h3>
                            <p className="mb-3 text-base leading-[1.55] text-ink-muted">
                                Quick-reference chart of age-appropriate daily
                                screen time recommendations — printable and
                                downloadable.
                            </p>
                            <Link
                                to="/learn#screen-time-guidelines"
                                className="rounded-[3px] text-[15px] font-semibold text-ink underline decoration-primary decoration-[1.5px] underline-offset-4 hover:decoration-[2.5px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
                            >
                                View, download &amp; print
                            </Link>
                        </div>
                    </div>
                    <ul className="mt-9">
                        {articles.map((article) => (
                            <li
                                key={article.url + article.title}
                                className="grid gap-1 py-4 border-t border-primary/25"
                            >
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="justify-self-start rounded-[3px] text-[17px] font-semibold leading-[1.4] text-ink underline decoration-primary/45 decoration-[1.5px] underline-offset-4 hover:decoration-primary hover:decoration-[2.5px] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary"
                                >
                                    {article.title}
                                    <ExternalArrow className="size-[13px]" />
                                </a>
                                <span className="text-[15px] leading-[1.4] text-ink-muted">
                                    {article.source}
                                </span>
                                {article.videoUrl && (
                                    <div className="mt-3 w-full overflow-hidden rounded-xl bg-base-200 shadow-photo aspect-video">
                                        <iframe
                                            src={article.videoUrl}
                                            title={`Video: ${article.title}`}
                                            loading="lazy"
                                            allow="encrypted-media; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            className="size-full border-0"
                                        />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Books */}
            <section id="books" className="scroll-mt-16 bg-base-200 px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>Books</h2>
                    <p className={sectionIntro}>
                        Recommended reading for understanding and addressing
                        technology's impact on families.
                    </p>
                    <div className="grid gap-3 mt-10 md:grid-cols-2">
                        {books.map((book) => (
                            <LinkCard
                                key={book.title}
                                name={book.title}
                                url={book.url}
                                description={book.note}
                                extraUrl={book.extraUrl}
                                extraLabel={book.extraLabel}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Podcasts & documentaries */}
            <section
                id="podcasts-and-documentaries"
                className="scroll-mt-16 bg-white px-6 py-20"
            >
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={sectionHeading}>
                        Podcasts &amp; Documentaries
                    </h2>
                    <div className="grid gap-3 mt-10 md:grid-cols-2">
                        {[...podcasts, ...documentaries].map((item) => (
                            <LinkCard
                                key={item.title}
                                name={item.title}
                                url={item.url}
                                description={item.description}
                                tag={item.type}
                                tone="tint"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Social accounts */}
            <section id="social-accounts" className="scroll-mt-16 bg-base-200 px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        Social Accounts to Follow
                    </h2>
                    <p className={sectionIntro}>
                        Primarily on Instagram. Worth a follow for ongoing
                        updates and resources.
                    </p>
                    <ul className="grid items-start gap-3 mt-10 sm:grid-cols-2 lg:grid-cols-4">
                        {socials.map((s) => (
                            <li
                                key={s.handle}
                                className="grid content-start gap-1 px-5 py-4 rounded-[18px] bg-white"
                            >
                                <span className="text-[17px] font-[650] text-ink break-words">
                                    {s.handle}
                                </span>
                                {s.note && (
                                    <span className="text-[15px] leading-[1.45] text-ink-muted">
                                        {s.note}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* MAP & LIGHT frameworks */}
            <section id="framework" className="scroll-mt-16 bg-white px-6 py-20">
                <div className="max-w-[1040px] mx-auto">
                    <h2 className={`mb-3 ${sectionHeading}`}>
                        The Healthy Tech Balance Framework
                    </h2>
                    <p className={sectionIntro}>
                        Two complementary frameworks for using technology as a
                        tool — not a distraction.
                    </p>
                    <div className="grid gap-4 mt-10 md:grid-cols-2">
                        {frameworks.map((framework) => (
                            <div
                                key={framework.name}
                                className="p-7 md:p-9 rounded-[28px] bg-base-200"
                            >
                                <h3 className="text-[clamp(2rem,4vw,2.5rem)] font-[750] leading-none tracking-[-0.02em] text-ink">
                                    {framework.name}
                                </h3>
                                <p className="mt-2 text-[15px] font-semibold text-ink-muted">
                                    {framework.subtitle}
                                </p>
                                <ol className="grid gap-4 mt-7">
                                    {framework.steps.map((step) => (
                                        <li
                                            key={step.letter}
                                            className="grid grid-cols-[36px_1fr] items-start gap-3.5"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="grid place-items-center size-9 -mt-1.5 rounded-full border-2 border-primary bg-white text-base font-bold text-ink"
                                            >
                                                {step.letter}
                                            </span>
                                            <p className="text-base leading-[1.55] text-ink-muted">
                                                <span className="font-[650] text-ink">
                                                    {step.word}:
                                                </span>{" "}
                                                {step.description}
                                                {step.linkLabel && (
                                                    <>
                                                        {" "}
                                                        <button
                                                            type="button"
                                                            onClick={startQuiz}
                                                            className={`cursor-pointer ${textLink}`}
                                                        >
                                                            {step.linkLabel}
                                                        </button>
                                                    </>
                                                )}
                                            </p>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <QuizCallout heading="Ready to Discover Your Values?">
                The quiz takes about 5 minutes and is the first step in the MAP
                and LIGHT frameworks. Take it for yourself — or as a whole
                family.
            </QuizCallout>
        </div>
    );
}
