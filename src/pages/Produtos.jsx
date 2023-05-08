import Navbar from './Navbar'
import Footer from './Footer'
import gerbera from '/gerbera.jpg'
import girassol from '/girassol.jpg'
import lavanda from '/lavanda.jpg'
import lirio from '/lirio.jpg'
import margarida from '/margarida.jpg'
import orquideas from '/orquideas.jpg'
import rosas from '/rosas.jpg'
import tulipas from '/tulipas.jpg'
import React from "react";
import '../Reset.css'
import '../App.css'
const Flowers =
[
    {
        nome: "Gerbera",
        preco: "R$ 50,00",
        foto: gerbera
    },
    {
        nome: "Girassol",
        preco: "R$ 30,00",
        foto: girassol
    },
    {
        nome: "Lavanda",
        preco: "R$ 20,00",
        foto: lavanda
    },
    {
        nome: "Lirio",
        preco: "R$ 50,00",
        foto: lirio
    },
    {
        nome: "Margarida",
        preco: "R$ 40,00",
        foto: margarida
    },
    {
        nome: "Orquideas",
        preco: "R$ 70,00",
        foto: orquideas
    },
    {
        nome: "Rosas",
        preco: "R$ 40,00",
        foto: rosas
    },
    {
        nome: "Tulipas",
        preco: "R$ 50,00",
        foto: tulipas
    }
]
function Produtos() {
    return (
        <>
            <Navbar/>
            <div className='title'>
                <h1>Flores</h1>
                <p>Trazem mais alegria para o mundo</p>
            </div>
            <div className='Produtos'>
                    {Flowers.map(({nome, preco, foto}) => (
                        <div className='produto' key={nome}>
                            <img src={foto} alt="" />
                            <h2>{nome}</h2>
                            <p>{preco}</p>
                        </div>
                    ))
                    }
            </div>
            <Footer/>
        </>
    )
}

export default Produtos