export { };


class Mahotsukai { }
class Souryo { }

class Taro extends Mahotsukai { }

interface Kenja {
  ionazun(): void;
}
interface Sensi {
  kougeki(): void;
}

class Jiro implements Kenja, Sensi {
  ionazun(): void {
    console.log('ionazun');
  }

  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
