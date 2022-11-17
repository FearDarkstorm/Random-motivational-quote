const getmessage = () => {
  let rand = Math.floor(Math.random() * 10 + 1);
  switch (rand) {
    case 0:
      console.log("you can do this");
      break;
    case 1:
      console.log("you got this");
      break;
    case 2:
      console.log("you are more powerful");
      break;
    case 3:
      console.log("embarce you are cringe so you start to based");
      break;
    case 4:
      console.log("how is this not possible");
      break;
    case 5:
      console.log("nothing is possible");
      break;
    case 6:
      console.log("XD");
      break;
    case 7:
      console.log("ok bro just don't quit");
      break;
    case 8:
      console.log("there's always a way");
      break;
    case 9:
      console.log("where there is will there is way");
      break;
    case 10:
      console.log("this number is 10 and you got 10 out of 10");
      break;
    
  }
  return ''
};

console.log(getmessage());
