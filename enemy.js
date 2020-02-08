class Enemy{
    constructor(x,color){
        this.r=50;
        this.x=x;
        this.y=35;
        this.toDelete=false;
        this.color=color
        this.dx=1
    }


    show(){
        fill(this.color)
        ellipse(this.x,this.y,this.r,this.r)
    }

    move(){
        this.x+=this.dx;
        if(this.x > 400 || this.x < 0){
            this.shiftDown()
        }
    }

    shiftDown(){
        this.y+=this.r
        this.dx *= -1;
    }

    hit(){
        this.r+=3;

        if(this.r > 57){
            this.color='darkgray'
        }
        if(this.r > 62){
            this.color='white'
        }
        if(this.r > 70){
            this.toDelete=true;
        }
    }

  
}