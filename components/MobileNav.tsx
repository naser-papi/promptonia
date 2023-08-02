import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const MobileNav = ({ providers }) => {
  const {data:session} = useSession();
  const [showDropDown, setShowDropdown] = useState(false);
  return (
    <div className={"sm:hidden flex relative"}>
      {session?.user ? (
        <div className={"flex"}>
          <Image
            src={"/assets/images/logo.svg"}
            width={37}
            height={37}
            className={"rounded-full"}
            alt={"profile"}
            onClick={() => {
              setShowDropdown((prv) => !prv);
            }}
          />
          {showDropDown && (
            <div className={"dropdown"}>
              <Link
                href={"/profile"}
                className={"dropdown_link"}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                My Profile
              </Link>
              <Link
                href={"/create-prompt"}
                className={"dropdown_link"}
                onClick={() => {
                  setShowDropdown(false);
                }}
              >
                Create Prompt
              </Link>
              <button
                type={"button"}
                className={"mt-5 w-full black_btn"}
                onClick={() => {
                  setShowDropdown(false);
                  signOut();
                }}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className={"auth_btns"}>
          {providers
            ? Object.values(providers).map((prov) => (
                <button key={prov.name} onClick={() => signIn(prov.id)}>
                  SignIn
                </button>
              ))
            : null}
        </div>
      )}
    </div>
  );
};

export default MobileNav;
