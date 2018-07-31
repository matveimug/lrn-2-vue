new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        specialCount: 0,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.specialCount = 0;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
            this.specialAvailable();
        },
        specialAttack: function () {
            if (this.specialCount === 0) {
                var damage = this.calculateDamage(10, 20);
                this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player hits monster hard for ' + damage
                });
                if (this.checkWin()) {
                    return;
                }
                this.monsterAttacks();
                this.specialCount = 5;
                this.specialAvailable();
            }
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth  = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });
            this.monsterAttacks();
            this.specialAvailable();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        monsterAttacks: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
            if (this.specialCount > 0) {
                this.specialCount -= 1
            }
            this.checkWin();
        },
        specialAvailable: function () {
            this.turns.unshift({
                isPlayer: true,
                text: 'Special available after ' + this.specialCount + ' turns'
            });
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('YOU ARE WINRAR :) NEW GAME ??')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0){
                if (confirm('YOU DIED :( NEW GAME ??')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
        }
    }
});