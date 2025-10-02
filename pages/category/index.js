import CategoryPage from '../../component/template/categoryPage/CategoryPage'

function Category({ data }) {
  return (
    <div>
      <CategoryPage data={data} />
    </div>
  )
}

export default Category


export async function getServerSideProps(context) {

  const { difficulty, time } = context.query

  const res = await fetch(process.env.BASE_URL);
  const data = await res.json();

  const filterData = data.filter(item => {

    const resDifficulty = item.details.filter(details => details.Difficulty && details.Difficulty === difficulty)

    const resTime = item.details.filter(details => {

      const cookingTime = details["Cooking Time"] || ""
      const [splitTime] = cookingTime.split(" ")
      if (time == "less" && +splitTime <= 30) {
        return details
      } else if (time == "more" && +splitTime > 30) {
        return details
      }

    })


    if (difficulty && time && resDifficulty.length && resTime.length) {
      return item
    } else if (difficulty && !time && resDifficulty.length) {
      return item
    } else if (resTime && !resDifficulty && resTime.length) {
      return item
    }

  })


  return {
    props: { data: filterData }
  }
}