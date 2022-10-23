import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useQuery } from "../hoocks/UseQuery";

export default function Search() {
    const query = useQuery();
    const search = query.get("search");
   
    const history = useNavigate();

    const handlerSubmit = (e) => {
        e.preventDefault();
        
    };

    

    return (
        <form className={styles.form} onSubmit={handlerSubmit}>
            <div className={styles.container}>
                <input
                    className={styles.input}
                    type="text"
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        history(`/?search=${value}`)
                    }}
                />
                <button className={styles.button} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    );
}
