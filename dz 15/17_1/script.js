let box = document.querySelector('.box');
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
        this.#element.addEventListener('click', this.#onClick);
    }

    render() {
        this.#element.innerHTML = this.#content;
    };
}

window.addEventListener('load', () => {
    let moveBy = 50;
    let jumpY = 100;

    box.style.left = 0;
    box.style.top = 0;

    function handler(event) {
        console.log('clicked', event, event.type);
    }

    let throttle = false;

    function eventKeyDown(event) {
        const key = event.key;
        switch(key) {
            case "w":
            case "W":
            case "ArrowUp":
                box.style.top = parseInt(box.style.top) - moveBy + 'px';
                console.log('Up');
                break;
            case "a":
            case "A":
            case "ArrowLeft":
                box.style.left = parseInt(box.style.left) - moveBy + 'px';
                console.log('Left');
                break;
            case "d":
            case "D":
            case "ArrowRight":
                box.style.left = parseInt(box.style.left) + moveBy + 'px';
                console.log('Right');
                break;
            case "s":
            case "S":
            case "ArrowDown":
                box.style.top = parseInt(box.style.top) + moveBy + 'px';
                console.log('Down');
                break;
            case " ":
                if (throttle == true) {
                    return true;
                }
        
                throttle = true;    
                setTimeout(() => {
                    throttle = false;
                }, 2000);
                
                box.style.top = parseInt(box.style.top) - jumpY + 'px';
                setTimeout( function() {
                    box.style.top = parseInt(box.style.top) + jumpY + 'px';
                }, 2000);
                console.log('Jump');
                break;
            case "Control":
                box.style.transform = "matrix(2,0,0,.7,1,4)";
                setTimeout( function() {
                    box.style.transform = "matrix(1,0,0,1,0,0)";
                }, 2000);
                console.log('CTRL');
                break;
            
        }
    }

    document.addEventListener('click', () => {
        hideContextMenu();
    });

    document.addEventListener('keydown', eventKeyDown);
    //global menu
    // debugger;
    const add = new Menu({
        selector: '.global',
        onClick: () => {
            document.body.appendChild(box);
        },
        content: 'add',
    });
    console.log(add);

    const remove = new Menu({
        selector: '.global',
        onClick: () => {
            box.remove();
        },
        content: 'remove'
    });
    console.log(remove);

    const resetPosition = new Menu({
        selector: '.global',
        onClick: () => {
            box.style.left = 0,
            box.style.top = 0
        },
        content: 'reset position'
    });

    //box menu
    const jump = new Menu({
        selector: '.onBox',
        onClick: () => {

            if (throttle == true) {
                return true;
            }
    
            throttle = true; 
            setTimeout(() => {
                throttle = false;
            }, 2000);   

            box.style.top = parseInt(box.style.top) - jumpY + 'px';
            setTimeout( function() {
                box.style.top = parseInt(box.style.top) + jumpY + 'px';
            }, 2000);
            console.log('Jump');
        },
        content: 'Jump'
    });
    
    const moveLeft = new Menu({
        selector: '.onBox',
        onClick: () => {
            box.style.left = parseInt(box.style.left) - 50 + 'px';
        },
        content: 'Move Left'
        
    });
    const moveRight = new Menu({
        selector: '.onBox',
        onClick: () => {
            box.style.left = parseInt(box.style.left) + 50 + 'px';
        },
        content: 'Move Right'
    });
    const moveTop = new Menu({
        selector: '.onBox',
        onClick: () => {
            box.style.top = parseInt(box.style.top) - 50 + 'px';
        },
        content: 'Move Top'
    });
    const moveDown = new Menu({
        selector: '.onBox',
        onClick: () => {
            box.style.top = parseInt(box.style.top) + 50 + 'px';
        },
        content: 'Move Down'
    });
});

// box menu open 
box.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let contextMenu = document.querySelector('.context-menu.onBox');
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.style.left = e.clientX + 'px';
    hideContextMenu();

    contextMenu.classList.add('active');
})
//global menu close
window.addEventListener('contextmenu', (e) => {
    e.preventDefault(); 
    let contextMenu = document.querySelector('.context-menu.global');
    contextMenu.style.top = e.clientY + 'px';
    contextMenu.style.left = e.clientX + 'px';
    hideContextMenu();

    contextMenu.classList.add('active');
});

function hideContextMenu() {
    const contextMenus = document.querySelectorAll('.context-menu');
    contextMenus.forEach(menu => {
        menu.classList.remove('active');
    });
}
