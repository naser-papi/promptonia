"use client";
import { useContext } from "react";
import { PromptListContext } from "@/components/PromptListWrapper";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const { searchText, setSearchText } = useContext(PromptListContext);
  const router = useRouter();
  const handleSearchChange = (event) => {
    const needSearch =
      event.target.value == "" && event.target.value != searchText;
    setSearchText(event.target.value);
    if (needSearch) {
      router.push("/");
    }
  };
  const handleSearchClick = () => {
    if (searchText) {
      router.push("/?search=" + searchText);
    } else {
      router.push("/");
    }
  };
  return (
    <div className={"flex w-full"}>
      <input
        type={"search"}
        value={searchText}
        onChange={handleSearchChange}
        required
        className={"search_input peer"}
        placeholder={"search for a tag or a username"}
      />
      <button
        type={"button"}
        className={"bg-blue-400 text-white px-4 rounded-e-full"}
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
