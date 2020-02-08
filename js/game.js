let ship;
let enemies=[];
let bullets=[];

let bullet=new Audio('scorpgun.wav')
let click=new Audio('click.wav')
let playerScore=0;
let startingEnemySize=75

let colors=['orange','green','yellow','purple']


function startGame(){
    createCanvas(400,400)
    ship=new Ship()

    for(let i=0;i<400;i+=80){
        enemies.push(new Enemy(i,startingEnemySize,colors[Math.random()* colors.length | 0]))
    }
}


function setup(){
 startGame()
  
    
}


function draw(){
    background('black')
    ship.show();
    ship.changeX()

    for(let i=0;i<bullets.length;i++){
        bullets[i].show();
        bullets[i].shoot()
    }

    for(let i=0;i<bullets.length;i++){
        for(let j=0;j<enemies.length;j++){
            if(bullets[i].hit(enemies[j])){
                console.log("we got some hits!")
                enemies[j].damage();
                bullets[i].clean()
                upScore()
                click.play()
            }
        }
    }

    for(let i=0;i<enemies.length;i++){
       enemies[i].show()
        enemies[i].move()
    }

//clean up loops to check which instances have been toggled 
// to true and need to be 'spliced' from our arrays
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



function keyPressed(){
    if(key === "ArrowLeft"){
   
        ship.move(-5)
    }

    if(key === "ArrowRight"){
        ship.move(-5)
    }

    if(key === "ArrowUp"){
        ship.move(0)
    }

    if(key === "ArrowDown"){
        ship.move(0)
    }

    if(key === " "){
        console.log("bullet fx")
        bullets.push(new Bullet(ship.x))
        bullet.play()
    }
}

function upScore(){
    playerScore+=50;
    document.querySelector("#score").innerHTML=playerScore;
}