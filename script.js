// Write your code here

function getJokes(){
    fetch('https://backend-omega-seven.vercel.app/api/getjoke')
    .then(response => response.json())
    .then(data =>{
        document.querySelector('#result-question').textContent = data[0].question;
        document.querySelector('#result-punchline').textContent = data[0].punchline;
    })
    }
    
    document.querySelector('#fetch-btn').addEventListener('click',function(){
        getJokes();
    });
    
    