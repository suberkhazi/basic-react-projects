import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/suberkhazi')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])



  return (
    <div className='p-4 m-4 bg-gray-600 text-center text-white text-3xl'>Followers : {data.followers} 
    <img src={data.avatar_url} alt="Github photo" width={250}/>
    </div>
  )
}

export default Github

export const  githubInfoLoader = async() => {
   const reponse =  await fetch('https://api.github.com/users/suberkhazi')
   return reponse.json()
}