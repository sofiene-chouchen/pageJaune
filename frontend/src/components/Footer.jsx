import React from "react";
import logo from "../images/logo.png";
export default function Footer() {
  return (
    <div className="container m-auto my-10 grid gap-4 grid-cols-4 border-b  border-black pb-10">
      <div className="col-span-2">
        <img src={logo} alt="logo" className="w-40 pb-6" />
        <p className="text-xl w-700">
          La société « Editions Techniques Spécialisées, E.T.S.» est une
          entreprise privée, crée en 1978 et dont l'activité principale est
          l'édition de l'annuaire économique « Pages Jaunes de Tunisie® »qui
          englobe toutes les activités professionnelles, industrielles,
          commerciales et artisanales.
        </p>
      </div>
      <div>
        <p className="text-2xl pb-3">PagesJaunes</p>
        <p className="text-xl my-2 pl-2 hover:underline">A propos</p>
        <p className="text-xl my-2 pl-2 hover:underline">Inscription</p>
        <p className="text-xl my-2 pl-2 hover:underline">
          Espaces publicitaires
        </p>
        <p className="text-xl my-2 pl-2 hover:underline">
          Rejoignez PagesJaunes
        </p>
        <p className="text-xl my-2 pl-2 hover:underline">Infos Cookies</p>
        <p className="text-xl my-2 pl-2 hover:underline">Mentions légales</p>
      </div>
      <div className="">
        <p className="text-2xl pb-3">Activités</p>
        <p className="text-xl my-2 pl-2 hover:underline">Avocats</p>
        <p className="text-xl my-2 pl-2 hover:underline">Restaurants</p>
        <p className="text-xl my-2 pl-2 hover:underline">Agences de voyages</p>
        <p className="text-xl my-2 pl-2 hover:underline">Hotels</p>
        <p className="text-xl my-2 pl-2 hover:underline">Pharmaciens de nuit</p>
        <p className="text-xl my-2 pl-2 hover:underline">Automobiles</p>
        <p className="text-xl my-2 pl-2 hover:underline">Banques</p>
        <p className="text-xl my-2 pl-2 hover:underline">
          Cafes - Etablissements
        </p>
        <p className="text-xl my-2 pl-2 hover:underline">Électricien</p>
      </div>
    </div>
  );
}
