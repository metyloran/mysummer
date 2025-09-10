 function read() {
    var btn = document.getElementById("btn");
    var wnd = document.getElementById("wnd");

    if (wnd.style.display === "none") {
      wnd.style.display = "inline";
      btn.innerHTML = "скрыть";
    } else {
      wnd.style.display = "none";
      btn.innerHTML = "Великий Гетсби";
    }
  }