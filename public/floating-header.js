document.addEventListener("DOMContentLoaded", function() {
    const headerStyle = document.getElementsByClassName("header")[0].style;
    
    let lastScroll = 0;
    document.addEventListener("scroll", function() {
        if (window.scrollY > lastScroll || window.scrollY === 0)
            headerStyle.position = "relative";
        else
            headerStyle.position = "sticky";
        
        lastScroll = window.scrollY
    });
});