import {useState} from 'react'

function Libro(props){
let [stock, setStock] = useState(3)

    return(
        <div className="card">
            <img src={props.libro.formats['image/jpeg']} alt={props.libro.title}/>
            <div className="container">
                {props.libro.authors.map((autor)=><h4>{autor.name}</h4>)}
            </div>
            <p>{stock>0 ? "Stock:" + stock : "No hay stock"}</p>
            {stock>0 ? <button onClick={()=>setStock(--stock)}>Comprar</button> : ""}
        </div>
    )
}

export default Libro