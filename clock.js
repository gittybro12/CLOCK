function myClock(){
    let d = new Date()

    document.getElementById("clock").innerHTML = 
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();


    let h = document.getElementById("clock")
    h.style.backgroundColor = "black"
    h.style.color = 'white'
    h.style.width = 'fit-content'
    h.style.max-width = '540px'
    h.style.padding= "100px"
    h.style.borderRadius = '40%'
    h.style.position = 'absolute'
    h.style.top = '35%'
    h.style.left = '40%'
}

setInterval(myClock,1000)
