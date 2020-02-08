

class Enemy{
    constructor(x,r,color){
        this.r=r;
        this.hurt=this.r+22;
        this.wounded=this.r+30;
        this.dead=this.r + 34;
        this.x=x;
        this.y=50;
        this.dx=1;
        this.color=color;

        this.toDelete=false;
    }

    show(){
        fill(this.color);
        ellipse(this.x,this.y,this.r,this.r)
    }

    shiftDown(){
        this.y+=this.r
    }

    move(){
        this.x += this.dx;
        if(this.x > 400 || this.x < 0){
            this.dx *= -1
            this.shiftDown()
        }
    }

    damage(score){
        this.r+=4;
        if(this.r > this.hurt){
            this.color='gray'
        }
        if(this.r > this.wounded){
            this.color='white'
        }
        if(this.r > this.dead){
            this.toDelete=true;
        }
     
        
    }

  
}