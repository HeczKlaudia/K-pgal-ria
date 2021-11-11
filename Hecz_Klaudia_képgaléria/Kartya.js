class Kartya {
  constructor(elem, adat) {
    // létrehozunk változókat az új elemhez
    this.elem = elem;
    this.adat = adat;
    // változókat az elem egyes grafikus elemeihez
    this.cim = this.elem.children("h3");
    this.kep = this.elem.children("img");
    this.leiras = this.elem.children("p");
    //console.log(this.adat);

    // konkrét elemeknek értéket adunk
    this.setAdatok(this.adat);
  }

  setAdatok(ertekek) {
    this.cim.html(ertekek.cim);
    this.kep.attr("src", ertekek.eleresiut);
    this.leiras.html(ertekek.leiras);
  }
}

class Kiskartya extends Kartya {
  constructor(elem, adat, index) {
    super(elem, adat);

    this.adat.index = index;

    this.elem.on("click", () => {
      this.KattintasTrigger();
    });
  }

  KattintasTrigger() {
    let esemeny = new CustomEvent("kepvalasztas", { detail: this.adat });
    //   console.log("rákattintottál a képre");
    window.dispatchEvent(esemeny);
  }
}
