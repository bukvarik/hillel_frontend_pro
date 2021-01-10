window.addEventListener('load', function() {
    let block = document.querySelector('.block');
    let text = document.querySelector('.text');
    let moveBy = 50;

    block.style.top = '45px';
    block.style.left = '150px';

    function eventKeyDown(event) {
        if (!isBlockInWindow()) {
            return;
        }
        // console.log(event.key);
        const key = event.key;
        switch(key) {
            case "ArrowLeft":
                block.style.left = parseInt(block.style.left) - moveBy + 'px';
                console.log('Left');
                break;
            case "ArrowUp":
                block.style.top = parseInt(block.style.top) - moveBy + 'px';
                console.log('Up');
                break;
            case "ArrowRight":
                block.style.left = parseInt(block.style.left) + moveBy + 'px';
                console.log('Right');
                break;
            case "ArrowDown":
                block.style.top = parseInt(block.style.top) + moveBy + 'px';
                console.log('Down');
                break;
        }
    }
    
    let throttle = false;

    function isBlockInWindow() {
        if (throttle == true) {
            return false;
        }
        
        throttle = true;
        setTimeout(() => {
            throttle = false;
        }, 100);

        if(block.offsetLeft + block.offsetWidth >= window.innerWidth ) {
            block.style.left = Window.innerWidth - block.offsetWidth - moveBy * 2 + 'px';
            setText(); 
            return false;
        }

        if(block.offsetLeft <= 0) {
            block.style.left = moveBy * 2 + 'px'; 
            setText();
            return false;
        }

        if(block.offsetTop + block.offsetHeight >= window.innerHeight ) {
            block.style.top = Window.innerHeight - block.offsetHeight - moveBy * 2 + 'px';
            setText();
            return false;
        }

        if(block.offsetTop <= 0) {
            block.style.top = moveBy * 2 + 'px'; 
            setText();
            return false;
        }

        return true;
    }
    
    function setText() {
        text.innerHTML = "boom";
        if(!text.innerHTML == "") {
            setTimeout(function() {
                text.innerHTML = "";
            }, 2000);
        }
    }

    document.addEventListener('keydown', eventKeyDown);
});