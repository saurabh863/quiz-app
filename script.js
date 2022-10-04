
(function(){
const quizdContainer=document.getElementById("quiz-container");
const submitBtn=document.getElementById("submit");
const resultContainer=document.getElementById("result");

const Questions=[
    {
        "questions":"1.What is one of the big differences between traditional media and social media?",
        "answers":{
            "a":"participatory production",
            "b":"social media reaches only a few people at a time",
            "c":"the management structure of the companies",
            "d":" traditional media offers no way for audiences to communicate with media producers"
        },
        "correctAnswers":"a"
    },
    {
        "questions":"2.Consider a dice with the property that that probability of a face with n dots showing up is proportional to n. The probability of face showing 4 dots is?",
        "answers":{
            "a":"1/7",
            "b":"5/42",
            "c":"1/21",
            "d":"4/21"
        },
        "correctAnswers":"d"
    },
    {
        "questions":"3.Let X be a random variable with probability distribution function f (x)=0.2 for |x|<1 = 0.1 for 1 < |x| < 4= 0 otherwise  The probability P (0.5 < x < 5) is",
        "answers":{
            "a":"0.3",
            "b":"0.5",
            "c":"0.4",
            "d":"0.8"
        },
        "correctAnswers":"c"
    },
    {
        "questions":"4.Runs scored by batsman in 5 one day matches are 50, 70, 82, 93, and 20. The standard deviation is ______",
        "answers":{
            "a":"25.79",
            "b":"25.49",
            "c":"25.29",
            "d":"25.69"
        },
        "correctAnswers":"a"
    },
    {
        "questions":"5.Find median and mode of the messages received on 9 consecutive days 15, 11, 9, 5, 18, 4, 15, 13, 17.",
        "answers":{
            "a":"13,6",
            "b":"13,18",
            "c":"18,15",
            "d":"15,16"
        },
        "correctAnswers":"a"
    
    }
    ];

function quiz(){
    const output=[];
    Questions.forEach((currentQuestion,questionNumber) => {
        const answers = [];
        for(i in currentQuestion.answers){
            answers.push(
                `<div>
                <input type="radio" name="question${questionNumber}"
                value="${i}">
                ${i}:
                ${currentQuestion.answers[i]}
                </div>`
            );
        }
        output.push(
            `<div class="questions">
            ${currentQuestion.questions}
            </div>
            <div class="answers">
            ${answers.join('')}
            </div>`
        );
        
    }
    );
    quizdContainer.innerHTML=output.join('');

}
function showResult(){
    const answerContainers=quizdContainer.querySelectorAll('.answers');
    let score=0;
    Questions.forEach((currentQuestion,questionNumber)=>{
        const answerContainer = answerContainers[questionNumber];
        const selector=`input[name=question${questionNumber}]:checked`;
        const userAnswer=(answerContainer.querySelector(selector)||{}).value;
        if(userAnswer===currentQuestion.correctAnswers){
            score++;
            answerContainers[questionNumber].style.color='green';
        }
        else{
            answerContainers[questionNumber].style.color='red';
        }
    });
    resultContainer.style.display="block";
    let results="yes";
    if(score>=4) results="yes"
    else if(score<=3 && score>=2 ) results="Maybe"
    else results="No";
    resultContainer.innerHTML=`Marks ${score} out of ${Questions.length}
    <div class="results">Result:${results}</div>
    `;
}
quiz();
submitBtn.addEventListener("click",showResult);
})();