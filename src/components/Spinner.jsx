import { ImSpinner9 } from "react-icons/im";
import styles from './Spinner.module.css'

export default function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner9 className={styles.spinning} size={100} />
        </div>
    );
}
