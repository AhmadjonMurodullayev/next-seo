import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-[80px] bg-green-500 justify-center items-center flex gap-[40px]">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/user">User</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};

export default Header;
