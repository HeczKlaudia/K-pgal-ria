class Kartya {
  constructor(elem, adat, index) {
    // létrehozunk változókat az új elemhez
    this.elem = elem;

    // változókat az elem egyes grafikus elemeihez
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    this.adat = adat;
    this.adat.index = index;
    //console.log(this.adat);

    // konkrét elemeknek értéket adunk
    this.setAdatok(this.adat);

    this.elem.on("click", () => {
      this.KattintasTrigger();
    });
  }

  setAdatok(ertekek) {
    this.cim.html(ertekek.cim);
    this.kep.attr("src", ertekek.eleresiut);
    this.leiras.html(ertekek.leiras);
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("kepvalasztas", { detail: this.adat });
    //   console.log("rákattintottál a képre");
    window.dispatchEvent(esemeny);
  }
}
