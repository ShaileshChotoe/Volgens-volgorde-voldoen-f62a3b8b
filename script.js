let input = document.querySelectorAll("input");
let message = document.querySelector("h4");

const antwoorden = [
    "Parijs",
    8,
    "IJselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];

let userAnswers = [];

var points = 0;

function update()
{
    pushUserAnsToArray();
    checkAnswers();
    showMessage();
}

function checkAnswers()
{
    points = 0;
    checkOneChoice();
    checkMultipleChoice();
}


function checkOneChoice()
{

    for(var i = 0; i < userAnswers.length; i++)
    {
        if(userAnswers[i].length == 1)
        {
            if(userAnswers[i] == antwoorden[i])
            {
                points++;
            }
        }
    }

}

function checkMultipleChoice()
{
    var usedAnswers = [];

    for(var i = 0; i < antwoorden.length; i++)
    {
        if(Array.isArray(antwoorden[i]))
        {
            for (let j = 0; j < userAnswers.length; j++) 
            {
                if(antwoorden[i].includes(userAnswers[i][j]) && (!usedAnswers.includes(userAnswers[i][j])))
                {
                    usedAnswers.push(userAnswers[i][j]);
                    points++;         
                }
            }
        }      
    }
}

function pushUserAnsToArray()
{
    userAnswers = [];
    for(var i = 0; i < antwoorden.length; i++)
    {
        var word = input[i].value.split(" ");
        userAnswers.push(word);
    }
}


function showMessage()
{
    message.innerText = "Je hebt " + points + " punten gehaald";
}