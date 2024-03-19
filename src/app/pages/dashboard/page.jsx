"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsPraying, faHouse, faLayerGroup, faTrashCan, faClock } from "@fortawesome/free-solid-svg-icons";
import HijriDate from "../../component/HijriahDate";
import fajr from "/public/icons/fajr.svg";
import dhuhur from "/public/icons/dhuhur.svg";
import ashar from "/public/icons/ashar.svg";
import maghrib from "/public/icons/maghrib.svg";
import isya from "/public/icons/isya.svg";
import CollapseDropdown from "@/app/component/CollapseDropdown";
import masjid from "../../../../public/masjid-siluet.png";
import axios from "axios";
import { data } from "autoprefixer";

function Page() {
  const [popUp, setPopUp] = useState(false);
  const [imsakiyah, setImsakiyah] = useState(null);
  const [nowImsak, setNowImsak] = useState([]);

  const dataImsakiyah = [
    // { name: "Imsak", icon: fajr },
    { name: "Subuh", icon: fajr },
    { name: "Dzuhur", icon: dhuhur },
    { name: "Ashar", icon: ashar },
    { name: "Maghrib", icon: maghrib },
    { name: "Isya", icon: isya },
  ];

  const dataKegiatan = [
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
  ];

  const PopUp = () => {
    return (
      <div className="h-screen w-screen bg-[#00000086] absolute z-40 flex justify-center items-center">
        <div className="px-4 py-6 bg-white rounded-xl mx-auto flex flex-col items-center pt-8">
          <CollapseDropdown />
          <button onClick={handlePopUpChange} className="bg-green-400 rounded-md px-3 py-2">
            kembali
          </button>
        </div>
      </div>
    );
  };
  // ----------------------------- FETCH API IMSAKIYAH ----------------

  const getImsakiyah = async () => {
    try {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, "0");
      const longitude = localStorage.getItem("longitude");
      const latitude = localStorage.getItem("latitude");
      const response = await axios.get(`https://waktu-sholat.vercel.app/prayer?latitude=${latitude}&longitude=${longitude}`);
      setImsakiyah(response.data.prayers[day - 1]);
      localStorage.setItem("city", response.data.name);
      localStorage.setItem("prov", response.data.province.name);
    } catch (error) {
      console.error("Error fetching imsakiyah:", error);
    }
  };

  // ----------------------------- FETCH API IMSAKIYAH ----------------
  console.log("imsakiyah : ", imsakiyah);

  const handlePopUpChange = () => {
    getImsakiyah();
    setPopUp(false);
  };

  useEffect(() => {
    getImsakiyah();
    setNowImsak(imsakiyah);
  }, []);

  return (
    <>
      {popUp ? <PopUp /> : null}
      <div className="max-w-screen bg-green-700 text-white">
        <div className="flex h-[50dvh] flex-col justify-between px-6 pt-4 pb-6">
          <HijriDate popUp={popUp} setPopUp={setPopUp} />
          <div className="text-center relative z-20">
            <h1 className="font-bold text-6xl">17 : 16</h1>
            <p className="font-light">5 Minutes left to Maghrib</p>
          </div>

          <div className="flex gap-6 self-center z-10">
            {imsakiyah != null ? (
              <>
                {dataImsakiyah.map((data, index) => {
                  const timeEntry = Object.entries(imsakiyah.time).find(([key]) => key.toLowerCase() === data.name.toLowerCase());
                  const time = timeEntry ? timeEntry[1] : null;

                  return (
                    <div key={index} className="flex flex-col gap-1">
                      <p className="text-center">{data.name}</p>
                      <Image className="mx-auto" src={data.icon} height={27} width={27} alt="icon" />
                      <p className="text-center">{time}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
        <Image src={masjid} height={150} width={500} alt="masjid" className="absolute translate-y-[-80%] z-0 opacity-30 md:w-[60vw] md:translate-x-[20%]" />
        <div className="bg-white flex flex-col text-black rounded-t-[39px] p-6 relative z-10">
          <h1 className="font-bold text-2xl mb-4">All Features</h1>
          <div className="flex justify-between text-center items-center font-bold mb-6">
            <div className="bg-red-400">
              <FontAwesomeIcon icon={faHouse} className=" size-10 mx-auto text-white bg-green-700 rounded-xl p-3" />
              <h1 className="font-bold">Quran</h1>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} className="size-10 mx-auto text-white bg-green-700 rounded-xl p-3" />
              <h1>Imsakiyah</h1>
            </div>
            <div>
              <FontAwesomeIcon icon={faHandsPraying} className="size-10 mx-auto text-white bg-green-700 rounded-xl p-3" />
              <h1>Doa Harian</h1>
            </div>
            <div>
              <FontAwesomeIcon icon={faLayerGroup} className="size-10 mx-auto text-white bg-green-700 rounded-xl p-3" />
              <h1>All</h1>
            </div>
          </div>
          <h1 className="font-bold text-2xl mb-3">Kegiatanku</h1>
          <div className="bg-green-700 rounded-xl p-4">
            {dataKegiatan.map((data, index) => {
              return (
                <>
                  <div key={index} className="flex my-2 text-white">
                    <input type="checkbox" className="size-6 m-auto rounded-sm border-2 border-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.08)" }} />
                    <div className="w-full ml-3">
                      <h1>{data.nama}</h1>
                      <p>{data.time}</p>
                    </div>
                    <FontAwesomeIcon icon={faTrashCan} className="size-8 my-auto text-white" />
                  </div>
                  <div className="h-[2px] w-full bg-white"></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
