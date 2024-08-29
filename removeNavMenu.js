
function hideNav() {
    //  CSS Class css-qc2jxf is used in too many places to use here
    
    //  We have to use path then check the aria-label value
    var navigationBar = document.querySelector("#root > div > div > nav > div > div > div > div > div > div:nth-child(5) > div:nth-child(1) > div");

    if (!navigationBar) {
        console.info('...waiting for navigationBar')
        window.setTimeout(hideNav, 200);
        return;
    } else {
        var navigationBarText = navigationBar.ariaLabel;
        
        // If we are on Admin menu, lets jump out of it
        if (navigationBarText === "Exit Admin") {
            console.log("Menu item:  "+navigationBarText);    
            navigationBar.click();
            var navigationBar = document.querySelector("#root > div > div > nav > div > div > div > div > div > div:nth-child(5) > div:nth-child(1) > div");
            
            // ...and wait till we get new label value
            console.info('...waiting for navigationBar')
            window.setTimeout(hideNav, 200);
            return;
        } else {
            //  Lets hide our menu
            console.log("Menu item:  "+navigationBarText);    

            console.info('...hiding navigationBar')
            // navigationBar.style.display = 'none';
            navigationBar.remove()    
        }
        
    }
}

document.addEventListener("DOMContentLoaded", hideNav);
document.addEventListener("click", hideNav);

