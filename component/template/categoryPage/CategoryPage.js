import React, { useState } from 'react'
import styles from "./CategoryPage.module.css"
import { useRouter } from 'next/router'



function CategoryPage() {

    const [query, setQuery] = useState({ difficulty: "", time: "" })
    const router = useRouter()

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setQuery({ ...query, [name]: value });

    }


    const searchHandler = () => {

        router.push({
            pathname: "/category",
            query,
        })
    }


    return (
        <div>
            <div className={styles.container}>
                <h2>Categories</h2>
                <div className={styles.subContainer}>
                    <div className={styles.select}>
                        <select onChange={changeHandler} name="difficulty" >
                            <option value="">Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                        <select onChange={changeHandler} name="Time">
                            <option value="">Cooking Time</option>
                            <option value="more">More than 30 min</option>
                            <option value="less">Less than 30 min</option>
                        </select>
                        <button onClick={searchHandler}>Search</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoryPage