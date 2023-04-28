window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,xd,digit,cnt,x,random,id,lng,str,chart,xVal,yVal,yVal2,checkBack,mType,mColor,rndMenu,ClassNum,h;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL","1HZ100V","1HZ10V","1HZ25V","1HZ50V","1HZ75V"];HdClss=[]; dps=[]; time=[0]; spot=[0]; classIdArr=[]; tic=[];digit=[0];h = []; mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; x=0; yVal2=0; checkBack = 0; cnt=20;

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

var HdClss = new Array(20);
var tic = new Array(20);
function toggleGrpDigit(q,r,s,t,u) { 
	for (var f=0; f<10+1; f++) { 
	    
	    /*
	    document.getElementById("red_"+f).className="'";
	    document.getElementById("blue_"+f).className=;
	    document.getElementById("blueRed_"+f).className=;
	    */
	    var element4 = document.getElementById("red_"+f);
	    if (element4 !== null){
	        document.getElementById("red_"+f).className="";
	    }
	    var element5 = document.getElementById("blue_"+f);
	    if (element5 !== null){
	        document.getElementById("blue_"+f).className="";
	    }
	    var element6 = document.getElementById("blueRed_"+f);
	    if (element6 !== null){
	       document.getElementById("blueRed_"+f).className="";
	    }
	    //Level clear
	    var lvlElement4 = document.getElementById("levelred_"+f);
	    if (lvlElement4 !== null){
	        document.getElementById("levelred_"+f).className="";
	    }
	    var lvlElement5 = document.getElementById("levelblue_"+f);
	    if (lvlElement5 !== null){
	        document.getElementById("levelblue_"+f).className="";
	    }
	    var lvlElement6 = document.getElementById("levelblueRed_"+f);
	    if (lvlElement6 !== null){
	       document.getElementById("levelblueRed_"+f).className="";
	    }
	    
		if (f == 10){
		    removeComplete();
		}
	}
	
	function removeComplete(){
    	if (classIdArr.length >= 1){
    	    var id_q = q.split('-')[0];
    	    var qNum = id_q.split('_')[1];
    	    var qCol = q.split('-')[1];
    		var elementAdd1 = document.getElementById(id_q);
    		var lvlElementAdd1 = document.getElementById("level"+id_q);
           	elementAdd1.classList.add("digit_"+q.split('-')[1]);
           	lvlElementAdd1.classList.add("head_Bar_"+h[0]);
    	}if (classIdArr.length >= 2){
    	    var id_r = r.split('-')[0];
    	    var rNum = id_r.split('_')[1];
    	    var rCol = r.split('-')[1];
    	    var elementAdd2 = document.getElementById(id_r);
    	    var lvlElementAdd2 = document.getElementById("level"+id_r);
    	    if(qCol != rCol && qNum == rNum && rNum % 2 == 0 ) {
    	        elementAdd1.classList.remove("digit_"+q.split('-')[1]);
           	    elementAdd2.classList.add("digit_"+r.split('-')[1]);
           	    lvlElementAdd1.classList.remove("head_Bar_"+h[0]);
           	    lvlElementAdd2.classList.add("head_Bar_"+h[1]);
    	    }else{
    	        elementAdd2.classList.add("digit_"+r.split('-')[1]);
    	        lvlElementAdd2.classList.add("head_Bar_"+h[1]);
    	    }
    	}if (classIdArr.length >= 3){
    	    var id_s = s.split('-')[0];
    	    var sNum = id_s.split('_')[1];
    	    var sCol = s.split('-')[1];
    	    var elementAdd3 = document.getElementById(id_s);
    	    var lvlElementAdd3 = document.getElementById("level"+id_s);
    	    if(qCol != sCol && qNum == sNum && sNum % 2 == 0) {
    	        elementAdd1.classList.remove("digit_"+q.split('-')[1]);
                elementAdd3.classList.add("digit_"+s.split('-')[1]);
                lvlElementAdd1.classList.remove("head_Bar_"+h[0])
                lvlElementAdd3.classList.add("head_Bar_"+h[2]);
    	    }else if(rCol != sCol && rNum == sNum && sNum % 2 == 0) {
    	        elementAdd2.classList.remove("digit_"+r.split('-')[1]);
                elementAdd3.classList.add("digit_"+s.split('-')[1]);
                lvlElementAdd2.classList.remove("head_Bar_"+h[1])
                lvlElementAdd3.classList.add("head_Bar_"+h[2]);
    	    }else{
    	        elementAdd3.classList.add("digit_"+s.split('-')[1]);
    	        lvlElementAdd3.classList.add("head_Bar_"+h[2]);
    	    }
    	}if (classIdArr.length >= 4){
    	    var id_t = t.split('-')[0];
    	    var tNum = id_t.split('_')[1];
    	    var tCol = t.split('-')[1];
    	    var elementAdd4 = document.getElementById(id_t);
    	    var lvlElementAdd4 = document.getElementById("level"+id_t);
    	    if(qCol != tCol && qNum == tNum && tNum % 2 == 0) {
    	        elementAdd1.classList.remove("digit_"+q.split('-')[1]);
                elementAdd1.classList.add("digit_"+t.split('-')[1]); 
                lvlElementAdd1.classList.remove("head_Bar_"+h[0]);
                lvlElementAdd4.classList.add("head_Bar_"+h[3]);
    	    }else if (rCol!= tCol && rNum == tNum && tNum % 2 == 0) {
    	        elementAdd2.classList.remove("digit_"+r.split('-')[1]);
                elementAdd4.classList.add("digit_"+t.split('-')[1]);
                lvlElementAdd2.classList.remove("head_Bar_"+h[1]);
                lvlElementAdd4.classList.add("head_Bar_"+h[3]);
    	    }else if (sCol != tCol && sNum == tNum && tNum % 2 == 0) {
    	        elementAdd3.classList.remove("digit_"+s.split('-')[1]);
                elementAdd4.classList.add("digit_"+t.split('-')[1]);
                lvlElementAdd3.classList.remove("head_Bar_"+h[2]);
                lvlElementAdd4.classList.add("head_Bar_"+h[3]);
    	    }else{
    	        elementAdd4.classList.add("digit_"+t.split('-')[1]);
    	        lvlElementAdd4.classList.add("head_Bar_"+h[3]);
    	    }
    	}if (classIdArr.length == 5){
    	    var id_u = u.split('-')[0];
    	    var uNum = id_u.split('_')[1];
    	    var uCol = u.split('-')[1];
    	    var elementAdd5 = document.getElementById(id_u);
    	    var lvlElementAdd5 = document.getElementById("level"+id_u);
    	    if(qCol != uCol && qNum == uNum && uNum % 2 == 0) {
    	        elementAdd1.classList.remove("digit_"+q.split('-')[1]);
           	    elementAdd5.classList.add("digit_"+u.split('-')[1]); 
           	    lvlElementAdd1.classList.remove("head_Bar_"+h[0]);
    	        lvlElementAdd5.classList.add("head_Bar_"+h[4]);
    	    }else if(rCol != uCol && rNum == uNum && uNum % 2 == 0) {
    	        elementAdd2.classList.remove("digit_"+r.split('-')[1]);
    	        elementAdd5.classList.add("digit_"+u.split('-')[1]);
    	        lvlElementAdd2.classList.remove("head_Bar_"+h[1]);
    	        lvlElementAdd5.classList.add("head_Bar_"+h[4]);
    	    }else if(sCol != uCol && sNum == uNum && uNum % 2 == 0) {
    	        elementAdd3.classList.remove("digit_"+s.split('-')[1]);
    	        elementAdd5.classList.add("digit_"+u.split('-')[1]);
    	        lvlElementAdd3.classList.remove("head_Bar_"+h[2]);
    	        lvlElementAdd5.classList.add("head_Bar_"+h[4]);
    	    }else if(tCol != uCol && tNum == uNum && uNum % 2 == 0) {
    	        elementAdd4.classList.remove("digit_"+t.split('-')[1]);
    	        elementAdd5.classList.add("digit_"+u.split('-')[1]);
    	        lvlElementAdd4.classList.remove("head_Bar_"+h[3]);
    	        lvlElementAdd5.classList.add("head_Bar_"+h[4]);
    	    }else{
    	        elementAdd5.classList.add("digit_"+u.split('-')[1]);
    	        lvlElementAdd5.classList.add("head_Bar_"+h[4]);
    	    }
    	    
	    }
	}
}
   
function clearHd(){
	classIdArr=[];
	h=[];
	toggleGrpDigit();
	HdClss = new Array(20);
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
          
        time[i]= b.history.times[cnt-i];
        spot[i] = b.history.prices[cnt-i];
        spot[i] = parseFloat(spot[i]).toFixed(xd);
        digit[i] = spot[i].slice(-1);
      }
      
    
     
    for(var i=0; i<cnt+1; i++){
        if (i < 10){ // Cut graph
    		if (spot[i] > spot[i+1]) {		
    		    var mColorDigit = "#1439ff";
    	    } else if(spot[i] < spot[i+1]) {
    		    var mColorDigit = "#ff1439";
    		}
    				
    		xVal = new Date(time[i]*1000);
    		yVal = parseFloat(spot[i]);  
    		var DigitLbl= digit[i];
    				
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
          
        yVal2 = parseFloat(spot[20]);
        if(yVal2==Math.max.apply(null,spot)){
            var HdThick= "up";
        }else if(yVal2==Math.min.apply(null,spot)){
            var HdThick= "down";
        }else{
            var HdThick= "mid";
          }
		///////////////////////
        //B && B || R && B
        if (spot[19] < spot[20] ) {
            if (digit[20] % 2 != 0){
                if (digit[19] !== digit[20]){
                    //console.log("Tick UP");
        	        var classId ="blue";
                    ClassNum = digit[20];
                    var classCol ="blue";
                }else if (digit[19] === digit[20] && spot[18] > spot[19] && spot[19] < spot[20]){
                    //console.log("Tick UP");
        	        var classId ="blue";
                    ClassNum = digit[20];
                    var classCol ="blue";
                }else if (digit[19] === digit[20] && spot[18] < spot[19] && spot[19] < spot[20] ){
                    //console.log("Tick UP");
        	        var classId ="blue";
                    ClassNum = digit[20];
                    var classCol ="blueRing";
                }
            }else  if (digit[20] % 2 == 0){
                if (digit[19] !== digit[20]){
        	        var classId ="blueRed";
                    ClassNum = digit[20];
                    var classCol ="blue";
                }else if (digit[19] === digit[20] && spot[18] > spot[19] && spot[19] < spot[20]){
        	        var classId ="blueRed";
                    ClassNum = digit[20];
                    var classCol ="blue";
                }else if (digit[19] === digit[20] && spot[18] < spot[19] && spot[19] < spot[20] ){
        	        var classId ="blueRed";
                    ClassNum = digit[20];
                    var classCol ="blueRing";
                }
            }
        } else if( spot[19] > spot[20] ){
            //console.log("Tick DOWN");
            if (digit[20] % 2 != 0){
                if (digit[19] !== digit[20]){
        	        var classId ="red";
                    ClassNum = digit[20];
                    var classCol ="red";
                }else if (digit[19] === digit[20] && spot[18] < spot[19] && spot[19] > spot[20]){
        	        var classId ="red";
                    ClassNum = digit[20];
                    var classCol ="red";
                }else if (digit[19] === digit[20] && spot[18] > spot[19] && spot[19] > spot[20]){
        	        var classId ="red";
                    ClassNum = digit[20];
                    var classCol ="redRing";
                }
            }else  if (digit[20] % 2 == 0){
                if (digit[19] !== digit[20]){
        	        var classId ="blueRed";
                    ClassNum = digit[20];
                    var classCol ="red";
                }else if (digit[19] === digit[20] && spot[18] < spot[19] && spot[19] > spot[20]){
        	        var classId ="blueRed";
                    ClassNum = digit[20];
                    var classCol ="red";
                }else if (digit[19] === digit[20] && spot[18] > spot[19] && spot[19] > spot[20]){
        	        var classId ="blueRed";
                    ClassNum = digit[20];
                    var classCol ="redRing";
                }
                
            }
		
        } else if(spot[19] == spot[20]){
            //console.log(Tick Flat);
                if(spot[18] < spot[19]) {
                    if (digit[20] % 2 != 0){
                        if (digit[19] !== digit[20]){
                            //console.log("Tick UP");
                	        var classId ="blue";
                            ClassNum = digit[20];
                            var classCol ="blue";
                        }else if (digit[19] === digit[20] && spot[18] < spot[19] && spot[19] == spot[20]){
                            //console.log("Tick UP");
                	        var classId ="blue";
                            ClassNum = digit[20];
                            var classCol ="blueRing";
                        }
                    }else  if (digit[20] % 2 == 0){
                        if (digit[19] !== digit[20]){
                	        var classId ="blueRed";
                            ClassNum = digit[20];
                            var classCol ="blue";
                        }else if (digit[19] === digit[20] && spot[18] < spot[19] && spot[19] == spot[20] ){
                	        var classId ="blueRed";
                            ClassNum = digit[20];
                            var classCol ="blueRing";
                        }
                    }
                }if(spot[18] > spot[19]) {
                    if (digit[20] % 2 != 0){
                        if (digit[19] !== digit[20]){
                	        var classId ="red";
                            ClassNum = digit[20];
                            var classCol ="red";
                        }else if (digit[19] === digit[20] && spot[18] > spot[19] && spot[19] == spot[20]){
                	        var classId ="red";
                            ClassNum = digit[20];
                            var classCol ="redRing";
                        }
                }else  if (digit[20] % 2 == 0){
                    if (digit[19] !== digit[20]){
            	        var classId ="blueRed";
                        ClassNum = digit[20];
                        var classCol ="red";
                    }else if (digit[19] === digit[20] && spot[18] > spot[19] && spot[19] == spot[20]){
            	        var classId ="blueRed";
                        ClassNum = digit[20];
                        var classCol ="redRing";
                    }
                    
                }
                }
            }
            
             
        ////////////////////////
        
        if (spot[i-1] < spot[i]) {          
          toggleDigit(i,"Up");
	    var mColorDigit = "#29abe2";
            if(digit[i] !=0) {
                var tic2nd= (digit[i]*1);
            }
            if (((digit[i-1]) > 5) && digit[i] ==0) {
                var tic2nd= (10);
            }
            if (((digit[i-1]) <= 5) && digit[i] ==0) {
                var tic2nd= (0.5);
            }
        
        } else if(spot[i-1] > spot[i]) {
          toggleDigit(i,"Down");
	        var mColorDigit = "#c03";
            if(digit[i] !=0) {
                var tic2nd= (digit[i]*-1);
            }
            if (((digit[i-1]) > 5) && digit[i] ==0) {
                var tic2nd= (-10);
            }
            if (((digit[i-1]) <= 5) && digit[i] ==0) {
                var tic2nd= (0.5);
            }
        ////
        } else if(spot[i-1]==spot[i] && i-1>0) {
            if (spot[i-2] < spot[i-1]) {
            toggleDigit(i,"Up");
            var mColorDigit = "#29abe2";
            if(digit[i] !=0) {
                var tic2nd= (digit[i]*1);
            }
            if (((digit[i-1]) > 5) && digit[i] ==0) {
                var tic2nd= (10);
            }
            if (((digit[i-1]) <= 5) && digit[i] ==0) {
                var tic2nd= (0.5);
            }
            } else if (spot[i-2] > spot[i-1]){
            toggleDigit(i,"Down");
            var mColorDigit = "#c03";
            if(digit[i] !=0) {
                var tic2nd= (-digit[i]*-1);
            }
            if (((digit[i-1]) > 5) && digit[i] ==0) {
                var tic2nd= (-10);
            }
            if (((digit[i-1]) <= 5) && digit[i] ==0) {
                var tic2nd= (-0.5);
            }
          }         
        }
        
        if (digit[i] % 2 == 0){
        	var ticEO = "even";
        }else{
        	var ticEO = "odd";
        }
		
     tic.shift(0);  
     tic.push({tic: tic2nd, ticChar: ticEO});
        
     
     }
	HdClss.shift(0);
	HdClss.push(HdThick);
	h.push(HdThick);
	
	if (classIdArr.length ==5){
		    classIdArr.shift(0);
		}

    classIdArr.push(classId+"_"+ClassNum+"-"+classCol);
    
    if(classIdArr.length > 5+1) {
		while(classIdArr.length != 5+1) {
			classIdArr.shift();
		}
	}
	
	if(h.length > 5) {
		while(h.length != 5) {
			h.shift();
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

