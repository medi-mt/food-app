
function DetailsFood(props) {
    console.log(props);
    return (
        <div>DetailsFood</div>
    )
}

export default DetailsFood


export async function getStaticPaths() {

    const res = await fetch("http://localhost:3001/data");
    const data = await res.json();
    const dataSlice = data.slice(0, 10)
    const paths = dataSlice.map(food => (
        { params: { id: food.id.toString() } }
    ))

    return {
        paths,
        fallback: true
    }

}


export async function getStaticProps(context) {
    const { params } = context
    const res = await fetch(`http://localhost:3001/data/${params.id}`);
    const data = await res.json();

    return {
        props: { data },
        revalidate: 10,
    }
}