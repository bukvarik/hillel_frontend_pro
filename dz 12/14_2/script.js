const types = {
    range: "[type='range']",
    number: "[type = 'number']"
};

const getElemFromDOM = (selector) => document.querySelector(selector);
// функция принимает селекторы, возвращает элементы из DOM

const getValueFromDOM = (selector) => getElemFromDOM(selector).value;
// функция принимает селекторы, возвращает значение селектора из DOM;


// при изменении состояния поля range/input меняет состояние input/range
const changeState = () => {
    const {range, number} = types;
    const inputs = document.querySelectorAll('.input');

    for (const input of inputs) {
        if(input.type === "range") {
            input.addEventListener("input", () => {
              getElemFromDOM(number).value = getValueFromDOM(range);
            });
          } else {
            input.addEventListener("change", () => {
              getElemFromDOM(range).value = getValueFromDOM(number);
            });
          }
    }
}

// возвращает значение блока по высоте
const getHeightBlocks = () =>{
    const {number} = types;
    let commision;
    let credit = Number(getValueFromDOM(number));
    if (credit < 20) {
        commision = 2;
    } else if (credit >= 20 && credit < 50) {
        commision = 4;
    } else if (credit >= 50 && credit < 75) {
        commision = 6;
    } else {
        commision = 8;
    }
    return {credit, commision};
}

// установка блоков по высоте

const setHeightBlocks = () => {
    const {credit, commision} = getHeightBlocks();

    getElemFromDOM('.red').style.height = `${commision}px`;
    getElemFromDOM('.green').style.height = `${credit}px`;
}

// отрисовка блоков 
const render = () => {
    const {range, number} = types;
    changeState();

    getElemFromDOM(range).addEventListener('input', function() {
        setHeightBlocks();
    });

    getElemFromDOM(number).addEventListener('change', function(){
        setHeightBlocks();
    });
}

render();