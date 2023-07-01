window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,dps2,xd,digit,cnt,random,id,lng,str,chart,xVal,yVal,mType,mColor,rndMenu;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL"];thick=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; dps=[]; dps2=[]; time=[0]; spot=[0];tic=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];digit=[0]; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; cnt=20;

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
      
      for(var i=0; i<cnt+1; i++){
				
				xVal = new Date(time[i]*1000);
				yVal = parseFloat(spot[i]);
                                 
        
        if(i==0) mType = "circle";
        else mType = "none";
        
        if(yVal==Math.max.apply(null,spot)){
          mColor = "#29abe2";
          mType = "circle";
          
        }else if(yVal==Math.min.apply(null,spot)){
          mColor = "#c03";
          mType = "circle";
          
        }else{
          mColor = "#32cd32";
        }
	
			
				dps.push({
					x: xVal,
					y: yVal,
          
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
       xDigit = (i);
       yDigit = parseFloat(tic[i-1]); 
       //console.log(tic);

       xDigit = (i);
       yDigit = parseFloat(tic[i-1]); 
       //console.log(tic);
       dps2.push({                      
					x: xDigit,
					y: yDigit,
          indexLabel: digit[i],
          indexLabelFontWeight: "bold",
          indexLabelFontSize: 11,
          markerType: "circle",
          markerColor: mColorDigit,
          markerBorderColor: "#ccc",
        
				 });
				
			    }  
			
			    if(dps2.length > cnt+1) {
				
				while(dps2.length != cnt) {
					dps2.shift();
				}
				
                               
			 }
			
			 chart2.render();     
       
      
      tic1 = tic[19];
      tic2 = tic[18];
      tic3 = tic[17];
      tic4 = tic[16];
      tic5 = tic[15];
      tic6 = tic[14];
      
      var tic1_level = thick[19];
      var tic2_level = thick[18];
      var tic3_level = thick[17];
      var tic4_level = thick[16];
      var tic5_level = thick[15];
      var tic6_level = thick[14];
      //console.log(tic)
      //console.log('t1',tic1,'Level tic1',tic1_level)
      ////////////////////
      //Alorythm test area
      //if (tic4_level == 'mid' && tic3_level == 'mid' && tic2_level == 'mid' && tic1_level == 'mid'){ 
      
       
       
      ////////////////////
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






//////
chart2 = new CanvasJS.Chart("chartContainerDigit", {
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
		lineColor: "#ccc",
		lineThickness: 1,
		markerType: "none",
    markerSize: 6,
    markerBorderThickness: 0,
		dataPoints: dps2
	}]
});

}, false);

