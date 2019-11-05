import Component from '../Component.js';

class Search extends Component{
    onRender(form){
        form.addEventListener('submit', () => {
            event.preventDefault();
            window.location.hash = '';
            const formData = new FormData(form);

            const queryStr = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryStr);

            const searchDrop = form.querySelector('select');
            const optVal = searchDrop.options[searchDrop.selectedIndex].value;
            searchParams.set(optVal, formData.get('search'));

            searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }  

    renderHTML(){
        return /*html*/ `
            <form id="search-box">
                <div class="search-drop">
                    <p>Search by:</p>
                    <select name="search-by" id="search-by">
                        <option value="pokemon">name</option>
                        <option value="type">type</option>
                        <option value="attack">attack</option>
                        <option value="defense">defense</option>
                    </select>
                </div>
                <div class="search-text">
                    <div>
                        <input type="text" placeholder="search..." name="search">
                    </div>
                    <button type="submit" form="search-box" value="submit">&#x1f50d;</button>
                </div>
            </form>
        `;
    }
}

export default Search;