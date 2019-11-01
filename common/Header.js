import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return `
        <header>
            <h1>Pokédex</h1>
            <nav>
                <a href="./">HOME</a>
                <a href="pokedex.html">POKÉDEX</a>
            </nav>
        </header>
        `;
    }
}

export default Header;