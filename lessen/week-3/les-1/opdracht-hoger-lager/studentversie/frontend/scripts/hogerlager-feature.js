import {Model} from "./model.js";

const model = new Model();

class HogerLagerFeature{
    init(){
        console.log('HogerLagerFeature init');

        //#student-start
        this.eventListeners();
        //#student-end

    }

    eventListeners(){
        document.getElementById('form')
            .addEventListener('submit', this.submitGuess);
    }

    async submitGuess(event){
        event.preventDefault();

    //#student-start
    fetch ('http://localhost:3000/getal?gok=' + document.getElementById('guess').value).then(response => response.json()).then(data => {
        console.log(data);
        document.getElementById('answer').innerText = data.result;
    });
    //#student-end

    }
}

export {HogerLagerFeature};
