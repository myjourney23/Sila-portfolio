function myfunction() {
    let x = document.getElementById("contents-examples-1");
    let y = document.getElementById("word-box-text-1");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Content I've Created";
    } else {
        x.style.display = "none";
        y.innerHTML = "Click for Content Created";
    }
}

function myfunction2() {
    let x = document.getElementById("contents-examples-2");
    let y = document.getElementById("word-box-text-2");
    if(x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Lesson Plans I've Created";
    } else {
        x.style.display = "none";
        y.innerHTML = "Click for Lesson Plans";
    }
}

function myfunction3() {
    let x = document.getElementById("contents-examples-3");
    let y = document.getElementById("word-box-text-3");
    if(x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Content I've Created";
    } else {
        x.style.display = "none";
        y.innerHTML = "Click for Content Created";
    }
}

function myfunction4() {
    let x = document.getElementById("contents-examples-4");
    let y = document.getElementById("word-box-text-4");
    if(x.style.display === "none") {
        x.style.display = "block";
        y.innerHTML = "Lesson Plans I've Created";
    } else {
        x.style.display = "none";
        y.innerHTML = "Click for Lesson Plans";
    }
}


function toggleContactDetails() {
    let contactDetails = document.getElementById("contact-details");
    let contactButton = document.getElementById("contact-button");
        if (contactDetails.style.display === "none") {
            contactDetails.style.display = "block";
            contactButton.innerHTML = "My Contact Info";
            contactButton.style.marginBottom = ".5rem";
        } else {
            contactDetails.style.display = "none";
            contactButton.innerHTML = "Click for Contact Details";
            contactButton.style.marginBottom = "2rem";
        }
    }
