import Component from '../Component.js';
import Header from '../common/Header.js';
import Search from './Search.js';
import Sort from './Sort.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';
import { getPokemon } from '../services/pokedex-api.js';

class PokedexApp extends Component {
    async onRender(el){
        const header = new Header();
        el.prepend(header.renderDOM());

        const searchSection = el.querySelector('.search');
        const search = new Search();
        searchSection.appendChild(search.renderDOM());

        const sortSection = el.querySelector('.sort');
        const sort = new Sort();
        sortSection.prepend(sort.renderDOM());

        const cardSection = el.querySelector('.cards');
        const pokeList = new PokeList({ pokeCards: [] });     
        cardSection.prepend(pokeList.renderDOM());

        async function loadPokemon() {
            const response = await getPokemon();
            
            const pokeCards = response.results;
            pokeList.update({ pokeCards: pokeCards });
        }

        loadPokemon();
        
        const paging = new Paging();
        cardSection.prepend(paging.renderDOM());

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });
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