window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,DigitEven,DigitOdd,WHead,DEB,DER,DOB,DOR,xd,digit,cnt,random,id,lng,str,chart,xVal,yVal,mType,mColor,rndMenu;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V","1HZ25V","1HZ50V","1HZ75V"];thick=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; dps=[]; WHead=[]; DigitEven=[]; DigitOdd=[]; time=[0]; spot=[0];tic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];digit=[0]; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; cnt=20;



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
      if(document.querySelector("#chartContainerDigit > div > a")) {
        if(document.querySelector("#chartContainerDigit > div > a").innerText!="        ") {
          document.querySelector("#chartContainerDigit > div > a").innerHTML="          ";
          document.querySelector("#chartContainerDigit > div > a").href="https://www.binary.com"
        }
      }
      
      for (var i=0; i<cnt+1; i++) {
        time[i]=b.history.times[cnt-i];
        spot[i] = b.history.prices[cnt-i];
        spot[i] = Number(spot[i]).toFixed(xd);
        digit[i] = spot[i].slice(-1);
      }

      ///////////////////////azul////////////////////
      if(spot[0] > spot[1]){
        switch (digit[0]) {
          case "0":
            var element = document.getElementById("cero-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "1":
            var element = document.getElementById("uno-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "2":
            var element = document.getElementById("dos-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "3":
            var element = document.getElementById("tres-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "4":
            var element = document.getElementById("cuatro-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "5":
            var element = document.getElementById("cinco-azul-9");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            var element1 = document.getElementById("cinco-azul-1");
            element1.classList.remove("azul");
            element1.classList.add("tooggle-azul");
            break;
          case "6":
            var element = document.getElementById("seis-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "7":
            var element = document.getElementById("siete-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "8":
            var element = document.getElementById("ocho-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
          case "9":
            var element = document.getElementById("nueve-azul");
            element.classList.remove("azul");
            element.classList.add("tooggle-azul");
            break;
        }
      }

      ///////////////////////rojo////////////////////
      if(spot[0] < spot[1]){
        switch (digit[0]) {
          case "0":
            var element = document.getElementById("cero-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "1":
            var element = document.getElementById("uno-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "2":
            var element = document.getElementById("dos-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "3":
            var element = document.getElementById("tres-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "4":
            var element = document.getElementById("cuatro-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "5":
            var element = document.getElementById("cinco-rojo-9");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            var element1 = document.getElementById("cinco-rojo-1");
            element1.classList.remove("rojo");
            element1.classList.add("tooggle-rojo");
            break;
          case "6":
            var element = document.getElementById("seis-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "7":
            var element = document.getElementById("siete-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "8":
            var element = document.getElementById("ocho-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
          case "9":
            var element = document.getElementById("nueve-rojo");
            element.classList.remove("rojo");
            element.classList.add("tooggle-rojo");
            break;
        }
      }

      //if (spot[1] > spot[2]){
        switch (digit[1]) {
          case "0":
            var element = document.getElementById("cero-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("cero-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "1":
            var element = document.getElementById("uno-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("uno-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "2":
            var element = document.getElementById("dos-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element2 = document.getElementById("dos-rojo");
            element2.classList.remove("tooggle-rojo");
            element2.classList.add("rojo");
            break;
          case "3":
            var element = document.getElementById("tres-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("tres-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "4":
            var element = document.getElementById("cuatro-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("cuatro-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "5":
            var element = document.getElementById("cinco-azul-9");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("cinco-rojo-9");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            var element2 = document.getElementById("cinco-azul-1");
            element2.classList.remove("tooggle-azul");
            element2.classList.add("azul");
            var element3 = document.getElementById("cinco-rojo-1");
            element3.classList.remove("tooggle-rojo");
            element3.classList.add("rojo");
            break;
          case "6":
            var element = document.getElementById("seis-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("seis-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "7":
            var element = document.getElementById("siete-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("siete-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "8":
            var element = document.getElementById("ocho-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("ocho-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "9":
            var element = document.getElementById("nueve-azul");
            element.classList.remove("tooggle-azul");
            element.classList.add("azul");
            var element1 = document.getElementById("nueve-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
        }
      //}

      /*if (spot[1] < spot[2]){
        switch (digit[1]) {
          case "0":
            var element1 = document.getElementById("cero-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "1":
            var element1 = document.getElementById("uno-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "2":
            var element2 = document.getElementById("dos-rojo");
            element2.classList.remove("tooggle-rojo");
            element2.classList.add("rojo");
            break;
          case "3":
            var element1 = document.getElementById("tres-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "4":
            var element1 = document.getElementById("cuatro-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "5":
            var element1 = document.getElementById("cinco-rojo-9");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "6":
            var element1 = document.getElementById("seis-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "7":
            var element1 = document.getElementById("siete-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "8":
            var element1 = document.getElementById("ocho-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
          case "9":
            var element1 = document.getElementById("nueve-rojo");
            element1.classList.remove("tooggle-rojo");
            element1.classList.add("rojo");
            break;
        }        
      }*/
      
      for(var i=0; i<cnt+1; i++){

	if (spot[i] > spot[i+1]) {		
		var mWmColorDigit = "#202EEF";
	} else if(spot[i] < spot[i+1]) {
		var mWmColorDigit = "#ED1C24";
		}
				
				xVal = new Date(time[i]*1000);
				yVal = parseFloat(spot[i]);
                                 
        
        if(i==0) mType = "circle";
	else mType = "circle";
	if(yVal==Math.max.apply(null,spot)){
		mColor = "#0010FF";
		mType = "circle";
		mSize = 8
				
	}else if(yVal==Math.min.apply(null,spot)){
		mColor = "#FF0000";
		mType = "circle";
		mSize = 8
				
	}else if(i==0){
		mColor = "#11DE11";
		mSize = 8
	}else{
		mColor = "black";
		mSize = 5
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
          mColorDigit = "#1919bf";
          } else if(spot[i-1] > spot[i]) {
          toggleDigit(i,"down");
          mColorDigit = "#d40b11";
         } 
	if (thick[i-1] == "up"){
	var hdStripLine	="#c9cff5";
	}else if (thick[i-1] == "down"){
	var hdStripLine	="#ed95aa";
	}else if (thick[i-1] == "mid"){
	var hdStripLine	="#5BE684";
	}else{var hdStripLine ="#FDFEFE";
	}

       toggleHead(i,thick[i-1]);
       document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = tic;
        
		xDigit = (i);
       yDigit = parseFloat(tic[i-1]); 
       //console.log(tic);
		
		if (parseFloat(tic[i-1]) % 2 == 0){
		var yDigitEven = parseFloat(tic[i-1]); 
		var DigiLabelEven = digit[i];
		var xDigitEven = (i-1);
		//var yDigitOdd = "";
		//var DigiLabelOdd = "";
	
		if (spot[i-1] < spot[i]) {          
		var sEColorDigit = "#3F48CC";
          	} 
		if(spot[i-1] > spot[i]) {
          	var sEColorDigit = "#c03";
         	}
		
		if (digit[i-1] - digit[i] == 1 || digit[i-1] - digit[i] == -1 ) { 
		var mEBGcolor = "yellow";
		}
		else {
		var mEBGcolor = "white";		
		} 
		}
				
		
		if (parseFloat(tic[i-1]) % 2 != 0){
		var yDigitOdd = parseFloat(tic[i-1]); 
		var DigiLabelOdd = digit[i];
		var xDigitOdd = (i-1);
		//var yDigitEven = "";
		//var DigiLabelEven = "";
		if (spot[i-1] < spot[i]) {          
		var sOColorDigit = "#3F48CC";
          	} 
		if(spot[i-1] > spot[i]) {
          	var sOColorDigit = "#c03";
         	}

		if (digit[i-1] - digit[i] == 1 || digit[i-1] - digit[i] == -1 ) { 
		var mOBGcolor = "yellow";
		}
		else {
		var mOBGcolor = "white";		
		} 
		}
		
	
	WHead.push({
	startValue:(i-1.45),
	endValue:(i-0.55),
        color:hdStripLine       
			});
			          					
   
       DigitEven.push({                      
					x: xDigitEven,
					y: yDigitEven,
	  indexLabelFontColor:sEColorDigit,
          indexLabel: DigiLabelEven,
          indexLabelFontWeight: "bold",
          indexLabelFontSize: 15,
          markerType: "circle",
          markerColor: sEColorDigit,
          markerBorderColor: mEBGcolor,
          markerBorderThickness: 1,
				 });
	DigitOdd.push({                      
					x: xDigitOdd,
					y: yDigitOdd,
	  indexLabelFontColor:sOColorDigit,
          indexLabel: DigiLabelOdd,
          indexLabelFontWeight: "bold",
          indexLabelFontSize: 15,
          markerType: "circle",
          markerColor: sOColorDigit,
          markerBorderColor: mOBGcolor,
	  markerBorderThickness: 1,
        
				 });
			}

			    if(WHead.length > cnt+1) {
				
				while(WHead.length != cnt) {
					WHead.shift();
				}
				
                               
			 }
			    if(DigitEven.length > cnt+1) {
				
				while(DigitEven.length != cnt) {
					DigitEven.shift();
				}
				
                               
			 }
			if(DigitOdd.length > cnt+1) {
				
				while(DigitOdd.length != cnt) {
					DigitOdd.shift();
				}
				
                               
			 }
			
			 chart2.render(); 
			

    };
  
  };
  
};


chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "DERIV.COM"
	},
	toolTip: {
        enabled: true,
        animationEnabled: true,
		borderColor: "#090a09",
		borderThickness: 2,
		fontColor: "#090a09",
		content: "{y}"
      },
axisX: {
    includeZero: false,
    // titleFontSize: 0,
    labelFontSize: 10,
    gridThickness: 1,
    gridDashType: "",
    tickLength: 0,
    lineThickness: 1
  },
  axisY: {
    includeZero: false,
    // titleFontSize: 0,
    // labelFontSize: 0,
    gridThickness: 1,
    gridDashType: "",
    tickLength: 0,
    lineThickness: 1
  },
	data: [{
		type: "line",
		lineColor: "#b5434e",
		lineThickness: 1,
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dps
	}]
});

chart2 = new CanvasJS.Chart("chartContainerDigit", {
	animationEnabled: false,
	theme: "light2",
  title: {
		titleFontSize: 0,
    text: "💎ANALIZER ESTUDIO ESHES💎"
	},
	toolTip: {
        enabled: true, 
        animationEnabled: true,
		borderColor: "#090a09",
		borderThickness: 3,
		fontColor: "#090a09",
		content: "{y}"
      },
	axisX: {stripLines:WHead
		,valueFormatString:"#000",
		includeZero: false,
    titleFontSize: 2,
    labelFontSize: 1,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 2
	},
	axisY: {stripLines:[
			{
				startValue:-0.05,
				endValue:0.05,
                                color:"#090a09",
                               
			}
			],valueFormatString:"#000",
		includeZero: false,
    titleFontSize: 2,
    labelFontSize: 1,
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 1
	},
	data: [{
		type: "line",
		lineColor: "#D8344D",
		lineThickness: 1,
		markerType: "none",
    markerSize: 7,
    markerBorderThickness: 4,
		dataPoints: DigitEven
	},
	{
		type: "line",
		lineColor: "#D8344D",
		lineThickness: 1,
		markerType: "none",
    markerSize: 7,
    markerBorderThickness: 4,
		dataPoints: DigitOdd

	},]
});

}, false);




