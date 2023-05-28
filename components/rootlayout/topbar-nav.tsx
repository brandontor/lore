import React from "react";

type Props = {};

function TopBarNav({}: Props) {
  return (
    <header className="w-full h-[5%] flex items-center justify-between border-b-[1px] border-nord3">
      <p className="pl-10 text-nord6">Lore</p>
      <div className="flex pr-10">
        <p>Picture</p>
        <p>Brandon</p>
      </div>
    </header>
  );
}

export default TopBarNav;
