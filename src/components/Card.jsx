import React from 'react'
import FavoriteSelect from '../components/FavoriteSelect'

export default function Card({stock}) {

    return (
        <section className="Card">
            <div>
                <h2>{stock.company}</h2>
                <p className="CardSubtext"><strong>Valor: $</strong>{stock.price}</p>
                <p className="CardSubtext"><strong>Variação: </strong>{stock.variation}</p>
                <FavoriteSelect/>
            </div>
                
        </section>
    )
}
