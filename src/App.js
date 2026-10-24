import React , {useState , useEffect} from "react"
import './App.css'

// Objetivo: Criar um aplicativo que consome uma API pública de filmes/séries e exibe uma lista com título, sinopse e capa.

//api: https://api.sujeitoprogramador.com/r-api/?api=filmes



function App(){

 const [filmes , setFilmes] = useState([])

 useEffect(()=> {

   function loadApi(){
    
     let url = "https://api.tvmaze.com/shows"

     fetch(url)
     .then((r)=> r.json())
     .then((json)=> {
      console.log(json);
      setFilmes(json)
     })
    .catch((error)=>{
      console.log("Erro ao carregar")
    })
   }

   loadApi()

 } , [])
  

  return(
    <div className="container">


       <header className="header">
    
      <h1>Consumindo API</h1>
 
    <div className="nav">
      <a>Home</a>
      <a>Favoritos</a>
      <a>Sair</a>
   
  </div>
       </header>

             {filmes.map((item)=>{
            return (

                <article key = {item.id} className="post">

                   <h1>{item.name}</h1>
                   <img src = {item.image.medium}  />
                   <p>{item.summary}</p>



                </article>
            )
             })}
    </div>
  )
}

export default App;
