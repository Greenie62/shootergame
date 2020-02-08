let player;
let enemies=[];
let bullets=[];

var colors=['red','orange','blue','purple','yellow']



function setup(){
    createCanvas(400,400)
    ship=new Ship()
    for(let i=0;i<400;i+=80){
        enemies.push(new Enemy(i,colors[Math.random() * colors.length | 0]))
    }
}


function draw(){

    background('gray')
    ship.show();

    for(let i=0;i<enemies.length;i++){
        enemies[i].show()
        enemies[i].move()
    }

    for(let i=0;i<bullets.length;i++){
        bullets[i].show()
        bullets[i].shoot()
    }

    for(let i=0;i<bullets.length;i++){
        for(let j=0;j<enemies.length;j++){
            if(bullets[i].hit(enemies[j])){
                bullets[i].clean();
                enemies[j].hit()
            }
        }
    }

    for(let i=0;i<bullets.length;i++){
        if(bullets[i].toDelete){
            bullets.splice(i,1)
        }
    }

    for(let i=0;i<enemies.length;i++){
        if(enemies[i].toDelete){
            enemies.splice(i,1)
        }
    }

}











var leftArrow=document.querySelector(".left")
var rightArrow=document.querySelector(".right")
var upArrow=document.querySelector(".shoot")




leftArrow.onclick=()=>{
    console.log('fx firing')
    ship.move(-10)
}

rightArrow.onclick=()=>{
    console.log('fx firing')
    ship.move(10)
}

upArrow.onclick=()=>{
    bullets.push(new Bullet(ship.x,400))
}