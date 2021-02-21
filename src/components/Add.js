import React,{useState} from 'react'
import Resultshow from './resultshow';

const Add = () => {
  const[query,setQuery]=useState("")
  const [results, setResults] = useState([]);

 const onChange=e=>{
    e.preventDefault()
    setQuery(e.target.value)

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${'297d2c02772b33f6b9be726baa154e2b'}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });

    console.log(results)
  }
  

  
  return (
    <>
    <div >
    <input type="text" value={query} className="form-control w-50 m-5" placeholder="search for movie " onChange={onChange} />
    </div>
    {  (
            <ul className="results">
              {results.length>0 && results.map((movie) => (
                <li key={movie.id}>
                  <Resultshow movie={movie} />
                </li>
              ))}
            </ul>
          )}
    </>
  )
}

export default Add
