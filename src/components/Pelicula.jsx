import React from 'react'

const Pelicula = (props) => {
    return (
        <section>
            <figure>
                <img src={props.img} alt="" />
            </figure>
            <article>
                <div className='div1'>
                    <h3>{props.titulo}</h3>
                    <p className='clasificacion'>⭐{props.calificacion}/10</p>

                    <p>{props.children}</p>
                </div>
                <div>
                    <p>Duración: {props.duracion}</p>
                    <p>Fecha: {props.fecha}</p>
                    <p>Director: {props.director}</p>
                    <p>Actores: {props.actores}</p>
                </div>

            </article>
        </section>
    )
}

export default Pelicula