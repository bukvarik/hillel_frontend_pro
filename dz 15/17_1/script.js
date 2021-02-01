let box = document.querySelector('.box');
box.style.left = 0;
box.style.top = 0;

class Menu {
    #parrentEl = null;
    #element = null;
    #content = '';
    #onClick = () => {};

    constructor( {selector, onClick = () => {}, content = 'Menu'}) {
        this.#parrentEl = document.querySelector(selector);
        this.#element = document.createElement('button');
        this.#element.classList.add('menu__button');

        this.#parrentEl.appendChild(this.#element);

        this.#content = content;
        this.#onClick = onClick;

        this.render();
        this.#addEvents();
    }

    #addEvents() {
        this.#element.addEventListener('click', this.#onClick) 
    }

    render() {
        this.#element.innerHTML = this.#content;
    };
}

window.addEventListener('load', () => {
    //global menu
    const add = new Menu({
        selector: '#globalMenu',
        onClick: () => {
            document.body.appendChild(box);
        },
        content: 'add'
    });

    const remove = new Menu({
        selector: '#globalMenu',
        onClick: () => {
            box.remove();
        },
        content: 'remove'
    });

    const resetPosition = new Menu({
        selector: '#globalMenu',
        onClick: () => {
            box.style.left = 0,
            box.style.top = 0
        },
        content: 'reset position'
    });

    //box menu
    const jump = new Menu({
        selector: '#context-menu',
        onClick: () => {

            box.style.top = parseInt(box.style.top) - 100 + 'px';
            setTimeout( function() {
                box.style.top = parseInt(box.style.top) + 100 + 'px';
            }, 2000);
            console.log('Jump');
        },
        content: 'Jump'
    });
    
    const moveLeft = new Menu({
        selector: '#context-menu',
        onClick: () => {
            box.style.left = parseInt(box.style.left) - 50 + 'px';
        },
        content: 'Move Left'
        
    });
    const moveRight = new Menu({
        selector: '#context-menu',
        onClick: () => {
            box.style.left = parseInt(box.style.left) + 50 + 'px';
        },
        content: 'Move Right'
    });
    const moveTop = new Menu({
        selector: '#context-menu',
        onClick: () => {
            box.style.top = parseInt(box.style.top) - 50 + 'px';
        },
        content: 'Move Top'
    });
    const moveDown = new Menu({
        selector: '#context-menu',
        onClick: () => {
            box.style.top = parseInt(box.style.top) + 50 + 'px';
        },
        content: 'Move Down'
    });
});

// box menu open 
box.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let contextMenu = document.querySelector('#context-menu');
    contextMenu.style.top = e.offsetY + 'px';
    contextMenu.style.left = e.offsetX + 'px';
    contextMenu.classList.add('active');
})
//global menu close
window.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let contextMenu = document.querySelector('#globalMenu');
    contextMenu.style.top = e.offsetY + 'px';
    contextMenu.style.left = e.offsetX + 'px';
    contextMenu.classList.add('active');
});
// box menu close
window.addEventListener('click', function() {
    document.querySelector('#context-menu').classList.remove('active');
});
//global menu close
window.addEventListener('click', () => {
    document.querySelector('#globalMenu').classList.remove('active');
});