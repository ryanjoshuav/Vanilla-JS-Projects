function main() {
    const startBtn = document.querySelector(".js-start-button");
    const sumEl = document.querySelector(".js-sum-el");
    const messageEl = document.querySelector(".js-message-el");
    startBtn.addEventListener("click", playGame);

    function pickRandomCard() {
        const randomNumber = Math.floor(Math.random() * 13) + 1;
        let cardValue;
        if (randomNumber === 1) {
            cardValue = 11;
        } else if (randomNumber >= 11) {
            cardValue = 10;
        } else {
            cardValue = randomNumber;
        }
        return cardValue;
    }
    let alive = false;
    let hasBlackJack = false;
    let cards = [];

    function newCard(cardsArray) {
        if (alive && hasBlackJack === false) {
            let card = pickRandomCard();
            cardsArray.push(card);
        }

        checkResult(cardsArray);
    }

    function displayCards(cardsArray) {
        const cardsEl = document.querySelector(".js-cards-el");

        let cardsString = "Cards: ";
        cardsArray.forEach((card, index) => {
            cardsString += ` Card${index + 1}: ${card}`;
        });
        cardsEl.textContent = cardsString;
    }

    function checkResult(CardsArray) {
        let sum = CardsArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        sumEl.textContent = `Sum: ${sum}`;
        displayCards(CardsArray);
        console.log(cards);

        let message = "";
        if (sum === 21) {
            message = "You win!";
            hasBlackJack = true;
        } else if (sum > 21) {
            message = "You Lose";
            alive = false;
        } else if (sum < 21) {
            message = "Draw another card?";
        }

        messageEl.textContent = message;
    }

    function playGame() {
        let card1 = pickRandomCard();
        let card2 = pickRandomCard();
        cards = [];

        const pickNewCard = document.querySelector(".js-new-card");
        pickNewCard.addEventListener("click", () => {
            newCard(cards);
        });

        alive = true;
        hasBlackJack = false;
        cards = [card1, card2];

        console.log(cards);
        checkResult(cards);
    }
}
main();
