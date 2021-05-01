document.addEventListener("DOMContentLoaded", () => {
  const body = $("body");
  const dark = $("#dark");
  const header = $("header");
  const ul = $("ul");
  const contan = $(".contanier");

  const reg = $(".reg-form");
  const log = $(".login-form");
  const item = $(".item-1");
  const footer = $("footer");
  const catag = $(".catago");
  const singIn=$("#Sing_in")
  const singup=$("#Sing_up")
  const nave=$(".nav")
  contan.hide();
  dark.on("click", () => {
    let t = true;
    if (t) {
      catag.css({
        color: "#fff",
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
      contan.css({
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
      item.css({
        color: "#fff",
        "background-color": "#000",
      });
      footer.css({
        color: "#fff",
        "background-color": "#000",
      });
      t = false;
    } else {
      t = true;
      dark.off("click", "");
    }
  });


singIn.on("click",()=>{
   
    catag.hide();
    item.hide();
    reg.hide();
   
});
singup.on("click",()=>{
   
    catag.hide();
    item.hide();
    log.hide();
   
});
   // singIn.toggle()
const fashion=$(".Fashion");
fashion.on("click",()=>{

    catag.hide();





})



















});