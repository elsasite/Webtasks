// Yliluokka Henkilo
class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }

  // Getterit ja setterit Henkilo-luokan attribuuteille
  getEtunimet() {
    return this.etunimet;
  }

  setEtunimet(etunimet) {
    this.etunimet = etunimet;
  }

  getSukunimi() {
    return this.sukunimi;
  }

  setSukunimi(sukunimi) {
    this.sukunimi = sukunimi;
  }

  getKutsumanimi() {
    return this.kutsumanimi;
  }

  setKutsumanimi(kutsumanimi) {
    this.kutsumanimi = kutsumanimi;
  }

  getSyntymavuosi() {
    return this.syntymavuosi;
  }

  setSyntymavuosi(syntymavuosi) {
    this.syntymavuosi = syntymavuosi;
  }
}

// Luokka Urheilija perii Henkilo-luokan
class Urheilija extends Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi, linkkiKuvaan, omapaino, laji, saavutukset) {
    // Kutsutaan Henkilo-luokan konstruktoria
    super(etunimet, sukunimi, kutsumanimi, syntymavuosi);

    this.linkkiKuvaan = linkkiKuvaan;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Getterit ja setterit Urheilija-luokan attribuuteille
  getLinkkiKuvaan() {
    return this.linkkiKuvaan;
  }

  setLinkkiKuvaan(linkkiKuvaan) {
    this.linkkiKuvaan = linkkiKuvaan;
  }

  getOmaPaino() {
    return this.omapaino;
  }

  setOmaPaino(omapaino) {
    this.omapaino = omapaino;
  }

  getLaji() {
    return this.laji;
  }

  setLaji(laji) {
    this.laji = laji;
  }

  getSaavutukset() {
    return this.saavutukset;
  }

  setSaavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}

// Esimerkki luokkien käytöstä
const urheilija = new Urheilija('Sini', 'Seiväs', 'Simppu', 1999, 'http://esimerkkikuva.com/kuva.jpg', 50, 'Seiväshyppy', ['Aina maailman paras']);

// Tulostetaan urheilijan tiedot
console.log('Urheilijan tiedot:');
console.log('Etunimet:', urheilija.getEtunimet());
console.log('Sukunimi:', urheilija.getSukunimi());
console.log('Kutsumanimi:', urheilija.getKutsumanimi());
console.log('Syntymävuosi:', urheilija.getSyntymavuosi());
console.log('Kuvalinkki:', urheilija.getLinkkiKuvaan());
console.log('Omapaino:', urheilija.getOmaPaino());
console.log('Laji:', urheilija.getLaji());
console.log('Saavutukset:', urheilija.getSaavutukset());
