import { Suspense, lazy } from 'react'
import LoadingImage from './LoadingImage'
const Image = lazy(() => import('./Image'))

const Pelicula = (props) => {
  return (
    <section>
      <Suspense fallback={<LoadingImage />}>
        <Image img={props.img} />
      </Suspense>
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
