import Component from '../Component.js';
import PokeCard from './PokeCard.js';

class PokeList extends Component{
    onRender(el){
        const pokeCards = this.props.pokeCards;

        pokeCards.forEach(card => {
            const props = { card: card };
            const pokeCard = new PokeCard(props);
            el.prepend(pokeCard.renderDOM());
        });
    }

    renderHTML(){
        return /*html*/`
            <ul></ul>
        `;
    }
}

export default PokeList;