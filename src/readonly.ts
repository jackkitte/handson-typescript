export { };


class VisaCard {
  constructor(public readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('たまさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'たまたま';
