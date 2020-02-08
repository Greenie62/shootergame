class Ship{
    constructor(){
        this.height=20;
        this.width=60;
        this.x=200;
        this.y=400-this.height
        this.dx=0;
    }

    show(){
        fill('red')
        rect(this.x,this.y,this.width,this.height)
    }

    changeX(){
        this.x+=this.dx;

        if(this.x < 0 || this.x > 400){
            this.dx *= -1
        }
    }

    move(dir){
        this.x+=dir;

        if(this.x < 0 || this.x > 400){
            this.dx *= -1
        }
    }
}