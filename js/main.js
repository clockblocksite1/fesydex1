document.addEventListener("DOMContentLoaded", function(){
    var header = document.querySelector(".header");
    var burger = document.getElementById("burger");

    burger.addEventListener("click", function(event){
        event.stopPropagation();
        header.classList.toggle("open");
    });

    document.addEventListener("click", function(event){
        var target = event.target;
        var isMenuOpen = header.classList.contains("open");
        if(isMenuOpen && target !== burger && !header.contains(target)){
            setTimeout(function() {
                header.classList.remove("open");
            }, 300); 
        }
    });
});