import Card from "../../module/card/Card";
import styles from "./Menu.module.css"

function Menu({ data }) {

    return (
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {data.map((food) => (
                    <Card key={food.id} {...food} />
                ))}
            </div>
        </div>
    )
}

export default Menu;

