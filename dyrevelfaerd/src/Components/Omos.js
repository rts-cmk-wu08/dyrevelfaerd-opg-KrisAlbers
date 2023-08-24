import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Omos = () => {
    const [animals, setAnimals] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    // <img src={data.image.url} alt="medarbejder" />

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/abouts`)
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
            <div className="containerBody">
                <section className="containerContent flex">
                    {animals.map((data) => (
                        <article className="articleOmos" key={data.id}>
                            <h3 className="">{data.title}</h3>
                            <p className="">{data.content}</p>
                        </article>
                    ))}
                </section>
            </div>
        </>
    );
};

export default Omos;
