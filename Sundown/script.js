const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// var a = document.querySelector("#elem1")
// var image = a.getAttribute("data-image")
// console.log(image)

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// })

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.background = `url(${image})`
    })
})

var h1s = document.querySelectorAll("#vertical h1")
var rimg = document.querySelector("#DPE img")
var ping = document.querySelector("#DPE p")
h1s.forEach(function(e){
    e.addEventListener("mouseup", function(){
        var image = e.getAttribute("data-image")
        var txt = e.getAttribute("data-txt")
        rimg.src = image
        e.style.color = `#EFEAE3`
        ping.innerHTML = txt
    })
})

h1s.forEach(function(e){
    e.addEventListener("mouseleave", function(){
        var image = e.getAttribute("data-image")
        e.style.color = `#504A45`
    })
})