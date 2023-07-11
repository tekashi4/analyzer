window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,xd,ZDigit,ZZ,digit,cnt,x,random,id,lng,str,chart,xVal,yVal,yVal2,checkBack,ClassNum,mType,mColor,mColorDigit,rndMenu,digitONOFF;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V","1HZ25V","1HZ50V","1HZ75V"];HdClss=[]; result=[];dps=[]; time=[0]; spot=[0]; classIdArr=[]; tic=[];digit=[0]; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; yVal2=0; cnt=20;
var clrt;

rndMenu = document.querySelectorAll('div.menu > span');

for (var i = 0; i < rndMenu.length; i++) {
  clickMenu(rndMenu[i]);
}

function toggleMenu(data) {
  for (var i = 0; i < rndMenu.length; i++) {
    rndMenu[i].classList.remove('menu-active');
  }
  data.classList.add('menu-active');
}

function clickMenu(data) {
  data.addEventListener('click', function() {
    toggleMenu(data);
  });
}

function toggleDigit(d,m) {
  var nameClass = document.querySelector("#digits > span:nth-child("+d+")").className;
    if(nameClass != "digits_moved_"+m) {
    document.querySelector("#digits > span:nth-child("+d+")").classList.remove(nameClass);
    document.querySelector("#digits > span:nth-child("+d+")").classList.add("digits_moved_"+m);   
  }
}

function toggleHead(e,s) {
  var nameClass = document.querySelector("#headcol > span:nth-child("+e+")").className;
  if(nameClass != "Head_moved_"+s) {
    document.querySelector("#headcol > span:nth-child("+e+")").classList.remove(nameClass);
    document.querySelector("#headcol > span:nth-child("+e+")").classList.add("Head_moved_"+s);
  }
}

function clearHd(){
	HdClss=[];
	tic =[];
	for (var e=1; e<cnt+1; e++) {
	   HdClss.unshift(0);
	   tic.unshift(0);	
	}
    }


function toggleGrpDigit(q,r,s,t,u) {         
	     for (var f=0; f<10+1; f++) {     	    
		var element4 = document.getElementById("red_"+f);
		var elemName4 =document.getElementById("red_"+f).className;		
		if( elemName4 !== ""){
              	   element4.classList.remove(elemName4);
		   }	
		var element5 = document.getElementById("blue_"+f);
		var elemName5 =document.getElementById("blue_"+f).className;	
		if( elemName5 !== ""){
              	   element5.classList.remove(elemName5);   
		   }
		var element6 = document.getElementById("red_green_"+f);
		var elemName6 =document.getElementById("red_green_"+f).className;	
		if( elemName6 !== ""){
              	   element6.classList.remove(elemName6); 
		   }
		var element7 = document.getElementById("blue_green_"+f);
		var elemName7 =document.getElementById("blue_green_"+f).className;
		var RemoveComplete = "blue_green_"+f;	
		if( elemName7 !== ""){
              	   element7.classList.remove(elemName7);
		   }
		}
	    if( RemoveComplete == "blue_green_10" && x.checked === false){
		if (classIdArr.length >= 1){
		    var elementAdd1 = document.getElementById(q);
       		    elementAdd1.classList.add("digit_"+q.split('_')[0]);
		    }
		if (classIdArr.length >= 2){
		    var elementAdd2 = document.getElementById(r);
       		    elementAdd2.classList.add("digit_"+r.split('_')[0]);   
		    }
		if (classIdArr.length >= 3){
		     var elementAdd3 = document.getElementById(s);
       		    elementAdd3.classList.add("digit_"+s.split('_')[0]);
		    }
		if (classIdArr.length >= 4){
		    var elementAdd4 = document.getElementById(t);
       		    elementAdd4.classList.add("digit_"+t.split('_')[0]);   
		    }
		 if (classIdArr.length == 5){
		    var elementAdd5 = document.getElementById(u);
       		    elementAdd5.classList.add("digit_"+u.split('_')[0]);   
		    }
		
	}	
}
    


function rndGet() {
  random = document.querySelector("body > div.menu > span.menu-active").title;
  switch (random) {
     case str[0]: rnd="R_100"; xd=4; break;
    case str[1]: rnd="R_10"; xd=5; break;
    case str[2]: rnd="R_25"; xd=5; break;
    case str[3]: rnd="R_50"; xd=6; break;
    case str[4]: rnd="R_75"; xd=6; break;
    case str[5]: rnd="RDBEAR"; xd=6; break;
    case str[6]: rnd="RDBULL"; xd=6; break;
    case str[7]: rnd="1HZ100V"; xd=4; break;
    case str[8]: rnd="1HZ10V"; xd=4; break;
    case str[9]: rnd="1HZ25V"; xd=4; break;
    case str[10]: rnd="1HZ50V"; xd=4; break;
    case str[11]: rnd="1HZ75V"; xd=4; break;
    default: rnd="R"; xd=2; break;
  }
}

function isEven(value) {
	if (value%2 == 0)
		return "Even";
	else
		return "Odd";
                      
}
function getSignal(){
  if(result.length>2){
    var d1=result[result.length-3];
    var d2=result[result.length-2];
    var d3=result[result.length-1];
    // console.log(d1.x+"/"+d2.x+"/"+d3.x)
    if(d1.is=="Odd" && d2.is=="Even"){
      var c =  document.getElementById("sinyal")
      clearTimeout(clrt);
      c.innerHTML = "Wait ";
      if(d3.minus && d2.minus){ // d3 negatif
        if(d3.x<d2.x && d3.x<d1.x){
          if(d3.x==0){
            var c =  document.getElementById("sinyal")
            c.innerHTML = "UP I";
            c.classList.add("blueb");
            // console.log(d1.x+"/"+d2.x+"/"+d3.x+" Rise I")
          }else{
            var c =  document.getElementById("sinyal")
            c.innerHTML = "DOWN I";
            c.classList.add("redb");
            // console.log(d1.x+"/"+d2.x+"/"+d3.x+" Fall I")
          }
          
    //       setTimeout(() => { var c =  document.getElementById("sinyal");
    // c.innerHTML="Analy...";}, 2200);
        }
        if(d2.minus){
          // console.log(d1.x+">"+d2.x+">"+d3.x)
        }
        // if(d3.minus==false && d2.minus){// d3 positif
        // if(d2.minus){
        //   // console.log(d1.x+">"+d2.x+">"+d3.x)
        // }
      }else if(d3.minus==false && d2.minus){
        if(d1.minus){

        }else {
          if(d3.x>d1.x && (d1.x>d2.x*-1<d3.x)){
            var c =  document.getElementById("sinyal")
            c.innerHTML = "Down II";
            c.classList.add("redb");
            // console.log(d1.x+"/"+d2.x+"/"+d3.x+" Fall II")
    //         setTimeout(() => { var c =  document.getElementById("sinyal")
    // c.innerHTML="Analy...";console.log("to") }, 2200);
          }
        }
      }else if(d3.minus==false && d2.minus==false){
        if(d1.minus){

        }else {
          if(d1.x>d3.x && (d1.x>d2.x>d3.x)){
            var c =  document.getElementById("sinyal")
            c.innerHTML = "UP II";
            c.classList.add("blueb");
            // console.log(d1.x+"/"+d2.x+"/"+d3.x+" Rise II")
    //         setTimeout(() => { var c =  document.getElementById("sinyal")
    // c.innerHTML="Analy..." ;console.log("to")}, 2200);
          }
        }
      }
      clrt = setTimeout(() => { 
        var c =  document.getElementById("sinyal");
        c.innerHTML="Analy....";
        c.classList.remove("blueb");
        c.classList.remove("redb");}, 3000);
    }
    
  }
}
rndGet();

ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l="+lng);

ws.onopen = function(evt) {
  ws.send(JSON.stringify({ticks:rnd}));
  classIdArr=[];
  toggleGrpDigit();
  clearHd();

};

ws.onmessage = function(msg) {
  
  b = JSON.parse(msg.data);
  if (b.tick) {
    
    rndGet();
    
    if (b.echo_req.ticks == rnd) {
	
      id = b.tick.id;
      ws.send(JSON.stringify({ticks_history:rnd,end:"latest",start:1,style:"ticks",count:cnt+1}));
    } else {
      ws.send(JSON.stringify({forget:id}));
      ws.send(JSON.stringify({forget_all:"ticks"}));
      ws.send(JSON.stringify({ticks:rnd}));    
      classIdArr=[];
      toggleGrpDigit();
      clearHd();

    };
  
  };

  if (b.history) {
    
    if (b.echo_req.ticks_history == rnd) {
     digitONOFF = document.getElementById("DigitOnOff");
     x = document.getElementById("xZCheck"); 
      for (var i=0; i<cnt+1; i++) {
          
        time[i]=b.history.times[cnt-i];
        spot[i] = b.history.prices[cnt-i];
       
        if (x.checked === false){
            spot[i] = parseFloat(spot[i]).toFixed(xd);
            digit[i] = spot[i].slice(-3)[0];
	    if (checkBack == 1){
                classIdArr=[];
                checkBack = 0;
            }

      }else if (x.checked === true){
          spot[i] = parseFloat(spot[i]).toFixed(xd);
          digit[i] = spot[i].slice(-3)[0] + spot[i].slice(-3)[1];
	      checkBack = 1;
        } 
      }

     
      for(var i=0; i<cnt+1; i++){
          if(digitONOFF.checked === false){
              var GraphLimit = 12;
          
          }else if (digitONOFF.checked === true) {
              var GraphLimit = 20;
          
          }
          if (i < GraphLimit){ // Cut graph
	if (spot[i] > spot[i+1]) {		
		     mColorDigit = "#1439ff";
    } else if(spot[i] < spot[i+1]) {
		 mColorDigit = "#ff1439";
		///////////
    }else if(spot[i] == spot[i+1]&& i>0){
        if (document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_up"){
         mColorDigit = "#1439ff";
        }else if (document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_down"){
             mColorDigit = "#ff1439"
        }
    }
    ////////////////		
				xVal = new Date(time[i]*1000);
    		yVal = parseFloat(spot[i]);  
    		var DigitLbl= digit[i]
    				
            if(i==0) mType = "circle";
    	    else mType = "circle";
            if (yVal==Math.max.apply(null,spot)){
    		    mColor = "#1439ff";
    		    mType = "circle";
    		    mSize = 10
    				
    	    }else if(yVal==Math.min.apply(null,spot)){
    		    mColor = "#ff1439";
    		    mType = "circle";
    		    mSize = 10
    				
    	    }else if(i==0){
    		    mColor = "#32cd32";
    		    mSize = 10
    	    }else{
		        if (i < 7){
			   	    mColor = "black";
			   	    mType = "circle";
			   	    mSize = 5
				} else {
					
				    for (var e=0; e<=cnt; e++){
					if (e == i){		
					    if((e >= 7) && (spot[e-2] < spot[e-7])){
						    mColor = "green"; 
						    mType = "square";
						    mSize = 5
					    }else if ((e >= 7) && (spot[e-2] > spot[e-7])){
						    mColor = "red";
						    mType = "square";
						    mSize = 5
					    }else{
						    mColor = "black";
						    mType = "triangle";
						    mSize = 5
					    }
					  }		
					}
				}
	        }
        } // End Cut
        
             
                var mAColorDigit = mColorDigit;
                var DigitALbl = DigitLbl;
				dps.push({
					x: xVal,
					y: yVal,
					
			
		    indexLabel:DigitALbl ,
	        indexLabelFontWeight: "bold",
	        indexLabelFontSize: 15,
	        indexLabelFontColor:mAColorDigit,
	        
            markerSize: mSize,
            markerType: mType,
            markerColor: mColor,
            markerBorderColor: "#ccc"
				});
          	
			}
			


			if(dps.length > cnt+1) {
				
				while(dps.length != cnt+1) {
					dps.shift();
				}
				
			}
			
			chart.options.axisY.stripLines[0].value =  spot[0];
			chart.render();
      
      
      spot.reverse();
      digit.reverse();
      
      for (var i=1; i<cnt+1; i++) { 
        // if(i==cnt){
          
        //   result.push({x:digit[i]})
        //   // console.log(result[result.length-1])
        //   if(result.length>2){
        //     var d1=result[result.length-3].x;
        //     var d2=result[result.length-2].x;
        //     var d3=result[result.length-1].x;

        //     console.log(d1+"-"+d2+"-"+d3)
        //   }
        // }
               
        document.querySelector("#digits > span:nth-child("+i+")").innerHTML = digit[i];
        
        yVal2 = parseFloat(spot[20]);
            if(yVal2==Math.max.apply(null,spot)){
            var HdThick= "up";
            mColorHead = "#1439ff";
            if (spot[i+17] > spot[i+16]) {
              //console.log( " above - head blue");
              LDigit = digit[20];
              LDigit_0 = digit[19];
	      var classCol ="blue";
              if (LDigit_0 > 5 && LDigit == 0) {
                ClassNum = 10;                
              }if (LDigit_0 < 5 && LDigit == 0){
                ClassNum = LDigit;                     
              }if (LDigit != 0){
                ClassNum = LDigit; 
              }
		
            } else if(spot[i+17] < [i+16]) {
              //console.log("Worm head blue: Tick Return Down");
            } else if(spot[i+17] == spot[i+16]) {
              //console.log("Worm head blue: Tick Flat");
            }
	
     
        //Level digit Red
        }else if(yVal2==Math.min.apply(null,spot)){
            var HdThick= "down";
            mColorDigit = "#ff1439";
	    //removeClass();     
            if (spot[i+17] > spot[i+16]) {
            //console.log("Worm head red: Tick Return Up");
            } else if(spot[i+17] < spot[i+16]) {
                LDigit = digit[20];   
                LDigit_0 = digit[19];
		var classCol ="red";        
                if (LDigit_0 > 5 && LDigit == 0){
                    ClassNum = 10;            
                }if (LDigit_0 < 5 && LDigit == 0){
                    ClassNum = LDigit;                
                }if (LDigit != 0) {
                    ClassNum = LDigit;        
              }
		
            } else if(spot[20] == spot[i+16]) {
              //console.log("Worm head red: Tick Flat");
          }
	
     
        }else{
            var HdThick= "mid";
            //removeClass();
            //Between Level digit Red
            
            if (spot[i+17] > spot[i+16]) {
              //console.log("Worm head green:Tick UP");
              LDigit = digit[20];
              LDigit_0 = digit[19];
	      var classCol ="blue_green";
              if (LDigit_0 > 5 && LDigit == 0) {
                    ClassNum = 10;                  
              } if (LDigit_0 < 5 && LDigit == 0) {
                    ClassNum = LDigit;                        
              } if (LDigit != 0){
                    ClassNum = LDigit;
              }
		
            //Between Level digit Blue
            } else if(spot[i+17] < spot[i+16]) {
              //console.log("Worm head green:Tick Down");
	      LDigit = digit[20];
	      LDigit_0 = digit[19];
	      var classCol ="red_green";
              if (LDigit_0 > 5 && LDigit == 0) {
                ClassNum = 10;                   
              }if (LDigit_0 < 5 && LDigit == 0){
                ClassNum = LDigit;                       
              }if (LDigit != 0){
                ClassNum = LDigit;
              }
		
            } else if(spot[i+17] == spot[i+16]) {
              //console.log(Worm head green:Tick Flat);
            }
	
     
          }
	
		
        
        
	
        if (spot[i-1] < spot[i]) {          
          toggleDigit(i,"up");
          if(digit[i] !=0) {
            var tic2nd= (digit[i]*1);
          }
          if (((digit[i-1]) > 5) && digit[i] ==0) {
            var tic2nd= (10);
          }
          if (((digit[i-1]) <= 5) && digit[i] ==0) {
            var tic2nd= (0);
          }
          if(i==cnt){
            result.push({x:digit[i],is:isEven(digit[i]),minus:false})
            getSignal();
          }
        } else if(spot[i-1] > spot[i]) {
          toggleDigit(i,"down");
          if(i==cnt){
            result.push({x:digit[i]*-1,is:isEven(digit[i]),minus:true})
            getSignal();
          }
          if(digit[i] !=0) {
              var tic2nd= (digit[i]*-1);
              }
          if (((digit[i-1]) > 5) && digit[i] ==0) {
              var tic2nd= (-10);
              }
          if (((digit[i-1]) <= 5) && digit[i] ==0) {
              var tic2nd= (-0);
              }
              

        } else if(spot[i-1]==spot[i] && i-1>0) {
          if(document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_up") {
            toggleDigit(i,"up");
            
          } else if(document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_down") {
            toggleDigit(i,"down");
            
          }
         
        }
	
     tic.shift(0);
     tic.push(tic2nd);
        
     
     }
		if (classIdArr.length ==3){
		classIdArr.shift(0);
		}

        	classIdArr.push(classCol+"_"+ClassNum);
        
		HdClss.shift(0);
		HdClss.push(HdThick);
	
	for (var i=1; i<cnt+1; i++) {
            document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = digit;
	    toggleHead(i,HdClss[i-1]);
	    }
     
        if(classIdArr.length > 3+1) {
	while(classIdArr.length != 3+1) {
		classIdArr.shift();
		}				
	}


	if (classIdArr.length == 5){ 
    toggleGrpDigit(classIdArr[0],classIdArr[1],classIdArr[2],classIdArr[3],classIdArr[4]);
       	    }
	else if (classIdArr.length == 4){ 
      	    toggleGrpDigit(classIdArr[0],classIdArr[1],classIdArr[2],classIdArr[3]);
       	    }
	else if (classIdArr.length == 3){ 
      	    toggleGrpDigit(classIdArr[0],classIdArr[1],classIdArr[2]);
       	    }
	else if (classIdArr.length == 2){ 
      	    toggleGrpDigit(classIdArr[0],classIdArr[1]);
       	    }
	else if (classIdArr.length == 1){ 
      	    toggleGrpDigit(classIdArr[0]);
       	    }
  		
    };
  
  };
  
};

chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: false,
	theme: "light2",
	backgroundColor: "#D3D3D3",
  title: {
		titleFontSize: 0,
    text: ""
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		content: "{y}"
      },
	axisX: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	axisY: {stripLines:[{
                color:"blue",
			}],
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "yellow",
		lineThickness: 3,
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dps
	}]
});


}, false);

