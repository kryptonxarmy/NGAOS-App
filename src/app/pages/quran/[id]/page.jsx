"use client";

import { useParams, useSearchParams } from "next/navigation";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

function SurahPage() {
  const { id } = useParams(); // Get the query parameter from the URL

  const [surahData, setSurahData] = useState(null);

  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const res = await axios.get(`https://apimuslimify.vercel.app/api/v1/surah/${id}`);
        setSurahData(res.data);
      } catch (error) {
        console.error("Error fetching surah data:", error.message);
      }
    };

    if (id) {
      fetchSurahData();
    }
  }, [id]);

  if (!surahData) {
    return <div>Loading...</div>;
  }

  console.log(surahData);

  return (
    <div className="bg-green-700 min-h-screen max-w-screen text-white pt-6">
      <div className="px-4">
        <FontAwesomeIcon onClick={() => (window.location.href = "/pages/quran")} className="text-3xl hover:cursor-pointer" icon={faArrowLeft} />
        <h1 className="text-3xl font-bold mb-6 text-center">{surahData.data.nama_surah}</h1>
      </div>
      <div className="flex flex-col gap-3 px-4">
        <div className="w-full h-[2px] bg-white"></div>

        {surahData ? (
          surahData.data.data.map((data, i) => {
            return (
              <div key={i} className="w-full space-y-3">
                <p className="text-3xl text-end">{data.text}</p>
                <div>
                  <p>{data.terjemahan}</p>
                </div>
                <div className="w-full h-[2px] bg-white"></div>
              </div>
            );
          })
        ) : (
          <p>Loading..........</p>
        )}
      </div>
    </div>
  );
}

export default SurahPage;
