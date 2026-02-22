import { journalPosts } from "../../lib/journal";
import JournalClient from "./JournalClient";

export const metadata = {
  title: "Journal | Build with Hannah",
  description: "Honest rebuild notes for anyone starting over in career, confidence, and life.",
};

export default function JournalPage() {
  return <JournalClient posts={journalPosts} />;
}
