// TypeScript functions can be created both as a named function or as an anonymous function.
// this and arrow functions
interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function(this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

function cardNumber(num: number): number {
    if(num == 0) {
        num = 13;
    }
     return num;
}
// document.body.textContent = "card: " + pickedCard.card + " of " + pickedCard.suit ;
document.body.innerText = "card: " + cardNumber(pickedCard.card) + " of " + pickedCard.suit ;