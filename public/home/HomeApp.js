import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {
    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div class="container">
                <p>You are home, check out <a href="./pokedex.html">our Pokédex</a>!</p>
            </div>
        `;
    }
}

export default HomeApp;