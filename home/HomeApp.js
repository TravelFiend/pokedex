import Component from '../Component.js';
import Header from '../common/Header.js';

const hotBod = document.querySelector('body');

class HomeApp extends Component {
    onRender() {
        const header = new Header();
        hotBod.prepend(header.renderDOM());
    }

    renderHTML() {
        return `
            <div class="container"></div>
        `;
    }
}

export default HomeApp;