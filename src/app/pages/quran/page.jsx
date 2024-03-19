"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Quran() {
  const [surahList, setSurahList] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const getSurahList = async () => {
      try {
        const res = await axios.get("https://apimuslimify.vercel.app/api/v1/surah");
        setSurahList(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getSurahList();
  }, []);

  const handleSurahClicked = (id) => {
    router.push(`quran/${id}`);
  };

  return (
    <>
      <div className="max-w-screen bg-green-700 text-white p-4">
        <h1 className="font-bold text-4xl">Quran</h1>
        <div className="mt-6 flex flex-col gap-3">
          {surahList != null
            ? surahList.data.map((data) => {
                return (
                  <div key={data.nomor_surah} onClick={() => handleSurahClicked(data.nomor_surah)} className="flex gap-3 items-center hover:cursor-pointer hover:bg-green-400">
                    <h1 className="font-bold text-4xl">{data.nomor_surah}</h1>
                    <div className="flex justify-between w-full items-center">
                      <div>
                        <h1 className="font-bold text-xl">{data.nama_latin}</h1>
                        <p>
                          {data.arti} - {data.jumlah_ayat} ayat
                        </p>
                      </div>
                      <h1 className="text-2xl">{data.nama_surah}</h1>
                    </div>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </>
  );
}

export default Quran;
