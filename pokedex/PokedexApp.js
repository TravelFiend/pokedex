import Component from '../Component.js';
import Header from '../common/Header.js';
import Search from './Search.js';
import Sort from './Sort.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';

const pokeCards = [
    {
        pokemon: 'venusaur',
        type_1: 'grass',
        attack: 82,
        defense: 83,
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
    }
];

class PokedexApp extends Component {
    onRender(el){
        const header = new Header();
        el.prepend(header.renderDOM());

        const searchSection = el.querySelector('.search');
        const search = new Search();
        searchSection.appendChild(search.renderDOM());

        const sortSection = el.querySelector('.sort');
        const sort = new Sort();
        sortSection.prepend(sort.renderDOM());

        const cardSection = el.querySelector('.cards');
        const pokeList = new PokeList({pokeCards: pokeCards });     
        cardSection.prepend(pokeList.renderDOM());
        
        const paging = new Paging();
        cardSection.prepend(paging.renderDOM());
    }

    renderHTML(){
        return /*html*/`
            <div class="container">
                <section class="search"></section>
                <section class="sort"></section>
                <section class="cards"></section>
            </div>
        `;
    }
}

export default PokedexApp;