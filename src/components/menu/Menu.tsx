"use client";

import { signOutAction } from "@/app/actions";
import getCurrentUser from "@/utils/getCurrentUser";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Menu() {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    getCurrentUser().then((user) => setUser(user));
  }, []);

  return (
    <div className="flex flex-row p-4">
      <Link href={"/"} className="mr-10 sm:mr-20 sm:text-xl">
        coffee diary
      </Link>
      <div className="my-auto flex flex-row gap-x-5 align-middle">
        <Link href={"/cafes"}>cafes</Link>
        {!user && <Link href={"/login"}>login</Link>}
        {user && <Link href={"/diary"}>diary</Link>}
      </div>
      <div className="my-auto ml-auto flex flex-row gap-x-4 align-middle">
        <p className="hidden sm:block">
          {user?.email && user.email.split("@")[0]}
        </p>
        <form>{user && <button formAction={signOutAction}>out</button>}</form>
      </div>
    </div>
  );
}
