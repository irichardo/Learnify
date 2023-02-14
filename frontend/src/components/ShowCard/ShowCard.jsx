import React from "react";
import style from "./ShowCard.module.css";

const ShowCard = ({ name, description, image, rating, networks, language }) => {
  return (
    <div className="w-1/2 bg-green-300">
      <div className="flex">
        <img
          src="https://img.freepik.com/foto-gratis/profesor-haciendo-leccion-ingles-linea-sus-alumnos_23-2148963017.jpg"
          alt="image"
          className={style.image}
        />
        <div className="ml-2.5 bg-blue-800">
          <h4>name</h4>
          <p>
            description
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <p className="items-end">Lenguaje</p>
        </div>
      </div>
      <div className="columns-2">
        <p>rating</p>
        <p>networks</p>
      </div>
    </div>
  );
};

export default ShowCard;
