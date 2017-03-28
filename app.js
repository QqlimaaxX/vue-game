app = new Vue({
    el: "#app",
    data: {
        givenup: true,
        playerHealth: 100,
        enemyHealth: 100,
        won:false,
        lost:false,
        playerStyle: {
            width: '100%',
            transitionDuration: "300ms"
        },
        enemyStyle: {
            width: '100%',
            transitionDuration: "300ms"
        },
        playerAttacks:[],
        enemyAttacks:[]
    },
    methods: {
        updateBars: function() {
            this.playerStyle.width = this.playerHealth + "%";
            this.enemyStyle.width = this.enemyHealth + "%";
            // console.log(this.playerHealth,this.enemyHealth);
            if(this.enemyHealth<=0){
            	alert("You won!!");
            	this.won=true;
            	this.givenup=!this.givenup;
            }else if(this.playerHealth<=0){
            	alert("You lost");
            	this.lost=true;
            	this.givenup=!this.givenup;
            }
        },
        start: function() {
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.won=false;
            this.lost=false;
            this.playerAttacks=[];
            this.enemyAttacks=[];
            this.givenup = !this.givenup;
            this.updateBars();
        },
        monsterAttack: function() {
        	var atk = Math.floor(Math.random()*5+10);
            this.playerHealth -= atk;
            this.enemyAttacks.push(atk);
            this.updateBars();
        },

        attack: function() {
        	var atk = Math.floor(Math.random()*3+7);
        	this.playerAttacks.push(atk)
            this.enemyHealth -= atk;
            this.monsterAttack();
        },
        specialAttack: function() {
        	var atk =Math.floor(Math.random()*12+8);
            this.enemyHealth -= atk;
            this.playerAttacks.push(atk);
            this.monsterAttack();
        },
        heal: function() {
        	var hea=Math.floor(Math.random()*10+10);
            this.playerHealth += hea;
            this.playerAttacks.push(-hea);
            this.monsterAttack();
            if(this.playerHealth>100){
            	this.playerHealth=100;
            }
            this.updateBars();
        },
        reverse: function (array) {
			return array.slice().reverse()
	    }
    }
});
