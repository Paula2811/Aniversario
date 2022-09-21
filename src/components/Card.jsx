import React from "react";
import foto from "../fotos/perfil.png"
import './Card.css'

const Card = () => {
    return (
        <div className="div">
            <div className="titulo">
                <h1>Feliz Primer Año Juntos 🎉​</h1>
                <p className="texto"> Todo comenzo por aquellas llamadas por discord y despues de salir casi todos los días, el 3 de octubre nos pusimos de novios! Ya hace un año que estamos juntos y cada día que pasa te amo un poquito más 🥰​. Son inumerables las cosas que amo de vos y no podria poner en palabras lo mucho que te amo! Gracias por cada momento a tu lado, por cada risa, por ayudarme en todo, por cuidarme, por apoyarme en todas mis locuras. Gracias de verdad por este año! Te Amo 💕 </p>
            </div>
            <img src={foto} alt="" className="imagen" />
        </div>
    )
}

export default Card;
