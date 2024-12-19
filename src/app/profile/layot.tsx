import Link from "next/link";
import React from "react";

const ProfileLayot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="h-[80vh] p-[30px] bg-cyan-400 w-[300px]">
        <Link href="/profile/adres">Adres</Link>
      </div>
      {children}
    </div>
  );
};

export default ProfileLayot;
