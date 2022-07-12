function Cabecera(props){
    return(
        <header>
            <h1>Bilbioteca El señor de los librillos</h1>
            <div className="header__container">
                <p>{props.biblioteca.usuario.vip ? "Nos encanta volver a verte," + props.biblioteca.usuario.nombre : props.biblioteca.usuario.nombre}</p>
                <img src={props.biblioteca.usuario.imagen} alt={props.biblioteca.usuario.nombre}/>
            </div>
        </header>
    )
}

export default Cabecera