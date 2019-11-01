import Header from '../common/Header.js';
import Component from '../Component.js';

class PokedexApp extends Component {

    onRender(el){
        const header = new Header();
        el.prepend(header.renderDOM());
    }

    renderHTML(){
        return `
            <div class="container"></div>
        `;
    }
}

export default PokedexApp;