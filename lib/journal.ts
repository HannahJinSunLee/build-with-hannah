export type JournalPost = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  category: string;
  blurb: string;
  intro?: string;
  paragraphs: string[];
  next?: string;
};

export const journalPosts: JournalPost[] = [
  {
    slug: "this-is-where-i-rebuild",
    title: "I Am Starting Over in My Early 30s, and I am Done Hiding",
    subtitle: "This is where my rebuild begins, in public.",
    date: "February 19, 2026",
    category: "Leveling Up",
    blurb:
      "The exact moment I stopped negotiating with fear and finally started.",
    intro: "I did not build the life I imagined in my 20s.",
    paragraphs: [
      "For years, I avoided what felt hard. I stayed where it felt safe and called it being realistic.",
      "Right now I am unemployed, rebuilding, and learning from scratch. For the first time, I am not hiding that.",
      "I have always been drawn to tech, but every time it got difficult, I disappeared. Fear decided for me.",
      "This site exists so fear does not get the final word. I am building in public, quietly, intentionally, and consistently.",
      "I am rebuilding my career. I am rebuilding my discipline. I am rebuilding my confidence.",
      "If you are rebuilding too, you are not late. You are just early in your next chapter.",
      "Luna is here, supervising all of it.",
    ],
    next: "The first week I committed to showing up daily.",
  },
  {
    slug: "week-one-i-stopped-waiting-to-feel-ready",
    title: "Week One: I Stopped Waiting to Feel Ready",
    subtitle: "What changed when I committed to daily reps.",
    date: "February 20, 2026",
    category: "Tech Journey",
    blurb:
      "What happened when I chose consistency over confidence for seven straight days.",
    intro: "I kept telling myself I needed motivation first. I had it backward.",
    paragraphs: [
      "This week I showed up every day for HTML, CSS, and JavaScript. Some days were strong. Some days were messy.",
      "The biggest shift was simple: I stopped treating progress like a mood and started treating it like a practice.",
      "I used short focused sessions instead of waiting for perfect energy. I tracked what I learned after every session.",
      "I still get overwhelmed. I still compare myself. The difference is I keep moving anyway.",
      "If you feel behind, try this: pick one tiny promise and keep it for seven days. Let momentum do the rest.",
    ],
    next: "My first real project decisions and what I am cutting.",
  },
  {
    slug: "what-i-am-building-first-and-what-i-am-cutting",
    title: "What I Am Building First (and What I Am Cutting)",
    subtitle: "A simple plan to avoid burnout and finish projects.",
    date: "February 21, 2026",
    category: "Systems",
    blurb:
      "The project plan I am using to ship more, overthink less, and stay in motion.",
    intro: "I used to start everything and finish nothing.",
    paragraphs: [
      "My old pattern was endless planning, endless tabs, and almost no shipping.",
      "Now I use one rule: build one core project, one supporting habit, and one weekly review.",
      "Core project: this site. Supporting habit: daily coding reps. Weekly review: what worked, what blocked me, what gets cut.",
      "What I am cutting: perfection loops, ten new ideas at once, and layouts that delay publishing.",
      "Finishing small work has done more for my confidence than any big plan ever did.",
      "If you are overwhelmed, reduce scope until you can win this week. Then repeat.",
    ],
    next: "Turning an old PC into a home lab server, day one.",
  },
  {
    slug: "fitness-rebuild-week-one-showing-up",
    title: "Fitness Rebuild: Week One of Showing Up Again",
    subtitle: "How I am rebuilding strength and discipline at the same time.",
    date: "February 21, 2026",
    category: "Fitness Journey",
    blurb:
      "The simple routine helping me rebuild my body while I rebuild my career.",
    intro: "I am not chasing perfect workouts. I am rebuilding consistency.",
    paragraphs: [
      "For a long time I treated fitness like all-or-nothing. If I could not do it perfectly, I did nothing.",
      "This week I focused on one goal: show up. Short sessions, basic movements, no drama.",
      "I am supporting my back and core first, then building strength from there.",
      "What surprised me most is how much this helps my coding days. When I train, I think clearer and quit less.",
      "I am tracking wins weekly, not daily perfection.",
      "If you are rebuilding too, start with one promise you can keep this week.",
    ],
    next: "How I am pairing coding blocks with training blocks.",
  },
];

export function getPostBySlug(slug: string) {
  return journalPosts.find((post) => post.slug === slug);
}
