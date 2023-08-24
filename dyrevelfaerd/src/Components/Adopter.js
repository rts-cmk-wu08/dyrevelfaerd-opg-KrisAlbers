import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Adopter = () => {
    const [contents, setContents] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/adoptsections/3`)
            .then((response) => response.json())
            // .then((data) => console.log(data))
            .then((data) => setContents(data))
            .catch(() => setError("Something went wrong"))
            .finally(() => setLoading(false));
    }, []);

    return loading ? (
        <p>loading...</p>
    ) : (
        <>
            <div className="header">
                <img
                    className="heroImg"
                    src={contents.asset.url}
                    alt={contents.title}
                />
                <div className="heroTextContainer">
                    <h3 className="whiteText">{contents.title}</h3>
                    <p className="whiteText containerContent80">{contents.content}</p>
                </div>
            </div>
        </>
    );
};

export default Adopter;
