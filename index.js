const core = require('@actions/core')

const firstGreeting = core.getInput('first-greet');
const secondGreeting = core.getInput('second-greet');
const lastGreet = core.getIput('last-greet');

async function run(){
  try{
    if(firstGreeting){
      core.setOutput('First person greeted', firstGreeting);
    }
    if(secondGreeting){
      core.setOutput('Second person greeted', secondGreeting);
    }
    if(lastGreet){
      core.setOutput('Last person greeted', lastGreet);
    }
  }catch(ex){
    core.setFailed(ex.message);
  }
}

run();
console.log(`First person: ${firstGreeting}`);
console.log(`Second person: ${secondGreeting}`);
console.log(`Last person: ${lastGreet}`);