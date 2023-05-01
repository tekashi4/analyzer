window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps20,xd,digit,cnt,random,id,lng,str,chart,chart2,xVal,yVal,yVal2,yvalpercent,stripVertic,ClassNum,mType,mColor,rndMenu;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V","1HZ25V","1HZ50V","1HZ75V"];HdClss=[]; dps20=[]; time=[0]; spot=[0]; classIdArr=[]; tic=[];digit=[0];  mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; yvalpercent=0;stripVertic=0; yVal2=0; cnt=1000;  

var dpsDigit20,dpsDigit25,dpsDigit50,dpsDigit100,dpsDigit500,dpsDigit1000;
dpsDigit20=[];dpsDigit25=[];dpsDigit50=[];dpsDigit100=[];dpsDigit500=[];dpsDigit1000=[];

var spot20,spot25,spot50,spot100,spot500,spot1000;
spot20=[0];spot25=[0];spot50=[0];spot100=[0];spot500=[0];spot1000=[0];

var time20,time25,time50,time100,time500,time1000;
time20=[0];time25=[0];time50=[0];time100=[0];time500=[0];time1000=[0];

var digit20,digit1000;
digit20=[0]; digit1000=[0];

var countCalc20,percentCalc20, countCalc25,percentCalc25, countCalc50,percentCalc50, countCalc100,percentCalc100, countCalc500,percentCalc500, countCalc1000,percentCalc000;
countCalc20=[];percentCalc20=[]; countCalc25=[];percentCalc25=[]; countCalc50=[];percentCalc50=[]; countCalc100=[];percentCalc100=[]; countCalc500=[];percentCalc500=[]; countCalc1000=[];percentCalc1000=[];             
        
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


function toggleHead(e,s) {
  var nameClass = document.querySelector("#headcol > span:nth-child("+e+")").className;
  if(nameClass != "Head_moved_"+s) {
    document.querySelector("#headcol > span:nth-child("+e+")").classList.remove(nameClass);
    document.querySelector("#headcol > span:nth-child("+e+")").classList.add("Head_moved_"+s);
  }
}

function toggleDigit(d,m) {
    var nameClass = document.querySelector("#colDigits > span:nth-child("+d+")").className;
    if(nameClass != "digits_col_"+m) {
        document.querySelector("#colDigits > span:nth-child("+d+")").classList.remove(nameClass);
        document.querySelector("#colDigits > span:nth-child("+d+")").classList.add("digits_col_"+m); 
        }
}

function toggleSpot(v) {
    var nameClass = document.querySelector("#spot > span:nth-child(1)").className;
    if(nameClass != "spot_col_"+v) {
        document.querySelector("#spot > span:nth-child(1)").classList.remove(nameClass);
        document.querySelector("#spot > span:nth-child(1)").classList.add("spot_col_"+v); 
        }
}


function clearHd(){
	HdClss=[];
	tic =[];
	//total = [];
	for (var e=1; e<20+1; e++) {
	   HdClss.unshift(0);
	   tic.unshift(0);	
	}
	for (var f=1; f<10+1; f++) {
	   //total.unshift(0);
	}
}


clearHd();

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
    case str[7]: rnd="1HZ100V"; xd=2; break;
    case str[8]: rnd="1HZ10V"; xd=2; break;
    case str[9]: rnd="1HZ25V"; xd=2; break;
    case str[10]: rnd="1HZ50V"; xd=2; break;
    case str[11]: rnd="1HZ75V"; xd=2; break;
    default: rnd="R"; xd=0; break;
  }
}

rndGet();

ws = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l="+lng);

ws.onopen = function(evt) {
  ws.send(JSON.stringify({ticks:rnd}));
  classIdArr=[];
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
      clearHd();

    };
  
  };

  if (b.history) {
    
    if (b.echo_req.ticks_history == rnd) {
      for (var i=0; i<cnt+1; i++) {
        time[i] = b.history.times[cnt-i];
        spot[i] = b.history.prices[cnt-i];
        spot[i] = Number(spot[i]).toFixed(xd);
        digit[i] = spot[i].slice(-1);
      
        if(i<20) {
            time20[i] = b.history.times[cnt-i];
            spot20[i] = b.history.prices[cnt-i];
            spot20[i] = Number(spot20[i]).toFixed(xd);
            digit20[i] = spot20[i].slice(-1);
        }
        if(i<1000) {
            time1000[i] = b.history.times[cnt-i];
            spot1000[i] = b.history.prices[cnt-i];
            spot1000[i] = Number(spot1000[i]).toFixed(xd);
            digit1000[i] = spot1000[i].slice(-1);
        }
      }
     
      document.querySelector("#spot > span:nth-child(1)").innerHTML = spot[0];
        if (spot[1] > spot[0]){
            toggleSpot("down");
        }else if(spot[1] < spot[0]){
            toggleSpot("up");
        }else if(spot[1] == spot[0]){
            if(spot[2] > spot[1]){
                toggleSpot("down");
            }else if(spot[2] > spot[1]){
                toggleSpot("up");
            }
        }
       
    for(var i=0; i<20+1; i++){
        if(i < 20){
    	xVal20 = new Date(time20[i]*1000);
    	yVal20 = parseFloat(spot20[i]);
    		
        if(i==0) mType = "circle";
        else mType = "none";
    
        if(yVal20==Math.max.apply(null,spot20)){
            mColor = "#29abe2";
            mType = "circle";         
        }else if(yVal20==Math.min.apply(null,spot20)){
            mColor = "#c03";
            mType = "circle";
        }else{
            mColor = "#32cd32";
        }
        }
    	dps20.push({
    		x: xVal20,
    		y: yVal20,
            markerType: mType,
            markerColor: mColor,
            markerBorderColor: "#ccc"
    		});
    }
	
        ///////////  
		var counts20 = {};counts25 = {};counts50 = {};counts100 = {};counts500 = {};  counts1000 = {}
        
        for(var i=0; i<cnt+1; i++){
            if (i < 20){
                var num20 = digit1000[i];
                    counts20[num20] = counts20[num20] ? counts20[num20] + 1 : 1;  
            }if (i < 25){
                var num25 = digit1000[i];
                    counts25[num25] = counts25[num25] ? counts25[num25] + 1 : 1;  
            }if (i < 50){
                var num50 = digit1000[i];
                    counts50[num50] = counts50[num50] ? counts50[num50] + 1 : 1; 
            }
            if (i < 100){
                var num100 = digit1000[i];
                    counts100[num100] = counts100[num100] ? counts100[num100] + 1 : 1; 
            }
            if (i < 500){
                var num500 = digit1000[i];
                    counts500[num500] = counts500[num500] ? counts500[num500] + 1 : 1;
            }
            if (i < 1000){
                var num1000 = digit1000[i];
                    counts1000[num1000] = counts1000[num1000] ? counts1000[num1000] + 1 : 1;  
            }
        }  
            var minNum20 = false; minNum25 = false; minNum50 = false; minNum100 = false; minNum500 = false; minNum1000 = false;
            var maxNum20 = false; maxNum25 = false; maxNum50 = false; maxNum100 = false; maxNum500 = false; maxNum1000 = false;
            
            for (var i = 0; i < 10; i++) {
                if (counts20[i]) {
              	    percentCalc20[i] = Math.round(counts20[i]/20 *100);
              	    countCalc20[i] = counts20[i];
            	}else{
            	    percentCalc20[i] = 0;
              	    countCalc20[i] = 0;
            	}
            	///
            	if (counts25[i]) {
              	    percentCalc25[i] = Math.round(counts25[i]/25 *100);
              	    countCalc25[i] = counts25[i];
            	}else{
            	    percentCalc25[i] = 0;
              	    countCalc25[i] = 0;
            	}
            	///
            	if (counts50[i]) {
              	    percentCalc50[i] = Math.round(counts50[i]/50 *100);
              	    countCalc50[i] = counts50[i];
            	}else{
            	    percentCalc50[i] = 0;
              	    countCalc50[i] = 0;
            	}
            	///
            	if (counts100[i]) {
              	    percentCalc100[i] = Math.round(counts100[i]/100 *100);
              	    countCalc100[i] = counts100[i];
            	}else{
            	    percentCalc100[i] = 0;
              	    countCalc100[i] = 0;
            	}
            	///
            	if (counts500[i]) {
              	    percentCalc500[i] = roundToTwo(counts500[i]/500 *100)
              	    countCalc500[i] = counts500[i];
            	}else{
            	    percentCalc500[i] = 0;
              	    countCalc500[i] = 0;
            	}
            	//
            	if (counts1000[i]) {
              	    percentCalc1000[i] = roundToTwo(counts1000[i]/1000 *100)
              	    countCalc1000[i] = counts1000[i];
            	}else{
            	    percentCalc1000[i] = 0;
              	    countCalc1000[i] = 0;
            	}
            	
            	function roundToTwo(num) {    
                        return +(Math.round(num + "e+1")  + "e-1");
                    }
                /*
                if (maxNum20 == false && countCalc20[i]==Math.max.apply(null,countCalc20)){
                    columnColor20 = "green";
                    //maxNum20 = true;
                } else if (minNum20 == false && countCalc20[i]==Math.min.apply(null,countCalc20)){
                    columnColor20 ="red";
                    //minNum20 = true;
                } else{
                    columnColor20 = "#e1f0fb";
                }
                */
                if (countCalc20[i]>=3){
                    columnColor20 = "green";
                    //maxNum20 = true;
                } else if (countCalc20[i]<=1){
                    columnColor20 ="red";
                    //minNum20 = true;
                } else if (countCalc20[i]==2){
                    columnColor20 = "#FFFF00";
                }
                 
                ///
                if (maxNum25 == false && countCalc25[i]==Math.max.apply(null,countCalc25)){
                    columnColor25 = "green";
                    maxNum25 = true;
                } else if (minNum25 == false && countCalc25[i]==Math.min.apply(null,countCalc25)){
                    columnColor25 ="red";
                    minNum25 = true;
                } else{
                    columnColor25 = "#e1f0fb";
                }
                ////
                if (maxNum50 == false && countCalc50[i]==Math.max.apply(null,countCalc50)){
                    columnColor50 = "green";
                    maxNum50 = true;
                } else if (minNum50 == false && countCalc50[i]==Math.min.apply(null,countCalc50)){
                    columnColor50 ="red";
                    minNum50 = true;
                } else{
                    columnColor50 = "#e1f0fb";
                }
                ////
                if (maxNum100 == false && countCalc100[i]==Math.max.apply(null,countCalc100)){
                    columnColor100 = "green";
                    maxNum100 = true;
                } else if (minNum100 == false && countCalc100[i]==Math.min.apply(null,countCalc100)){
                    columnColor100 ="red";
                    minNum100 = true;
                } else{
                    columnColor100 = "#e1f0fb";
                }
                ////
                if (maxNum500 == false && countCalc500[i]==Math.max.apply(null,countCalc500)){
                    columnColor500 = "green";
                    maxNum500 = true;
                } else if (minNum500 == false && countCalc500[i]==Math.min.apply(null,countCalc500)){
                    columnColor500 ="red";
                    minNum500 = true;
                } else{
                    columnColor500 = "#e1f0fb";
                }
                ////
                if (maxNum1000 == false && countCalc1000[i]==Math.max.apply(null,countCalc1000)){
                    columnColor1000 = "green";
                    maxNum1000 = true;
                } else if (minNum1000 == false && countCalc1000[i]==Math.min.apply(null,countCalc1000)){
                    columnColor1000 ="red";
                    minNum1000 = true;
                } else{
                    columnColor1000 = "#e1f0fb";
                }
         
            
            dpsDigit20.push({
				x: (i),
				y: countCalc20[i],
            color: columnColor20,
            label: (i),
            indexLabel: "{y}"
			});

			dpsDigit25.push({
				x: (i),
				y: countCalc25[i], 
            color: columnColor25,
            label: (i),
            indexLabel: percentCalc25[i].toFixed(2)+"%"
			});
		
			dpsDigit50.push({
				x: (i),
				y: countCalc50[i],
            color: columnColor50,
            label: (i),
            indexLabel: percentCalc50[i].toFixed(2)+"%"
			});
			
			dpsDigit100.push({
				x: (i),
				y: countCalc100[i],
            color: columnColor100,
            label: (i),
            indexLabel: percentCalc100[i].toFixed(2)+"%"
			});
			
			dpsDigit500.push({
				x: (i),
				y: countCalc500[i],
            color: columnColor500,
            label: (i),
            indexLabel: percentCalc500[i].toFixed(2)+"%",
			});
			
			dpsDigit1000.push({
				x: (i),
				y: countCalc1000[i],
            color: columnColor1000,
            label: (i),
            indexLabel: percentCalc1000[i].toFixed(2)+"%"
			});
        }  
	    
        if(dpsDigit20.length > 10) {
			while(dpsDigit20.length != 10) {
				dpsDigit20.shift();
			}
		}
	    if(dpsDigit25.length > 10) {
			while(dpsDigit25.length != 10) {
				dpsDigit25.shift();
			}
		}
		if(dpsDigit50.length > 10) {
			while(dpsDigit50.length != 10) {
				dpsDigit50.shift();
			}
		}
		if(dpsDigit100.length > 10) {
			while(dpsDigit100.length != 10) {
				dpsDigit100.shift();
			}
		}
        if(dpsDigit500.length > 10) {
			while(dpsDigit500.length != 10) {
				dpsDigit500.shift();
			}
		}
		if(dpsDigit1000.length > 10) {
			while(dpsDigit1000.length != 10) {
				dpsDigit1000.shift();
			}
		}
        ///////////
			if(dps20.length > 20+1) {
				while(dps20.length != 20+1) {
					dps20.shift();
				}
			}
			
	    chart.render(); chart20.render(); chart25.render(); chart50.render(); chart100.render(); chart500.render(); chart1000.render();
	    
        spot.reverse(); digit.reverse();
        spot20.reverse(); spot1000.reverse();
        digit20.reverse(); digit1000.reverse();

      for (var i=1; i<20+1; i++) { 
               
        document.querySelector("#colDigits > span:nth-child("+i+")").innerHTML = digit20[i-1];
        //console.log(HdClss[13]);
        yVal2 = parseFloat(spot20[19]);
        if(yVal2==Math.max.apply(null,spot20)){
            var HdThick= "up";
            mColorHead = "#c03";
	    }else if(yVal2==Math.min.apply(null,spot20)){
            var HdThick= "down";
            mColorDigit = "#c03";
	    }else{
	        var HdThick= "mid";
	    }

        ////////
       if (spot20[i-1] < spot20[i]) {          
          //toggleDigit(i,"up");
          if(digit20[i] !=0) {
              var tic2nd= (digit20[i]*1);
              }
          if (((digit20[i-1]) > 5) && digit20[i] ==0) {
              var tic2nd= (10);
              }
          if (((digit20[i-1]) <= 5) && digit20[i] ==0) {
              var tic2nd= (0);
              }
        
          } else if(spot20[i-1] > spot20[i]) {
          //toggleDigit(i,"down");
          if(digit20[i] !=0) {
              var tic2nd= (digit20[i]*-1);
              }
          if (((digit20[i-1]) > 5) && digit20[i] ==0) {
              var tic2nd= (-10);
              }
          if (((digit20[i-1]) <= 5) && digit20[i] ==0) {
              var tic2nd= (-0);
              }

        } 

	                    if (digit20[i-1] == 0) {
                            toggleDigit(i,"zero");
                        }else if (digit20[i-1] == 1) {
                            toggleDigit(i,"one");
                        }else if (digit20[i-1] == 2) {
                            toggleDigit(i,"two");
                        }else if (digit20[i-1] == 3) {
                            toggleDigit(i,"three");
                        }else if (digit20[i-1] == 4) {
                            toggleDigit(i,"four");
                        }else if (digit20[i-1] == 5) {
                            toggleDigit(i,"five");
                        }else if (digit20[i-1] == 6) {
                            toggleDigit(i,"six");
                        }else if (digit20[i-1] == 7) {
                            toggleDigit(i,"seven");
                        }else if (digit20[i-1] == 8) {
                            toggleDigit(i,"eight");
                        }else if (digit20[i-1] == 9) {
                            toggleDigit(i,"nine");
                        }

	
    tic.shift(0);
    tic.push(tic2nd);
    }
		
        
	HdClss.shift(0);
	HdClss.push(HdThick);
	
	for (var i=1; i<20+1; i++) {
            document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = digit20;
	    toggleHead(i,HdClss[i-1]);
	    }
  		
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
	    valueFormatSring:"#000",
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
		dataPoints: dps20
	}]
});

chart20 = new CanvasJS.Chart("chartDigit20", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "(( 20 Tick ))"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		fontSize:9,
		content: "<span style='\"'font-weight:bold;'\"'>Digit:</span> {x}  <br/> <span style='\"'font-weight:bold;'\"'>Percentage:</span> {indexLabel}"
      },
	axisX: {
	    interval: 1,
	    valueFormatSring:"#0",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 16,
    labelFontWeight: "bold",
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 3
	},
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    
    gridThickness: 0,
   tickLength: 0,
    
	},
	dataPointWidth: 35,
	data: [{
	    
		type: "column",
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dpsDigit20,
		    labelFontColor: "black",
            labelFontWeight: "bold",
	        indexLabelFontSize: 18,
	        indexLabelFontWeight:"bold",
	        indexLabelFontColor: "red"
	}]
});

chart25 = new CanvasJS.Chart("chartDigit25", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 16,
		//titleFontWeight: "bold",
    text: "(( 25 Tick ))"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		fontSize:9,
		content: "<span style='\"'font-weight:bold;'\"'>Digit:</span> {x}  <br/> <span style='\"'font-weight:bold;'\"'>Percentage:</span> {indexLabel}"
      },
	axisX: {
	    interval: 1,
	    valueFormatSring:"#0",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 16,
    labelFontWeight: "bold",
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 3
	},
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    
    gridThickness: 0,
   tickLength: 0,
    
	},
	dataPointWidth: 35,
	data: [{
	    
		type: "column",
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dpsDigit25,
		    labelFontColor: "black",
            labelFontWeight: "bold",
	        indexLabelFontSize: 12,
	        indexLabelFontColor: "black"
	}]
});

chart50 = new CanvasJS.Chart("chartDigit50", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "(( 50 Tick ))"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		fontSize:9,
		content: "<span style='\"'font-weight:bold;'\"'>Digit:</span> {x}  <br/> <span style='\"'font-weight:bold;'\"'>Percentage:</span> {indexLabel}"
      },
	axisX: {
	    interval: 1,
	    valueFormatSring:"#0",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 16,
    labelFontWeight: "bold",
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 3
	},
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    
    gridThickness: 0,
   tickLength: 0,
    
	},
	dataPointWidth: 35,
	data: [{
	    
		type: "column",
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dpsDigit50,
		    labelFontColor: "black",
            labelFontWeight: "bold",
	        indexLabelFontSize: 12,
	        indexLabelFontColor: "black"
	}]
});

chart100 = new CanvasJS.Chart("chartDigit100", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "(( 100 Tick ))"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		fontSize:9,
		content: "<span style='\"'font-weight:bold;'\"'>Digit:</span> {x}  <br/> <span style='\"'font-weight:bold;'\"'>Percentage:</span> {indexLabel}"
      },
	axisX: {
	    interval: 1,
	    valueFormatSring:"#0",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 16,
    labelFontWeight: "bold",
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 3
	},
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    
    gridThickness: 0,
   tickLength: 0,
    
	},
	dataPointWidth: 35,
	data: [{
	    
		type: "column",
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dpsDigit100,
		    labelFontColor: "black",
            labelFontWeight: "bold",
	        indexLabelFontSize: 12,
	        indexLabelFontColor: "black"
	}]
});

chart500 = new CanvasJS.Chart("chartDigit500", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "(( 500 Tick ))"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		fontSize:9,
		content: "<span style='\"'font-weight:bold;'\"'>Digit:</span> {x}  <br/> <span style='\"'font-weight:bold;'\"'>Percentage:</span> {indexLabel}"
      },
	axisX: {
	    interval: 1,
	    valueFormatSring:"#0",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 16,
    labelFontWeight: "bold",
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 3
	},
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    
    gridThickness: 0,
   tickLength: 0,
    
	},
	dataPointWidth: 35,
	data: [{
	    
		type: "column",
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dpsDigit500,
		    labelFontColor: "black",
            labelFontWeight: "bold",
	        indexLabelFontSize: 12,
	        indexLabelFontColor: "black"
	}]
});

chart1000 = new CanvasJS.Chart("chartDigit1000", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "(( 1000 Tick ))"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#ccc",
		borderThickness: 1,
		fontColor: "#000",
		fontSize:9,
		content: "<span style='\"'font-weight:bold;'\"'>Digit:</span> {x}  <br/> <span style='\"'font-weight:bold;'\"'>Percentage:</span> {indexLabel}"
      },
	axisX: {
	    interval: 1,
	    valueFormatSring:"#0",
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 16,
    labelFontWeight: "bold",
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 3
	},
	axisY: {
		includeZero: false,
    titleFontSize: 0,
    labelFontSize: 0,
    
    gridThickness: 0,
   tickLength: 0,
    
	},
	dataPointWidth: 35,
	data: [{
	    
		type: "column",
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dpsDigit1000,
		    labelFontColor: "black",
            labelFontWeight: "bold",
	        indexLabelFontSize: 12,
	        indexLabelFontColor: "black"
	}]
});


}, false);



