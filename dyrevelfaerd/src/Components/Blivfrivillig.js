import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Blivfrivillig = () => {
    const [animals, setAnimals] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    // <img src={data.image.url} alt="medarbejder" />

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/volunteers`)
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
            <div className="containerBody bgBlue">
                <section className="containerContent">
                    <h2 className="frivilligH2">Bliv Frivillig</h2>
                    <div className="flex">
                        {animals.map((data) => (
                            <article
                                className="articleFriv bgWhite"
                                key={data.id}
                            >
                                <h3 className="">{data.title}</h3>
                                <img
                                    className="cover imgFrivillig"
                                    src={data.asset.url}
                                    alt={data.name}
                                />
                                <p className="">{data.content}</p>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Blivfrivillig;
