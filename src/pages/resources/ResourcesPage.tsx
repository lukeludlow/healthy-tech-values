import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import {
    currentQuestionIndexAtom,
    isQuizInProgressAtom,
} from "@/state/state.ts";
import { Button } from "@/components/catalyst-ui-kit/button.tsx";

const orgs = [
    {
        name: "Screen Time Clinic",
        url: "https://screentimeclinic.com/jessica-ludlow/",
        description:
            "Resources, speaking, consulting, coaching, and guided detoxes.",
        featured: true,
        featuredLabel: "Author's Profile",
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
        extraUrl: "https://drive.google.com/file/d/1KKCETTmzi7JkRGsWsLCiL4cbEsefD3zf/view?usp=sharing",
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
        extraUrl: "https://parentguidance.org/mhs-topic/effects-of-screen-time-childrens-mental-health/",
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
];

const books = [
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
    { handle: "@protectyoungeyes", note: "Weekly tech updates and full app/game reviews" },
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

const mapSteps = [
    {
        letter: "M",
        word: "Meaning",
        description:
            "Determine your core values. I built a free quiz right here to help with this.",
        linkLabel: "Take the quiz →",
        linkTo: "/",
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

const lightSteps = [
    { letter: "L", word: "Learn", description: "Start by identifying your values." },
    { letter: "I", word: "Identify", description: "Clarify goals that reflect your values." },
    { letter: "G", word: "Goal-set", description: "Create clear, measurable steps." },
    { letter: "H", word: "Harness", description: "Educate yourself about the right tech tools." },
    { letter: "T", word: "Transform", description: "Use tech to turn goals into reality." },
];

function OrgCard({
    name,
    url,
    description,
    featured = false,
    featuredLabel,
    extraUrl,
    extraLabel,
}: {
    name: string;
    url: string;
    description: string;
    featured?: boolean;
    featuredLabel?: string;
    extraUrl?: string;
    extraLabel?: string;
}) {
    return (
        <div
            className={`flex flex-col p-5 rounded-2xl border shadow-sm ${
                featured
                    ? "border-primary bg-base-200"
                    : "border-gray-100 bg-white"
            }`}
        >
            {featured && featuredLabel && (
                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                    {featuredLabel}
                </span>
            )}
            <h3 className="font-bold text-base mb-1">{name}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3 flex-1">
                {description}
            </p>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary font-medium hover:underline"
            >
                Visit site →
            </a>
            {extraUrl && extraLabel && (
                <a
                    href={extraUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary font-medium hover:underline mt-2"
                >
                    {extraLabel} →
                </a>
            )}
        </div>
    );
}

export default function ResourcesPage() {
    const navigate = useNavigate();
    const [isQuizInProgress, setIsQuizInProgress] = useAtom(isQuizInProgressAtom);
    const [, setCurrentQuestionIndex] = useAtom(currentQuestionIndexAtom);

    function handleStartQuiz() {
        if (!isQuizInProgress) {
            setIsQuizInProgress(true);
            setCurrentQuestionIndex(0);
        }
        navigate("/quiz");
    }

    return (
        <div className="w-full">
            {/* Section 1 — Hero */}
            <section className="bg-base-200 py-20 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-6">Resources</h1>
                    <p className="text-xl text-gray-700 leading-relaxed mb-5">
                        A curated collection of organizations, articles, books, podcasts, and
                        documentaries from{" "}
                        <a
                            href="https://healthytechbalance.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary font-medium hover:underline"
                        >
                            Healthy Tech Balance
                        </a>{" "}
                        to help families navigate technology with intention.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        The latest studies show that until nearly age 25, even{" "}
                        <strong className="text-gray-800">20 minutes a day</strong> of screen
                        activity produces visible physical changes in the brain. We are seeing
                        record numbers of young people suffering from decreased resilience,
                        depression, anxiety, ADHD, self-harm, and suicide as a result of
                        unhealthy technology use. We have compiled these resources to educate
                        and empower families to create the healthiest possible environment for
                        their children.
                    </p>
                </div>
            </section>

            {/* Section 2 — Organizations & Websites */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Organizations &amp; Websites
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        {orgs.map((org) => (
                            <OrgCard key={org.name} {...org} />
                        ))}
                    </div>

                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                        Schools &amp; Education
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        {schoolOrgs.map((org) => (
                            <OrgCard key={org.name} {...org} />
                        ))}
                    </div>

                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                        Online Safety &amp; Pornography Prevention
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        {safetyOrgs.map((org) => (
                            <OrgCard key={org.name} {...org} />
                        ))}
                    </div>

                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                        Mental Health
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {mentalHealthOrgs.map((org) => (
                            <OrgCard key={org.name} {...org} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3 — Articles */}
            <section className="bg-base-200 py-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-3">Articles</h2>
                    <p className="text-lg text-gray-600 text-center mb-10">
                        Research and perspectives from leading health, education, and science publications.
                    </p>
                    <div className="rounded-2xl border border-primary bg-white p-5 flex flex-col sm:flex-row items-center gap-4 mb-10">
                        <img
                            src="/images/Screen Time Guidelines.png"
                            alt="Screen Time Guidelines"
                            className="w-32 rounded-lg shrink-0"
                        />
                        <div>
                            <p className="font-semibold text-gray-800 mb-1">
                                Screen Time Guidelines (WHO, CDC, APA)
                            </p>
                            <p className="text-sm text-gray-600 mb-3">
                                Quick-reference chart of age-appropriate daily screen time recommendations — printable and downloadable.
                            </p>
                            <a
                                href="/learn#screen-time-guidelines"
                                className="text-sm text-primary font-medium hover:underline"
                            >
                                View, download &amp; print →
                            </a>
                        </div>
                    </div>
                    <ul className="space-y-5">
                        {articles.map((article) => (
                            <li
                                key={article.url + article.title}
                                className="flex flex-col gap-0.5"
                            >
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary font-medium hover:underline leading-snug"
                                >
                                    {article.title}
                                </a>
                                <span className="text-sm text-gray-500">{article.source}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Section 4 — Books */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-3">Books</h2>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        Recommended reading for understanding and addressing technology's impact on families.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {books.map((book) => (
                            <div
                                key={book.title}
                                className="flex flex-col p-5 rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <a
                                    href={book.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-base text-primary hover:underline mb-1"
                                >
                                    {book.title}
                                </a>
                                <p className="text-sm text-gray-600 leading-relaxed flex-1">
                                    {book.note}
                                </p>
                                {book.extraUrl && (
                                    <a
                                        href={book.extraUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary font-medium hover:underline mt-2"
                                    >
                                        {book.extraLabel} →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5 — Podcasts & Documentaries */}
            <section className="bg-base-200 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Podcasts &amp; Documentaries
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[...podcasts, ...documentaries].map((item) => (
                            <div
                                key={item.title}
                                className="flex flex-col p-5 rounded-2xl border border-gray-100 bg-white shadow-sm"
                            >
                                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                                    {item.type}
                                </span>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-base hover:underline text-gray-900 mb-2 leading-snug"
                                >
                                    {item.title}
                                </a>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6 — Social Accounts */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-3">
                        Social Accounts to Follow
                    </h2>
                    <p className="text-lg text-gray-600 mb-10">
                        Primarily on Instagram. Worth a follow for ongoing updates and resources.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {socials.map((s) => (
                            <div key={s.handle} className="flex flex-col items-center gap-1">
                                <span className="inline-block bg-base-200 text-primary font-semibold text-sm px-4 py-2 rounded-full">
                                    {s.handle}
                                </span>
                                {s.note && (
                                    <span className="text-xs text-gray-500 max-w-[180px] text-center leading-tight">
                                        {s.note}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 7 — MAP & LIGHT Frameworks */}
            <section className="bg-base-200 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-3">
                        The Healthy Tech Balance Framework
                    </h2>
                    <p className="text-lg text-gray-600 text-center mb-12">
                        Two complementary frameworks for using technology as a tool — not a distraction.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* MAP */}
                        <div className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                            <h3 className="text-2xl font-bold text-primary mb-1">MAP</h3>
                            <p className="text-sm text-gray-500 mb-5">
                                Meaning · Aim · Power
                            </p>
                            <div className="space-y-4">
                                {mapSteps.map((step) => (
                                    <div key={step.letter} className="flex gap-3">
                                        <span className="text-xl font-bold text-primary w-6 shrink-0">
                                            {step.letter}
                                        </span>
                                        <div>
                                            <span className="font-semibold">{step.word}: </span>
                                            <span className="text-sm text-gray-600">
                                                {step.description}
                                            </span>
                                            {step.linkLabel && step.linkTo && (
                                                <button
                                                    onClick={handleStartQuiz}
                                                    className="ml-1 text-sm text-primary font-medium hover:underline"
                                                >
                                                    {step.linkLabel}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LIGHT */}
                        <div className="flex flex-col p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                            <h3 className="text-2xl font-bold text-primary mb-1">LIGHT</h3>
                            <p className="text-sm text-gray-500 mb-5">
                                Learn · Identify · Goal-set · Harness · Transform
                            </p>
                            <div className="space-y-4">
                                {lightSteps.map((step) => (
                                    <div key={step.letter} className="flex gap-3">
                                        <span className="text-xl font-bold text-primary w-6 shrink-0">
                                            {step.letter}
                                        </span>
                                        <div>
                                            <span className="font-semibold">{step.word}: </span>
                                            <span className="text-sm text-gray-600">
                                                {step.description}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 8 — Quiz CTA */}
            <section className="bg-primary py-16 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Discover Your Values?
                    </h2>
                    <p className="text-lg text-primary-content mb-10 leading-relaxed">
                        The quiz takes about 5 minutes and is the first step in the MAP and LIGHT
                        frameworks. Take it for yourself — or as a whole family.
                    </p>
                    <Button
                        color="white"
                        className="px-8 py-3 text-base"
                        onClick={handleStartQuiz}
                    >
                        {isQuizInProgress ? "Continue" : "Take"} the Core Values Quiz
                    </Button>
                </div>
            </section>
        </div>
    );
}
