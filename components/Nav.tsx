"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProviders } from "next-auth/react";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";

const Nav = () => {
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const p = await getProviders();
      setProviders(p);
    })();
  }, []);
  return (
    <nav className={"flex-between w-full mb-16 pt-3"}>
      <Link href={"/"} className={"flex gap-2 flex-center"}>
        <Image
          src={"/assets/images/logo.svg"}
          alt={"promptonia logo"}
          height={30}
          width={30}
          className={"object-contain"}
        />
        <p className={"logo_text"}>Promptopia</p>
      </Link>
      {/*desktop navigation*/}
      <DesktopNav providers={providers} />

      {/* Mobile navigator */}
      <MobileNav providers={providers} />
    </nav>
  );
};

export default Nav;
