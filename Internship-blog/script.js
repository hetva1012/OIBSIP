/* ===========================
   Internship Blog JavaScript
=========================== */

// Smooth Scroll for Navigation
const links = document.querySelectorAll("nav a");

links.forEach(function(link){

    link.addEventListener("click", function(e){

        if(this.hash !== ""){

            e.preventDefault();

            const target = document.querySelector(this.hash);

            if(target){

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        }

    });

});


// ===========================
// Scroll Animation
// ===========================

const cards = document.querySelectorAll(".blog-card");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

cards.forEach(function(card){

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";

    observer.observe(card);

});


// ===========================
// Back To Top Button
// ===========================

const topBtn = document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",function(){

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===========================
// Welcome Message
// ===========================

window.addEventListener("load",function(){

    console.log("Welcome to Hetva Patel's Internship Blog!");

});
