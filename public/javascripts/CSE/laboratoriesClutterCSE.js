let main = document.querySelector('.content')

let content = [{heading:'Ground Floor Lab, Neumon Block',description:'One of the lab in Neumon Block',img:'../images/CSE/CSE_Lab1.jpg'},
    {heading:'Data Structure Lab, Neumon Block',description:'One of the lab in Neumon Block',img:'../images/CSE/DSA Lab.jpg'},
    {heading:'Operating System Lab, Neumon Block',description:'One of the lab in Neumon Block',img:'../images/CSE/OS Lab.jpg'},
    {heading:'Project Lab, Neumon Block',description:'One of the lab in Neumon Block',img:'../images/CSE/Project Lab1.jpg'},
    {heading:'First Floor Lab, Neumon Block',description:'One of the lab in Neumon Block',img:'../images/CSE/FFL.jpg'},
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