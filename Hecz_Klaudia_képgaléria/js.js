$(function () {
  // beletesszük az adatokat egy tömbbe
  const kepadat = [
    {
      cim: "1. kép címe",
      eleresiut: "kepek/kanada1.jpg",
      leiras: "1. kép leírása",
    },
    {
      cim: "2. kép címe",
      eleresiut: "kepek/kanada2.jpg",
      leiras: "2. kép leírása",
    },
    {
      cim: "3. kép címe",
      eleresiut: "kepek/kanada3.jpg",
      leiras: "3. kép leírása",
    },
  ];

  let aktIndex = 0;

  // van egy sablonelemünk,
  const szuloElem = $("#galeria");
  const sablonElem = $(".kartya");
  const fokepSzulo = $("#fokep");

  // a sablonelemet klónozzuk,
  // végigmegyünk a tömbünkön és
  // a klónozott elemmel és
  // a tömb adataival példányosítjuk a kártyánkat

  /* for (let index = 0; index < kepadat.length; index++) {
    // hozzácsatoljuk a szülőelemhez
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const ujKartya = new Kartya(ujElem, kepadat[index]);
  } */

  kepadat.forEach(function (elem, index) {
    const ujElem = sablonElem.clone().appendTo(szuloElem);
    const ujKartya = new Kiskartya(ujElem, elem, index);
  });

  const ujElem = sablonElem.clone().appendTo(fokepSzulo);
  const nagyKartya = new Kartya(ujElem, kepadat[0]);

  sablonElem.remove();

  // kép kattintására kiírás
  $(window).on("kepvalasztas", function (event) {
    /* $("#fokep h3").html(event.detail.cim);
      $("#fokep img").attr("src", event.detail.eleresiut);
      $("#fokep p").html(event.detail.leiras); */
    nagyKartya.setAdatok(event.detail);
    aktIndex = event.detail.index;
    console.log(aktIndex);
  });

  // kép léptetése gombokkal
  $("#balNyil").on("click", () => {
    aktIndex--;
    if (aktIndex < 0) {
      aktIndex = kepadat.length - 1;
    }
    nagyKartya.setAdatok(kepadat[aktIndex]);
  });

  $("#jobbNyil").on("click", () => {
    aktIndex++;
    if (aktIndex > kepadat.length - 1) {
      aktIndex = 0;
    }
    nagyKartya.setAdatok(kepadat[aktIndex]);
  });
});
