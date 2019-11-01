import Component from '../Component.js';


class PokeCard extends Component{
    renderHTML(){
        return /*html*/`
            <li class="poke-cards">
                <div class="card-top">
                    <img class="card-img" src="../assets/pikachu.jpg" alt="">
                </div>
                <div class="info">
                    <h2>Pikachu</h2>
                    <p class="attributes">Type: <span id="type"></span></p>
                    <p class="attributes">Attack: <span id="attack"></span></p>
                    <p class="attributes">Defense: <span id="defense"></span></p>
                </div>
            </li>
        `;
    }
}

export default PokeCard;