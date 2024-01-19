function getJokes(){
    fetch('https://backend-omega-seven.vercel.app/api/getjoke')
    .then(response => response.json())
    .then(data =>{
        let questions = "";
        let punchlines = "";
        for (let joke of data) {
            questions += joke.question;
            punchlines += joke.punchline;
        }
        document.querySelector('#result-question').textContent = questions;
        document.querySelector('#result-punchline').textContent = punchlines;
    })
}

document.querySelector('#fetch-btn').addEventListener('click', getJokes);
