import Banner from "../../module/banner/Banner"
import Attributes from "../../module/attributes/Attributes"
import Definition from "../../module/definition/Definition"
import Companies from "../../module/companies/Companies"
import Instruction from "../../module/instruction/Instruction"
import Guide from "../../module/guide/Guide"
import Restrictions from "../../module/restrictions/Restrictions"
import styles from "./HomePage.module.css"

function HomePage() {

    return (
        <div className={styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restrictions />
        </div>
    )
}

export default HomePage


