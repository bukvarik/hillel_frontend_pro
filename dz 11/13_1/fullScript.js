window.addEventListener('load', function() {
    let box = document.querySelector('.box');
    let moveBy = 50;
    let jump = 100;

    box.style.left = 0;
    box.style.top = 0;

    function handler(event) {
        console.log('clicked', event, event.type);
    }

    let throttle = false;
    const throttleTime = 2000;

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
                }, throttleTime);
                
                box.style.top = parseInt(box.style.top) - jump + 'px';
                setTimeout( function() {
                    box.style.top = parseInt(box.style.top) + jump + 'px';
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

    document.addEventListener('keydown', eventKeyDown);
});
