const dropDownHeaders = document.querySelectorAll(".header")
/*
alert (`${dropDownHeaders[0]}`);
const dropDownGeneral = document.getElementById("general-header");
let trackerGeneral = 0;

const dropDownFunnelBuilder = document.getElementById("funnel-builder-header");
let trackerFunnelBuilder = 0;



function hideFeatureGeneral(){ 
    const transformProperty = document.getElementById("dropdown-icon-general");
    const hideArray = document.getElementsByClassName("general-tr");

    if (trackerGeneral == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerGeneral = 1;

    } else if (trackerGeneral == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerGeneral = 0;
    }
};

function hideFeatureFunnelBuilder(){ 
    const transformProperty = document.getElementById("dropdown-icon-funnel-builder");
    const hideArray = document.getElementsByClassName("funnel-builder-tr");

    if (trackerFunnelBuilder == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerFunnelBuilder = 1;

    } else if (trackerFunnelBuilder == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerFunnelBuilder = 0;
    }
};

for (var header of dropDownHeaders){
    header.addEventListener("click" , alert(.id));
    
    }

*/
function getId(chevron){

    var id = chevron.id;
    alert(`${id}`);

    if (id == "general-header")



}


