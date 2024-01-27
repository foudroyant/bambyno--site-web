import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
         
         
          <p className="mb-4">
            <strong className="font-medium">Bambyno</strong> est un développeur FullStack Web & Mobile qui propose 
            un accompagnement aux entréprises et particuliers dans la digitalisation de leurs produits et services.
          </p>
          {
            /*
         
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          */
          }
          <p className="text-gray-400">©{new Date().getFullYear()} - Bambyno</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Applications</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Horizon Santé
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Edu Promo
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Satrt Book Hub
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              RPCH-Booking
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Produits</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Formations Web Design
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Collections PSD
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Livres Marketing
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Logiciels
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Services</p>
          <ul className="text-black-500">
          <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
             <Link href="https://comeup.com/fr/@foudroyant"> Mes services Comeup</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://comeup.com/fr/service/368015/creer-votre-extension-chrome">Extension Chrome</Link>
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="https://comeup.com/fr/service/352198/creer-votre-application-android-et-ios">Application Mobile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
