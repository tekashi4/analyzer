window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,dps2,xd,digit,cnt,x,random,id,lng,str,chart,xVal,yVal,yVal2,checkBack,mType,mColor,rndMenu,tic,tic2,HdCol,spotArr;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V","1HZ25V","1HZ50V","1HZ75V"];HdClss=[]; HdCol=[]; spotArr=[0]; dps=[]; dps2=[];time=[0]; spot=[0]; tic=[];tic2=[];digit=[0]; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; x=0; yVal2=0; checkBack = 0; cnt=40;

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

function toggleDigitGrid(d,m) {
  var nameClass = document.querySelector("#tGrid > th:nth-child("+d+")").className;
  var nameClassb = document.querySelector("#bGrid > th:nth-child("+d+")").className;
    if(nameClass != "digitsGrd_moved_"+m) {
    document.querySelector("#tGrid > th:nth-child("+d+")").classList.remove(nameClass);
    document.querySelector("#tGrid > th:nth-child("+d+")").classList.add("digitsGrd_moved_"+m);   
  } if(nameClassb != "digitsGrd_moved_"+m) {
    document.querySelector("#bGrid > th:nth-child("+d+")").classList.remove(nameClassb);
    document.querySelector("#bGrid > th:nth-child("+d+")").classList.add("digitsGrd_moved_"+m);   
  }
}

function toggleHead(e,s) {
  var nameClass = document.querySelector("#headcol > span:nth-child("+e+")").className;
  if(nameClass != "Head_moved_"+s) {
    document.querySelector("#headcol > span:nth-child("+e+")").classList.remove(nameClass);
    document.querySelector("#headcol > span:nth-child("+e+")").classList.add("Head_moved_"+s);
  }
}

var HdCol = new Array(20);
var HdClss = new Array(20);
var tic = new Array(20);

   

function clearHd(){
	HdClss = new Array(20);
	var HdCol = new Array(20);
	for (var e=1; e<cnt+1; e++) {
	    toggleHead(e,e);
	}	 
}    
    
    

function rndGet() {
  random = document.querySelector("body > div.menu > span.menu-active").title;
  switch (random) {
    case str[0]: rnd="R_100"; xd=2; break;
    case str[1]: rnd="R_10"; xd=3; break;
    case str[2]: rnd="R_25"; xd=3; break;
    case str[3]: rnd="R_50"; xd=4; break;
    case str[4]: rnd="R_75"; xd=4; break;
    case str[5]: rnd="RDBEAR"; xd=4; break;
    case str[6]: rnd="RDBULL"; xd=4; break;
    default: rnd="R"; xd=0; break;
  }
}

rndGet();


ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l="+lng);

ws.onopen = function(evt) {
  ws.send(JSON.stringify({ticks:rnd}));
  //clearHd();

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
      clearHd();
    };
  
  };

  if (b.history) {
    
    if (b.echo_req.ticks_history == rnd) {
     
    for (var i=0; i<cnt+1; i++) {
          
        if(i < 20+1){
            time[i]= b.history.times[cnt-i];
            spot[i] = b.history.prices[cnt-i];
            spot[i] = parseFloat(spot[i]).toFixed(xd);
            digit[i] = spot[i].slice(-1);
        
        }
        spotArr[i] = b.history.prices[cnt-i];
        spotArr[i] = parseFloat(spotArr[i]).toFixed(xd);
        
        
      }
    for (var i=0; i<20+1; i++){
          ///////////////////
        if (spot[i] > spot[i+1]) {  
            toggleDigit(20-i,"Up");
            //console.log(20-i);
            if (i<10){
                toggleDigitGrid(10-(i),"Up");
            }
            if(digit[i] !=0) {
                tic[i]= (digit[i]*1);
            }
            if (((digit[i]) == 0) && digit[i+1] > 5) {
                tic[i]= (10);
            }
            if (((digit[i]) == 0) && digit[i+1] <= 5) {
                tic[i]= (0.5);
            }
        
        } else if(spot[i] < spot[i+1]) {
            toggleDigit(20-i,"Down");
            if (i<10){
                toggleDigitGrid(10-(i),"Down");
            }
            if(digit[i] !=0) {
                tic[i]= (digit[i]*-1);
            }
            if (((digit[i]) == 0) && digit[i+1] >5) {
                tic[i]= (-10);
            }
            if (((digit[i]) == 0) && digit[i+1] <=5) {
                tic[i]= (0.5);
            }
        ////
        } else if(spot[i]==spot[i+1]) {
            if (spot[i] > spot[i+2]) {
                toggleDigit(20-i,"Up");
                if (i<10){
                    toggleDigitGrid(10-(i),"Up");
                }
                if(digit[i] !=0) {
                    tic[i] = (digit[i]*1);
                }
                if (((digit[i]) == 0) && digit[i+1] > 5) {
                    tic[i]= (10);
                }
                if (((digit[i]) == 0) && digit[i+1] <= 5) {
                    tic[i]= (0.5);
                }
            } else if (spot[i] < spot[i+2]){
                toggleDigit(20-i,"Down");
                if (i<10){
                    toggleDigitGrid(10-(i),"Down");
                }
                var mColorDigit = "#c03";
                if(digit[i] !=0) {
                    tic[i]= (-digit[i]*-1);
                }
                if (((digit[i]) == 0) && digit[i+1] > 5 ) {
                    tic[i]= (-10);
                }
            if (((digit[i]) == 0) && digit[i+1] <= 5) {
                tic[i]= (-0.5);
            }
          }         
        }
        
          
          /////////////////////
            var SpotCalc = spotArr.slice(i , i+20);
            // console.log(i+20);
            if(parseFloat(spotArr[i])==Math.max.apply(null,SpotCalc)){
                HdCol[i]= "up";
            }else if(parseFloat(spotArr[i])==Math.min.apply(null,SpotCalc)){
                HdCol[i]= "down";
            }else{
                HdCol[i]= "mid";
            }
      } 
     
    for(var i=0; i<20+1; i++){
        if (i < 10){ // Cut graph
    		if (spot[i] > spot[i+1]) {		
    		    var mColorDigit = "#1439ff";
    	    } else if(spot[i] < spot[i+1]) {
    		    var mColorDigit = "#ff1439";
    		}else if(spot[i] == spot[i+1]){
    		    if (spot[i+1] > spot[i+2]) {		
    		        var mColorDigit = "#1439ff";
    	        } else if(spot[i+1] < spot[i+2]) {
    		        var mColorDigit = "#ff1439";
    		    }
    		}
    				
    		xVal = new Date(time[i]*1000);
    		yVal = parseFloat(spot[i]);  
    		var DigitLbl= digit[i];
    		var yValtic = tic[i];
    		
    		if (tic[i] > tic[i+1]){
    		    var lcolor = "#1439ff";
    		}else if (tic[i] < tic[i+1]){
    		    var lcolor = "#ff1439";
    		}else if (tic[i] == tic[i+1]){
    		    if (tic[i+1] > tic[i+2]){
    		        var lcolor = "#1439ff";
        		}else if (tic[i+1] < tic[i+2]){
        		    var lcolor = "#ff1439";
        		}
    		}
    		
            if(i==0) mType = "circle";
    	    else mType = "circle";
            if(yVal==Math.max.apply(null,spot)){
    		    mColor = "#1439ff";
    		    mType = "circle";
    		    mSize = 8
    				
    	    }else if(yVal==Math.min.apply(null,spot)){
    		    mColor = "#ff1439";
    		    mType = "circle";
    		    mSize = 8
    				
    	    }else if(i==0){
    		    mColor = "#32cd32";
    		    mSize = 8
    	    }else{
    		    mColor = "white";
    		    mSize = 4
    		    }
        } // End Cut
        
				dps.push({
					x: xVal,
					y: yVal,
		    indexLabel:DigitLbl ,
	        indexLabelFontWeight: "bold",
	        indexLabelFontSize: 16,
	        indexLabelFontColor:mColorDigit,
	        
            markerSize: mSize,
            markerType: mType,
            markerColor: mColor,
            markerBorderColor: "#ccc"
				});
				
				dps2.push({
                    x:xVal, 
                    y:yValtic,
                indexLabel: DigitLbl ,
                indexLabelFontWeight: "bold",
            	indexLabelFontSize: 15,
            	indexLabelFontColor: mColorDigit,
            	    markerSize: mSize,
                    markerType: mType,
                    markerColor: mColor,
                    markerBorderColor: "#ccc",
                    lineColor: lcolor
                });
          	
	}

			if(dps.length > 20+1) {
				while(dps.length != 20+1) {
					dps.shift();
				}
			}
			
			if(dps2.length > 20+1) {
				while(dps2.length != 20+1) {
					dps2.shift();
				}
			}
			
			
			chart.options.axisY.stripLines[0].value =  spot[0];
			chart.render();
            chart2.render();
            
      tic.reverse();
      spotArr.reverse();
      spot.reverse();
      digit.reverse();

      for (var i=1; i<20+1; i++) { 
          
            document.querySelector("#digits > span:nth-child("+i+")").innerHTML = digit[i];
            if (i>9){
                if (tic[i-1]<=tic[i]){
    		        document.querySelector("#tGrid > th:nth-child("+(i-9)+")").innerHTML = digit[i+1];
    		        document.querySelector("#bGrid > th:nth-child("+(i-9)+")").innerHTML = "";
    		    }else if (tic[i-1]>tic[i]){
    		        document.querySelector("#bGrid > th:nth-child("+(i-9)+")").innerHTML = digit[i+1];
    		        document.querySelector("#tGrid > th:nth-child("+(i-9)+")").innerHTML = "";
    		    }
                
            }
          
        yVal2 = parseFloat(spot[20]);
        if(yVal2==Math.max.apply(null,spot)){
            var HdThick= "up";
        }else if(yVal2==Math.min.apply(null,spot)){
            var HdThick= "down";
        }else{
            var HdThick= "mid";
          }
		
        
        
        
        if (digit[i] % 2 == 0){
        	var ticEO = "even";
        }else{
        	var ticEO = "odd";
        }
		
     tic2.shift(0);  
     tic2.push({ticChar: ticEO});
        
     
     }
	HdClss.shift(0);
	HdClss.push(HdThick);
	
	for (var i=1; i<20+1; i++) {
            document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = digit[i];
	    toggleHead(i,HdCol[20-i]);
	    }


    };
  
  };
  
};

chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: false,
	theme: "light2",
	backgroundColor: "#000000",
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
                color:"white",
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
		lineColor: "gray",
		lineThickness: 2,
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dps
	}]
});

chart2 = new CanvasJS.Chart("chartContainer2", {
	animationEnabled: false,
	theme: "light2",
	backgroundColor: "#000000",
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
		content: "{indexLabel}"
      },
	axisX: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1,
    lineColor: "white"
	},
	axisY: {stripLines:[{
				startValue:-0.05,
				endValue:0.05,
                color:"white",
			}],
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1,
    lineColor: "white",
    interval: 1.5
	},
	data: [{
		type: "line",
		lineThickness: 2,
		dataPoints: dps2
	}]
});

}, false);

