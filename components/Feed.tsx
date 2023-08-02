import SearchBox from "@/components/SearchBox";
import { IPost } from "@/types/post";
import PromptCard from "@/components/PromptCard";
import PromptListWrapper from "@/components/PromptListWrapper";

interface FeedPT {
  searchText: string | undefined;
}
const Feed = async ({ searchText }: FeedPT) => {
  const query =
    "http://localhost:3000/api/prompt" +
    (searchText != undefined ? `?search=${searchText}` : "");
  const resp = await fetch(query, {
    cache: "no-store",
  });
  const list = (await resp.json()) as IPost[];
  let prompts;
  if (list && list.length) {
    prompts = list.map((post) => <PromptCard key={post._id} post={post} />);
  } else {
    prompts = <div>NO FEED...</div>;
  }
  return (
    <section className={"feed"}>
      <PromptListWrapper list={list}>
        <form className={"relative w-full flex-center"}>
          <SearchBox />
        </form>
        <div className={"mt-16 prompt_layout"}>{prompts}</div>
      </PromptListWrapper>
    </section>
  );
};

export default Feed;
