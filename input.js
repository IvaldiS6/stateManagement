export default class InputHandler {
    constructor(){
        this.lastKey = '';
        /* start touch variables */
        this.touchY = '';
        this.touchThreshold = 15;
        /* end touch variables */
        window.addEventListener('keydown', e => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "PRESS left";
                    break
                case "ArrowRight":
                    this.lastKey = "PRESS right";
                    break
                case "ArrowUp":
                    this.lastKey = "PRESS up";
                    break
                case "ArrowDown":
                    this.lastKey = "PRESS down";
                    break
            }
        });
        this.lastKey = '';
        window.addEventListener('keyup', e => {
            switch(e.key){
                case "ArrowLeft":
                    this.lastKey = "RELEASE left";
                    break
                case "ArrowRight":
                    this.lastKey = "RELEASE right";
                    break
                case "ArrowUp":
                    this.lastKey = "RELEASE up";
                    break
                case "ArrowDown":
                    this.lastKey = "RELEASE down";
                    break
            }
        });
        /* start touch listeners */
        this.lastKey = '';
        window.addEventListener('touchstart', e => {
            this.touchY = e.changedTouches[0].pageY;
            this.touchX = e.changedTouches[0].pageX;
        });
        this.lastKey = '';
        window.addEventListener('touchmove', e => {
            const swipeY = e.changedTouches[0].pageY - this.touchY;
            const swipeX = e.changedTouches[0].pageX - this.touchX;
            console.log(e);
            console.log('swipeX:  ' + swipeX);
            console.log('swipeY:  ' + swipeY);
            if (swipeX > this.touchThreshold) this.lastKey = "PRESS right";
            if (swipeX < -this.touchThreshold) this.lastKey = "PRESS left";
            if (swipeY > this.touchThreshold) this.lastKey = "PRESS down";
            if (swipeY < -this.touchThreshold) this.lastKey = "PRESS up";
           /*  switch(e.changedTouches[0].){
                case swipeX > this.touchThreshold:
                    this.lastKey = "PRESS right";
                    break
                case swipeX < -this.touchThreshold:
                    this.lastKey = "PRESS left";
                    break
                case swipeY > this.touchThreshold:
                    this.lastKey = "PRESS down";
                    break
                case swipeY < -this.touchThreshold:
                    this.lastKey = "PRESS up";
                    break
            } */
        });
        /* end touch listeners */
    }
}