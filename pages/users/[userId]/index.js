
function UserDetails({ user }) {

    return (
        <div style={{ textAlign: "center" }}>
            <h1>User Details Page</h1>
            <p>lastName:</p>
            {user.lastName}
            <hr />
            <p>Age:</p>
            {user.age}
            <hr />
            <p>Email:</p>
            {user.email}
            <hr />
            <p>Phone:</p>
            {user.phone}
        </div>
    )
}

export default UserDetails


export async function getStaticPaths() {

    const data = await fetch("https://dummyjson.com/users");
    const users = await data.json()
    const paths = users.users.map(user => (
        {
            params: { userId: user.id.toString()}
        }
    ))

    return {
        paths,
        fallback: false
    }

}


export async function getStaticProps(context) {

    const { params } = context
    const data = await fetch(`https://dummyjson.com/users/${params.userId}`)
    const user = await data.json()

    return {
        props: {
            user,
        }
    }
}  