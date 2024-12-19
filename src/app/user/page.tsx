import Link from "next/link";
import React from "react";

const User = () => {
  return (
    <div className="justify-center items-center flex my-24">
      <ul className="flex gap-[20px]">
        <li>
          <Link href={"/user/21"}>User1</Link>
        </li>
        <li>
          <Link href={"/user/22"}>User2</Link>
        </li>
        <li>
          <Link href={"/user/23"}>User3</Link>
        </li>
        <li>
          <Link href={"/user/24"}>User4</Link>
        </li>
        <li>
          <Link href={"/user/25"}>User5</Link>
        </li>
      </ul>
    </div>
  );
};

export default User;
