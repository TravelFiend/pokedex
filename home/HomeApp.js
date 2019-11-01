import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {
    onRender(el) {
        const header = new Header();
        el.prepend(header.renderDOM());
    }

    renderHTML() {
        return `
            <div class="container"></div>
        `;
    }
}

export default HomeApp;