import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const { name, slug, image } = character ?? {};

  return (
    <div className="card mb-4 box-shadow">
      <Link to={`/character/${slug}`}>
        <img className="card-img-top" src={image} alt={name} />
      </Link>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <p className="card-text card-title">
            <Link to={`/character/${slug}`}>{name} </Link>
          </p>

          <div className="btn-group">
            <Link to={`/character/${slug}`}>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
