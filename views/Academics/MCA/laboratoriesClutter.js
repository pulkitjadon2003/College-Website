let main = document.querySelector('.content')

let content = [{heading:'Ground Floor Lab, Neumon Block',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/CSE_Lab1.jpg'},
    {heading:'Data Structure Lab, Neumon Block',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/DSA Lab.jpg'},
    {heading:'Operating System Lab, Neumon Block',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/OS Lab.jpg'},
    {heading:'Project Lab, Neumon Block',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/Project Lab1.jpg'},
    {heading:'First Floor Lab, Neumon Block',description:'One of the lab in Neumon Block',onclick:'https://www.itmgoi.in/',img:'./images/FFL.jpg'},
]

let data = ''
content.forEach((elem)=>{
    data += `<div class="card">
                <div class="card-content">
                    <h2 class="card-heading">${elem.heading}</h2>
                    <p class="card-paragraph">${elem.description}</p>
                </div>
                <div class="card-image">
                    <img src= '${elem.img}' alt="Card Image">
                </div>
            </div>`
})

main.innerHTML = data;