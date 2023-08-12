import { IUser } from "@/types/user";

export interface IPost {
  prompt: string;
  tag: string;
  creator?: IUser;
  _id?: string;
}
