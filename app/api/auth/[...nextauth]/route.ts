import NextAuth from "next-auth";
//import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";
import { connectToDb } from "@/utils/database";
import User from "@/models/user";

const handler = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_SECRET_KEY,
    //   httpOptions: {
    //     timeout: 40000,
    //   }
    // }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_ID,
      clientSecret: process.env.LINKEDIN_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectToDb();
      const sessionUser = (await User.findOne({
        email: session.user.email,
      })) as any;
      if (sessionUser) {
        session.user.id = sessionUser._id.toString();
      }
      return session;
    },
    async signIn({ account, user, profile }) {
      try {
        await connectToDb();
        const info = {
          email: "",
          username: "",
          image: "",
        };
        if (account.provider == "linkedin") {
          info.email = user.email;
          info.username = user.name.replace(" ", "");
          info.image = user.image;
        } else if (account.provider == "google") {
          info.email = profile.email;
          info.username = profile.name.replace(" ", "");
          info.image = profile.image;
        }
        const bankUser = await User.findOne({ email: info.email });
        if (!bankUser) {
          await User.create({
            email: info.email,
            username: info.username,
            image: info.image,
          });
          console.info("\x1b[42m", "New user added", "\x1b[0m");
        }

        return true;
      } catch (err) {
        console.error(err);
        return false;
      }
    },
  },
} as any);

export { handler as GET, handler as POST };
