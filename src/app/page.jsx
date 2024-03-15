import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <div className="bg-green-400 max-w-screen h-screen flex flex-col gap-6 items-center justify-center">
        <h1 className="text-center text-6xl font-bold italic">NGAOS</h1>
        <Link href="/pages/dashboard">
          <button className="px-3 py-2 bg-green-700 rounded-lg">Masuk</button>
        </Link>
      </div>
    </>
  );
}

export default page;
