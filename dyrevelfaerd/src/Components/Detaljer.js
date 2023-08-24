import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Detaljer = () => {
    const [animal, setAnimal] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const { id } = useParams();
    // const [open, setOpen] = useState();

    console.log(animal);

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/animals/${id}`)
            .then((response) => response.json())
            .then((data) => setAnimal(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <p>loading...</p>
    ) : (
        <>
            <article className="containerContent80">
                <h2>Her er {animal.name}</h2>
                <img
                    className="cover"
                    src={animal.asset.url}
                    alt={animal.name}
                />
                <p>Den er {animal.age}</p>
                <p>{animal.description}</p>
                <p>Har været her siden {animal.asset.createdAt}</p>
                <p>Vil du besøge {animal.name} så ring til os på tlf. 99 99 99 99</p>
            </article>
        </>
    );
};

export default Detaljer;
