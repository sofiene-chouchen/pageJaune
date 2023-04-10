import React from "react";

export default function Offre() {
  const containerStyle = {
    backgroundColor: "#FFE828",
  };
  return (
    <div className="  pb-24" style={containerStyle}>
      <div className="container m-auto">
        <div className="flex justify-center ">
          <div className="   text-3xl border-b-4 inline-block text-center mt-7">
            <p>Nous Offre</p>
          </div>
        </div>
        <div className="flex justify-around">
          <p className="w-700 mt-20 leading-7 text-center text-xl  font-normal">
            Bienvenue sur notre site web! Nous sommes heureux de vous offrir un
            moyen facile et pratique de rechercher des entreprises et des
            services dans votre région. Avec notre fonctionnalité de recherche
            par carte, vous pouvez rapidement trouver ce que vous cherchez en
            cliquant simplement sur la carte. Que vous recherchiez un
            restaurant, un cabinet médical ou un hôtel, notre recherche par
            carte facilite la recherche de ce dont vous avez besoin. Il suffit
            de zoomer sur la carte pour explorer différentes zones, ou
            d'utiliser la barre de recherche pour rechercher des entreprises ou
            des services spécifiques. Nous sommes là pour vous aider à trouver
            ce que vous cherchez, alors commencez votre recherche dès
            aujourd'hui !
          </p>
          <div className="w-500 h-36 mt-20 ">
            <img
              src="https://res.cloudinary.com/dif6os1pq/image/upload/v1681085907/pagejaune/map_1_v8c4dp.jpg"
              alt="maps"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
