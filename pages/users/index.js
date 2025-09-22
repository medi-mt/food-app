import Link from "next/link";

export default function Users(props) {
    const { data } = props
    return (
        <div>
            <ul style={{ listStyle: "none", color: "red" }}>
                {data.map(user =>
                    <Link href={`/users/${user.id}`}>
                        <li key={user.id}>
                            {user.firstName}
                        </li>
                    </Link>
                )}
            </ul>
        </div>
    )
}


export async function getStaticProps() {

    const data = await fetch("https://dummyjson.com/users");
    const users = await data.json()

    return {
        props: {
            data: users.users
        }
    }

}
