
window.addEventListener('load', () => {
    const blockTexts = document.querySelectorAll('.increase_text');
    const btn = document.querySelectorAll('.increase_btn');
    const clearCounter = document.querySelector('#clearCounter');
    const blockID = document.querySelector('#blockID');
    const numberInCounter = document.querySelector('#numberInCounter');
    const setCounter = document.querySelector('#setCounter');
    const blockIncrease = document.querySelectorAll('.block_increase');

    let btnDictionary = {};

    const COLOR = `rgb(200, 50, 11)`;

    if (localStorage.btnClickerTracker) {
        btnDictionary = JSON.parse(localStorage.btnClickerTracker);
    }
    renderSpans();
    renderColor();

    function renderColor() {
        blockIncrease.forEach(div => {
            div.style.backgroundColor = btnDictionary[`bg_${div.dataset.id}`] != undefined ? btnDictionary[`bg_${div.dataset.id}`] : btnDictionary[`bg_${div.dataset.id}`];
            console.log(div.style.backgroundColor);
        });
    }

    function renderSpans() {
        blockTexts.forEach(span => {
            let content = 0; 

            content = btnDictionary[span.dataset.id] === undefined ? 0 : btnDictionary[span.dataset.id];
        
            span.innerHTML = content;
        });
        
    }

    function getRand(n) {
        return Math.floor(Math.random() * n);
    }

    
    // debugger;
    function obBtnBlockClick(e) {
        btnDictionary[e.target.dataset.id] = btnDictionary[e.target.dataset.id] === undefined ? 1 : Number(btnDictionary[e.target.dataset.id]) + 1;
        /* if (btnDictionary[e.target.dataset.id]) {
            btnDictionary[e.target.dataset.id] = btnDictionary[e.target.dataset.id] + 1;
        } else {
            btnDictionary[e.target.dataset.id] = 1;
        }*/
        localStorage.btnClickerTracker = JSON.stringify(btnDictionary);
        renderSpans();

        blockIncrease.forEach(div => {
            if (div.dataset.id == this.dataset.id) {
                console.log(div.style.backgroundColor, btnDictionary[`bg_${div.dataset.id}`]);
                if (btnDictionary[this.dataset.id] < 50) {
                    let randColor = `rgb(${getRand(256)}, ${getRand(256)}, ${getRand(256)})`;

                    div.style.backgroundColor = randColor;
                    btnDictionary[`bg_${div.dataset.id}`] = div.style.backgroundColor;
                    // div.style.backgroundColor = btnDictionary[`bg_${div.dataset.id}`];
                    localStorage.btnClickerTracker = JSON.stringify(btnDictionary);
                    console.log(btnDictionary);

                } else {
                    div.style.backgroundColor = COLOR;
                    btnDictionary[`bg_${div.dataset.id}`] = COLOR;
                }
            }
        });
        renderColor();
        // renderColor();
    }

    btn.forEach(button => {
        button.addEventListener('click', obBtnBlockClick);
    });

    clearCounter.addEventListener('click', () => {
        localStorage.clear();
        sessionStorage.clear();
        blockTexts.forEach(span => {
            content = btnDictionary[span.dataset.id] != 0 ? 0 : 0;

            if (btnDictionary[span.dataset.id] != 0) {
                btnDictionary[span.dataset.id] = 0;
            }

            span.innerHTML = content;
        });
    });

    function setCounters(){
        if( (blockID.value !== undefined && blockID.value != ' ' )&& (numberInCounter.value !== undefined && numberInCounter.value != '' )) {
            console.log(blockID.value, numberInCounter.value);
            btnDictionary[blockID.value] = Number(numberInCounter.value);
            renderSpans();
            blockID.value = '';
            numberInCounter.value = '';
        } else {
            console.log('error');
        }
    }


    setCounter.addEventListener('click', setCounters);
});
