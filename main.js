document.addEventListener("DOMContentLoaded", () => {
  const body = $("body");
  const dark = $("#dark");
  const header = $("header");
  const ul = $("ul");
  const contan = $(".contanier");

  const reg = $(".reg-form");
  const log = $(".login-form");
  const item1 = $(".item-1");
  const footer = $("footer");
  const catag = $(".catago");
  const singIn = $("#Sing_in");
  const singUp = $("#Sing_up");
  const nave = $(".nav");
  const item2 = $(".item-2");
  contan.hide();
  item1.hide();
  item2.hide();
  let t = true;
  dark.on("click", () => {
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
    }
  });

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
















































  
});
