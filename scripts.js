document.addEventListener("DOMContentLoaded", () => {
  const dashboardImg = document.getElementById("dashboard-img");
  const gregImg = document.getElementById("greg-img");
  const reviewImg = document.getElementById("review-play-btn");
  const videoPopup = document.getElementById("video-popup");
  const closePopup = document.getElementById("close-popup");
  const pricingVideo = document.getElementById("pricingplaybtn");
  const youtubeVideo = document.getElementById("youtube-video");

  if (dashboardImg) {
    dashboardImg.addEventListener("click", () => {
      youtubeVideo.src = "https://www.youtube.com/embed/Mt3FZXf7JDE";
      videoPopup.classList.remove("hidden");
    });
  }
  

  if (gregImg) {
     gregImg.addEventListener("click", () => {
    youtubeVideo.src = "https://www.youtube.com/embed/-ObGIMZ04aI";
    videoPopup.classList.remove("hidden");
  });
  }


  if (reviewImg) {
   reviewImg.addEventListener("click", () => {
    youtubeVideo.src = "https://www.youtube.com/embed/Uw_ScReaXvA";
    videoPopup.classList.remove("hidden");
  });
}
 

  if (pricingVideo) {
    pricingVideo.addEventListener("click", () => {
  console.log(pricingVideo);
    youtubeVideo.src = "https://www.youtube.com/embed/wpfuf4UVY-U";
    videoPopup.classList.remove("hidden");
  });
 }


  if (closePopup) {
      closePopup.addEventListener("click", () => {
        videoPopup.classList.add("hidden");
        youtubeVideo.src = "";
      });
  }
  

  if (videoPopup) {
    videoPopup.addEventListener("click", (event) => {
      if (event.target === videoPopup) {
        videoPopup.classList.add("hidden");
        youtubeVideo.src = "";
      }
    });
  }
 
});

const monthlybtn = document.getElementById("monthly-billing");
const yearlybtn = document.getElementById("yearly-billing");
const essentialprice = document.getElementById("essential-price");
const proprice = document.getElementById("pro-price");
const advancedprice = document.getElementById("advanced-price");

const essentialspan = document.getElementById("essential-time");
const advancedspan = document.getElementById("advanced-time");

function toggleMonthly() {
  yearlybtn.classList.remove("active-billing");
  monthlybtn.classList.add("active-billing");
  essentialprice.innerHTML = `$150 <span class="poppins grey font16 normal" id="essential-time">/month</span>`;
  proprice.innerHTML = `$600`;
  advancedprice.innerHTML = `$1497.00 <span class="poppins grey font16 normal" id="essential-time">/month</span>`;
}

function toggleYearly() {
  monthlybtn.classList.remove("active-billing");
  yearlybtn.classList.add("active-billing");
  essentialprice.innerHTML = `$1449.00 <span class="poppins grey font16 normal" id="essential-time">/year</span>`;
  proprice.innerHTML = `$5599`;
  advancedprice.innerHTML = `$12500.00 <span class="poppins grey font16 normal" id="essential-time">/year</span>`;
}

console.log(essentialspan, advancedspan);

function faqToggle(e) {
  e.currentTarget.classList.toggle("active");
}



const openBtn = document.getElementById('open-btn')
const closeBtn = document.getElementById('close-btn')
const mobileMenu = document.getElementById('mobile-menu')


function toggleMenuOn() {
  openBtn.classList.add("control-hidden");
  closeBtn.classList.remove('control-hidden')
  mobileMenu.classList.add('menu-active')
  
}

function toggleMenuOff() {
  closeBtn.classList.add("control-hidden");
  openBtn.classList.remove("control-hidden");
  mobileMenu.classList.remove('menu-active')
}