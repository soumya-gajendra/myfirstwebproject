// const puppeteer = require("puppeteer");
// const fs = require("fs");

// (async () => {
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.goto(
//     "https://www.imdb.com/title/tt7865090/episodes/?ref_=tt_eps_sm",
//     { waitUntil: "networkidle2", timeout: 60000 }
//   );

//   const grab = await page.evaluate(() => {
//     const data = document.querySelectorAll(" .sc-ccd6e31b-1.fabWnN ");
//     let array = [];
//     //  const data = Array.from(document.querySelectorAll('.ipc-title-link-wrapper'))
//     data.forEach((e) => {
      
//       const man = e.querySelector('.sc-ccd6e31b-4.eMYVLm  .sc-ccd6e31b-5.cXcoHr  .sc-ccd6e31b-7.isrzCC  .ipc-title.ipc-title--base.ipc-title--title.ipc-title-link-no-icon.ipc-title--on-textPrimary.sc-ccd6e31b-8.fBRxkp   .ipc-title-link-wrapper  .ipc-title__text')
//       const ma = e.querySelector('.sc-ccd6e31b-4.eMYVLm  .sc-ccd6e31b-5.cXcoHr .sc-ccd6e31b-10.fVspdm')
//       const a = e.querySelector('.sc-ccd6e31b-4.eMYVLm .sc-ccd6e31b-11.hJduta  .ipc-overflowText.ipc-overflowText--base  .ipc-overflowText--children   .ipc-html-content.ipc-html-content--base.ipc-html-content--display-inline  .ipc-html-content-inner-div')
//       const m = e.querySelector(
//           ".ipc-slate.ipc-slate--base.ipc-slate--dynamic-width.sc-ccd6e31b-2.hRnXqd.ipc-sub-grid-item.ipc-sub-grid-item--span-4    .ipc-media.ipc-media--slate-16x9.ipc-image-media-ratio--slate-16x9.ipc-media--base.ipc-media--slate-m.ipc-slate__slate-image.ipc-media__img   .ipc-image"
//         )
//         .getAttribute("src");
     

//       array.push({Episode:man.textContent,date:ma.textContent,summery:a.textContent,photo:m})
//     });
//     return array;
//   });
//   fs.writeFile("data.json", JSON.stringify(grab, null, 1), (err) => {
//   if (err) throw err;
//   console.log("data written to file");
//   });

//   await browser.close();
// })();
// const fs = require('fs/promises');

// async function readJsonFile() {
//   try {
//     const data = await fs.readFile('./data.json', 'utf8');
//     const jsonData = JSON.parse(data);
//     document.getElementById("products").innerHTML = `haloo jshdiuQ  ${4+4} uiuueci`;
//   } catch (err) {
//     console.error(err);
//   }
// }

// readJsonFile();

$(document).ready(function(){
  $.getJSON("data.json" , function(data){
    // $('.products').html(data.date);
    console.log(data);
  })
})