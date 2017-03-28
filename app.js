app = new Vue({
    el: "#app",
    data: {
        givenup: true,
        playerHealth: 100,
        enemyHealth: 100,
        magic:100,
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
        magicStyle:{
        	width:'100%',
        	transitionDuration:"300ms"
        },
        playerAttacks:[],
        enemyAttacks:[]
    },
    methods: {
        updateBars: function() {
            this.playerStyle.width = this.playerHealth + "%";
            this.enemyStyle.width = this.enemyHealth + "%";
            this.magicStyle.width = this.magic+"%";
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
            if(this.playerAttacks.length>5){
            	this.playerAttacks.splice(0,1);
            }
            if(this.enemyAttacks.length>5){
            	this.enemyAttacks.splice(0,1);
            }
        },
        start: function() {
            this.playerHealth = 100;
            this.enemyHealth = 100;
            this.won=false;
            this.lost=false;
            this.magic = 100;
            this.playerAttacks=[];
            this.enemyAttacks=[];
            this.givenup = !this.givenup;
            this.updateBars();
        },
        monsterAttack: function() {
        	if(this.enemyHealth<50 && Math.random()<0.5){
        		//try to heal by 25% chance
        			var hea = Math.floor(Math.random()*10+10);
        			this.enemyHealth+=hea;
        			this.enemyAttacks.push(-hea);
        	}else{
        		console.log(">50");
	        	var atk = Math.floor(Math.random()*5+10);
	            this.playerHealth -= atk;
	            this.enemyAttacks.push(atk);
	        }
	        this.magic+=10;
	        if(this.magic>100){
	        	this.magic=100;
	        }
            this.updateBars();
        },

        attack: function() {
        	var atk = Math.floor(Math.random()*3+7);
        	this.playerAttacks.push(atk)
            this.enemyHealth -= atk;
            this.monsterAttack();
        },
        specialAttack: function() {
        	if(this.magic>=25){
	        	var atk =Math.floor(Math.random()*20+10);
	            this.enemyHealth -= atk;
	            this.playerAttacks.push(atk);
	            this.magic-=25;
	            this.monsterAttack();
            }
        },
        heal: function() {
        	if(this.magic>=30 && this.playerHealth<100){
	        	var hea=Math.floor(Math.random()*20+10);
	        	this.magic-=30;
	            this.playerHealth += hea;
	            this.playerAttacks.push(-hea);
	            this.monsterAttack();
	            if(this.playerHealth>100){
	            	this.playerHealth=100;
	            }
	        }
	            this.updateBars();
        },
        reverse: function (array) {
			return array.slice().reverse()
	    }
    }
});
