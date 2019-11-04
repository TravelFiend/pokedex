import Component from '../Component.js';

class Search extends Component{
    onRender(form){
       // const searchForm = el.querySelector('input[name=search]');
       // const searchDrop = el.querySelector('select'); //options instead??********************************
        
        //function updateControls() {
        //     const queryStr = window.location.hash.slice(1);
        //     const searchParams = new URLSearchParams(queryStr);

        //     searchForm.value = searchParams.get('results') || '';

        //     const type = searchParams.get('type');
        //     if (type){
                
        //         searchDrop.selected = searchDrop.value === type;
        //     }
        // }
        // updateControls();
    
        // window.addEventListener('hashchange', () => {q
        //     updateControls();
        // });
        //}

        form.addEventListener('submit', () => {
            event.preventDefault();
            const formData = new FormData(form);
            
            const queryStr = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryStr);
            searchParams.set('pokemon', formData.get('search'));
           // searchParams.set('pokemon', formData.get('search'));

            // searchParams.set('s', formData.get('search'));
           // searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }  

    renderHTML(){
        return /*html*/ `
            <form action="" id="search-box">
                <div class="search-drop">
                    <p>Search by:</p>
                    <select name="search-by" id="search-by">
                        <option value="y">name</option>
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