import Component from '../Component.js';
import PokeCard from './PokeCard.js';

class PokeList extends Component{
    onRender(el){
        const pokeCard = new PokeCard();
        el.prepend(pokeCard.renderDOM());
    }

    renderHTML(){
        return /*html*/`
            <ul>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
                <li class="poke-cards"></li>
            </ul>
        `;
    }
}

export default PokeList;