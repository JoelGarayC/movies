import React from 'react';
import Pelicula from './components/Pelicula';
import DataJson from './data.json';

function AppPeliculas() {

    const data = DataJson;
    // console.log(data);

    // const buscarPelicula = async () => {
    //     let url = 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json'

    //     let res = await fetch(url,{
    //         "method": 'GET',
    //         "headers":{
    //             "Accept":'application/json',
    //             "Content-Type":'application/json',
    //             "Origin": 'https://lucasmoy.dev/'
    //         }
    //     });

    //     let json = await res.json();
    //     console.log(json);
    //     debugger
    // }
    // buscarPelicula();

    return (
        <>
            <h1>Peliculas</h1>
            <div className='peliculas'>
                {data.map((p) => {
                    return(

                        <Pelicula 
                            key={Math.random()}
                            titulo={p.titulo}
                            calificacion={p.calificacion}
                            duracion={p.duracion}
                            director={p.director}
                            actores={p.actores}
                            fecha={p.fecha}
                            img={p.img}
                        >
                            {p.descripcion}
                        </Pelicula>

                    )
                })}
            </div>   
        </>
    )
    }

export default AppPeliculas