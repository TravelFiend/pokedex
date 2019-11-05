import Component from '../Component.js';

class Sort extends Component{
    renderHTML(){
        return /*html*/`
            <div class="your-pa">
                <p id="sort-text">Sort By: </p>
                <div class="radios">
                    <input type="radio" name="sort-options" value="name" id="name">
                    <label for="name">Name</label>
                </div>
                <div class="radios">
                    <input type="radio" name="sort-options" value="type" id="type">
                    <label for="type">Type</label>
                </div>
                <div class="radios">
                    <input type="radio" name="sort-options" value="attack" id="attack">
                    <label for="attack">Attack</label>
                </div>
                <div class="radios">
                    <input type="radio" name="sort-options" value="defense" id="defense">
                    <label for="defense">Defense</label>
                </div>
            </div>
        `;
    }
}

export default Sort;