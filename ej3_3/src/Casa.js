import arrayCasas from "./casas";

function Casa(){
    return (arrayCasas.map((casa)=>
        <>
            <h4>{casa.calle}{casa.numero}</h4>
            <p>{casa.cp}, {casa.ciudad}</p>
        </>
    ))
}

export default Casa