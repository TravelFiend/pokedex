import Component from '../Component.js';

class Paging extends Component{
    renderHTML(){
        return /*html*/`
            <div id="pages">
                <p>Page <span id="current-page"></span> of <span id="total-pages"></span></p>
                <button class="page-button">&#8678;</button>
                <button class="page-button">&#8680;</button>
            </div>
        `;
    }
}

export default Paging;