import Menu from "../../component/template/menu/Menu"

function MenuPage({ data }) {

    return (
        <Menu data={data} />
    )

}

export default MenuPage



export async function getStaticProps() {
    const res = await fetch(process.env.BASE_URL);
    const data = await res.json();

    return {
        props: { data },
        revalidate: 10,
    }
}
