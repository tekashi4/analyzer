window.addEventListener('load', function() {

var ws,b,rnd,spot,time,dps,xd,digit,cnt,random,id,lng,str,chart,xVal,yVal,yVal2,ClassNum,mType,mColor,rndMenu;

str=["R_100","R_10","R_25","R_50","R_75","RDBEAR","RDBULL"];
HdClss=[]; dps=[]; time=[0]; spot=[0]; classIdArr=[];classIdArr3=[]; tic=[];digit=[0]; 
mType="none"; mColor="#32cd32"; lng="EN"; xVal=0; yVal=0; yVal2=0; cnt=20;

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
	for (var e=1; e<20+1; e++) {
	   HdClss.unshift(0);
	   tic.unshift(0);	
	}
}
function toggleGrpDigit3(q,r,s) {
  for (var f=0; f<10+1; f++) {     	    
    var element4 = document.getElementById("xred_"+f);
    var elemName4 =document.getElementById("xred_"+f).className;
    if( elemName4 != ""){
      element4.classList.remove(elemName4);
    }
    var element5 = document.getElementById("xblue_"+f);
    var elemName5 =document.getElementById("xblue_"+f).className;	
    if( elemName5 != ""){
      element5.classList.remove(elemName5);   
    }
    var element6 = document.getElementById("xred_green_"+f);
    var elemName6 =document.getElementById("xred_green_"+f).className;	
    if( elemName6 != ""){
      element6.classList.remove(elemName6); 
    }
    var element7 = document.getElementById("xblue_green_"+f);
    var elemName7 =document.getElementById("xblue_green_"+f).className;
    var RemoveComplete = "xblue_green_"+f;	
    
		if( elemName7 != ""){
      element7.classList.remove(elemName7);
		}
  }
  if( RemoveComplete == "xblue_green_10" ){
    for (var e=1; e<3+1; e++) {
      if (e == 1 && classIdArr3.length >= 1){
        var elementAdd1 = document.getElementById(q);
        elementAdd1.classList.add("Active_3");
      }
      if (e == 2 && classIdArr3.length >= 2){
        var elementAdd2 = document.getElementById(r);
        if( r != q){
          elementAdd2.classList.add("Active_2");
        }
      }
      if (e == 3 && classIdArr3.length == 3){
        var elementAdd3 = document.getElementById(s);
        yellowDigit[0].x=elementAdd3.innerHTML;
        yellowDigit[0].v0="";
        yellowBg(s,q,r)
        if(s == r){
          elementAdd3.classList.remove("Active_2");
          elementAdd3.classList.add("Active_1");
        }
        if(s == q){
          elementAdd3.classList.remove("Active_3");
          elementAdd3.classList.add("Active_1");
        }

        if((s != r) || (s != q)) {
          elementAdd3.classList.add("Active_1");
        }
        if((q == r)) {
          
          // elementAdd3.classList.add("Active_1");
        }
      }
    }
  }
}

function yellowBg(id,q,r){
  var zeroBack="";
  if(id=="blue_10" || id=="blue_green_10" || id=="red_green_10" || id=="red_10"){
    zeroBack="z"
  }
  // var virtualZero = ""
  if(id==""){
    // virtualZero="*"
  }
  if(id.includes("blue")){
    yellowDigit[0].color="b";
  }else{
    yellowDigit[0].color="r";
  }
  // yellowDigit[0].v0=virtualZero;
  yellowDigit[0].isNumber=isNumber(yellowDigit[0]);
  yellowDigit[0].y= yellowDigit[0].x*yellowDigit[0].isNumber
  yellowDigit[0].type= getType(yellowDigit[0].x)
  yellowDigit[0].bg=getBackground(document.getElementById(id).closest('table').id)
  yellowDigit[0].baris=getRow(document.getElementById(id).closest('table').id)
  var ix;
  if(id.substr(id.length - 2)==10){
    ix =10
  }else{
    ix = id.substr(id.length - 1)
  }
  yellowDigit[0].kolom = ix
}
function toggleGrpDigit(q,r,s,t,u) {         
  for (var f=0; f<10+1; f++) {     	    
    var element4 = document.getElementById("red_"+f);
    var elemName4 =document.getElementById("red_"+f).className;		
    
    if( elemName4 != ""){
      element4.classList.remove(elemName4);
    }	
    
    var element5 = document.getElementById("blue_"+f);
    var elemName5 =document.getElementById("blue_"+f).className;	
    if( elemName5 != ""){
      element5.classList.remove(elemName5);   
    }

    var element6 = document.getElementById("red_green_"+f);
    var elemName6 =document.getElementById("red_green_"+f).className;	
    if( elemName6 != ""){
      element6.classList.remove(elemName6); 
    }

    var element7 = document.getElementById("blue_green_"+f);
    var elemName7 =document.getElementById("blue_green_"+f).className;
    var RemoveComplete = "blue_green_"+f;	
    
		if( elemName7 != ""){
      element7.classList.remove(elemName7);
    }
  }
	if( RemoveComplete == "blue_green_10" ){
		if (classIdArr.length >= 1){
		  var elementAdd1 = document.getElementById(q);
      elementAdd1.classList.add("digit_"+q.split('_')[0]);
      pinkDigit[0].x=elementAdd1.innerHTML;
      var zeroBack="";
      if(q=="blue_10" ||q=="blue_green_10" || q=="red_green_10" || q=="red_10"){
        zeroBack="z"
      }
      if(q.includes("blue")){
        pinkDigit[0].color="b"+zeroBack;
      }else{
        pinkDigit[0].color="r"+zeroBack;
      }
      pinkDigit[0].isNumber=isNumber(pinkDigit[0])
      pinkDigit[0].y= pinkDigit[0].x*pinkDigit[0].isNumber
      pinkDigit[0].type= getType(pinkDigit[0].x)
      pinkDigit[0].bg=getBackground(document.getElementById(q).closest('table').id)
      pinkDigit[0].baris=getRow(document.getElementById(q).closest('table').id)
      var ix;
      if(q.substr(q.length - 2)==10){
        ix =10
      }else{
        ix = q.substr(q.length - 1)
      }
      pinkDigit[0].kolom = ix
		}
    if (classIdArr.length >= 2){
		  var elementAdd2 = document.getElementById(r);
      elementAdd2.classList.add("digit_"+r.split('_')[0]);   
      cyanDigit[0].x=elementAdd2.innerHTML;
      var zeroBack="";
      if(r=="blue_10" ||r=="blue_green_10" || r=="red_green_10" || r=="red_10"){
        zeroBack="z"
      }
      if(r.includes("blue")){
        cyanDigit[0].color="b"+zeroBack;
      }else{
        cyanDigit[0].color="r"+zeroBack;
      }
      cyanDigit[0].isNumber=isNumber(cyanDigit[0])
      cyanDigit[0].y= cyanDigit[0].x*cyanDigit[0].isNumber
      cyanDigit[0].type= getType(cyanDigit[0].x)
      cyanDigit[0].bg=getBackground(document.getElementById(r).closest('table').id)
      cyanDigit[0].baris=getRow(document.getElementById(r).closest('table').id)
      var ix;
      if(r.substr(r.length - 2)==10){
        ix =10
      }else{
        ix = r.substr(r.length - 1)
      }
      cyanDigit[0].kolom = ix
		}
		if (classIdArr.length >= 3){
      var elementAdd1 = document.getElementById(s);
      elementAdd1.classList.add("digit_"+s.split('_')[0]);
      greenDigit[0].x=elementAdd1.innerHTML;
      var zeroBack="";
      if(s=="blue_10" ||s=="blue_green_10" || s=="red_green_10" || s=="red_10"){
        zeroBack="z"
      }
      if(s.includes("blue")){
        greenDigit[0].color="b"+zeroBack;
      }else{
        greenDigit[0].color="r"+zeroBack;
      }
      greenDigit[0].isNumber=isNumber(greenDigit[0])
      greenDigit[0].y= greenDigit[0].x*greenDigit[0].isNumber
      greenDigit[0].type= getType(greenDigit[0].x)
      greenDigit[0].bg=getBackground(document.getElementById(s).closest('table').id)
      greenDigit[0].baris=getRow(document.getElementById(s).closest('table').id)
      var ix;
      if(s.substr(s.length - 2)==10){
        ix =10
      }else{
        ix = s.substr(s.length - 1)
      }
      greenDigit[0].kolom = ix
    }
		if (classIdArr.length >= 4){
      var elementAdd2 = document.getElementById(t);
      elementAdd2.classList.add("digit_"+t.split('_')[0]);  
      whiteDigit[0].x=elementAdd2.innerHTML;
      var zeroBack="";
      if(t=="blue_10" || t=="blue_green_10" || t=="red_green_10" || t=="red_10"){
        zeroBack="z"
      }
      if(t.includes("blue")){
        whiteDigit[0].color="b"+zeroBack;
      }else{
        whiteDigit[0].color="r"+zeroBack;
      }
      whiteDigit[0].isNumber=isNumber(whiteDigit[0])
      whiteDigit[0].y= whiteDigit[0].x*whiteDigit[0].isNumber
      whiteDigit[0].type= getType(whiteDigit[0].x)
      whiteDigit[0].bg=getBackground(document.getElementById(t).closest('table').id) 
      whiteDigit[0].baris=getRow(document.getElementById(t).closest('table').id)
      var ix;
      if(t.substr(t.length - 2)==10){
      ix =10
      }else{
      ix = t.substr(t.length - 1)
      }
      whiteDigit[0].kolom = ix
    }
    if (classIdArr.length == 5){
      var elementAdd2 = document.getElementById(u);
      elementAdd2.classList.add("digit_"+u.split('_')[0]);
      
    }
    var a =  document.getElementById("vYellow")
    a.innerHTML = yellowDigit[0].x+yellowDigit[0].color+yellowDigit[0].bg+yellowDigit[0].v0;
    var b =  document.getElementById("vWhite")
    b.innerHTML = whiteDigit[0].x+whiteDigit[0].color+whiteDigit[0].bg+yellowDigit[0].v0;
    var c =  document.getElementById("vGreen")
    c.innerHTML = greenDigit[0].x+greenDigit[0].color+greenDigit[0].bg+yellowDigit[0].v0;
    var d =  document.getElementById("vCyan")
    d.innerHTML = cyanDigit[0].x+cyanDigit[0].color+cyanDigit[0].bg+yellowDigit[0].v0;
    var e =  document.getElementById("vPink")
    e.innerHTML = pinkDigit[0].x+pinkDigit[0].color+pinkDigit[0].bg+yellowDigit[0].v0;
    if(yellowDigit[0].bg=="r"){
      
    }
    getSignal();
  }	
}
    
var pinkDigit=[{x:null,bg:null,color:null,isNumber:null,y:null,type:null,baris:0,kolom:0,v0:""}],
cyanDigit=[{x:null,bg:null,color:null,isNumber:null,y:null,type:null,baris:0,kolom:0,v0:""}],
greenDigit=[{x:null,bg:null,color:null,isNumber:null,y:null,type:null,baris:0,kolom:0,v0:""}],
whiteDigit=[{x:null,bg:null,color:null,isNumber:null,y:null,type:null,baris:0,kolom:0,v0:""}],
yellowDigit=[{x:null,bg:null,color:null,isNumber:null,y:null,type:null,baris:0,kolom:0,v0:""}];

var al = null;
function getSignal(){
  if(pinkDigit[0].color==null || greenDigit[0].color==null || whiteDigit[0].color==null || yellowDigit[0].color==null){
    return
  }
  var rs;
  if(timex){
    
    rs = xZ();
    if(rs!==null){
      entryPoint(rs,algo)
      timex=false
      setTimeout(() => { 
        var d =  document.getElementById("algo")
        d.innerHTML = "Algo";
        timex=true}
        , 5000);
    }
  }
}

var cleared=true,timex=true;algo="";
function entryPoint(entry,algo){
  var c =  document.getElementById("sinyal")
  if(cleared){
    if(entry=="d"){
      c.innerHTML = "Put";
      c.classList.add("redb");
    }else{
      c.innerHTML = "Call";
      c.classList.add("blueb");
    }
    cleared=false
    var d =  document.getElementById("algo")
        d.innerHTML = previousAlgo+":"+algo;
    clrt = setTimeout(() => { 
      c.innerHTML="Forecasting...";
      c.classList.remove("blueb");
      c.classList.remove("redb");cleared=true}
      , 1500);
  }
}

function xZ(){
  var r ;
  if((greenDigit[0].type=="o" && whiteDigit[0].type=="e") || (greenDigit[0].type=="e" && whiteDigit[0].type=="o")){
    var d =  document.getElementById("sinyal")
        d.innerHTML = "Stay";
    if(greenDigit[0].color.includes("r") && whiteDigit[0].color.includes("r") && yellowDigit[0].color.includes("r")){
      var log="R-"
    }else if(greenDigit[0].color.includes("b") && whiteDigit[0].color.includes("b") && yellowDigit[0].color.includes("b")){
      var log="B-"
      r = getDirectionSamaTipe(greenDigit,whiteDigit)
      if(r!==null){
        algo="1"
        return r
      }
    }
  }
  r = brb()
  if(previous==r){
    return r
  }
  previousAlgo = algo
  previous = r;  
  return null
}
var previous=null;
var previousAlgo="";
var ux=0
var dx=0
function brb(){
  var cg = greenDigit[0].color
  var cw = whiteDigit[0].color
  var cy = yellowDigit[0].color
  if(cg.includes("b") ){
    if(cg.includes("b") && cy.includes("b")){
      algo=1;
      return "u"
    }
    if(cg.includes("r") && cy.includes("b")){
      algo=2;
      return "u"
    }
    if(cg.includes("r") && cy.includes("r")){
      algo=3;
      return "d"
    }
    if(cg.includes("b") && cy.includes("r")){
      algo=4;
      return "d"
    }
  }
  if(cg.includes("r") ){
    if(cg.includes("r") && cy.includes("b")){
      algo=5;
      return "u"
    }
    if(cg.includes("b") && cy.includes("r")){
      algo=6;
      return "d"
    }
    if(cg.includes("r") && cy.includes("r")){
      algo=7;
      return "d"
    }
    if(cg.includes("b") && cy.includes("b")){
      algo=8;
      return "u"
    }
  }
}
function getDirectionSamaTipe(){
  
}

function getDirection(x1,x2){
  if(x1[0].y<x2[0].y){
    return "u"
  }else{
    return "d"
  }
}

function cekTembus(x1,x2){
  if(x1[0].x<x2.x){
    return false
  }else if(x1[0].x>x2.x){
    return true
  }
}

function bobot(){
  var r=null,g=null,w=null,y=null;
  if(greenDigit[0].x>whiteDigit[0].x){
    r = greenDigit
    g = greenDigit
  }else{
    r = whiteDigit
    w = whiteDigit
  }

  if(r[0].x<yellowDigit[0].x){
    r = yellowDigit
    y = yellowDigit
  }

  if(g!==null){
    var x=xy(whiteDigit,g);
    if(x!==null){
      return x
    }else{
      return xy(yellowDigit,g);
    }
  }

  if(w!==null){
    var x=xy(greenDigit,w);
    if(x!==null){
      return x
    }else{
      return xy(yellowDigit,w);
    }
  }

  if(y!==null){
    var x=xy(greenDigit,y);
    if(x!==null){
      return x
    }else{
      return xy(whiteDigit,y);
    }
  }
  return r
}
function xy(x1,x2){
  if((x1[0].color.includes("b") && x2[0].color.includes("r") || (x1[0].color.includes("r") && x2[0].color.includes("b")))){
    if((x1[0].type=="o" && x2[0].type=="e") || x1[0].type=="e" && x2[0].type=="o"){
      if(x2[0].x > x1[0].x){
        if(x1[0].color.includes("b")){
          return "u"
        }
        if(x1[0].color.includes("r")){
          return "d"
        }
      }
    }
  }
  return null
}

function getType(x){
  if(x % 2 == 0){
    return "e"
  }else{
    return "o"
  }
}

function getBackground(q){
  if( q=="head_redbreak"){
    return "_"
  }else if( q=="head_bluebreak"){
    return "^"
  }else if( q=="head_red"){
    return "r"
  }else if( q=="head_blue"){
    return "b"
  }
}
function getRow(q){
  if( q=="head_redbreak"){
    return 4
  }else if( q=="head_bluebreak"){
    return 1
  }else if( q=="head_red"){
    return 3
  }else if( q=="head_blue"){
    return 2
  }
}
function printB(t){
  var d =  document.getElementById("algo")
  d.innerHTML = "Algo:"+t;
  console.log(greenDigit[0].x+greenDigit[0].color+","+yellowDigit[0].x+yellowDigit[0].color+"algo:"+t)
  console.log("Algo:"+t)
}

var betUpEvenBlue=["0bz","9r","2b","7r","4b","5r","6b","3r","8b","1r"];
var betDownOddBlue=["9b","2r","7b","4r","5b","6r","3b","8r","1b","0rz"];

var betUpEvenRed=["0r","1b","8r","3b","6r","5b","4r","7b","2r","9b"];
var betDownOddRed=["8b","1r","6b","3r","4b","5r","2b","7r","0","9r"];

function isNumber(x){
  if(x.color=="r" || x.color=="rz"){
    return "-1"
  }else {
    return "1"
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
  classIdArr=[];
  classIdArr3=[];
  toggleGrpDigit();
  toggleGrpDigit3();
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
      classIdArr3=[];
      toggleGrpDigit();
      toggleGrpDigit3();
      clearHd();
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
          var HdThick= "up";
          mColorHead = "#c03";
          if (spot[i+17] > spot[i+16]) {
            //console.log( " above - head blue");
            LDigit = digit[20];
            LDigit_0 = digit[19];
            var classCol ="blue";var classCol3 ="xblue";    
            if (LDigit_0 > 5 && LDigit == 0) {
                ClassNum = 10;                
            }if (LDigit_0 < 5 && LDigit == 0){
              ClassNum = 0;                     
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
          mColorDigit = "#c03";
          //removeClass();     
          if (spot[i+17] > spot[i+16]) {
          //console.log("Worm head red: Tick Return Up");
          } else if(spot[i+17] < spot[i+16]) {
            LDigit = digit[20];   
            LDigit_0 = digit[19];
            var classCol ="red";var classCol3 ="xred";    
            if (LDigit_0 > 5 && LDigit == 0){
                ClassNum = 10;            
            }if (LDigit_0 < 5 && LDigit == 0){
                ClassNum = 0;                
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
	          var classCol ="blue_green";var classCol3 ="xblue_green";
            if (LDigit_0 > 5 && LDigit == 0) {
              ClassNum = 10;                  
            } if (LDigit_0 < 5 && LDigit == 0) {
              ClassNum = 0;                        
            } if (LDigit != 0){
              ClassNum = LDigit;
            }
            //Between Level digit Blue
          } else if(spot[i+17] < spot[i+16]) {
            //console.log("Worm head green:Tick Down");
            LDigit = digit[20];
            LDigit_0 = digit[19];
            var classCol ="red_green";var classCol3 ="xred_green";
            if (LDigit_0 > 5 && LDigit == 0) {
              ClassNum = 10;
            }if (LDigit_0 < 5 && LDigit == 0){
              ClassNum = 0;                      
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

		if (classIdArr.length ==5){
		  classIdArr.shift(0);
		}
    
    classIdArr.push(classCol+"_"+ClassNum);

    if (classIdArr3.length ==3){
      classIdArr3.shift(0);
    }
    
    classIdArr3.push(classCol3+"_"+ClassNum);

		HdClss.shift(0);
		HdClss.push(HdThick);
	
	  for (var i=1; i<cnt+1; i++) {
      document.querySelector("#headcol > span:nth-child("+i+")").innerHTML = digit;
	    toggleHead(i,HdClss[i-1]);
	  }
    
    if(classIdArr3.length > 3+1) {
      while(classIdArr3.length != 3+1) {
        classIdArr3.shift();
      }				
    }
    if (classIdArr3.length == 3){ 
      toggleGrpDigit3(classIdArr3[0],classIdArr3[1],classIdArr3[2]);
    }else if (classIdArr3.length == 2){ 
      toggleGrpDigit3(classIdArr3[0],classIdArr3[1]);
    }else if (classIdArr3.length == 1){ 
      toggleGrpDigit3(classIdArr3[0]);
      }
    };

    if(classIdArr.length > 5+1) {
	    while(classIdArr.length != 5+1) {
		    classIdArr.shift();
		  }				
	  }

	  if (classIdArr.length == 5){ 
      toggleGrpDigit(classIdArr[0],classIdArr[1],classIdArr[2],classIdArr[3],classIdArr[4]);
    }else if (classIdArr.length == 4){ 
      toggleGrpDigit(classIdArr[0],classIdArr[1],classIdArr[2],classIdArr[3]);
    }else if (classIdArr.length == 3){ 
      toggleGrpDigit(classIdArr[0],classIdArr[1],classIdArr[2]);
    }else if (classIdArr.length == 2){ 
      toggleGrpDigit(classIdArr[0],classIdArr[1]);
    }else if (classIdArr.length == 1){ 
      toggleGrpDigit(classIdArr[0]);
    }
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


}, false);

