export interface Card {
    value: number;
    color: string;
    imageUrl: string
}

export interface Player {
    index: number;
    cards:Card[];
}

export class UnoDeck {

    private static COLORS: string[] = ["red", "green", "blue", "yellow"];
    //private static CARD_NAME: string[] = []
    private cards: Card[] = [];
    constructor() {
        //Create the deck
        //Create the main deck
        let prefix: string = "0";
        for (let i = 0; i < 2; i++) {
            for (var c = 0; c < UnoDeck.COLORS.length; c++) {
                for (let j = 0; j < 13; j++) {
                    prefix = "0";
                    if (j < 10)
                        prefix = prefix + j;
                    else
                        prefix = j + "";

                    this.cards.push({
                        value: j + 1,
                        color: UnoDeck.COLORS[c],
                        imageUrl: "/assets/cards/c" + c + "_" + prefix + ".png"
                    });
                }

            }
        }
        for (let i =0; i < 4; i++) {
            this.cards.push({
                value: 13,
                color: "wild",
                imageUrl: "/assets/cards/c4_00.png"
            });

            this.cards.push ({
                value: 14,
                color: "plus4",
                imageUrl: "assets/cards/c4_01.png"
            });
        }

        for (let c = 0; c < UnoDeck.COLORS.length; c++) {
            this.cards.push({
                value: 0,
                color: UnoDeck.COLORS[c],
                imageUrl: "/assets/cards/c" + c + "_00" + ".png"
            })
        }

      this.shuffle();
    }

    private shuffle(times: number = 5): void {
        // Using Math.round() will give you a non-uniform distribution!
        function getRandomCard(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        for (let i = 0; i < times; i++) {
            for (let j = 0; j < this.cards.length; j++) {

                var p1: number = getRandomCard(1, this.cards.length-1);
                var p2: number = getRandomCard(1, this.cards.length-1);

                var t: Card = this.cards[p1];
                this.cards[p1] = this.cards[p2];
                this.cards[p2] = t;
            }
        }
    }

    public take(): Card {
        return (this.cards.pop());
    }
}