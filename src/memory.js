class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
        // add the rest of the class properties here
  }

  shuffleCards() {
    // ... write your code here
    if(this.cards === undefined){
      return undefined
    }
    for (let i = this.cards.length - 1; i > 0; i--) { 
      let temporaryCard = this.cards[i];
      let randomIndex = Math.floor(Math.random()*this.cards.length)
      this.cards[i] = this.cards[randomIndex]
      this.cards[randomIndex] = temporaryCard
   } 
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if(card1 === card2){
      this.pairsGuessed += 1
      this.pairsClicked += 1
      return true
    }
   else if(card1 !== card2){
    this.pairsClicked += 1
      return false
    }
  }

  checkIfFinished() {
    // ... write your code here
    if(this.pairsGuessed === this.cards.length/2){
      console.log("You Won!")
      return true
    }
    else{
      return false
    }
  }
}
