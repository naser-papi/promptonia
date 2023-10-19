import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string | null;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}
