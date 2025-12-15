       
    //    year generation
       document.getElementById("yr").innerText = new Date().getFullYear();


        // enrollment form 
        let enrollBtn = document.getElementById("enrollBtn")
        let enrollForm = document.getElementById("enrollForm")
        let clsBtn = document.getElementById("cls")

        enrollBtn.addEventListener("click", (e) => {
            enrollForm.show()
        })
        clsBtn.addEventListener("click", (e) => {
            enrollForm.close()
        })

        // menu 
    let menuBtn = document.querySelector(".menu-btn")
    let menu = document.querySelector(".menu")

    menuBtn.addEventListener("click", function (e) {
        menu.classList.toggle("active");
    });