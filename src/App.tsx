import {useEffect} from "react"
import {gql, useQuery} from "@apollo/client"
import { client } from "./lib/apollo"


const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id,
      title
    }
  }
`


interface Lesson{
  id: string,
  title: string
}

function App() {

  //FETCHING DATAS CAN BE DONE LIKE THIS
  // useEffect(()=> {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {
  //     console.log(response.data)
  //   })
  // }, [])


  //OR LIKE THIS

  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

 
  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
