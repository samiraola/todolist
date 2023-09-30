let bouton = document.querySelector(".bouton");
bouton.addEventListener('click', (e) => {
   e.preventDefault()
   let tabutilisateur = JSON.parse(localStorage.getItem("listutilisateur")) || []
   let nom = document.querySelector(".nom").value;
   let email = document.querySelector(".email").value;
   let passe = document.querySelector(".passe").value;
   
    let utilisateur ={
        nom : nom,
        email : email,
        passe :passe
    }
     
      tabutilisateur.push(utilisateur)

      localStorage.setItem("listutilisateur", JSON.stringify(tabutilisateur))
      alert("validé")
      window.location.href = "./connexion.html"

   


})
