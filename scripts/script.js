const dropDownGeneral = document.getElementById("general-header");
let trackerGeneral = 0;

const dropDownFunnelBuilder = document.getElementById("funnel-builder-header");
let trackerFunnelBuilder = 0;

const dropDownProductBuilder = document.getElementById("product-builder-header");
let trackerProductBuilder = 0;

const dropDownMembershipBuilder = document.getElementById("membership-builder-header");
let trackerMembershipBuilder = 0;

const dropDownListBuilder = document.getElementById("list-builder-header");
let trackerListBuilder = 0;

const dropDownBlogBuilder = document.getElementById("blog-builder-header");
let trackerBlogBuilder = 0;


const dropDownAffiliateCenter = document.getElementById("affiliate-center-header");
let trackerAffiliateCenter = 0;

const dropDownSupportDesk = document.getElementById("support-desk-header");
let trackerSupportDesk = 0;


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

function hideFeatureProductBuilder(){ 
    const transformProperty = document.getElementById("dropdown-icon-product-builder");
    const hideArray = document.getElementsByClassName("product-builder-tr");

    if (trackerProductBuilder == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerProductBuilder = 1;

    } else if (trackerProductBuilder == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerProductBuilder = 0;
    }
};

function hideFeatureMembershipBuilder(){ 
    const transformProperty = document.getElementById("dropdown-icon-membership-builder");
    const hideArray = document.getElementsByClassName("membership-builder-tr");

    if (trackerMembershipBuilder == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerMembershipBuilder = 1;

    } else if (trackerMembershipBuilder == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerMembershipBuilder = 0;
    }
};

function hideFeatureListBuilder(){ 
    const transformProperty = document.getElementById("dropdown-icon-list-builder");
    const hideArray = document.getElementsByClassName("list-builder-tr");

    if (trackerListBuilder == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerListBuilder = 1;

    } else if (trackerListBuilder == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerListBuilder = 0;
    }
};

function hideFeatureBlogBuilder(){ 
    const transformProperty = document.getElementById("dropdown-icon-blog-builder");
    const hideArray = document.getElementsByClassName("blog-builder-tr");

    if (trackerBlogBuilder == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerBlogBuilder = 1;

    } else if (trackerBlogBuilder == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerBlogBuilder = 0;
    }
};

function hideFeatureAffiliateCenter(){ 
    const transformProperty = document.getElementById("dropdown-icon-affiliate-center");
    const hideArray = document.getElementsByClassName("affiliate-center-tr");

    if (trackerAffiliateCenter == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerAffiliateCenter = 1;

    } else if (trackerAffiliateCenter == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerAffiliateCenter = 0;
    }
};

function hideFeatureSupportDesk(){ 
    const transformProperty = document.getElementById("dropdown-icon-support-desk");
    const hideArray = document.getElementsByClassName("support-desk-tr");

    if (trackerSupportDesk == 0){

        transformProperty.style.transform = "rotate(0deg)"

        for (const hide of hideArray){
        hide.style.display = "none";
        }
        trackerSupportDesk = 1;

    } else if (trackerSupportDesk == 1){
        transformProperty.style.transform = "rotate(180deg)";
    
        for (const hide of hideArray){
        hide.style.display = "table-row";
        }    
        trackerSupportDesk = 0;
    }
};

dropDownGeneral.addEventListener("click" , hideFeatureGeneral);
dropDownFunnelBuilder.addEventListener("click" , hideFeatureFunnelBuilder);
dropDownProductBuilder.addEventListener("click" , hideFeatureProductBuilder);
dropDownMembershipBuilder.addEventListener("click" , hideFeatureMembershipBuilder);
dropDownListBuilder.addEventListener("click" , hideFeatureListBuilder);
dropDownBlogBuilder.addEventListener("click" , hideFeatureBlogBuilder);
dropDownAffiliateCenter.addEventListener("click" , hideFeatureAffiliateCenter);
dropDownSupportDesk.addEventListener("click" , hideFeatureSupportDesk);
