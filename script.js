

// / Meniu links animation
const sections = document.querySelectorAll("container-1","container-2", "container-3")
const anchors = document.querySelectorAll("a")
window.addEventListener("scroll", function(){
    let current

    for(let section of sections){
       if(window.pageYOffset >= section.offsetTop - 50){
            current = section.getAttribute("class")
       }
    }

    for(let anchor of anchors){
        anchor.classList.remove("active")
        if(anchor.getAttribute("href") === "#" + current){
            anchor.classList.add("active")
        }
    }

    // Heading animation
    const headings = document.querySelectorAll("h2")
    for(let heading of headings){
        heading.classList.remove("headingAnimation")
    }

    let currentHeading = document.getElementById(current).querySelector("h2")
    currentHeading.classList.add("headingAnimation")
    })

    // Pirmo heading užkrovimas perkrovus puslapį
    window.addEventListener("load", function(){
        const firstHeading = document.querySelector("h2")
        firstHeading.classList.add("headingAnimation")
})