    player1_name = localStorage.getItem("player1_name");
    player1_score = 0;
    num_1 =  Math.floor(Math.random() * 20);
    num_2 =  Math.floor(Math.random() * 20);
    givenans = 0;
    
    


document.getElementById("player1_name").innerHTML = player1_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;

document.getElementById("Q1").innerHTML = num_1 ;
document.getElementById("O").innerHTML = "+";
document.getElementById("Q2").innerHTML = num_2;
function send()
{
	console.log( "inside send");
	givenans = document.getElementById("word").value;
	check();
	
}



function check()
{
	console.log( "inside check");

Ans = num_1 + num_2; 
console.log( "inside check Ans ="+Ans);
console.log( "inside check givenans ="+givenans);
if(givenans == Ans)
		{
			document.getElementById("CW").innerHTML = "CORRECT";

		}
		else 
		{
		    document.getElementById("CW").innerHTML = "WRONG";	
		}	
}

