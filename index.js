const core = require('@actions/core')

const firstGreeting = core.getInput('first-greet');
const secondGreeting = core.getInput('second-greet');
const lastGreet = core.getInput('last-greet');

async function run(){
  try{
    if(firstGreeting){
      core.setOutput('First person greeted! Hello ', firstGreeting);
    }
    if(secondGreeting){
      core.setOutput("Second person greeted! Hello ", secondGreeting);
    }
    if(lastGreet){
      core.setOutput("Last person greeted! Hello ", lastGreet);
    }
  }catch(ex){
    core.setFailed(ex.message);
  }
}

run();
console.log(`First person: ${firstGreeting}`);
console.log(`Second person: ${secondGreeting}`);
console.log(`Last person: ${lastGreet}`);