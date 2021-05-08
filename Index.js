var readlineSync=require('readline-sync')
const chalk= require('chalk')
var playerName = readlineSync.question(chalk.bgYellow('Welcome player what is your name? '))
const print = console.log
print('welcome '+ playerName)
var score = 0

function game(ques,ans){
  var useranswer = readlineSync.question(chalk.keyword('orange')(ques))
  if(useranswer.toUpperCase()===ans.toUpperCase()){
    print(chalk.green('You are corret'))
    print(chalk.bold('-*-*-*-*-*-*-*-*-*-'))
    score= score+1
  }
  else
  {
    print(chalk.red('You are wrong'))
    print(chalk.bold('-*-*-*-*-*-*-*-*-*-'))
  }
}

var quesBank =[ setOne= {
  question: 'Who is the masked teacher of Naruto? ',
  answer: 'Kakashi',
 },

  setTwo={
     question: 'Who is the wife of Naruto? ',
  answer: 'Hinata',
  }, 
  setThree={
     question: 'How many kids does Naruto have? ',
  answer: 'Two',
  }, 
  setFour={
     question: 'Who is the father of Sarada? ',
  answer: 'Sasuke',
  }, 
  setFive={
     question: 'Who is the genius advisor to Naruto? ',
  answer: 'Shikamaru',
  }]

  for(var i=0;i<quesBank.length;i++){
    game(quesBank[i].question, quesBank[i].answer)
  }

  print(chalk.italic.cyan('Your final score is '+ score))