
/* var imagesize = document.getElementsById("imagesize")

imagesize.addeventlistener ("click",() => {
  img_increase 
};

function img_increase() {

            document.getElementById("imagesize").style.width="130%";
        } 
if( imagesize === false)
        function img_decrease()
        {
           document.getElementById("imagsize").style.width="100%";
        }

        const test = document.getElementById("test");
 */

var test = document.getElementById("test");

test.addEventListener(
  "mouseenter",
  (event) => {
  
    event.target.style.color = "purple";

    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

test.addEventListener(
  "mouseover",
  (event) => {
   
    event.target.style.color = "orange";

   
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);