new Vue({
  el: "#app",
  data: {
    score: 0,
    count: 0,
    meat: true,
    veg: true,
    supplements: true,
    count_bekon: 0,
    count_telyatina: 0,
    count_shinka: 0,
    count_sausage: 0,
    count_riba: 0,
    count_Tomato: 0,
    count_brokoli: 0,
    count_perez: 0,
    count_ogurez: 0,
    count_kukuruza: 0,
    count_ananas: 0,
    count_midii: 0,
    count_olivki: 0,
    count_krevetki: 0,
    count_cheese: 0,
    bekon_img: false,
    ananas_img: false,
    brokoli_img: false,
    cheese_img: false,
    Tomato_img: false,
    krevetki_img: false,
    midii_img: false,
    ogurez_img: false,
    riba_img: false,
    sausage_img: false,
    shinka_img: false,
    telyatina_img: false,
    olivki_img: false,
    perez_img: false,
    kukuruza_img: false,
    ingredient_warning: true,
    ingredient_bekon: 0,
    ingredient_telyatina: 0,
    ingredient_shinka: 0,
    ingredient_sausage: 0,
    ingredient_riba: 0,
    ingredient_Tomato: 0,
    ingredient_brokoli: 0,
    ingredient_perez: 0,
    ingredient_ogurez: 0,
    ingredient_kukuruza: 0,
    ingredient_ananas: 0,
    ingredient_cheese: 0,
    ingredient_midii: 0,
    ingredient_olivki: 0,
    ingredient_krevetki: 0,
  },
  methods: {
    meat_switch: function () {
      this.meat = true;
      this.veg = true;
      this.supplements = true;
    },
    veg_switch: function () {
      this.meat = false;
      this.veg = false;
      this.supplements = true;
    },
    supplements_switch: function () {
      this.meat = false;
      this.veg = true;
      this.supplements = false;
    },

    // калькулятор

    plus_bekon: function () {
      if (this.ingredient_warning == true) {
        if (this.count_bekon < 3) {
          this.count_bekon++;
          this.bekon_img = true;
          this.score += 100;
        }
        if (this.count_bekon == 1) this.ingredient_bekon = 1;
      } else return 0;
    },
    minus_bekon: function () {
      if (this.count_bekon > 0) {
        this.count_bekon--;
        this.score -= 100;
      }
      if (this.count_bekon == 0) this.bekon_img = false;
      if (this.count_bekon == 0) this.ingredient_bekon = 0;
    },
    plus_telyatina: function () {
      if (this.ingredient_warning == true) {
        if (this.count_telyatina < 3) {
          this.count_telyatina++;
          this.telyatina_img = true;
          this.score += 90;
        }
        if (this.count_telyatina == 1) this.ingredient_telyatina = 1;
      } else return 0;
    },
    minus_telyatina: function () {
      if (this.count_telyatina > 0) {
        this.count_telyatina--;
        this.score -= 90;
      }
      if (this.count_telyatina == 0) this.telyatina_img = false;
      if (this.count_telyatina == 0) this.ingredient_telyatina = 0;
    },
    plus_shinka: function () {
      if (this.ingredient_warning == true) {
        if (this.count_shinka < 3) {
          this.count_shinka++;
          this.shinka_img = true;
          this.score += 150;
        }
        if (this.count_shinka == 1) this.ingredient_shinka = 1;
      } else return 0;
    },
    minus_shinka: function () {
      if (this.count_shinka > 0) {
        this.count_shinka--;
        this.score -= 150;
      }
      if (this.count_shinka == 0) this.shinka_img = false;
      if (this.count_shinka == 0) this.ingredient_shinka = 0;
    },
    plus_sausage: function () {
      if (this.ingredient_warning == true) {
        if (this.count_sausage < 3) {
          this.count_sausage++;
          this.sausage_img = true;
          this.score += 80;
        }
        if (this.count_sausage == 1) this.ingredient_sausage = 1;
      } else return 0;
    },
    minus_sausage: function () {
      if (this.count_sausage > 0) {
        this.count_sausage--;
        this.score -= 80;
      }
      if (this.count_sausage == 0) this.sausage_img = false;
      if (this.count_sausage == 0) this.ingredient_sausage = 0;
    },
    plus_riba: function () {
      if (this.ingredient_warning == true) {
        if (this.count_riba < 3) {
          this.count_riba++;
          this.riba_img = true;
          this.score += 50;
        }
        if (this.count_riba == 1) this.ingredient_riba = 1;
      } else return 0;
    },
    minus_riba: function () {
      if (this.count_riba > 0) {
        this.count_riba--;
        this.score -= 50;
      }
      if (this.count_riba == 0) this.riba_img = false;
      if (this.count_riba == 0) this.ingredient_riba = 0;
    },
    plus_Tomato: function () {
      if (this.ingredient_warning == true) {
        if (this.count_Tomato < 3) {
          this.count_Tomato++;
          this.Tomato_img = true;
          this.score += 20;
        }
        if (this.count_Tomato == 1) this.ingredient_Tomato = 1;
      } else return 0;
    },
    minus_Tomato: function () {
      if (this.count_Tomato > 0) {
        this.count_Tomato--;
        this.score -= 20;
      }
      if (this.count_Tomato == 0) this.Tomato_img = false;
      if (this.count_Tomato == 0) this.ingredient_Tomato = 0;
    },
    plus_brokoli: function () {
      if (this.ingredient_warning == true) {
        if (this.count_brokoli < 3) {
          this.count_brokoli++;
          this.brokoli_img = true;
          this.score += 30;
        }
        if (this.count_brokoli == 1) this.ingredient_brokoli = 1;
      } else return 0;
    },
    minus_brokoli: function () {
      if (this.count_brokoli > 0) {
        this.count_brokoli--;
        this.score -= 30;
      }
      if (this.count_brokoli == 0) this.brokoli_img = false;
      if (this.count_brokoli == 0) this.ingredient_brokoli = 0;
    },
    plus_perez: function () {
      if (this.ingredient_warning == true) {
        if (this.count_perez < 3) {
          this.count_perez++;
          this.perez_img = true;
          this.score += 10;
        }
        if (this.count_perez == 1) this.ingredient_perez = 1;
      } else return 0;
    },
    minus_perez: function () {
      if (this.count_perez > 0) {
        this.count_perez--;
        this.score -= 10;
      }
      if (this.count_perez == 0) this.perez_img = false;
      if (this.count_perez == 0) this.ingredient_perez = 0;
    },
    plus_ogurez: function () {
      if (this.ingredient_warning == true) {
        if (this.count_ogurez < 3) {
          this.count_ogurez++;
          this.ogurez_img = true;
          this.score += 15;
        }
        if (this.count_ogurez == 1) this.ingredient_ogurez = 1;
      } else return 0;
    },
    minus_ogurez: function () {
      if (this.count_ogurez > 0) {
        this.count_ogurez--;
        this.score -= 15;
      }
      if (this.count_ogurez == 0) this.ogurez_img = false;
      if (this.count_ogurez == 0) this.ingredient_ogurez = 0;
    },
    plus_kukuruza: function () {
      if (this.ingredient_warning == true) {
        if (this.count_kukuruza < 3) {
          this.count_kukuruza++;
          this.kukuruza_img = true;
          this.score += 10;
        }
        if (this.count_kukuruza == 1) this.ingredient_kukuruza = 1;
      } else return 0;
    },
    minus_kukuruza: function () {
      if (this.count_kukuruza > 0) {
        this.count_kukuruza--;
        this.score -= 10;
      }
      if (this.count_kukuruza == 0) this.kukuruza_img = false;
      if (this.count_kukuruza == 0) this.ingredient_kukuruza = 0;
    },
    plus_ananas: function () {
      if (this.ingredient_warning == true) {
        if (this.count_ananas < 3) {
          this.count_ananas++;
          this.ananas_img = true;
          this.score += 50;
        }
        if (this.count_ananas == 1) this.ingredient_ananas = 1;
      } else return 0;
    },
    minus_ananas: function () {
      if (this.count_ananas > 0) {
        this.count_ananas--;
        this.score -= 50;
      }
      if (this.count_ananas == 0) this.ananas_img = false;
      if (this.count_ananas == 0) this.ingredient_ananas = 0;
    },
    plus_midii: function () {
      if (this.ingredient_warning == true) {
        if (this.count_midii < 3) {
          this.count_midii++;
          this.midii_img = true;
          this.score += 120;
        }
        if (this.count_midii == 1) this.ingredient_midii = 1;
      } else return 0;
    },
    minus_midii: function () {
      if (this.count_midii > 0) {
        this.count_midii--;
        this.score -= 120;
      }
      if (this.count_midii == 0) this.midii_img = false;
      if (this.count_midii == 0) this.ingredient_midii = 0;
    },
    plus_olivki: function () {
      if (this.ingredient_warning == true) {
        if (this.count_olivki < 3) {
          this.count_olivki++;
          this.olivki_img = true;
          this.score += 20;
        }
        if (this.count_olivki == 1) this.ingredient_olivki = 1;
      } else return 0;
    },
    minus_olivki: function () {
      if (this.count_olivki > 0) {
        this.count_olivki--;
        this.score -= 20;
      }
      if (this.count_olivki == 0) this.olivki_img = false;
      if (this.count_olivki == 0) this.ingredient_olivki = 0;
    },
    plus_krevetki: function () {
      if (this.ingredient_warning == true) {
        if (this.count_krevetki < 3) {
          this.count_krevetki++;
          this.krevetki_img = true;
          this.score += 40;
        }
        if (this.count_krevetki == 1) this.ingredient_krevetki = 1;
      } else return 0;
    },
    minus_krevetki: function () {
      if (this.count_krevetki > 0) {
        this.count_krevetki--;
        this.score -= 40;
      }
      if (this.count_krevetki == 0) this.krevetki_img = false;
      if (this.count_krevetki == 0) this.ingredient_krevetki = 0;
    },
    plus_cheese: function () {
      if (this.ingredient_warning == true) {
        if (this.count_cheese < 3) {
          this.count_cheese++;
          this.cheese_img = true;
          this.score += 45;
        }
        if (this.count_cheese == 1) this.ingredient_cheese = 1;
      } else return 0;
    },
    minus_cheese: function () {
      if (this.count_cheese > 0) {
        this.count_cheese--;
        this.score -= 45;
      }
      if (this.count_cheesei == 0) this.cheesei_img = false;
      if (this.count_cheese == 0) this.ingredient_cheese = 0;
    },
    warning: function () {
      console.log(true);
      if (
        this.ingredient_bekon +
          this.ingredient_telyatina +
          this.ingredient_shinka +
          this.ingredient_sausage +
          this.ingredient_riba +
          this.ingredient_Tomato +
          this.ingredient_brokoli +
          this.ingredient_perez +
          this.ingredient_ogurez +
          this.ingredient_kukuruza +
          this.ingredient_ananas +
          this.ingredient_cheese +
          this.ingredient_midii +
          this.ingredient_olivki +
          this.ingredient_krevetki >
        4
      )
        this.ingredient_warning = false;
      else this.ingredient_warning = true;
    },
  },
});
