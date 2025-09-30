import Link from "next/Link"
import style from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={style.header}>
                <div className={style.left}>
                    <Link href="/">FOOD</Link>
                </div>
                <div className={style.right}>
                    <Link href="/menu">menu</Link>
                    <Link href="category">categories</Link>
                </div>
            </header>
            <div className={style.container}>{children}</div>
            <footer className={style.footer}>
                Food
            </footer>
        </>
    )
}

export default Layout