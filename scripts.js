/* document */
window.onload = function(){
	
	setTimeout(function(){
		
		$("#Lancer img").animate({
			top : "15%"
		},1500);
		
	},300);
	setTimeout(function(){
		
		"use strict";
		$("#Lancer").fadeOut();
		$("#Load h1").css("visibility","visible");
		$("#loading").css("visibility","visible");
	},4500);
	setTimeout(function(){
		
		"use strict";
		document.getElementById("lab1").style.display = "block";
		$("#Load").delay(2000).fadeOut(1500);
	},13000);
};
var mySpin = document.getElementById("spin");
mySpin.onclick = function()
{
	"use strict";
	var sp1=document.getElementById("inp1"),
		sp2=document.getElementById("inp2"),
		sp3=document.getElementById("inp3"),
		x=0;

	sp1.value = Math.floor(Math.random()*9+1);
	sp2.value = Math.floor(Math.random()*9+1);
	sp3.value = Math.floor(Math.random()*9+1);

	sp1.classList.add("moving");
	sp2.classList.add("moving");
	sp3.classList.add("moving");
	
	document.getElementById("spindiv").classList.add("spinmove");
	setTimeout(function(){
		"use strict";
		sp1.classList.remove("moving");
		sp2.classList.remove("moving");
		sp3.classList.remove("moving");
		
		document.getElementById("spindiv").classList.remove("spinmove");
	},1000);
	
	//First Box
	if(sp1.value  == 1)
		{
			sp1.style.background = "url('animals/ani1.jpg')";	
		}
	else{
		if(sp1.value  == 2)
			{
				sp1.style.background = "url('animals/ani2.jpg')";
			}
		else{
			if(sp1.value  == 3)
			{
				sp1.style.background = "url('animals/ani3.jpg')";
			}
			else{
				if(sp1.value == 4)
				   {
				     sp1.style.background = "url('animals/ani4.jpg')";
				   }
				else{
					if(sp1.value  == 5)
						{
							 sp1.style.background = "url('animals/ani5.jpg')";
						}
					else{
						if(sp1.value  == 6)
							{
								sp1.style.background = "url('animals/ani6.jpg')";
							}
						else{
							if(sp1.value  == 7)
								{
									sp1.style.background = "url('animals/ani7.jpg')";
								}
							else{
								if(sp1.value  == 8)
									{
										sp1.style.background = "url('animals/ani8.jpg')";
									}
								else{
									if(sp1.value  == 9)
										{
											sp1.style.background = "url('animals/ani9.jpg')";
										}
								}
							}
						}
					}
				}
			}
		}
	}
	
	//second Box
	
	if(sp2.value  == 1)
		{
			sp2.style.background = "url('animals/ani1.jpg')";	
		}
	else{
		if(sp2.value  == 2)
			{
				sp2.style.background = "url('animals/ani2.jpg')";
			}
		else{
			if(sp2.value  == 3)
			{
				sp2.style.background = "url('animals/ani3.jpg')";
			}
			else{
				if(sp2.value  == 4)
				   {
				     sp2.style.background = "url('animals/ani4.jpg')";
				   }
				else{
					if(sp2.value  == 5)
						{
							 sp2.style.background = "url('animals/ani5.jpg')";
						}
					else{
						if(sp2.value  == 6)
							{
								sp2.style.background = "url('animals/ani6.jpg')";
							}
						else{
							if(sp2.value  == 7)
								{
									sp2.style.background = "url('animals/ani7.jpg')";

								}
							else{
								if(sp2.value  == 8)
									{
										sp2.style.background = "url('animals/ani8.jpg')";
									}
								else{
									if(sp2.value  == 9)
										{
											sp2.style.background = "url('animals/ani9.jpg')";
										}
								}
							}
						}
					}
				}
			}
		}
	}
	//Last Box
	
	if(sp3.value  == 1)
		{
			sp3.style.background = "url('animals/ani1.jpg')";	
		}
	else{
		if(sp3.value  == 2)
			{
				sp3.style.background = "url('animals/ani2.jpg')";
			}
		else{
			if(sp3.value  == 3)
			{
				sp3.style.background = "url('animals/ani3.jpg')";
			}
			else{
				if(sp3.value  == 4)
				   {
				     sp3.style.background = "url('animals/ani4.jpg')";
				   }
				else{
					if(sp3.value  == 5)
						{
							 sp3.style.background = "url('animals/ani5.jpg')";
						}
					else{
						if(sp3.value  == 6)
							{
								sp3.style.background = "url('animals/ani6.jpg')";
							}
						else{
							if(sp3.value  == 7)
								{
									sp3.style.background = "url('animals/ani7.jpg')";
								}
							else{
								if(sp3.value  == 8)
									{
										sp3.style.background = "url('animals/ani8.jpg')";
									}
								else{
									if(sp3.value  == 9)
										{
											sp3.style.background = "url('animals/ani9.jpg')";
										}
								}
							}
						}
					}
				}
			}
		}
	}
	
//	***********************
	
	document.getElementById("chance").value=parseInt(document.getElementById("chance").value)-1;
	if(parseInt(document.getElementById("chance").value) == 0)
		{
			document.getElementById("chance").value = 15;
			document.getElementById("score").value = 0;
			document.getElementById("golden").value = 0;
		}
    
	if(parseInt(document.getElementById("score").value) >= parseInt(document.getElementById("High-score").value))
		{
			document.getElementById("High-score").value=document.getElementById("score").value;
		}

	if(sp1.value===sp2.value && sp1.value===sp3.value )
		{
			x=x+1000;
		    document.getElementById("msg").innerHTML="Bingooooo!!!";
			document.getElementById("score").value=parseInt(document.getElementById("score").value) + x;
			document.getElementById("golden").value=parseInt(document.getElementById("golden").value)+1;
		}
	else{
		if(sp1.value===sp2.value || sp1.value===sp3.value || sp2.value===sp3.value)
			{
				 x=x+120;
				 document.getElementById("msg").innerHTML="... u was almost To win ";
				 document.getElementById("score").value=parseInt(document.getElementById("score").value) + x;
				
			}
			else
		{
			document.getElementById("msg").innerHTML="Try again ...";	
		}
	}
};
document.getElementById("replay").onclick = function()
{
	"use strict";
	
	document.getElementById("chance").value = 15;
	document.getElementById("score").value = 0;
	document.getElementById("golden").value = 0; 
	document.getElementById("msg").innerHTML="Hello world";	
	
};
$("#letsStartGame").click(function(){
	
	if($("#myName").val() != "")
		{
			$(this).parent().css("visibility","hidden");
			$("#msgInfo").css("visibility","hidden");
		}
	else
		{
			$("#msgInfo").css("visibility","visible");
		}
});

$("#StartGame").click(function(){
	
	$(this).parent().css("visibility","hidden");
	
});

$("#returnToInfo").click(function(){
	
	$("#info").css("visibility","visible");
});

$("#returnToChoice").click(function(){
	
	$("#choice").css("visibility","visible");
});

