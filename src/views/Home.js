import React, { useState, useEffect } from "react";

//components
import { CharacterCard } from "../components/characters";
import AppLoader from "../components/shared/AppLoader";

//helpers
import { fetchCharacters } from "../helpers/api";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const data = await fetchCharacters();
        console.log(data);
        setCharacters(data);
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
      <div className="text-center mt-5 mb-4">
        <h2 className="text-lead">Harry Porter </h2>
        <p className="text-muted">Browse your favourite characters.</p>
      </div>

      {loading ? (
        <AppLoader />
      ) : (
        <div className="row mt-5">
          {characters?.map((each) => (
            <div className="col-md-3" key={each.slug}>
              <CharacterCard character={each} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
