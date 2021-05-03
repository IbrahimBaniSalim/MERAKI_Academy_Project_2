document.addEventListener("DOMContentLoaded", () => {
  const body = $("body");
  const dark = $("#dark");
  const header = $("header");
  const ul = $("ul");
  const reg = $(".reg-form");
  const log = $(".login-form");
  const item1 = $(".item-1");
  const item2 = $(".item-2");
  const footer = $(".footer");
  const catagories = $(".catagories");
  const singIn = $("#Sing_in");
  const singUp = $("#Sing_up");
  const nave = $(".nav");
  const card=$(".card")
  
    item1.hide();
    item2.hide();
    reg.hide();
    log.hide();

  let t = true;
  dark.on("click", () => {
    if (t) {
        catagories.css({
        color: "#000",
        "background-color": "#000",
      });
     
      body.css({
        color: "#fff",
        "background-color": "#000",
      });
      dark.css({
        color: "#fff",
        "background-color": "#000",
      });
      header.css({
        color: "#fff",
        "background-color": "#000",
      });
      ul.css({
        color: "#fff",
        "background-color": "#000",
      });
     
      reg.css({
        color: "#fff",
        "background-color": "#000",
      });
      log.css({
        color: "#fff",
        "background-color": "#000",
      });
    //  
      footer.css({
        color: "#fff",
        "background-color": "#000",
        
      });
      t = false;
    } else {
      t = true;
      catagories.css({
        color: "#000",
        "background-color": "#fff",
      });
      body.css({
        "background-color": "floralwhite",
      });
      dark.css({
        color: "#000",
        "background-color": "#fff",
      });
      header.css({
        color: "#fff",
        "background-color": "#e3a772",
      });
      ul.css({
        color: "#fff",
        "background-color": "burlywood",
      });
     ;
      reg.css({
        color: "#000",
        "background-color": "#f1f1f1",
      });
      log.css({
        color: "#000",
        "background-color": "##f1f1f1",
      });
     
      footer.css({
        color: "#fff",
        "background-color": "#44413C",
      });
    }
  });
/**************************************************************************************** */
  singIn.on("click", () => {
    catag.hide();
    contan.show();
    reg.hide();
    log.show();
  });
  singUp.on("click", () => {
    catag.hide();
    contan.show();
    log.hide();
    reg.show()
  });
  // singIn.toggle()
  const fashion = $(".Fashion");
  fashion.on("click", () => {
    catag.hide();
    item1.show();
  });

  const toy = $(".toys");
  toy.on("click", () => {
    catag.hide();
    item2.show();
  });
  const home=$(".act")
  home.on("click", ()=>{
  header.show();
  nave.show();
  catag.show();
  footer.show();
  });
 const array=[
    {
        name: 'angular',
        img: './images/angular.svg',
        des:'this my elements',
        price:'30$'

      },
      {
        name: 'aurelia',
        img: './images/images.jpg',
        des:'this my elements',
        price:'30$'

      },
      {
        name: 'backbone',
        img: './images/backbone.svg',
        des:'this my elements',
        price:'30$'
      },
      {
        name: 'ember',
        img: './images/ember.svg',
        des:'this my elements',
        price:'30$'
      },
 ]
 
 const item3=$('.item-3')
 
 for (let i = 0; i < array.length; i++) {
    const Elec= $(`<div> </div>`);
    Elec.addClass(`Elce${i}`)
    const src=array[i].img
    const img=$(`<img/>`)
    img.attr("src", src);
    Elec.append(img);
    Elec.append(array[i].des);
    Elec.append(array[i].price);
   const btn=$(`<button>add To Carde</button>`)
   btn.css({
        /* float: right;  */
 /* margin-left: 200px; */
 'padding':' 6px',
 'border':'none',
'margin-top':'8px',
 /* margin-right: 16px; */
 'font-size':' 17px;',
'background-color': '#a77142',
 /* margin-left: 100px; */
   })
//    $("btn").hover(()=>{
//     $(this).css("background-color", "#a77142");
//     }, ()=>{
//     $(this).css("color", "#fff");
//   });
   Elec.appendTo(item3)
 Elec.css({
 })
 }
item3.hide();

const three = $(".Media");
  three.on("click", () => {
    catag.hide();
    item3.show();
  });


 
//  const three = $(".Elec&Media");
//  three.on("click", () => {
//    catag.hide();
//    item3.show();
//  });













































});
