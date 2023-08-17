"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { IPost } from "@/types/post";

interface PromptListPT {
  list: IPost[];
  children: ReactNode | ReactNode[];
}
interface IPromptListContext {
  list: IPost[];
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}
export const PromptListContext = createContext({} as IPromptListContext);

const PromptListWrapper = ({ list, children }: PromptListPT) => {
  const [searchText, setSearchText] = useState("");

  return (
    <PromptListContext.Provider
      value={{
        list: list,
        searchText: searchText,
        setSearchText: setSearchText,
      }}
    >
      {children}
    </PromptListContext.Provider>
  );
};

export default PromptListWrapper;
