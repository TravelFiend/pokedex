import Component from '../Component.js';


class PokeCard extends Component{
    renderHTML(){
        const card = this.props.card;

        return /*html*/`
            <li class="poke-cards">
                <div class="card-top">
                    <img class="card-img" src="${card.url_image}" alt="">
                </div>
                <div class="info">
                    <h2>${card.pokemon}</h2>
                    <p class="attributes">Type: <span id="type">${card.type_1}</span></p>
                    <p class="attributes">Attack: <span id="attack">${card.attack}</span></p>
                    <p class="attributes">Defense: <span id="defense">${card.defense}</span></p>
                </div>
            </li>
        `;
    }
}

export default PokeCard;