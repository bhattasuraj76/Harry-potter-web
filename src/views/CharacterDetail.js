import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

//components
import { CharacterNotFound } from "../components/characters";
import AppLoader from "../components/shared/AppLoader";

//helpers
import { fetchCharacterDetail } from "../helpers/api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState();
  const { slug } = useParams();
  const { name, image, dob, birthPlace } = character ?? {};

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacterDetail(slug);
        console.log(data);
        setCharacter(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  return (
    <div className="container">
      <div className="go-back my-5">
        <Link to="/">Go Back</Link>
      </div>

      {loading ? (
        <AppLoader />
      ) : (
        <>
          {character ? (
            <div className="row mt-5">
              <div className="col-md-4">
                <img src={image} alt={name} />
              </div>

              <div className="col-md-8">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <hr />
                    <p class="card-text">
                      {`${name} was born on ${dob} in ${birthPlace}.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <CharacterNotFound />
          )}
        </>
      )}
    </div>
  );
};

export default Home;
