
window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,xd,ZDigit,ZZ, digit,digitChar,cnt,x,random,id,lng,str,chart,xVal,yVal, GraphLen,checkBack,ClassNum,mType,mColor, mColorDigit,rndMenu,tic, lColor;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V","1HZ25V","1HZ50V","1HZ75V"];HdClss=[]; dps=[]; time=[0]; spot=[0]; tic=[]; digit=[0]; mType="none"; mColor="#32cd32"; mColorDigit="#32cd32"; lng="EN"; xVal=0; yVal=0; x=0; GraphLen= 9; checkBack = 0; cnt=20; tic=[];lColor=0;

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
    tic =[];
	HdClss=[];
	for (var e=1; e<cnt+1; e++) {
	   tic.unshift(0);
	   HdClss.unshift(0);
	}
}

function rndGet() {
  random = document.querySelector("body > div.menu > span.menu-active").title;
  switch (random) {
    case str[1]: rnd="R_10"; xd=3; break;
    case str[2]: rnd="R_25"; xd=3; break;
    case str[3]: rnd="R_50"; xd=4; break;
    case str[4]: rnd="R_75"; xd=4; break;
    case str[0]: rnd="R_100"; xd=2; break;
    default: rnd="R"; xd=0; break;
  }
}

rndGet();

ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l="+lng);

ws.onopen = function(evt) {
  ws.send(JSON.stringify({ticks:rnd}));
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
      clearHd();
    };
  
  };

  if (b.history) {
    
    if (b.echo_req.ticks_history == rnd) {
     x = document.getElementById("xZCheck"); 
      for (var i=0; i<cnt+1; i++) {
          
        time[i]=b.history.times[cnt-i];
        spot[i] = b.history.prices[cnt-i];
       
        if (x.checked === false){
            spot[i] = parseFloat(spot[i]).toFixed(xd);
            digit[i] = spot[i].slice(-1);
	    if (checkBack == 1){
                checkBack = 0;
            }
            
      }else if (x.checked === true){
          spot[i] = parseFloat(spot[i]).toFixed(xd);
          digit[i] = spot[i].slice(-2);
	      checkBack = 1;
        } 
      }
        
         
      for(var i=0; i<cnt+1; i++){
              var GraphLimit = GraphLen;
          
          if (i < GraphLimit){ // Cut graph
        	if (spot[i] > spot[i+10]) {		
        		     mColorDigit = "#1439ff";
            } else if(spot[i] < spot[i+10]) {
        		    mColorDigit = "#ff1439";
            }else if(spot[i] == spot[i+1]&& i>10){
                if (spot[i-10] < spot[i]) {
                     mColorDigit = "#1439ff";
                }else if (spot[i-10] > spot[i]){
                     mColorDigit = "#ff1439"
                }
            }
            ////
    		xVal = new Date(time[i]*1000);
    		yVal = parseFloat(spot[i]);  
    		var DigitLbl= digit[i]
    				
            if(i==0) mType = "circle";
    	    else mType = "circle";
            if (yVal==Math.max.apply(null,spot)){
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
		        if (i < 7){
			   	    mColor = "#ccc";
			   	    mType = "circle";
			   	    mSize = 6
				} else {
					
				    for (var e=0; e<=cnt; e++){
					if (e == i){		
					    if((e >= 7) && (spot[e-2] < spot[e-7])){
						    mColor = "green"; 
						    mType = "square";
						    mSize = 6
					    }else if ((e >= 7) && (spot[e-2] > spot[e-7])){
						    mColor = "red";
						    mType = "square";
						    mSize = 6
					    }else{
						    mColor = "black";
						    mType = "triangle";
						    mSize = 6
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
								
		    indexLabels:DigitALbl,
	        indexLabelsFontWeight: "bold",
	        indexLabelsFontSize: 16,
	        indexLabelsFontColor:mAColorDigit,
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
        document.querySelector("#digits > span:nth-child("+i+")").innerHTML = digit[i];

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

          } else if(spot[i-1] > spot[i]) {
			  toggleDigit(i,"down");
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
          if (spot[i-2] < spot[i-1]) {
            toggleDigit(i,"up");
          } else if (spot[i-2] > spot[i-1]){
            toggleDigit(i,"down");
          }         
        }
	
        tic.shift(0);
        tic.push(tic2nd);
     }
    
	for (var i=1; i<cnt+1; i++) {
	    document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = digit;
        var yVal_hd = parseFloat(spot[20]);
        if(yVal_hd==Math.max.apply(null,spot)){
            var HdThick= "up";
        }else if(yVal_hd==Math.min.apply(null,spot)){
            var HdThick= "down";
        }else{
            var HdThick= "mid";
        }
	    
	}
	HdClss.shift();
	HdClss.push(HdThick);  
	
	for (var i=1; i<cnt+1; i++) {
        document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = digit;
	    toggleHead(i,HdClss[i-1]);
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


}, false);

