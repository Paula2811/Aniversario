import React from "react";
import foto from "../fotos/perfil.png"
import './Card.css'

const Card = () => {
    return (
        <div className="div">
            <div className="titulo">
                <h1>Feliz Primer Año Juntos 🎉​</h1>
                <p className="texto"> Todo comenzó cuando nos unimos al canal de Nico de discord, yo para ver como jugaban y vos para jugar con ellos. Después de hablar todos los días decidimos vernos todos en persona! Como nos peleábamos jajaja me hiciste agarrar 26 cartas y me subiste las papitas para que no las pudiera agarrar, que malo que eras! Después  me invitaste a salir y fuimos a mc a comer, no se que me paso pero no pude ni terminar la hamburguesa. Estaba muy nerviosa!😬 Luego fuimos a mi casa y pasaron cosas jajaja y desde ahí nos empezamos a ver cada día de por medio y después casi todos los días. Y el 3 de octubre me pediste que fuera tu novia y te dije que no porque creí que estabas jugando 🤣 peeeerdon después al minuto te dije que sí. Muchas más cosas pasaron... nos fuimos de viaje, nos fuimos a vivir juntos 💕, fuimos al río, salimos a conocer cosas nuevas, etc. Cada día que pasa te amo un poquito más 🥰​. Son inumerables las cosas que amo de vos y no podria poner en palabras lo mucho que te amo! Gracias por cada momento a tu lado, por cada risa, por ayudarme en todo, por cuidarme, por apoyarme en todas mis locuras. Gracias de verdad por este año! Te Amo 💕 </p>
            </div>
            <img src={foto} alt="" className="imagen" />
        </div>
    )
}

export default Card;
