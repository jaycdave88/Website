var context;
var queue;
var WIDTH = 900;
var HEIGHT = 500;
var mouseXPosition;
var mouseYPosition;
var alienImage;
var stage;
var animation;
var deathAnimation;
var spriteSheet;
var enemyXPos=100;
var enemyYPos=100;
var enemyXSpeed = 1.5;
var enemyYSpeed = 1.75;
var score = 0;
var scoreText;
var gameTimer;
var gameTime = 0;
var timerText;

window.onload = function()
{
  
    var canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;
    stage = new createjs.Stage("myCanvas");

    queue = new createjs.LoadQueue(false);
    queue.installPlugin(createjs.Sound);
    queue.on("complete", queueLoaded, this);
    createjs.Sound.alternateExtensions = ["ogg"];

    queue.loadManifest([
        {id: 'backgroundImage', src: 'assets/background.png'},
        {id: 'crossHair', src: 'assets/crosshair.png'},
        {id: 'shot', src: 'assets/shot.mp3'},
        {id: 'background', src: 'assets/space.mp3'},
        {id: 'gameOverSound', src: 'assets/gameOver.mp3'},
        {id: 'tick', src: 'assets/tick.mp3'},
        {id: 'deathSound', src: 'assets/die.mp3'},
        {id: 'alienSpriteSheet', src: 'assets/space.png'},
        {id: 'alienDeath', src: 'assets/alienDeath.png'},
    ]);
    queue.load();
    gameTimer = setInterval(updateTime, 1000);

}

function queueLoaded(event){
    var backgroundImage = new createjs.Bitmap(queue.getResult("backgroundImage"))
    stage.addChild(backgroundImage);

    createjs.Sound.play("background", {loop: -1});

    scoreText = new createjs.Text("+Points " + score.toString(), "26px Arial", "#FFF");
    scoreText.x = 50;
    scoreText.y = 10;
    stage.addChild(scoreText);

    timerText = new createjs.Text("Time: " + gameTime.toString(), "26px Arial", "#FFF");
    timerText.x = 750;
    timerText.y = 450;
    stage.addChild(timerText);

  
    spriteSheet = new createjs.SpriteSheet({
        "images": [queue.getResult('alienSpriteSheet')],
        "frames": {"width": 100, "height": 115},
        "animations": { "invade": [0,3] }
    });

    batDeathSpriteSheet = new createjs.SpriteSheet({
      "images": [queue.getResult('alienDeath')],
      "frames": {"width": 198, "height" : 148},
      "animations": {"die": [0,5, false,1 ] }
    });

    createEnemy();

    createjs.Ticker.setFPS(15);
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', tickEvent);

    window.onmousedown = handleMouseDown;
}

function createEnemy()
{
  animation = new createjs.Sprite(spriteSheet, "invade");
    animation.regX = 99;
    animation.regY = 58;
    animation.x = enemyXPos;
    animation.y = enemyYPos;
    animation.gotoAndPlay("invade");
    stage.addChildAt(animation,1);
}

function alienDeath()
{
  deathAnimation = new createjs.Sprite(batDeathSpriteSheet, "die");
  deathAnimation.regX = 99;
  deathAnimation.regY = 58;
  deathAnimation.x = enemyXPos;
  deathAnimation.y = enemyYPos;
  deathAnimation.gotoAndPlay("die");
  stage.addChild(deathAnimation);
}

function tickEvent()
{
  if(enemyXPos < WIDTH && enemyXPos > 0)
  {
    enemyXPos += enemyXSpeed;
  } else 
  {
    enemyXSpeed = enemyXSpeed * (-1);
    enemyXPos += enemyXSpeed;
  }
  if(enemyYPos < HEIGHT && enemyYPos > 0)
  {
    enemyYPos += enemyYSpeed;
  } else
  {
    enemyYSpeed = enemyYSpeed * (-1);
    enemyYPos += enemyYSpeed;
  }

  animation.x = enemyXPos;
  animation.y = enemyYPos;

  
}

function handleMouseDown(event)
{
    createjs.Sound.play("shot");

    enemyXSpeed *= 1.05;
    enemyYSpeed *= 1.06;
    
    crossHair = new createjs.Bitmap(queue.getResult("crossHair"));
    crossHair.x = event.clientX-45;
    crossHair.y = event.clientY-45;
    stage.addChild(crossHair);
    createjs.Tween.get(crossHair).to({alpha: 0},1000);

    var shotX = Math.round(event.clientX);
    var shotY = Math.round(event.clientY);
    var spriteX = Math.round(animation.x);
    var spriteY = Math.round(animation.y);

    var distX = Math.abs(shotX - spriteX);
    var distY = Math.abs(shotY - spriteY);

    if(distX < 30 && distY < 59 )
    {
      stage.removeChild(animation);
      alienDeath();
      score += 100;
      scoreText.text = "+Points " + score.toString();
      createjs.Sound.play("deathSound");
      
      enemyYSpeed *= 1.25;
      enemyXSpeed *= 1.3;

      var timeToCreate = Math.floor((Math.random()*3500)+1);
      setTimeout(createEnemy,timeToCreate);

    } else
    {
      score -= 30;
      scoreText.text = "+Points " + score.toString();
    }
}

function updateTime()
{
  gameTime += 1;
  if(gameTime > 60)
  {
    timerText.text = "Game Over";
    stage.removeChild(animation);
    stage.removeChild(crossHair);
        createjs.Sound.removeSound("background");
        var si =createjs.Sound.play("gameOverSound");
    clearInterval(gameTimer);
  }
  else
  {
    timerText.text = "Time: " + gameTime
    createjs.Sound.play("tick");
  }
}
