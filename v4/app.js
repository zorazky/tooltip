// $('#HTML element').showToolTip ( {
//     Title: 'This is the title'
//     Content: 'This is the content'
//     onApprove: function() {
//         // To be called after Okay button is clicked.
//     }
// } );


// function showToolTip (tip) {
//     const title = tip.Title;
//     const content = tip.Content;
//     const onApprove = tip.onApprove;



// }



    const tooltip = document.getElementById("tooltip");
    const tooltipContent = document.getElementById("tooltipContent");

    //get position
    const rect = tooltipContent.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    const right = Number(rect.left) + 400;
    console.log(`right ${right}`)

    const size = {
        width: window.innerWidth || document.body.clientWidth,
        height: window.innerHeight || document.body.clientHeight
    }
    const pageWidth = size.width;
    console.log(`page width ${pageWidth}`)


    if (rect.left < 0) {
        tooltipContent.css("marginLeft", "+=" + (-pos.left) + "px");
    }
    else if (right > pageWidth) {
        tooltipContent.css("marginLeft", "-=" + (right - pageWidth));
    }

    tooltip.addEventListener("mouseover", function () {
        tooltipContent.style.visibility = "visible" ;
    })

    tooltip.addEventListener("mouseleave", function () {
        tooltipContent.style.visibility = "hidden" ;
    })
    
