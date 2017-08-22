function randomChance(quarters,willing){
	if(quarters>=willing){
		return quarters;
	}
	else{
		if(quarters > 0){
			if(Math.trunc(Math.random() * 100) === 99){ //selecting a random number from 0-99. if they get 99, they win (picking 99 is a 1 in 100 chance)
				quarters += (Math.trunc(Math.random() * 50) + 1);
				return quarters;
			}
			else{ //if they don't get 99 when choosing between 0-99, they lose so the number of quarters they have should go down by 1
				quarters--;
				return quarters;
			}
		}
		else{ //when quarters = 0 you lose
			return 0;
		}
	}
}
