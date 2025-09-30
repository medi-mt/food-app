import CategoryPage from '../../component/template/categoryPage/CategoryPage'

function Category() {
  return (
    <div>
      <CategoryPage />
    </div>
  )
}

export default Category


export async function getServerSideProps(context) {

  const { difficulty, time } = context.query

  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();

  const filterData = data.filter(item => {

    const resDifficulty = item.details.filter(details =>  details.Difficulty === difficulty)
    console.log(resDifficulty);

  })


  return {
    props: {}
  }
}