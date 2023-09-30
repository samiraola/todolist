let form = document.querySelector("form")
form.addEventListener("submit" , (e) => {
    e.preventDefault()
    let r;
    let tabUser = JSON.parse(localStorage.getItem("userList"))
    tabUser.forEach(element => {
        if (element.email === document.querySelector(".email").value  && 
            element.passe === document.querySelector(".passe").value)
        {
            r = element
        }
        
    


    if(typeof r != "undefined") {
        alert("correct")
        window.location.href = "./connexte.html"
    } else{
        alert("incorrect")
        window.location.reload()
    }
})
})