document.addEventListener('DOMContentLoaded', function () {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.sidebar').innerHTML = data
            changeActivePage()
        });
});

function changeActivePage(params) {
    let path = document.URL.split('/')
    let pagename = path[path.length-1]
    console.log(pagename);
    let sides = document.querySelectorAll('.sidebar .menu div')
    sides.forEach(side=>{
        if (side.getAttribute('onclick').match(pagename)) {
            side.classList.add('active')  
        }
    })
    
    
}