"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
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
  //const [flag, setFlag] = useState(false);
  // useEffect(() => {
  //   if (searchText.length > 3) {
  //     setFlag(true);
  //   }
  // }, [searchText]);
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
