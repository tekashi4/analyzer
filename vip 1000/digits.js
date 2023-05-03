window.addEventListener('load', function () {

  var _0x26a1 = ["\x77\x73\x73\x3A\x2F\x2F\x77\x73\x2E\x62\x69\x6E\x61\x72\x79\x77\x73\x2E\x63\x6F\x6D\x2F\x77\x65\x62\x73\x6F\x63\x6B\x65\x74\x73\x2F\x76\x33\x3F\x61\x70\x70\x5F\x69\x64\x3D\x32\x31\x33\x31\x37"];
  var ws, b, rnd, spot, time, dps, dps2, xd, digit, cnt, random, id, lng, str, chart, xVal, yVal, mType, mColor, rndMenu;

  str = ["R_100", "R_10", "R_25", "R_50", "R_75", "1HZ10V", "1HZ25V", "1HZ50V", "1HZ75V", "1HZ100V"];
  thick = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  dps = [];
  dps2 = [];
  time = [0];
  spot = [0];
  tic = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  digit = [0];
  mType = "none";
  mColor = "#32cd32";
  lng = "EN";
  xVal = 0;
  yVal = 0;
  cnt = 20;
  var currency = "USD"
  var isloading = true;
  var starting_balance = 0

  rndMenu = document.querySelectorAll('div.menu > span');

  for (var i = 0; i < rndMenu.length; i++) {
    clickMenu(rndMenu[i]);
  }


  // document.getElementById("tokenbtn").addEventListener("click", function () {
  //   auThorized(document.getElementById("token").value)
  // });

  if(getCookie)


  function toggleMenu(data) {
    console.log('--------START--------')
    for (var i = 0; i < rndMenu.length; i++) {
      rndMenu[i].classList.remove('menu-active');
    }
    data.classList.add('menu-active');

    isloading = true

  }

  function clickMenu(data) {
    data.addEventListener('click', function () {
      toggleMenu(data);
    });
  }




  function toggleDigit(d, m) {
    var nameClass = document.querySelector("#digits > span:nth-child(" + d + ")").className;
    if (nameClass != "digits_moved_" + m) {
      document.querySelector("#digits > span:nth-child(" + d + ")").classList.remove(nameClass);
      document.querySelector("#digits > span:nth-child(" + d + ")").classList.add("digits_moved_" + m);

    }
  }
  function toggleHead(e, s) {
    var nameClass = document.querySelector("#headcol > span:nth-child(" + e + ")").className;
    if (nameClass != "Head_moved_" + s) {
      document.querySelector("#headcol > span:nth-child(" + e + ")").classList.remove(nameClass);
      document.querySelector("#headcol > span:nth-child(" + e + ")").classList.add("Head_moved_" + s);
    }
  }



  function togglePlace(f, g) {
    var nameClass = document.querySelector("#placecol > span:nth-child(" + f + ")").className;
    if (nameClass != "Place_moved_" + g) {
      document.querySelector("#placecol > span:nth-child(" + f + ")").classList.remove(nameClass);
      document.querySelector("#placecol > span:nth-child(" + f + ")").classList.add("Place_moved_" + g);
    }
  }



  function rndGet() {
    random = document.querySelector("body > div.menu > span.menu-active").title;
    switch (random) {
      case str[0]: rnd = "R_100"; xd = 2; break;
      case str[1]: rnd = "R_10"; xd = 3; break;
      case str[2]: rnd = "R_25"; xd = 3; break;
      case str[3]: rnd = "R_50"; xd = 4; break;
      case str[4]: rnd = "R_75"; xd = 4; break;
      case str[5]: rnd = "1HZ10V"; xd = 2; break;
      case str[6]: rnd = "1HZ25V"; xd = 2; break;
      case str[7]: rnd = "1HZ50V"; xd = 2; break;
      case str[8]: rnd = "1HZ75V"; xd = 2; break;
      case str[9]: rnd = "1HZ100V"; xd = 2; break;
      // case str[6]: rnd="RDBEAR"; xd=4; break;
      // case str[7]: rnd="RDBULL"; xd=4; break;
      default: rnd = "R"; xd = 0; break;
    }
  }

  rndGet();

  ws = new WebSocket(_0x26a1[0]);

  output = document.getElementById("output");
  var timestamp = ''





  function auThorized(token) {
    timestamp = formatAMPM(new Date());
    writeToScreen(timestamp + " - Try to Connecting..");
    ws.send(JSON.stringify({ authorize: token }));
  }

  ws.onopen = function (evt) {
    ws.send(JSON.stringify({ ticks: rnd }));
  };


  function formatAMPM(m) { // This is to display 12 hour format like you asked
    return m.getUTCFullYear() + "-" + (m.getUTCMonth() + 1) + "-" + m.getUTCDate() + " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds();
    // return strTime;
  }

  function writeToScreen(message) {
    var pre = document.createElement("div");
    pre.style.wordWrap = "break-word";
    pre.style.fontSize = "100%";
    pre.innerHTML = message;
    output.appendChild(pre);
    output.insertBefore(pre, output.childNodes[0]);
  }

  ws.onmessage = function (msg) {

    b = JSON.parse(msg.data);

    if (b.tick) {

      rndGet();

      if (b.echo_req.ticks == rnd) {
        id = b.tick.id;
        ws.send(JSON.stringify({ ticks_history: rnd, end: "latest", start: 1, style: "ticks", count: cnt + 1 }));
      } else {
        ws.send(JSON.stringify({ forget: id }));
        ws.send(JSON.stringify({ forget_all: "ticks" }));
        ws.send(JSON.stringify({ ticks: rnd }));

      };

    };

    if (b.history) {

      if (b.echo_req.ticks_history == rnd) {

        if (document.querySelector("#chartContainer > div > a")) {
          if (document.querySelector("#chartContainer > div > a").innerText != "            ") {
            document.querySelector("#chartContainer > div > a").innerHTML = "            ";
            document.querySelector("#chartContainer > div > a").href = "https://www.binary.com"
          }
        }
        if (document.querySelector("#chartContainerDigit > div > a")) {
          if (document.querySelector("#chartContainerDigit > div > a").innerText != "        ") {
            document.querySelector("#chartContainerDigit > div > a").innerHTML = "          ";
            document.querySelector("#chartContainerDigit > div > a").href = "https://www.binary.com"
          }
        }

        for (var i = 0; i < cnt + 1; i++) {
          time[i] = b.history.times[cnt - i];
          spot[i] = b.history.prices[cnt - i];
          spot[i] = Number(spot[i]).toFixed(xd);
          digit[i] = spot[i].slice(-1);
        }

        for (var i = 0; i < cnt + 1; i++) {

          xVal = new Date(time[i] * 1000);
          yVal = parseFloat(spot[i]);


          if (i == 0) mType = "circle";
          else mType = "none";

          if (yVal == Math.max.apply(null, spot)) {
            mColor = "#29abe2";
            mType = "circle";

          } else if (yVal == Math.min.apply(null, spot)) {
            mColor = "#c03";
            mType = "circle";

          } else {
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

        if (dps.length > cnt + 1) {

          while (dps.length != cnt + 1) {
            dps.shift();
          }
          chart.options.axisY.stripLines[0].value =  spot[0];

        }

        chart.render();

        spot.reverse();
        digit.reverse();

        for (var i = 1; i < cnt + 1; i++) {

          document.querySelector("#digits > span:nth-child(" + i + ")").innerHTML = digit[i];

          yVal2 = parseFloat(spot[20]);
          if (yVal2 == Math.max.apply(null, spot)) {
            var HeadThick = "up";
            mColorHead = "#29abe2";
          } else if (yVal2 == Math.min.apply(null, spot)) {
            var HeadThick = "down";
            mColorHead = "#c03";
          } else {
            var HeadThick = "mid";
            mColorHead = "#32cd32";
          }


          if (spot[i - 1] < spot[i]) {
            toggleDigit(i, "up");
            if (digit[i] != 0) {
              var tic2nd = (digit[i] * 1);
            }
            if (((digit[i - 1]) > 5) && digit[i] == 0) {
              var tic2nd = (10);
              //console.log("ok")
            }
            if (((digit[i - 1]) <= 5) && digit[i] == 0) {
              var tic2nd = (0);
            }

          } else if (spot[i - 1] > spot[i]) {
            toggleDigit(i, "down");
            if (digit[i] != 0) {
              var tic2nd = (digit[i] * -1);
            }
            if (((digit[i - 1]) > 5) && digit[i] == 0) {
              var tic2nd = (-10);
            }
            if (((digit[i - 1]) <= 5) && digit[i] == 0) {
              var tic2nd = (-0);
            }
          } else if (spot[i - 1] == spot[i] && i - 1 > 0) {
            if (document.querySelector("#digits > span:nth-child(" + (i - 1) + ")").className == "digits_moved_up") {
              toggleDigit(i, "up");
            } else if (document.querySelector("#digits > span:nth-child(" + (i - 1) + ")").className == "digits_moved_down") {
              toggleDigit(i, "down");
            }

          }




          tic.shift(0);
          tic.push(tic2nd);
        }





        thick.shift(0);
        thick.push(HeadThick);
        for (var i = 1; i < cnt + 1; i++) {
          if (spot[i - 1] < spot[i]) {
            toggleDigit(i, "up");
            mColorDigit = "#29abe2";
          } else if (spot[i - 1] > spot[i]) {
            toggleDigit(i, "down");
            mColorDigit = "#c03";
          }

          toggleHead(i, thick[i - 1]);
          document.querySelector("#headcol > span:nth-child(" + i + ")").innerHTML = tic;
          xDigit = (i);
          yDigit = parseFloat(tic[i - 1]);
          //console.log(tic);

          xDigit = (i);
          yDigit = parseFloat(tic[i - 1]);
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

        if (dps2.length > cnt + 1) {

          while (dps2.length != cnt) {
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



        if (isloading) {

          document.getElementById("preloadingtxt").style.display = "none";

          


          console.log('-------DONE--------')
          isloading = false
          //------------------------------------- '5YiIaBXOf4OtvM5'
          if (getCookie('api_token')) {
            // if (true) {
            // document.getElementById("token").value = getCookie('api_token')
            setTimeout(function () {
              auThorized(getCookie('api_token'))
            }, 1000);
          }else{
            document.getElementById('logout-btn').style.display = 'none';
            document.getElementById('login-btn').style.display = 'block';
            document.getElementById('mobile-login').style.display = 'block';
            
          }

        }


        //console.log(tic)
        //console.log('t1',tic1,'Level tic1',tic1_level)
        ////////////////////
        //Alorythm test area
        //if (tic4_level == 'mid' && tic3_level == 'mid' && tic2_level == 'mid' && tic1_level == 'mid'){ 



        ////////////////////
      };

    };
    var status = b.msg_type;

    if (isloading) {

    }



    if (b.error && b.error.code != "AlreadySubscribed") {
      writeToScreen('<span style="color: red;"> ' + timestamp + ' - ' + b.error.message + '</span>');
      // break;
    }


    if (status == "authorize") {
      if (b.error) {
        //writeToScreen('<span style="color: red;"> ' + timestamp + ' - Oops, Token invalid..</span>');


        document.getElementById('login-btn').style.display = 'block';
        document.getElementById('mobile-login').style.display = 'block';
      } else {


        //setCookie("api_token", document.getElementById("token_fill").value, 30)

        var balance = b.authorize.balance;
        var email = b.authorize.email;
        currency = b.authorize.currency

        console.log("----------currency------", currency)

        sessionStorage.balanceStarting = balance;
        starting_balance = balance

        writeToScreen('<span style="color: blue;"> ' + timestamp + ' - Connection Established with Binary.Com Server..</span>');

        var full_name = b.authorize.fullname;
        var virtual_acc = b.authorize.is_virtual;
        var crAccount = b.authorize.loginid;

        //save to Session Storage
        sessionStorage.fullnameSaved = full_name;
        sessionStorage.cr_accountSaved = crAccount;
        sessionStorage.virtual_accSaved = virtual_acc;
        sessionStorage.emailSaved = email;
        //save to Session Storage

        if (virtual_acc == '0') {
          sessionStorage.accountType = "RealAccount";
        } else {
          sessionStorage.accountType = "VirtualAccount";
        }

        var accountType = sessionStorage.accountType;

        //$.post("./save_data.html", { full_name:full_name,virtual_acc:virtual_acc,token:saveCurrentToken,balance_start:savebalanceStart,balance_now:savebalanceNow,profit: "0", email: saveEmail, cr_akun: crAccount });

        sessionStorage.balanceNow = Number(balance);

        var crrnmdlxxx = sessionStorage.currentModal;
        var crrnmdlxxxx = Number(crrnmdlxxx);
        var crrnmdlxxxxx = crrnmdlxxxx.toFixed(2);

        document.getElementById("displayBal").innerHTML = 'Balance: ' + sessionStorage.balanceNow + " " + currency;
        document.getElementById("accountdata").innerHTML = 'Account: ' + sessionStorage.cr_accountSaved;
        // document.getElementById("displayProfit").innerHTML = profit.toFixed(2) + " ( " + pftPercentDisply + "% ) ";

        // document.getElementById("displayBalStart").innerHTML = sessionStorage.balanceStarting;
        // document.getElementById("displayBal").innerHTML = sessionStorage.balanceNow + " ( $" + crrnmdlxxxxx + " ) ";
        // document.getElementById("modalDisplaydata").innerHTML = sessionStorage.ModalTracking;
        // document.getElementById("displayTarget").innerHTML = sessionStorage.currentTargetProfit;
        // document.getElementById("displaySl").innerHTML = sessionStorage.currentStopLoss;
        // document.getElementById("displayTradeMode").innerHTML = sessionStorage.paramTradeKind;
        // document.getElementById("displayMarket").innerHTML = sessionStorage.currentMarket;
        // document.getElementById("displayTick").innerHTML = sessionStorage.paramTickKind;


        // setCookie("api_token", document.getElementById("token").value, 30)

        document.getElementById('logout-btn').style.display = 'block';
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('mobile-login').style.display = 'none';
          

        CheckBalance();
      }
    } else if (status == "balance") {

      var balance_now = b.balance?.balance;

      var session_bal = sessionStorage.balanceNow;

      if (typeof (Storage) !== "undefined") {
        sessionStorage.balanceNow = Number(balance_now);
      }




      var selisih = balance_now - session_bal;
      var result = selisih.toFixed(2);
      tradeprofit = Math.abs(selisih - sessionStorage.modalOrder)

      // console.log(balance_now - starting_balance)
      profit = balance_now - starting_balance

      if (result > 0) {
        var timestampx = formatAMPM(new Date());
        writeToScreen('<span style="color: #4CAF50;"> ' + timestampx + ' - Profit ' + tradeprofit.toFixed(2) + ' ' + currency + '</span>');
        setprofit(balance_now)
      } else if (result == 0 && !isNaN(selisih) && (balance_now != starting_balance)) {
        setprofit(balance_now)
        var timestampx = formatAMPM(new Date());
        writeToScreen('<span style="color: #f20202;"> ' + timestampx + ' - Loss ' + tradeprofit.toFixed(2) + ' ' + currency + '</span>');
      }
    }

  };


  function setprofit(balance_now) {

    document.getElementById("displayBal").innerHTML = 'Balance: ' + balance_now + " " + currency;

    if (profit > 0)
      color = '#4CAF50';
    else if (profit == 0)
      color = 'black';
    else
      color = '#f20202';
    document.getElementById("displayProfit").innerHTML =
      '<span style="color: ' + color + ';"> Profit: ' + profit.toFixed(2) + " " + currency + '</span>';
  }

  function CheckBalance() {
    ws.send(JSON.stringify({ "balance": 1, "subscribe": 1 }));
  }


  document.getElementById("callbtn").addEventListener("click", function () {
    CaLL()
  });


  document.getElementById("fallbtn").addEventListener("click", function () {
    PuTT()
  });




  
  document.getElementById("overbtn").addEventListener("click", function () {
    Over()
  });

  document.getElementById("underbtn").addEventListener("click", function () {
    Under()
  });



  function PuTT() {

    var modalOrderx = Number(document.getElementById("stakeinp_rise").value);
    var modalOrder = modalOrderx.toFixed(2);
    sessionStorage.modalOrder = modalOrder
    var total_tick = document.getElementById("ticksint_rise").value;

    timestamp = formatAMPM(new Date());
    writeToScreen('<span style="color: #003edb;"> ' + timestamp + ' - Open fall Stake ' + modalOrder + ' ' + rnd + ' after ' + total_tick + ' ticks</span>');

    ws.send(JSON.stringify({
      "buy": "1",
      "price": modalOrder,
      "parameters": {
        "amount": modalOrder,
        "basis": "stake",
        "contract_type": "PUT",
        "currency": currency,
        "duration": total_tick,
        "duration_unit": "t",
        "symbol": rnd
      }
    }));


  }





  function CaLL() {
    var modalOrderx = Number(document.getElementById("stakeinp_rise").value);
    var modalOrder = modalOrderx.toFixed(2);
    sessionStorage.modalOrder = modalOrder
    var total_tick = document.getElementById("ticksint_rise").value;

    timestamp = formatAMPM(new Date());
    writeToScreen('<span style="color: #003edb;"> ' + timestamp + ' - Open Rise Stake ' + modalOrder + ' ' + rnd + ' after ' + total_tick + ' ticks</span>');

    ws.send(JSON.stringify({
      "buy": "1",
      "price": modalOrder,
      "parameters": {
        "amount": modalOrder,
        "basis": "stake",
        "contract_type": "CALL",
        "currency": currency,
        "duration": total_tick,
        "duration_unit": "t",
        "symbol": rnd
      }
    }));
  }

  function Over() {
    var modalOrderx = Number(document.getElementById("stakeinp_over").value);
    var modalOrder = modalOrderx.toFixed(2);
    sessionStorage.modalOrder = modalOrder
    var total_tick = document.getElementById("ticksint_over").value;
    var last_digit = document.getElementById("prediction_over").value;

    timestamp = formatAMPM(new Date());
    writeToScreen('<span style="color: #003edb;"> ' + timestamp + ' - Open DIGIT OVER Stake ' + modalOrder + ' ' + rnd + ' after ' + total_tick + ' ticks</span>');

    ws.send(JSON.stringify({
      "buy": "1",
      "price": modalOrder,
      "parameters": {
        "amount": modalOrder,
        "basis": "stake",
        "contract_type": "DIGITOVER",
        "currency": currency,
        "duration": total_tick,
        "duration_unit": "t",
        "symbol": rnd,
        "barrier": last_digit
      }
    }));
  }

  function Under() {
    var modalOrderx = Number(document.getElementById("stakeinp_over").value);
    var modalOrder = modalOrderx.toFixed(2);
    sessionStorage.modalOrder = modalOrder
    var total_tick = document.getElementById("ticksint_over").value;
    var last_digit = document.getElementById("prediction_over").value;

    timestamp = formatAMPM(new Date());
    writeToScreen('<span style="color: #003edb;"> ' + timestamp + ' - Open DIGIT UNDER Stake ' + modalOrder + ' ' + rnd + ' after ' + total_tick + ' ticks</span>');

    ws.send(JSON.stringify({
      "buy": "1",
      "price": modalOrder,
      "parameters": {
        "amount": modalOrder,
        "basis": "stake",
        "contract_type": "DIGITUNDER",
        "currency": currency,
        "duration": total_tick,
        "duration_unit": "t",
        "symbol": rnd,
        "barrier": last_digit
      }
    }));
  }


  function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
  }



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
                color:"#b5ac02",
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
      lineColor: "#ccc",
      lineThickness: 2,
      markerType: "none",
      markerSize: 7,
      markerBorderThickness: 0,
      dataPoints: dps
    }]
  });






  //////
  chart2 = new CanvasJS.Chart("chartContainerDigit", {
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
    axisY: {
      stripLines: [
        {
          startValue: -0.05,
          endValue: 0.05,
          color: "yellow",

        }
      ], valueFormatString: "#000",
      includeZero: false,
      titleFontSize: 1,
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
      markerSize: 7,
      markerBorderThickness: 0,
      dataPoints: dps2
    }]
  });

}, false);

// ----------------------------------------------------------------------------------------

const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
   navbarMenu.classList.toggle("active");
   overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
   navbarMenu
      .querySelector(".menu-dropdown.active .submenu")
      .removeAttribute("style");
   navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
   if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
      e.preventDefault();
      const menuDropdown = e.target.parentElement;

      // If Dropdown is Expanded, then Collapse It
      if (menuDropdown.classList.contains("active")) {
         collapseSubMenu();
      } else {
         // Collapse Existing Expanded Dropdown
         if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
         }

         // Expanded the New Dropdown
         menuDropdown.classList.add("active");
         const subMenu = menuDropdown.querySelector(".submenu");
         subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
   }
};

// Fixed Resize Window Function
const resizeWindow = () => {
   if (window.innerWidth > 992) {
      if (navbarMenu.classList.contains("active")) {
         toggleMenu();
      }
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
         collapseSubMenu();
      }
   }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);



function loginclick() {
  window.location.href = "../login";
}

function logiout() {
  setCookie("api_token", "", 30)
  window.location.href = "/ldp";
}


function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}