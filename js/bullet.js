class Bullet{
    constructor(x){
        this.r=8;
        this.x=x;
        this.y=400;
        this.dy=-3
        this.toDelete=false;
    }

    show(){
        fill('blue')
        ellipse(this.x,this.y,this.r, this.r)
    }

    clean(){
        this.toDelete=true;
    }

    shoot(){
        this.y+=this.dy;
    }

    //runs this on draw, when it return as true, then we fire
    // the clean method, using the iterator from
    // the for-loop to do most of our heavy tracking/lifting
    hit(enemy){
        var d=dist(this.x,this.y,enemy.x,enemy.y);
        if(d < this.r + (enemy.r/2)){
            return true;
        }
        else{
            return false;
        }
    }
}