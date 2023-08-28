import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Adopter from "./Adopter";

const Dyrhosos = () => {
    const [animals, setAnimals] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/animals`)
            .then((response) => response.json())
            //  .then((data) => console.log(data))
            .then((data) => setAnimals(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <p>loading...</p>
    ) : (
        <>
            <Adopter />
            <div className="containerBody">
                <section className="containerContent">
                    <h1 className="">Dyr hos os</h1>
                    <p className="">{animals.length} dyr</p>
                    <div className="containerAnimal">
                        {animals.map((data) => (
                            <article className="articleAnimal" key={data.id}>
                                <Link
                                    className="articleAnimal"
                                    to={`/Detaljer/${data.id}`}
                                >
                                    <img
                                        className="cover animalImg"
                                        src={data.asset.url}
                                        alt={data.name}
                                    />
                                    <div className="textAnimal">
                                        <h3 className="">{data.name}</h3>
                                        <p className="textAnimal">
                                            {data.description}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dyrhosos;
