import { useRouter } from "next/router";
import Details from "../../component/template/details/Details";

function DetailsFood({ data }) {

    const router = useRouter()

    if (router.isFallback) {
        return <h2>Loading ...</h2>
    }

    return (
        <div>
            <Details {...data} />
        </div>
    )
}

export default DetailsFood


export async function getStaticPaths() {

    const res = await fetch(process.env.BASE_URL);
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
    const res = await fetch(`${process.env.BASE_URL}/${params.id}`);
    const data = await res.json();


    if (!data.id) {
        return { notFound: true }
    }

    return {
        props: { data },
        revalidate: 10,
    }
}