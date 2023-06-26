window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,DEB,DER,DOB,DOR,xd,digit,cnt,random,id,lng,str,chart,xVal,yVal,mType,mColor,rndMenu;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL"];thick=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; dps=[];DER=[]; DEB=[]; DOB=[]; DOR=[]; time=[0]; spot=[0];tic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];digit=[0]; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; cnt=20;

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



function togglePlace(f,g) {
  var nameClass = document.querySelector("#placecol > span:nth-child("+f+")").className;
  if(nameClass != "Place_moved_"+g) {
    document.querySelector("#placecol > span:nth-child("+f+")").classList.remove(nameClass);
    document.querySelector("#placecol > span:nth-child("+f+")").classList.add("Place_moved_"+g);
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
     
    };
  
  };

  if (b.history) {
    
    if (b.echo_req.ticks_history == rnd) {
      
      if(document.querySelector("#chartContainer > div > a")) {
        if(document.querySelector("#chartContainer > div > a").innerText!="            ") {
          document.querySelector("#chartContainer > div > a").innerHTML="            ";
          document.querySelector("#chartContainer > div > a").href="https://www.binary.com"
        }
      }
      if(document.querySelector("#chartContainerEBOR > div > a")) {
        if(document.querySelector("#chartContainerEBOR > div > a").innerText!="        ") {
          document.querySelector("#chartContainerEBOR > div > a").innerHTML="          ";
          document.querySelector("#chartContainerEBOR > div > a").href="https://www.binary.com"
        }
      }
      if(document.querySelector("#chartContainerEROB > div > a")) {
        if(document.querySelector("#chartContainerEROB > div > a").innerText!="        ") {
          document.querySelector("#chartContainerEROB > div > a").innerHTML="          ";
          document.querySelector("#chartContainerEROB > div > a").href="https://www.binary.com"
        }
      }
      if(document.querySelector("#chartContainerEBOBEROR > div > a")) {
        if(document.querySelector("#chartContainerEBOBEROR > div > a").innerText!="        ") {
          document.querySelector("#chartContainerEBOBEROR > div > a").innerHTML="          ";
          document.querySelector("#chartContainerEBOBEROR > div > a").href="https://www.binary.com"
        }
      }
      
      for (var i=0; i<cnt+1; i++) {
        time[i]=b.history.times[cnt-i];
        spot[i] = b.history.prices[cnt-i];
        spot[i] = Number(spot[i]).toFixed(xd);
        digit[i] = spot[i].slice(-1);
      }
      
      for(var i=0; i<cnt+1; i++){

	if (spot[i] > spot[i+1]) {		
		var mWmColorDigit = "#29abe2";
	} else if(spot[i] < spot[i+1]) {
		var mWmColorDigit = "#c03";
		}
				
				xVal = new Date(time[i]*1000);
				yVal = parseFloat(spot[i]);
                                 
        
        if(i==0) mType = "circle";
	else mType = "circle";
	if(yVal==Math.max.apply(null,spot)){
		mColor = "#29abe2";
		mType = "circle";
		mSize = 6
				
	}else if(yVal==Math.min.apply(null,spot)){
		mColor = "#c03";
		mType = "circle";
		mSize = 6
				
	}else if(i==0){
		mColor = "#32cd32";
		mSize = 6
	}else{
		mColor = "black";
		mSize = 3
		}
	
			
				dps.push({
					x: xVal,
					y: yVal,
	  indexLabel: digit[i],
	  indexLabelFontWeight: "bold",
	  indexLabelFontSize: 16, 
	  indexLabelFontColor:mWmColorDigit,
          
          markerBorderColor: "#ccc",
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
			
			chart.render();
      
      spot.reverse();
      digit.reverse();

      for (var i=1; i<cnt+1; i++) { 
               
        document.querySelector("#digits > span:nth-child("+i+")").innerHTML = digit[i];
                
        yVal2 = parseFloat(spot[20]);
        if(yVal2==Math.max.apply(null,spot)){
        var HeadThick= "up";
        mColorHead = "#29abe2";           
        }else if(yVal2==Math.min.apply(null,spot)){      
         var HeadThick= "down";
         mColorHead = "#c03";
        }else{
         var HeadThick= "mid";
         mColorHead = "#32cd32";
        }
        
	
        if (spot[i-1] < spot[i]) {          
          toggleDigit(i,"up");
          if(digit[i] !=0) {
          var tic2nd= (digit[i]*1);
          }
          if(((digit[i-1]) > 5) && digit[i] ==0) {
          var tic2nd= (10);
          //console.log("ok")
          }
          if(((digit[i-1]) <= 5) && digit[i] ==0) {
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
          if(document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_up") {
            toggleDigit(i,"up");
          } else if(document.querySelector("#digits > span:nth-child("+(i-1)+")").className == "digits_moved_down") {
            toggleDigit(i,"down");
          }
        
        }
                
      
      
     
     tic.shift(0);
     tic.push(tic2nd);
     }
      
                        

         

     thick.shift(0);
     thick.push(HeadThick);
     for (var i=1; i<cnt+1; i++) { 
        if (spot[i-1] < spot[i]) {          
          toggleDigit(i,"up");
          mColorDigit = "#29abe2";
          } else if(spot[i-1] > spot[i]) {
          toggleDigit(i,"down");
          mColorDigit = "#c03";
         } 

       toggleHead(i,thick[i-1]);
       document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = tic;
        
		if (parseFloat(tic[i-1]) % 2 == 0){
			if(spot[i-1] < spot[i]) {
			var yDigitEvenBlue = parseFloat(tic[i-1]); 
			var DigiLabelEvenBlue = digit[i];
			var xDigitEvenBlue = (i);
			var DigiLabelEvenRed = "";
			var DigiLabelOddBlue = "";
			var DigiLabelOddRed = "";
			
			}
			if(spot[i-1] > spot[i]) {
			var yDigitEvenRed = (10) - Math.abs(parseFloat(tic[i-1])); 
			var DigiLabelEvenRed = digit[i];
			var xDigitEvenRed = (i);
			var DigiLabelEvenBlue = "";
			var DigiLabelOddBlue = "";
			var DigiLabelOddRed = "";
			}
		}
		
		
		if (parseFloat(tic[i-1]) % 2 != 0){
			if(spot[i-1] < spot[i]) {
			var yDigitOddBlue = parseFloat(tic[i-1]); 
			var DigiLabelOddBlue = digit[i];
			var xDigitOddBlue = (i);
			var DigiLabelEvenBlue = "";
			var DigiLabelEvenRed = "";
			var DigiLabelOddRed = "";
			}
			if(spot[i-1] > spot[i]) {
			var yDigitOddRed = (10) - Math.abs(parseFloat(tic[i-1])); 
			var DigiLabelOddRed = digit[i];
			var xDigitOddRed = (i);
			var DigiLabelEvenBlue = "";
			var DigiLabelEvenRed = "";
			var DigiLabelOddBlue = "";
			}
		}
		
   
       DEB.push({                      
		x: xDigitEvenBlue,
		y: yDigitEvenBlue,
          	indexLabel: DigiLabelEvenBlue,
	  	indexLabelFontColor:mColorDigit,
				 });
	DOR.push({                      
		x: xDigitOddRed,
		y: yDigitOddRed,
          	indexLabel: DigiLabelOddRed,
          	indexLabelFontColor:mColorDigit,        
				 });
	DOB.push({                      
		x: xDigitOddBlue,
		y: yDigitOddBlue,
          	indexLabel: DigiLabelOddBlue,
       	  	indexLabelFontColor:mColorDigit,
				 });
	DER.push({                      
		x: xDigitEvenRed,
		y: yDigitEvenRed,
          	indexLabel: DigiLabelEvenRed,
	  	indexLabelFontColor:mColorDigit,        
				 });
				
			    }  
			
			    if(DEB.length > cnt+1) {
				
				while(DEB.length != cnt) {
					DEB.shift();
				}
				      
			 }
			if(DOR.length > cnt+1) {
				
				while(DOR.length != cnt) {
					DOR.shift();
				}
                       
			 }
			if(DER.length > cnt+1) {
				
				while(DER.length != cnt) {
					DER.shift();
				}
			
			}
			if(DOB.length > cnt+1) {
				
				while(DOB.length != cnt) {
					DOB.shift();
				}
                       
			 }
			 chart1.render();
			
			chart2.render();
			
			chart3.render();
			          

    };
  
  };
  
};


chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: false,
	theme: "light2",
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
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "#ccc",
		lineThickness: 2,
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dps
	}]
});



chart1 = new CanvasJS.Chart("chartContainerEBOR", {
	animationEnabled: false,
	theme: "light2",
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
	axisY: {stripLines:[
			{
				startValue:-0.05,
				endValue:0.05,
                                color:"black",
                               
			}
			],valueFormatString:"#000",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "blue",
		lineThickness: 1,
		markerType: "circle",
		markerColor: "#ccc",
		indexLabelFontWeight: "bold",
                indexLabelFontSize: 11,
    		markerSize: 6,
    		markerBorderThickness: 0,
		dataPoints: DEB
	},
	{
		type: "line",
		lineColor: "red",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
           	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
    		markerSize: 6,
    		markerBorderThickness: 0,
		dataPoints: DOR
	},]
});


chart2 = new CanvasJS.Chart("chartContainerEROB", {
	animationEnabled: false,
	theme: "light2",
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
	axisY: {stripLines:[
			{
				startValue:-0.05,
				endValue:0.05,
                                color:"black",
                               
			}
			],valueFormatString:"#000",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "red",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
          	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
		markerSize: 6,
		dataPoints: DER
	},
	{
		type: "line",
		lineColor: "blue",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
          	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
    		markerSize: 6,
		dataPoints: DOB
	},]
});

chart3 = new CanvasJS.Chart("chartContainerEBOBEROR", {
	animationEnabled: false,
	theme: "light2",
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
	axisY: {stripLines:[
			{
				startValue:-0.05,
				endValue:0.05,
                                color:"black",
                               
			}
			],valueFormatString:"#000",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "blue",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
          	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
		markerSize: 6,
		dataPoints: DEB
	},
	{
		type: "line",
		lineColor: "blue",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
          	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
    		markerSize: 6,
		dataPoints: DOB
	},{
		type: "line",
		lineColor: "red",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
          	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
		markerSize: 6,
		dataPoints: DER
	},{
		type: "line",
		lineColor: "red",
		lineThickness: 1,
		indexLabelFontWeight: "bold",
          	indexLabelFontSize: 11,
		markerType: "circle",
		markerColor: "#ccc",
		markerSize: 6,
		dataPoints: DOR
	}]
});


}, false);

