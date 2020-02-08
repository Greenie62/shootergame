class Bullet{
    constructor(x,y){
        this.r=8;
        this.x=x;
        this.y=y;
        this.toDelete=false;
        this.dy=-5
    }


    show(){
        fill('black')
        ellipse(this.x,this.y,this.r,this.r)
    }

    shoot(){
        this.y+=this.dy
    }

    hit(enemy){
        var d=dist(this.x,this.y,enemy.x,enemy.y);

        if(d < this.r + enemy.r){
            return true;
        }
        else{
            return false;
        }
    }

    clean(){
        this.toDelete=true;
    }
}