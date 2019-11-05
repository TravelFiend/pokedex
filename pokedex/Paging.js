import Component from '../Component.js';

class Paging extends Component{
    onRender(el){
        const lastButt = el.querySelector('#last-page');
        const nextButt = el.querySelector('#next-page');

        let page = 1;

        const updateControls = () => {
            const queryStr = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryStr);
            const parsed = parseInt(searchParams.get('page'));

            if (typeof parsed !== 'number') {
                page = 1;
            } else {
                page = parsed;
            }
        };

        updateControls();

        window.addEventListener('hashChange', () => {
            updateControls();
        });

        const incPage = (inc) => {
            const queryStr = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryStr);
            searchParams.set('page', page + inc);

            window.location.hash = searchParams.toString();
        };

        lastButt.addEventListener('click', () => {
            incPage(-1);
        });

        nextButt.addEventListener('click', () => {
            incPage(1);
        });
    }

    renderHTML(){
        const totalResults = this.props.totalResults;
        const queryStr = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryStr);

        let page = 1;

        const parsed = parseInt(searchParams.get('page'));
        if (isNaN(parsed)){
            page = 1;
        } else {
            page = parsed;
        }

        const endPage = Math.ceil(totalResults / 20);

        return /*html*/`
            <div id="pages">
                <p>Page <span class="pageNum">${page}</span> of <span class="pageNum">${endPage}</span></p>
                <button class="page-button" id="last-page" ${page === 1 ? 'disabled' : ''}>&#8678;</button>
                <button class="page-button" id="next-page" ${page === endPage ? 'disabled' : ''}>&#8680;</button>
            </div>
        `;
    }
}

export default Paging;