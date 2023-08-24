import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Adopter from "./Adopter";

const Dyrhosos = () => {
    const [animals, setAnimals] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    // <img src={data.image.url} alt="medarbejder" />

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
                            <Link className="" to={`/Detaljer/${data.id}`}>
                                <article
                                    className="articleAnimal"
                                    key={data.id}
                                >
                                    <img
                                        className="cover animalImg"
                                        src={data.asset.url}
                                        alt={data.name}
                                    />
                                    <div className="">
                                        <h3 className="">{data.name}</h3>
                                        <p className="">{data.description}</p>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Dyrhosos;
