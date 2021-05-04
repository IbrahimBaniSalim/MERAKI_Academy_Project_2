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
    catagories.hide();
    
    reg.hide();
    log.show();
  });
  singUp.on("click", () => {
    catagories.hide();
    log.hide();
    reg.show()
  });
  /**************************************************************************************** */
  const fashion = $(".Fashion");
  fashion.on("click", () => {
    catagories.hide();
    item1.show();
  });

  const toy = $(".toys");
  toy.on("click", () => {
    catagories.hide();
    item2.show();
  });
  const home=$(".act")
  home.on("click", ()=>{
  header.show();
  nave.show();
  catagories.show();

  });
 const array=[
    {
        name: 'electronic',
        img: './images/e1.png',
        des:'this my elements',
        price:'30$'

      },
      {
        name: 'aurelia',
        img: './images/e2.jpg',
        des:'this my elements',
        price:'30$'

      },
      {
        name: 'electronic',
        img: './images/e3.jpg',
        des:'this my elements',
        price:'30$'
      },
      {
        name: 'electronic',
        img: './images/e4.jpg',
        des:'this my elements',
        price:'30$'
      },
 ]
 
 const item3=$('.item-3')
 
 for (let i = 0; i < array.length; i++) {
    const Elec= $(`<div> </div>`);
    const h1=$(`<h1> </h1>`);
    const p=$(`<p> </p>`)
    const p1=$(`<p> </p>`)
    Elec.addClass(`card`)
    const src=array[i].img
    const img=$(`<img/>`)
    img.css({
        'width':'300px',
         'height':'250px'
    })
    img.attr("src", src);
    h1.append(array[i].name);
    Elec.append(h1);
    Elec.append(img);
    p.append(array[i].price);
    p.addClass(`price`)
    Elec.append(p);

    p1.append(array[i].des);
    Elec.append(p1);
    
   const btn=$(`<p><button>add To Carde</button></P>`)
   btn.addClass(`card`)
   Elec.append(btn);
   Elec.appendTo(item3)
 
 }
item3.hide();

const three = $(".Media");
  three.on("click", () => {
    catagories.hide();
    item3.show();
  });
/************************************************************************** */
const array1=[
    {
        name: 'personal care',
        img: './images/p1.jpg',
        des:'this my elements',
        price:'30$'

      },
      {
        name: 'personal care',
        img: './images/p2.jpg',
        des:'this my elements',
        price:'30$'

      },
      {
        name: 'personal care',
        img: './images/p3.jpg',
        des:'this my elements',
        price:'30$'
      },
      {
        name: 'personal care',
        img: './images/p4.jpg',
        des:'this my elements',
        price:'30$'
      },
 ]
 
 const item4=$('.item-4')
 
 for (let i = 0; i < array1.length; i++) {
    const personal= $(`<div> </div>`);
    const h1=$(`<h1> </h1>`);
    const p=$(`<p> </p>`)
    const p1=$(`<p> </p>`)
    personal.addClass(`card`)
    const src=array1[i].img
    const img=$(`<img/>`)
    img.css({
        'width':'300px',
         'height':'250px'
    })
    img.attr("src", src);
    h1.append(array1[i].name);
    personal.append(h1);
    personal.append(img);
    p.append(array1[i].price);
    p.addClass(`price`)
    personal.append(p);

    p1.append(array1[i].des);
    personal.append(p1);
    
   const btn=$(`<p><button>add To Carde</button></P>`)
   btn.addClass(`card`)
   personal.append(btn);
   personal.appendTo(item4)
 
 }
item4.hide();

const four = $(".personal1");
  four.on("click", () => {
    catagories.hide();
    item4.show();
  });


 














































});
