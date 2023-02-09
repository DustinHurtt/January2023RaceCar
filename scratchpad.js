let generateFoodId

function generateFood() {
   generateFoodId = setInterval(() => {
     foodArray.push(new Food());
    }, 2000);
  }


function foodCollision (object) {

    if (
        playerSnake.x > object.x
        && playerSnake.x < object.x + object.width
        && playerSnake.y > object.y
        && playerSnake.y < object.y + object.height
        ) {
        console.log("Eating")
    }

}

for (let i = 0; i < snakeBody.length; i++) {
    ctx.beginPath();
    ctx.arc(snakeBody[i].x+scale/2, snakeBody[i].y+scale/2, scale/2, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}

snakeBody.push({x: playerSnake.x, y: playerSnake.y});
