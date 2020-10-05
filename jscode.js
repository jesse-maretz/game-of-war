class Card {
    constructor(suit, face, value) {
      this.suit = suit
      this.face = face
      this.value = value
    }
  }
class Deck {
    constructor() {
        this.fullDeck = []
    }
    createDeck() {
    let suit = ['clubs','spades','hearts','diamonds']
    let face = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace']
    let value = [2,3,4,5,6,7,8,9,10,11,12,13,14]
    for (let i=0; i < suit.length; i++) {
        for (let j=0; j <face.length; j++) {
        this.fullDeck.push(new Card(suit[i], face[j], value[j]))
        }
    }
    }
}
const thisIsAFullDeck = new Deck()
thisIsAFullDeck.createDeck()

class Player {
    constructor(name, playerDeck) {
        this.name = name
        this.deck = playerDeck
    }
    getRemainingCard() {
        return this.deck.length;
    }
    play
}


