import Component from '../Component.js';

class Search extends Component{
    renderHTML(){
        return /*html*/ `
            <div class="your-ma">
                <div class="search-drop">
                    <p>Search by:</p>
                    <select name="search-by" id="search-by">
                        <option value="name">name</option>
                        <option value="type">type</option>
                        <option value="attack">attack</option>
                        <option value="defense">defense</option>
                    </select>
                </div>
                <form action="" id="search-box">
                    <input type="text" placeholder="search...">
                    <button type="submit" form="search-box" value="submit">&#x1f50d;</button>
                </form>
            </div>
        `;
    }
}

export default Search;