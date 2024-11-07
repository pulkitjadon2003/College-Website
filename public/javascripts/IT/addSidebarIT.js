document.addEventListener('DOMContentLoaded', function () {
        
        changeActivePage()
        let pagetitle = "Department of Information Technology"
        document.title = pagetitle
        document.querySelector('#nameDiv h2').innerHTML = pagetitle
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


function loadPage(page) {
        window.location.href = page;
    }
    
    
    
}