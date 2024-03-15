import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import fajr from "/public/icons/fajr.svg";
import dhuhur from "/public/icons/dhuhur.svg";
import ashar from "/public/icons/ashar.svg";
import maghrib from "/public/icons/maghrib.svg";
import isya from "/public/icons/isya.svg";

import masjid from "../../../../public/masjid-siluet.png";

function page() {
  const dataImsakiyah = [
    { name: "Fajr", icon: fajr, time: "04:41" },
    { name: "Dhuhur", icon: dhuhur, time: "04:41" },
    { name: "Ashar", icon: ashar, time: "04:41" },
    { name: "Maghrib", icon: maghrib, time: "04:41" },
    { name: "Isya", icon: isya, time: "04:41" },
  ];

  const dataKegiatan = [
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
    { nama: "Shalat Subuh", time: "04.41" },
  ];
  return (
    <>
      <div className="max-w-screen bg-[#24C250] text-white">
        <div className="flex h-[50dvh] flex-col justify-between px-6 pt-4 pb-6">
          <div className="-ml-4 md:ml-0">
            <h1 className="font-bold text-lg">2 Ramadhan 1445 H</h1>
            <p className="font-light text-sm">Bojonegoro, Jawa Timur</p>
          </div>
          <div className="text-center relative z-20">
            <h1 className="font-bold text-6xl">17 : 16</h1>
            <p className="font-light">5 Minutes left to Maghrib</p>
          </div>

          <div className="flex gap-6 self-center z-10">
            {dataImsakiyah.map((data, index) => {
              return (
                <div key={index} className="flex flex-col gap-1">
                  <p className="text-center">{data.name}</p>
                  <Image className="mx-auto" src={data.icon} height={27} width={27} alt="icon" />
                  <p className="text-center">{data.time}</p>
                </div>
              );
            })}
          </div>
        </div>
        <Image src={masjid} height={150} width={500} alt="masjid" className="absolute translate-y-[-80%] z-0 opacity-30 md:w-[60vw] md:translate-x-[20%]" />
        <div className="bg-white flex flex-col text-black rounded-t-[39px] p-6 relative z-10">
          <h1 className="font-bold text-2xl mb-4">All Features</h1>
          <div className="flex justify-between text-center items-center font-bold mb-6">
            <div>
              <FontAwesomeIcon icon={faHouse} className="size-16 mx-auto text-white bg-green-400 rounded-xl p-3" />
              <h1 className="font-bold">Quran</h1>
            </div>
            <div>
              <FontAwesomeIcon icon={faHouse} className="size-16 mx-auto text-white bg-green-400 rounded-xl p-3" />
              <h1>Imsakiyah</h1>
            </div>
            <div>
              <FontAwesomeIcon icon={faHouse} className="size-16 mx-auto text-white bg-green-400 rounded-xl p-3" />
              <h1>Doa Harian</h1>
            </div>
            <div>
              <FontAwesomeIcon icon={faHouse} className="size-16 mx-auto text-white bg-green-400 rounded-xl p-3" />
              <h1>All</h1>
            </div>
          </div>
          <h1 className="font-bold text-2xl mb-3">Kegiatanku</h1>
          <div className="bg-[#24C250] rounded-xl p-4">
            {dataKegiatan.map((data, index) => {
              return (
                <>
                  <div key={index} className="flex my-2 text-white">
                    <input type="checkbox" className="size-6 m-auto rounded-sm border-2 border-white bg-blue-400" />
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

export default page;
