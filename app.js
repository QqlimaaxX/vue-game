app = new Vue({
    el: "#app",
    data: {
        givenup: true,
        playerHealth: 100,
        enemyHealth: 100,
        playerStyle: {
            width: '100%',
            transitionDuration: "300ms"
        },
        enemyStyle: {
            width: '100%',
            transitionDuration: "300ms"
        }

    },
    methods: {
        updateBars: function() {
            this.playerStyle.width = this.playerHealth + "%";
            this.enemyStyle.width = this.enemyHealth + "%";
            // console.log(this.playerHealth,this.enemyHealth);
            if(this.enemyHealth<0){
            	alert("You won!!");
            	this.givenup=!this.givenup;
            }
        },
        start: function() {
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.givenup = !this.givenup;
            this.updateBars();
        },
        monsterAttack: function() {
            this.playerHealth -= Math.floor(Math.random()*3+7);
            this.updateBars();
        },

        attack: function() {
            this.enemyHealth -= Math.floor(Math.random()*3+7);
            this.monsterAttack();
        },
        specialAttack: function() {
            this.enemyHealth -= Math.floor(Math.random()*12+8);
            this.monsterAttack();
        },
        heal: function() {
            this.playerHealth += Math.floor(Math.random()*10+10);
            this.monsterAttack();
        }
    }
});
