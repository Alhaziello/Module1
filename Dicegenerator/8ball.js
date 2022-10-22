let userName = "Chris";
userName ? console.log(`Hello,${userName}`) : console.log("Hello, Random!");
const userQuestion = `${userName} has asked: "Will I move to italy?"`;
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";


switch (randomNumber) {
  case 0:
    eightBall = `It is certain ${userName}!`;
    break;
  case 1:
    eightBall = `It is decidedly so ${userName}`;
    break;
  case 2:
    eightBall = `Outlooks not so good, ${userName}`;
    break;
  case 3:
    eightBall = `You fucking wish, bitch!`;
    break;
  case 4:
    eightBall = `Hell Nah ${userName}`;
    break;
  case 5:
    eightBall = `Nope , ${userName}`;
    break;
  case 6:
    eightBall = `Big nope  ${userName}`;
    break;
  case 7:
    eightBall = `LMAO!!!`;
    break;
  case 8:
    eightBall = `NOPE TO THE NOPE`;
    break;
}
console.log(`The Magic 8 Ball says, ${eightBall}`);
