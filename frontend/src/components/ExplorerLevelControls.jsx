import { Button } from "reactstrap";
import styles from "../pages/ExplorerPage.module.css";

export default function ExplorerLevelControls({ level, setLevel }) {
    return (
        <>
            <Button
                color={level === 1 ? "primary" : "light"}
                className={styles.levelButton}
                onClick={() => setLevel(1)}
            >
                Level 1: Chromosome Territories
            </Button>

            <Button
                color={level === 2 ? "primary" : "light"}
                className={styles.levelButton}
                onClick={() => setLevel(2)}
            >
                Level 2: A/B Compartments
            </Button>

            <Button
                color={level === 3 ? "primary" : "light"}
                className={styles.levelButton}
                onClick={() => setLevel(3)}
            >
                Level 3: TAD Interactions
            </Button>
        </>
    );
}
