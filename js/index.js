const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("a");
nav.forEach ((element,i) => {
    element.innerHTML = siteContent["nav"][`nav-item-${i+1}`];
  }) 

let h1 = document.querySelector("h1")
h1.innerHTML = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.innerHTML = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

// ** MAIN CONTENT SECTION **
//top
let featuresH4 = document.querySelector(".top-content div:nth-child(1) h4");
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

let featuresPar = document.querySelector(".top-content div:nth-child(1) p");
featuresPar.innerHTML = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector(".top-content div:nth-child(2) h4");
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutPar = document.querySelector(".top-content div:nth-child(2) p");
aboutPar.innerHTML = siteContent["main-content"]["about-content"];

//middle 

let middleImg = document.querySelector("#middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom

let servicesH4 = document.querySelector(".bottom-content div:nth-child(1) h4");
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

let servicesPar = document.querySelector(".bottom-content div:nth-child(1) p");
servicesPar.innerHTML = siteContent["main-content"]["services-content"];

let productH4 = document.querySelector(".bottom-content div:nth-child(2) h4");
productH4.innerHTML = siteContent["main-content"]["product-h4"];

let productPar = document.querySelector(".bottom-content div:nth-child(2) p");
productPar.innerHTML = siteContent["main-content"]["product-content"];

let visionH4 = document.querySelector(".bottom-content div:nth-child(3) h4");
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

let visionPar = document.querySelector(".bottom-content div:nth-child(3) p");
visionPar.innerHTML = siteContent["main-content"]["vision-content"];

// ** CONTACT **

let contactH4 =  document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"]

let address = document.querySelector(".contact p:nth-child(2)");
address.innerHTML = siteContent["contact"]["address"]

let phone = document.querySelector(".contact p:nth-child(3)")
phone.innerHTML = siteContent["contact"]["phone"]

let email = document.querySelector(".contact p:nth-child(4)")
email.innerHTML = siteContent["contact"]["email"]

// ** FOOTER **

let footer = document.querySelector("footer p");
footer.innerHTML = siteContent["footer"]["copyright"];

