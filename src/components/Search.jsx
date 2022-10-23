import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuery } from "../hoocks/UseQuery";

export default function Search() {
    const query = useQuery();
    const search = query.get("search");
    const [seachText, setSerchText] = useState("");
    const history = useNavigate();

    useEffect(() => {
        setSerchText(search || "");
    }, [search]);
    const handlerSubmit = (e) => {
        e.preventDefault();
        history(`/?search=${seachText}`);
        setSerchText("");
    };

    return (
        <form className={styles.form} onSubmit={handlerSubmit}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="text"
                    value={seachText}
                    onChange={(e) => setSerchText(e.target.value)}
                />
                <button className={styles.button} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}
