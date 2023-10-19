import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Provider } from "next-auth/providers";

const DesktopNav = ({ providers }: { providers: Provider }) => {
  const { data: session } = useSession();
  return (
    <div className={"sm:flex hidden"}>
      {session?.user ? (
        <div className={"flex gap-3 md:gap-5"}>
          <Link href={"/create-prompt"} className={"black_btn"}>
            Create Post
          </Link>
          <button
            type={"button"}
            onClick={() => signOut()}
            className={"outline_btn"}
          >
            Sign out
          </button>
          <Link href={"/profile"}>
            <Image
              src={session?.user.image?.toString() || "/assets/images/logo.svg"}
              width={37}
              height={37}
              className={"rounded-full"}
              alt={"profile"}
            />
          </Link>
        </div>
      ) : (
        <div className={"auth_btns"}>
          {providers
            ? Object.values(providers).map((prov: Provider) => (
                <button
                  className={"black_btn"}
                  key={prov.name}
                  onClick={() => signIn(prov.id)}
                >
                  SignIn {prov.name}
                </button>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default DesktopNav;
