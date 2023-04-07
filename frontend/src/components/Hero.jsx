import React from "react";
import Lottie from "lottie-react";
import pagejaune from "../pagejaune.json";
export default function Hero() {
  return (
    <div>
      <div className="container m-auto ">
        <div className="flex justify-around">
          <p className="w-700 mt-44 leading-7 text-center text-xl  font-normal">
            Les Pages Jaunes sont l'outil de recherche idéal pour trouver
            rapidement des entreprises et des professionnels locaux dans votre
            région. Notre annuaire en ligne vous donne accès à des milliers de
            coordonnées d'entreprises, ainsi que des informations détaillées sur
            leurs produits et services. Avec les Pages Jaunes, vous pouvez
            facilement trouver les meilleures options pour répondre à vos
            besoins, et explorer de nouvelles entreprises dans votre région.
            C'est le moyen le plus simple de trouver les meilleurs
            professionnels locaux gratuitement.
          </p>
          <div className="w-500 h-36">
            <Lottie animationData={pagejaune} />
          </div>
        </div>
      </div>
      <div className="bg-black mt-48">
        <div className="container m-auto h-24 flex justify-center items-center">
          <p className="text-white  border-b-4 inline-block border-yellow-300 text-2xl">
            Les activités les plus demandées
          </p>
        </div>
      </div>
    </div>
  );
}
