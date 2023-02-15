import React from "react";
import CardMentors from "../components/CardMentors/CardMentors";
import ShowCard from "../components/ShowCard/ShowCard";
import css from "../styles/Mentors.module.css";

function Mentors() {
  return (
    <div className="container m-auto pt-5 columns-2 bg-red-500 justify-center">
      <div>
        <ShowCard />
      </div>
      <div className="bg-yellow-400">
        <CardMentors />
      </div>
    </div>
  );
}

export default Mentors;
