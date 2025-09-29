import Menu from "../../component/template/menu/Menu"

function MenuPage({ data }) {

    return (
        <Menu data={data} />
    )

}

export default MenuPage



export async function getStaticProps() {
    const res = await fetch("http://localhost:3001/data");
    const data = await res.json();

    return {
        props: { data },
        revalidate: 10,
    }
}
