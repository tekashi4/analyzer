window.addEventListener("load", function () {
    var _0xa4d9x1, _0xa4d9x2, _0xa4d9x3, _0xa4d9x4, _0xa4d9x5, _0xa4d9x6, _0xa4d9x7, _0xa4d9x8, _0xa4d9x9, _0xa4d9xa, _0xa4d9xb, _0xa4d9xc, _0xa4d9xd, _0xa4d9xe, _0xa4d9xf, _0xa4d9x10, _0xa4d9x11, _0xa4d9x12, _0xa4d9x13, _0xa4d9x14, _0xa4d9x15, _0xa4d9x16, _0xa4d9x17, _0xa4d9x18, _0xa4d9x19, _0xa4d9x1a, _0xa4d9x1b;
    var _0xa4d9x1c, _0xa4d9x1d, _0xa4d9x1e, _0xa4d9x1f, _0xa4d9x20, _0xa4d9x21, _0xa4d9x22, _0xa4d9x23, _0xa4d9x24 = 0, _0xa4d9x25 = 0, _0xa4d9x26 = 0, _0xa4d9x27 = 0, _0xa4d9x28 = 0, _0xa4d9x29 = 0, _0xa4d9x2a = 0, _0xa4d9x2b = 0, _0xa4d9x2c = 0;
    var _0xa4d9x2d, _0xa4d9x2e, _0xa4d9x2f, _0xa4d9x30, _0xa4d9x31, _0xa4d9x32, _0xa4d9x33, _0xa4d9x34, _0xa4d9x35, _0xa4d9x36, _0xa4d9x37, _0xa4d9x38, _0xa4d9x39;
    var _0xa4d9x3a = [], _0xa4d9x3b = [], _0xa4d9x3c = [], _0xa4d9x3d = [], _0xa4d9x3e = [], _0xa4d9x3f = [], _0xa4d9x40 = [], _0xa4d9x41 = [], _0xa4d9x42 = [], _0xa4d9x43 = [], _0xa4d9x44 = [], _0xa4d9x45 = [], _0xa4d9x46 = [], _0xa4d9x47 = [], _0xa4d9x48 = [], _0xa4d9x49 = [];
    var _0xa4d9x4a;
    var _0xa4d9x4b = 0, _0xa4d9x4c = 0;
    var _0xa4d9x4d, _0xa4d9x4e, _0xa4d9x4f, _0xa4d9x50, _0xa4d9x51, _0xa4d9x52, _0xa4d9x53, _0xa4d9x54 = [], _0xa4d9x55 = [], _0xa4d9x56, _0xa4d9x57, _0xa4d9x58 = ["0"], _0xa4d9x59 = ["0"];
    var _0xa4d9x5a, _0xa4d9x5b, _0xa4d9x5c = [], _0xa4d9x5d = [], _0xa4d9x5e = [], _0xa4d9x5f = [], _0xa4d9x60 = [], _0xa4d9x61 = [], _0xa4d9x62 = [], _0xa4d9x63 = [], _0xa4d9x64 = [], _0xa4d9x65 = [], _0xa4d9x66 = [], _0xa4d9x67 = [], _0xa4d9x68 = [], _0xa4d9x69 = [], _0xa4d9x6a = [];
    var _0xa4d9x6b = 0, _0xa4d9x6c = 0, _0xa4d9x6d = 0, _0xa4d9x6e = 0;
    var _0xa4d9x6f, _0xa4d9x70;
    let _0xa4d9x71 = 0;
    _0xa4d9x15 = ["R_100", "R_10", "R_25", "R_50", "R_75", "RDBEAR", "RDBULL"];
    thick = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    _0xa4d9x7 = [];
    _0xa4d9x8 = [];
    _0xa4d9x9 = [];
    _0xa4d9xa = [];
    _0xa4d9xb = [];
    _0xa4d9xc = [];
    _0xa4d9xe = [];
    _0xa4d9x6 = [0];
    _0xa4d9x5 = [0];
    tic = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    _0xa4d9x10 = [0];
    _0xa4d9x19 = "none";
    _0xa4d9x1a = "#32cd32";
    _0xa4d9x14 = "RU";
    _0xa4d9x17 = 0;
    _0xa4d9x18 = 0;
    _0xa4d9x11 = 20;
    _0xa4d9x1b = document.querySelectorAll("div.menu > span");
    for (var _0xa4d9x72 = 0; _0xa4d9x72 < _0xa4d9x1b.length; _0xa4d9x72++) {
      _0xa4d9x75(_0xa4d9x1b[_0xa4d9x72]);
    }
    ;
    function _0xa4d9x73(_0xa4d9x74) {
      for (var _0xa4d9x72 = 0; _0xa4d9x72 < _0xa4d9x1b.length; _0xa4d9x72++) {
        _0xa4d9x1b[_0xa4d9x72].classList.remove("menu-active");
      }
      ;
      _0xa4d9x74.classList.add("menu-active");
    }
    function _0xa4d9x75(_0xa4d9x74) {
      _0xa4d9x74.addEventListener("click", function () {
        _0xa4d9x73(_0xa4d9x74);
      });
    }
    function _0xa4d9x76(_0xa4d9x77, _0xa4d9x78) {
      var _0xa4d9x79 = document.querySelector("#digits > span:nth-child(" + _0xa4d9x77 + ")").className;
      if (_0xa4d9x79 != "digits_moved_" + _0xa4d9x78) {
        document.querySelector("#digits > span:nth-child(" + _0xa4d9x77 + ")").classList.remove(_0xa4d9x79);
        document.querySelector("#digits > span:nth-child(" + _0xa4d9x77 + ")").classList.add("digits_moved_" + _0xa4d9x78);
      }
    }
    function _0xa4d9x7a(_0xa4d9x7b, _0xa4d9x7c) {
      var _0xa4d9x79 = document.querySelector("#headcol > span:nth-child(" + _0xa4d9x7b + ")").className;
      if (_0xa4d9x79 != "Head_moved_" + _0xa4d9x7c) {
        document.querySelector("#headcol > span:nth-child(" + _0xa4d9x7b + ")").classList.remove(_0xa4d9x79);
        document.querySelector("#headcol > span:nth-child(" + _0xa4d9x7b + ")").classList.add("Head_moved_" + _0xa4d9x7c);
      }
    }
    function _0xa4d9x7d(_0xa4d9x7e, _0xa4d9x7f) {
      var _0xa4d9x79 = document.querySelector("#placecol > span:nth-child(" + _0xa4d9x7e + ")").className;
      if (_0xa4d9x79 != "Place_moved_" + _0xa4d9x7f) {
        document.querySelector("#placecol > span:nth-child(" + _0xa4d9x7e + ")").classList.remove(_0xa4d9x79);
        document.querySelector("#placecol > span:nth-child(" + _0xa4d9x7e + ")").classList.add("Place_moved_" + _0xa4d9x7f);
      }
    }
    function _0xa4d9x80(_0xa4d9x7b, _0xa4d9x77, _0xa4d9x78) {
      var _0xa4d9x79 = document.querySelector("" + _0xa4d9x7b + " > span:nth-child(" + _0xa4d9x77 + ")").className;
      if (_0xa4d9x79 != "Arrow_Bg_" + _0xa4d9x78) {
        document.querySelector("" + _0xa4d9x7b + " > span:nth-child(" + _0xa4d9x77 + ")").classList.add("Arrow_Bg_" + _0xa4d9x78);
      }
    }
    function _0xa4d9x81(_0xa4d9x77, _0xa4d9x78) {
      var _0xa4d9x79 = document.querySelector("#SpotArrow > span:nth-child(" + _0xa4d9x77 + ")").className;
      if (_0xa4d9x79 != "Spot_Arrow_" + _0xa4d9x78) {
        document.querySelector("#SpotArrow > span:nth-child(" + _0xa4d9x77 + ")").classList.remove(_0xa4d9x79);
        document.querySelector("#SpotArrow > span:nth-child(" + _0xa4d9x77 + ")").classList.add("Spot_Arrow_" + _0xa4d9x78);
      }
    }
    function _0xa4d9x82(_0xa4d9x7b) {
      if (typeof _0xa4d9x7b.dataSeries.visible === "undefined" || _0xa4d9x7b.dataSeries.visible) {
        _0xa4d9x7b.dataSeries.visible = false;
      } else {
        _0xa4d9x7b.dataSeries.visible = true;
      }
      ;
      _0xa4d9x16.render();
    }
    function _0xa4d9x83() {
      _0xa4d9x12 = document.querySelector("body > div.menu > span.menu-active").title;
      switch (_0xa4d9x12) {
        case _0xa4d9x15[0]:
          _0xa4d9x4 = "R_100";
          _0xa4d9xf = 2;
          break;
        case _0xa4d9x15[1]:
          _0xa4d9x4 = "R_10";
          _0xa4d9xf = 3;
          break;
        case _0xa4d9x15[2]:
          _0xa4d9x4 = "R_25";
          _0xa4d9xf = 3;
          break;
        case _0xa4d9x15[3]:
          _0xa4d9x4 = "R_50";
          _0xa4d9xf = 4;
          break;
        case _0xa4d9x15[4]:
          _0xa4d9x4 = "R_75";
          _0xa4d9xf = 4;
          break;
        case _0xa4d9x15[5]:
          _0xa4d9x4 = "RDBEAR";
          _0xa4d9xf = 4;
          break;
        case _0xa4d9x15[6]:
          _0xa4d9x4 = "RDBULL";
          _0xa4d9xf = 4;
          break;
        default:
          _0xa4d9x4 = "R";
          _0xa4d9xf = 0;
          break;
      }
    }
    _0xa4d9x83();
    _0xa4d9x1 = new WebSocket("wss://ws.binaryws.com/websockets/v3?app_id=3738&l=" + _0xa4d9x14);
    _0xa4d9x1.onopen = function (_0xa4d9x84) {
      console.log(0);
      _0xa4d9x1.send(JSON.stringify({ticks: _0xa4d9x4}));
    };
    _0xa4d9x1.onmessage = function (_0xa4d9x85) {
      _0xa4d9x2 = JSON.parse(_0xa4d9x85.data);
      if (_0xa4d9x6b >= 20) {
        console.log("отправляю запрос");
        _0xa4d9x6b = 0;
        _0xa4d9x1.send(JSON.stringify({ticks: _0xa4d9x4}));
      }
      ;
      if (_0xa4d9x2.tick) {
        test_time = new Date(_0xa4d9x6e * 1e3);
        hour = test_time.getHours();
        min = test_time.getMinutes();
        sec = test_time.getSeconds();
        _0xa4d9x6b = 0;
        _0xa4d9x83();
        if (_0xa4d9x2.echo_req.ticks == _0xa4d9x4) {
          _0xa4d9x13 = _0xa4d9x2.tick.id;
          _0xa4d9x1.send(JSON.stringify({ticks_history: _0xa4d9x4, end: "latest", start: 1, style: "ticks", count: _0xa4d9x11 + 1}));
          _0xa4d9x6e = _0xa4d9x2.tick.epoch;
        } else {
          _0xa4d9x1.send(JSON.stringify({forget: _0xa4d9x13}));
          _0xa4d9x1.send(JSON.stringify({forget_all: "ticks"}));
          _0xa4d9x1.send(JSON.stringify({ticks: _0xa4d9x4}));
        }
      } else {
        if (_0xa4d9x2.history) {
          if (_0xa4d9x2.echo_req.ticks_history == _0xa4d9x4) {
            for (var _0xa4d9x72 = 0; _0xa4d9x72 < _0xa4d9x11 + 1; _0xa4d9x72++) {
              _0xa4d9x6[_0xa4d9x72] = _0xa4d9x2.history.times[_0xa4d9x11 - _0xa4d9x72];
              _0xa4d9x5[_0xa4d9x72] = _0xa4d9x2.history.prices[_0xa4d9x11 - _0xa4d9x72];
              _0xa4d9x10[_0xa4d9x72] = _0xa4d9x5[_0xa4d9x72].toFixed(_0xa4d9xf).slice(-1);
              _0xa4d9x58[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
              _0xa4d9x59[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
            }
            ;
            for (var _0xa4d9x72 = 0; _0xa4d9x72 < _0xa4d9x11 + 1; _0xa4d9x72++) {
              if (_0xa4d9x5[_0xa4d9x72] > _0xa4d9x5[_0xa4d9x72 + 1]) {
                _0xa4d9x3a[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
              } else {
                if (_0xa4d9x5[_0xa4d9x72] < _0xa4d9x5[_0xa4d9x72 + 1]) {
                  _0xa4d9x3b[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                } else {
                  if (_0xa4d9x5[_0xa4d9x72] > _0xa4d9x5[_0xa4d9x72 + 2]) {
                    _0xa4d9x3a[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                  } else {
                    if (_0xa4d9x5[_0xa4d9x72] < _0xa4d9x5[_0xa4d9x72 + 2]) {
                      _0xa4d9x3b[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                    }
                  }
                }
              }
              ;
              if ((parseFloat(_0xa4d9x3a[_0xa4d9x72]) & 1) == 0) {
                _0xa4d9x3c[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
              } else {
                if ((parseFloat(_0xa4d9x3a[_0xa4d9x72]) & 1) == 1) {
                  _0xa4d9x3f[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                } else {
                  if ((parseFloat(_0xa4d9x3b[_0xa4d9x72]) & 0) == 1) {
                    _0xa4d9x40[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                  } else {
                    if ((parseFloat(_0xa4d9x3b[_0xa4d9x72]) & 1) == 1) {
                      _0xa4d9x41[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                    }
                  }
                }
              }
              ;
              if ((parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) & 1) == 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) & 1) == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) == 0 && _0xa4d9x10[_0xa4d9x72] == parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) + 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1] >= 5)) {
                _0xa4d9x10[_0xa4d9x72 - 1] = "10";
                console.log(_0xa4d9x72, _0xa4d9x10[_0xa4d9x72]);
                console.log(_0xa4d9x72, _0xa4d9x5[_0xa4d9x72]);
              } else {
                if ((parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) & 1) == 0 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) & 1) == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) == 0 && _0xa4d9x10[_0xa4d9x72] == parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) + 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1] >= 6)) {
                  _0xa4d9x10[_0xa4d9x72 - 1] = "10";
                  console.log(_0xa4d9x72, _0xa4d9x10[_0xa4d9x72]);
                  console.log(_0xa4d9x72, _0xa4d9x5[_0xa4d9x72]);
                }
              }
              ;
              _0xa4d9x8e = 16;
              if (_0xa4d9x5[_0xa4d9x72] > _0xa4d9x5[_0xa4d9x72 + 1]) {
                var _0xa4d9x86 = "#29abe2";
              } else {
                if (_0xa4d9x5[_0xa4d9x72] < _0xa4d9x5[_0xa4d9x72 + 1]) {
                  var _0xa4d9x86 = "#c03";
                } else {}
              }
              ;
              _0xa4d9x17 = new Date(_0xa4d9x6[_0xa4d9x72] * 1e3);
              _0xa4d9x18 = parseFloat(_0xa4d9x5[_0xa4d9x72]);
              if (_0xa4d9x72 == 0) {
                _0xa4d9x19 = "circle";
              } else {
                _0xa4d9x19 = "circle";
              }
              ;
              if (_0xa4d9x18 == Math.max.apply(null, _0xa4d9x5)) {
                _0xa4d9x1a = "blue";
                _0xa4d9x19 = "circle";
                mSize = 10;
                MindLab = _0xa4d9x10[_0xa4d9x72];
                _0xa4d9x70 = _0xa4d9x10[_0xa4d9x72];
                _0xa4d9x6f = "";
              } else {
                if (_0xa4d9x18 == Math.min.apply(null, _0xa4d9x5)) {
                  _0xa4d9x1a = "red";
                  _0xa4d9x19 = "circle";
                  mSize = 10;
                  MindLab = _0xa4d9x10[_0xa4d9x72];
                  _0xa4d9x6f = _0xa4d9x10[_0xa4d9x72];
                  _0xa4d9x70 = "";
                } else {
                  if (_0xa4d9x72 == 0) {
                    _0xa4d9x1a = "#32cd32";
                    mSize = 10;
                    MindLab = _0xa4d9x10[_0xa4d9x72];
                  } else {
                    if (_0xa4d9x72 < 7) {
                      _0xa4d9x19 = "circle";
                      mSize = 3;
                      _0xa4d9x1a = "black";
                    } else {
                      for (var _0xa4d9x87 = 0; _0xa4d9x87 <= 20; _0xa4d9x87++) {
                        if (_0xa4d9x87 == _0xa4d9x72) {
                          if (_0xa4d9x87 >= 7 && _0xa4d9x5[_0xa4d9x87 - 2] < _0xa4d9x5[_0xa4d9x87 - 7]) {
                            _0xa4d9x1a = "green";
                            mSize = 5;
                            _0xa4d9x19 = "square";
                          } else {
                            if (_0xa4d9x87 >= 7 && _0xa4d9x5[_0xa4d9x87 - 2] > _0xa4d9x5[_0xa4d9x87 - 7]) {
                              _0xa4d9x1a = "red";
                              mSize = 5;
                              _0xa4d9x19 = "square";
                            } else {
                              _0xa4d9x1a = "black";
                              mSize = 5;
                              _0xa4d9x19 = "triangle";
                            }
                          }
                        }
                      }
                    }
                    ;
                    MindLab = _0xa4d9x10[_0xa4d9x72];
                  }
                }
              }
              ;
              _0xa4d9x7.push({x: 20 - _0xa4d9x72, y: _0xa4d9x18, indexLabel: MindLab, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x8e, indexLabelFontColor: _0xa4d9x86, indexLabelBackgroundColor: "white", lineColor: "grey", markerSize: mSize, markerType: _0xa4d9x19, markerColor: _0xa4d9x1a, markerBorderColor: "#ccc"});
              _0xa4d9x60.push({x: 20 - _0xa4d9x72, y: _0xa4d9x18, indexLabel: MindLab, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x8e, indexLabelFontColor: _0xa4d9x86, indexLabelBackgroundColor: "white", lineColor: "grey", markerSize: mSize, markerType: _0xa4d9x19, markerColor: _0xa4d9x1a, markerBorderColor: "#ccc"});
              _0xa4d9x5f.push({x: 20 - _0xa4d9x72, y: _0xa4d9x18, indexLabel: MindLab, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x8e, indexLabelFontColor: _0xa4d9x86, indexLabelBackgroundColor: "white", lineColor: "grey", markerSize: mSize, markerType: _0xa4d9x19, markerColor: _0xa4d9x1a, markerBorderColor: "#ccc"});
            }
            ;
            if (_0xa4d9x60.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x60.length != _0xa4d9x11 + 1) {
                _0xa4d9x60.shift();
              }
            }
            ;
            if (_0xa4d9x5f.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x5f.length != _0xa4d9x11 + 1) {
                _0xa4d9x5f.shift();
              }
            }
            ;
            if (_0xa4d9x7.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x7.length != _0xa4d9x11 + 1) {
                _0xa4d9x7.shift();
              }
            }
            ;
            _0xa4d9x16.render();
            _0xa4d9x5.reverse();
            _0xa4d9x10.reverse();
            _0xa4d9x58.reverse();
            _0xa4d9x59.reverse();
            for (var _0xa4d9x72 = 1; _0xa4d9x72 < _0xa4d9x11 + 1; _0xa4d9x72++) {
              document.querySelector("#digits > span:nth-child(" + _0xa4d9x72 + ")").innerHTML = _0xa4d9x10[_0xa4d9x72];
              yVal2 = parseFloat(_0xa4d9x5[20]);
              if (yVal2 == Math.max.apply(null, _0xa4d9x5)) {
                var _0xa4d9x88 = "up";
                mColorHead = "#29abe2";
              } else {
                if (yVal2 == Math.min.apply(null, _0xa4d9x5)) {
                  var _0xa4d9x88 = "down";
                  mColorHead = "#c03";
                } else {
                  var _0xa4d9x88 = "mid";
                  mColorHead = "#32cd32";
                }
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                if (_0xa4d9x10[_0xa4d9x72] == 9) {
                  _0xa4d9x54[_0xa4d9x72] = 1;
                  _0xa4d9x58[_0xa4d9x72] = "1";
                  _0xa4d9x55[_0xa4d9x72] = -2;
                  _0xa4d9x59[_0xa4d9x72] = "2";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 8) {
                  _0xa4d9x58[_0xa4d9x72] = "4";
                  _0xa4d9x54[_0xa4d9x72] = 4;
                  _0xa4d9x55[_0xa4d9x72] = -3;
                  _0xa4d9x59[_0xa4d9x72] = "3";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 7) {
                  _0xa4d9x58[_0xa4d9x72] = "3";
                  _0xa4d9x54[_0xa4d9x72] = 3;
                  _0xa4d9x55[_0xa4d9x72] = -4;
                  _0xa4d9x59[_0xa4d9x72] = "4";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 6) {
                  _0xa4d9x58[_0xa4d9x72] = "0";
                  _0xa4d9x54[_0xa4d9x72] = 0;
                  _0xa4d9x55[_0xa4d9x72] = -5;
                  _0xa4d9x59[_0xa4d9x72] = "5";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 5) {
                  _0xa4d9x58[_0xa4d9x72] = "5";
                  _0xa4d9x54[_0xa4d9x72] = 5;
                  _0xa4d9x55[_0xa4d9x72] = 0;
                  _0xa4d9x59[_0xa4d9x72] = "0";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 4) {
                  _0xa4d9x58[_0xa4d9x72] = "4";
                  _0xa4d9x54[_0xa4d9x72] = 4;
                  _0xa4d9x55[_0xa4d9x72] = -3;
                  _0xa4d9x59[_0xa4d9x72] = "3";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 3) {
                  _0xa4d9x58[_0xa4d9x72] = "3";
                  _0xa4d9x54[_0xa4d9x72] = 3;
                  _0xa4d9x55[_0xa4d9x72] = -4;
                  _0xa4d9x59[_0xa4d9x72] = "4";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 2) {
                  _0xa4d9x58[_0xa4d9x72] = "2";
                  _0xa4d9x54[_0xa4d9x72] = 2;
                  _0xa4d9x55[_0xa4d9x72] = -1;
                  _0xa4d9x59[_0xa4d9x72] = "1";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 1) {
                  _0xa4d9x58[_0xa4d9x72] = "1";
                  _0xa4d9x54[_0xa4d9x72] = 1;
                  _0xa4d9x55[_0xa4d9x72] = -2;
                  _0xa4d9x59[_0xa4d9x72] = "2";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 0) {
                  _0xa4d9x58[_0xa4d9x72] = "0";
                  _0xa4d9x54[_0xa4d9x72] = 0;
                  _0xa4d9x55[_0xa4d9x72] = -5;
                  _0xa4d9x59[_0xa4d9x72] = "5";
                }
              } else {
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  if (_0xa4d9x10[_0xa4d9x72] == 9) {
                    _0xa4d9x58[_0xa4d9x72] = "2";
                    _0xa4d9x54[_0xa4d9x72] = 2;
                    _0xa4d9x55[_0xa4d9x72] = -1;
                    _0xa4d9x59[_0xa4d9x72] = "1";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 8) {
                    _0xa4d9x58[_0xa4d9x72] = "3";
                    _0xa4d9x54[_0xa4d9x72] = 3;
                    _0xa4d9x55[_0xa4d9x72] = -4;
                    _0xa4d9x59[_0xa4d9x72] = "4";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 7) {
                    _0xa4d9x58[_0xa4d9x72] = "4";
                    _0xa4d9x54[_0xa4d9x72] = 4;
                    _0xa4d9x55[_0xa4d9x72] = -3;
                    _0xa4d9x59[_0xa4d9x72] = "3";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 6) {
                    _0xa4d9x58[_0xa4d9x72] = "5";
                    _0xa4d9x54[_0xa4d9x72] = 5;
                    _0xa4d9x55[_0xa4d9x72] = 0;
                    _0xa4d9x59[_0xa4d9x72] = "0";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 5) {
                    _0xa4d9x58[_0xa4d9x72] = "0";
                    _0xa4d9x54[_0xa4d9x72] = 0;
                    _0xa4d9x55[_0xa4d9x72] = -5;
                    _0xa4d9x59[_0xa4d9x72] = "5";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 4) {
                    _0xa4d9x58[_0xa4d9x72] = "3";
                    _0xa4d9x54[_0xa4d9x72] = 3;
                    _0xa4d9x55[_0xa4d9x72] = -4;
                    _0xa4d9x59[_0xa4d9x72] = "4";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 3) {
                    _0xa4d9x58[_0xa4d9x72] = "4";
                    _0xa4d9x54[_0xa4d9x72] = 4;
                    _0xa4d9x55[_0xa4d9x72] = -3;
                    _0xa4d9x59[_0xa4d9x72] = "3";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 2) {
                    _0xa4d9x58[_0xa4d9x72] = "1";
                    _0xa4d9x54[_0xa4d9x72] = 1;
                    _0xa4d9x55[_0xa4d9x72] = -2;
                    _0xa4d9x59[_0xa4d9x72] = "2";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 1) {
                    _0xa4d9x58[_0xa4d9x72] = "2";
                    _0xa4d9x54[_0xa4d9x72] = 2;
                    _0xa4d9x55[_0xa4d9x72] = -1;
                    _0xa4d9x59[_0xa4d9x72] = "1";
                  }
                  ;
                  if (_0xa4d9x10[_0xa4d9x72] == 0) {
                    _0xa4d9x58[_0xa4d9x72] = "5";
                    _0xa4d9x54[_0xa4d9x72] = 5;
                    _0xa4d9x55[_0xa4d9x72] = 0;
                    _0xa4d9x59[_0xa4d9x72] = "0";
                  }
                } else {
                  _0xa4d9x54[_0xa4d9x72] = parseFloat(tic[_0xa4d9x72 - 1]);
                  _0xa4d9x55[_0xa4d9x72] = parseFloat(tic[_0xa4d9x72 - 1]);
                  _0xa4d9x58[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                  _0xa4d9x59[_0xa4d9x72] = _0xa4d9x10[_0xa4d9x72];
                }
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                _0xa4d9x76(_0xa4d9x72, "up");
                var _0xa4d9x89 = _0xa4d9x10[_0xa4d9x72] * 1;
              } else {
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x76(_0xa4d9x72, "down");
                  var _0xa4d9x89 = _0xa4d9x10[_0xa4d9x72] * -1;
                } else {
                  if (_0xa4d9x5[_0xa4d9x72 - 1] == _0xa4d9x5[_0xa4d9x72] && _0xa4d9x72 - 1 > 0) {
                    if (document.querySelector("#digits > span:nth-child(" + (_0xa4d9x72 - 1) + ")").className == "digits_moved_up") {
                      _0xa4d9x76(_0xa4d9x72, "up");
                    } else {
                      if (document.querySelector("#digits > span:nth-child(" + (_0xa4d9x72 - 1) + ")").className == "digits_moved_down") {
                        _0xa4d9x76(_0xa4d9x72, "down");
                      }
                    }
                  }
                }
              }
              ;
              tic.shift(0);
              tic.push(_0xa4d9x89);
            }
            ;
            thick.shift(0);
            thick.push(_0xa4d9x88);
            for (var _0xa4d9x72 = 1; _0xa4d9x72 < _0xa4d9x11 + 1; _0xa4d9x72++) {
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                _0xa4d9x4a = "#29abe2";
                _0xa4d9x76(_0xa4d9x72, "up");
                mColorBarEven = "#4169E1";
                mColorBarOdd = "#8533ff";
                var _0xa4d9x8a = "#29abe2";
              } else {
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x4a = "#c03";
                  _0xa4d9x76(_0xa4d9x72, "down");
                  mColorBarEven = "#DC143C";
                  mColorBarOdd = "#CD5C5C";
                  var _0xa4d9x8a = "#c03";
                } else {
                  _0xa4d9x4a = "grey";
                }
              }
              ;
              _0xa4d9x7a(_0xa4d9x72, thick[_0xa4d9x72 - 1]);
              document.querySelector("#headcol > span:nth-child(" + _0xa4d9x72 + ")").innerHTML = tic;
              xDigit = _0xa4d9x72;
              yDigit = parseFloat(tic[_0xa4d9x72 - 1]);
              if (Math.abs(parseInt(tic[_0xa4d9x72 - 1])) != 8 || Math.abs(parseInt(tic[_0xa4d9x72 - 1])) != 9 || Math.abs(parseInt(tic[_0xa4d9x72 - 1])) != 10) {
                _0xa4d9x38 = "white";
                _0xa4d9x39 = "inside";
              }
              ;
              if (Math.abs(parseInt(tic[_0xa4d9x72 - 1])) == 8 || Math.abs(parseInt(tic[_0xa4d9x72 - 1])) == 9 || Math.abs(parseInt(tic[_0xa4d9x72 - 1])) == 10) {
                _0xa4d9x38 = "black";
                _0xa4d9x39 = "outstde";
              }
              ;
              if (tic[_0xa4d9x72 - 1] >= 0) {
                _0xa4d9x2d = "White";
                _0xa4d9x2e = _0xa4d9x8a;
                _0xa4d9x2f = "";
                _0xa4d9x30 = _0xa4d9x10[_0xa4d9x72];
                _0xa4d9x31 = parseFloat(tic[_0xa4d9x72 - 1]);
                _0xa4d9x32 = 10 - parseFloat(tic[_0xa4d9x72 - 1]);
              }
              ;
              if (tic[_0xa4d9x72 - 1] <= 0) {
                _0xa4d9x2d = _0xa4d9x8a;
                _0xa4d9x2e = "White";
                _0xa4d9x2f = _0xa4d9x10[_0xa4d9x72];
                _0xa4d9x30 = "";
                _0xa4d9x31 = 10 - Math.abs(parseFloat(tic[_0xa4d9x72 - 1]));
                _0xa4d9x32 = Math.abs(parseFloat(tic[_0xa4d9x72 - 1]));
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] - _0xa4d9x10[_0xa4d9x72] == 1 || _0xa4d9x10[_0xa4d9x72 - 1] - _0xa4d9x10[_0xa4d9x72] == -1 || _0xa4d9x10[_0xa4d9x72 + 1] - _0xa4d9x10[_0xa4d9x72] == 1 || _0xa4d9x10[_0xa4d9x72 + 1] - _0xa4d9x10[_0xa4d9x72] == -1) {
                _0xa4d9x33 = "Start";
                _0xa4d9x34 = 20;
                _0xa4d9x35 = "";
                _0xa4d9x36 = 10;
                _0xa4d9x37 = "#ffa500";
              } else {
                _0xa4d9x33 = "";
                _0xa4d9x34 = 14;
                _0xa4d9x35 = "white";
                _0xa4d9x36 = 6;
                _0xa4d9x37 = "";
              }
              ;
              xDigitEven = _0xa4d9x72;
              xDigitOdd = _0xa4d9x72;
              if (parseFloat(tic[_0xa4d9x72 - 1]) & 1) {
                _0xa4d9x25 += 1;
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x28 += 1;
                } else {
                  if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                    _0xa4d9x2a += 1;
                  }
                }
              } else {
                _0xa4d9x26 += 1;
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x27 += 1;
                } else {
                  if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                    _0xa4d9x29 += 1;
                  }
                }
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 0 || _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 1) {
                _0xa4d9x2b += 1;
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 1 || _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 0) {
                _0xa4d9x2c += 1;
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                _0xa4d9x4b += 1;
              } else {
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x4c += 1;
                } else {
                  _0xa4d9x4b += 1;
                  _0xa4d9x4c += 1;
                }
              }
              ;
              if (_0xa4d9x72 == 20) {
                _0xa4d9x22 = _0xa4d9x2b;
                _0xa4d9x23 = _0xa4d9x2c;
                _0xa4d9x24 = 1;
                _0xa4d9x1c = _0xa4d9x25;
                _0xa4d9x1d = _0xa4d9x26;
                _0xa4d9x1e = _0xa4d9x27;
                _0xa4d9x1f = _0xa4d9x28;
                _0xa4d9x20 = _0xa4d9x29;
                _0xa4d9x21 = _0xa4d9x2a;
                _0xa4d9x56 = _0xa4d9x4b;
                _0xa4d9x57 = _0xa4d9x4c;
                _0xa4d9x4b = 0;
                _0xa4d9x4c = 0;
                _0xa4d9x2b = 0;
                _0xa4d9x2c = 0;
                _0xa4d9x25 = 0;
                _0xa4d9x26 = 0;
                _0xa4d9x27 = 0;
                _0xa4d9x28 = 0;
                _0xa4d9x29 = 0;
                _0xa4d9x2a = 0;
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 0 || _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 1) {
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                  yor = parseFloat(tic[_0xa4d9x72 - 1]);
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  yor = _0xa4d9x31;
                }
                ;
                _0xa4d9x46.push({x: _0xa4d9x72, y: parseFloat(tic[_0xa4d9x72 - 1]), indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarOdd, markerBorderColor: "#ccc"});
                _0xa4d9x48.push({x: _0xa4d9x72, y: yor, indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarOdd, markerBorderColor: "#ccc"});
              }
              ;
              if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 1 || _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && (parseFloat(tic[_0xa4d9x72 - 1]) & 1) == 0) {
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                  yor = parseFloat(tic[_0xa4d9x72 - 1]);
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  yor = _0xa4d9x31;
                }
                ;
                _0xa4d9x47.push({x: _0xa4d9x72, y: parseFloat(tic[_0xa4d9x72 - 1]), indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarOdd, markerBorderColor: "#ccc"});
                _0xa4d9x49.push({x: _0xa4d9x72, y: yor, indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarOdd, markerBorderColor: "#ccc"});
              }
              ;
              if (parseFloat(tic[_0xa4d9x72 - 1]) & 1) {
                yDigitOdd = parseFloat(tic[_0xa4d9x72 - 1]);
                yDigitEven = "";
                var _0xa4d9x8b = _0xa4d9x10[_0xa4d9x72];
                _0xa4d9xc.push({x: xDigitOdd, y: yDigitOdd, indexLabel: _0xa4d9x8b, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerSize: _0xa4d9x36, markerType: "circle", markerColor: _0xa4d9x37, color: mColorBarOdd, markerBorderColor: "#ccc"});
                if (parseFloat(tic[_0xa4d9x72 - 1]) >= 6 && parseFloat(tic[_0xa4d9x72 - 1]) > 0) {
                  xDigitOdd_5x5 = parseFloat(tic[_0xa4d9x72 - 1]) - 11;
                } else {
                  if (parseFloat(tic[_0xa4d9x72 - 1]) >= 0 && parseFloat(tic[_0xa4d9x72 - 1]) < 6) {
                    xDigitOdd_5x5 = parseFloat(tic[_0xa4d9x72 - 1]);
                  } else {
                    if (parseFloat(tic[_0xa4d9x72 - 1]) <= 0 && parseFloat(tic[_0xa4d9x72 - 1]) > -6) {
                      xDigitOdd_5x5 = parseFloat(tic[_0xa4d9x72 - 1]);
                    } else {
                      if (parseFloat(tic[_0xa4d9x72 - 1]) < 0 && parseFloat(tic[_0xa4d9x72 - 1]) < -5) {
                        xDigitOdd_5x5 = 11 + parseFloat(tic[_0xa4d9x72 - 1]);
                      } else {
                        xDigitOdd_5x5 = parseFloat(tic[_0xa4d9x72 - 1]);
                      }
                    }
                  }
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 6) {
                  _0xa4d9x4d = "5";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 7) {
                  _0xa4d9x4d = "4";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 8) {
                  _0xa4d9x4d = "3";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 9) {
                  _0xa4d9x4d = "2";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] < 6) {
                  _0xa4d9x4d = _0xa4d9x10[_0xa4d9x72];
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] > 5) {
                  _0xa4d9x4f = "#c03";
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] > 5) {
                  _0xa4d9x4f = "#29abe2";
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] <= 5) {
                  _0xa4d9x4f = "#c03";
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] <= 5) {
                  _0xa4d9x4f = "#29abe2";
                }
                ;
                _0xa4d9x3d.push({x: xDigitOdd, y: xDigitOdd_5x5, indexLabel: _0xa4d9x4d, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x4f, indexLabelBackgroundColor: _0xa4d9x35, markerSize: _0xa4d9x36, markerType: "circle", markerColor: _0xa4d9x37, color: mColorBarOdd, markerBorderColor: "#ccc"});
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x44.push({x: xDigitOdd, y: yDigitOdd, indexLabel: _0xa4d9x8b, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarOdd, markerBorderColor: "#ccc"});
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x45.push({x: xDigitOdd, y: _0xa4d9x31, indexLabel: _0xa4d9x8b, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarOdd, markerBorderColor: "#ccc"});
                }
              } else {
                yDigitEven = parseFloat(tic[_0xa4d9x72 - 1]);
                yDigitOdd = "";
                var _0xa4d9x8c = _0xa4d9x10[_0xa4d9x72];
                _0xa4d9xb.push({x: xDigitEven, y: yDigitEven, indexLabel: _0xa4d9x8c, indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerSize: _0xa4d9x36, markerColor: _0xa4d9x37, color: mColorBarEven, markerBorderColor: "#ccc"});
                if (parseFloat(tic[_0xa4d9x72 - 1]) == 6) {
                  yDigitEven_5x5 = -5;
                }
                ;
                if (parseFloat(tic[_0xa4d9x72 - 1]) >= 6 && parseFloat(tic[_0xa4d9x72 - 1]) > 0) {
                  yDigitEven_5x5 = parseFloat(tic[_0xa4d9x72 - 1]) - 11;
                } else {
                  if (parseFloat(tic[_0xa4d9x72 - 1]) >= 0 && parseFloat(tic[_0xa4d9x72 - 1]) < 6) {
                    yDigitEven_5x5 = parseFloat(tic[_0xa4d9x72 - 1]);
                  } else {
                    if (parseFloat(tic[_0xa4d9x72 - 1]) <= 0 && parseFloat(tic[_0xa4d9x72 - 1]) > -6) {
                      yDigitEven_5x5 = parseFloat(tic[_0xa4d9x72 - 1]);
                    } else {
                      if (parseFloat(tic[_0xa4d9x72 - 1]) < 0 && parseFloat(tic[_0xa4d9x72 - 1]) < -5) {
                        yDigitEven_5x5 = 11 + parseFloat(tic[_0xa4d9x72 - 1]);
                      } else {
                        yDigitEven_5x5 = parseFloat(tic[_0xa4d9x72 - 1]);
                      }
                    }
                  }
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 6) {
                  _0xa4d9x4e = "5";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 7) {
                  _0xa4d9x4e = "4";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 8) {
                  _0xa4d9x4e = "3";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] == 9) {
                  _0xa4d9x4e = "2";
                }
                ;
                if (_0xa4d9x10[_0xa4d9x72] < 6) {
                  _0xa4d9x4e = _0xa4d9x10[_0xa4d9x72];
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] > 5) {
                  _0xa4d9x4f = "#c03";
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] > 5) {
                  _0xa4d9x4f = "#29abe2";
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] <= 5) {
                  _0xa4d9x4f = "#c03";
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72] <= 5) {
                  _0xa4d9x4f = "#29abe2";
                }
                ;
                _0xa4d9x3e.push({x: xDigitEven, y: yDigitEven_5x5, indexLabel: _0xa4d9x4e, indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x4f, indexLabelBackgroundColor: _0xa4d9x35, markerSize: _0xa4d9x36, markerColor: _0xa4d9x37, color: mColorBarEven, markerBorderColor: "#ccc"});
                if (_0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x43.push({x: xDigitEven, y: yDigitEven, indexLabel: _0xa4d9x8c, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarEven, markerBorderColor: "#ccc"});
                }
                ;
                if (_0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                  _0xa4d9x42.push({x: xDigitEven, y: _0xa4d9x31, indexLabel: _0xa4d9x8c, indexLabelFontWeight: "bold", indexLabelFontSize: _0xa4d9x34, indexLabelFontColor: _0xa4d9x8a, indexLabelBackgroundColor: _0xa4d9x35, markerType: "circle", color: mColorBarEven, markerBorderColor: "#ccc"});
                }
              }
              ;
              if (_0xa4d9xc.length > _0xa4d9x1c) {
                _0xa4d9xc.shift();
              }
              ;
              if (_0xa4d9xb.length > _0xa4d9x1d) {
                _0xa4d9xb.shift();
              }
              ;
              if (_0xa4d9x3e.length > _0xa4d9x1d) {
                _0xa4d9x3e.shift();
              }
              ;
              if (_0xa4d9x3d.length > _0xa4d9x1c) {
                _0xa4d9x3d.shift();
              }
              ;
              if (_0xa4d9x46.length > _0xa4d9x22) {
                _0xa4d9x46.shift();
              }
              ;
              if (_0xa4d9x47.length > _0xa4d9x23) {
                _0xa4d9x47.shift();
              }
              ;
              if (_0xa4d9x48.length > _0xa4d9x22) {
                _0xa4d9x48.shift();
              }
              ;
              if (_0xa4d9x49.length > _0xa4d9x23) {
                _0xa4d9x49.shift();
              }
              ;
              if (_0xa4d9x43.length > _0xa4d9x1e) {
                _0xa4d9x43.shift();
              }
              ;
              if (_0xa4d9x42.length > _0xa4d9x20) {
                _0xa4d9x42.shift();
              }
              ;
              if (_0xa4d9x44.length > _0xa4d9x1f) {
                _0xa4d9x44.shift();
              }
              ;
              if (_0xa4d9x45.length > _0xa4d9x21) {
                _0xa4d9x45.shift();
              }
              ;
              _0xa4d9x5a = "white";
              _0xa4d9x5b = "white";
              didgitfontCol = "white";
              _0xa4d9x50 = 5;
              _0xa4d9x51 = 5;
              _0xa4d9x52 = 5;
              _0xa4d9x53 = 5;
              if (_0xa4d9x10[_0xa4d9x72] == 2 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 9 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 3 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 8 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 4 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 7 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 5 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 6 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 5 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 0 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 7 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 8 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 7 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 4 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 2 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 9 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 3 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 8 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 4 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 7 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 5 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 6 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 5 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 0 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 7 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 8 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 7 && _0xa4d9x5[_0xa4d9x72 - 2] < _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 4 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#ffc0cb";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 2 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 9 && _0xa4d9x5[_0xa4d9x72 + 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 3 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 8 && _0xa4d9x5[_0xa4d9x72 + 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 4 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 7 && _0xa4d9x5[_0xa4d9x72 + 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 5 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 6 && _0xa4d9x5[_0xa4d9x72 + 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 5 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 0 && _0xa4d9x5[_0xa4d9x72 + 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 5 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 5 && _0xa4d9x5[_0xa4d9x72 + 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72] == 7 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72] && _0xa4d9x10[_0xa4d9x72 + 1] == 8 && _0xa4d9x5[_0xa4d9x72 + 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 2 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 9 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 3 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 8 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 4 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 7 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 5 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 6 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 5 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 0 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 5 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 5 && _0xa4d9x5[_0xa4d9x72 - 1] > _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              if (_0xa4d9x10[_0xa4d9x72 - 1] == 7 && _0xa4d9x5[_0xa4d9x72 - 2] > _0xa4d9x5[_0xa4d9x72 - 1] && _0xa4d9x10[_0xa4d9x72] == 8 && _0xa4d9x5[_0xa4d9x72 - 1] < _0xa4d9x5[_0xa4d9x72]) {
                didgitfontCol = "#e3f3ff";
              }
              ;
              var _0xa4d9x8d = "white";
              var _0xa4d9x8e = 16;
              if (parseFloat(_0xa4d9x10[_0xa4d9x72 + 2]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 || +(_0xa4d9x72 > 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 1)) || +(_0xa4d9x72 > 2 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 2]) % 2 == 1))) {
                _0xa4d9x8d = "yellow";
                pat1didgitfontCol = "yellow";
                pat1digit = _0xa4d9x10[_0xa4d9x72];
              } else {
                pat1didgitfontCol = "white";
                pat1digit = "";
              }
              ;
              if (parseFloat(_0xa4d9x10[_0xa4d9x72 + 2]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 || +(_0xa4d9x72 > 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 0)) || +(_0xa4d9x72 > 2 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 2]) % 2 == 0))) {
                _0xa4d9x8d = "green";
                pat2didgitfontCol = "green";
                pat2digit = _0xa4d9x10[_0xa4d9x72];
              } else {
                pat2didgitfontCol = "white";
                pat2digit = "";
              }
              ;
              if (parseFloat(_0xa4d9x10[_0xa4d9x72 + 2]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 || +(_0xa4d9x72 > 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 1)) || +(_0xa4d9x72 > 2 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 2]) % 2 == 1))) {
                _0xa4d9x8d = "red";
                pat3didgitfontCol = "red";
                pat3digit = _0xa4d9x10[_0xa4d9x72];
              } else {
                pat3didgitfontCol = "white";
                pat3digit = "";
              }
              ;
              if (parseFloat(_0xa4d9x10[_0xa4d9x72 + 2]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 || +(_0xa4d9x72 > 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 0)) || +(_0xa4d9x72 > 2 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 2]) % 2 == 0))) {
                _0xa4d9x8d = "blue";
                pat4didgitfontCol = "blue";
                pat4digit = _0xa4d9x10[_0xa4d9x72];
              } else {
                pat4didgitfontCol = "white";
                pat4digit = "";
              }
              ;
              if (parseFloat(_0xa4d9x10[_0xa4d9x72 + 2]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 || +(_0xa4d9x72 > 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 0)) || +(_0xa4d9x72 > 2 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 2]) % 2 == 0))) {
                _0xa4d9x8d = "grey";
                pat5didgitfontCol = "grey";
                pat5digit = _0xa4d9x10[_0xa4d9x72];
              } else {
                pat5didgitfontCol = "white";
                pat5digit = "";
              }
              ;
              if (parseFloat(_0xa4d9x10[_0xa4d9x72 + 2]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 || +(_0xa4d9x72 > 1 && (parseFloat(_0xa4d9x10[_0xa4d9x72 + 1]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 1)) || +(_0xa4d9x72 > 2 && (parseFloat(_0xa4d9x10[_0xa4d9x72]) % 2 == 1 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 1]) % 2 == 0 && parseFloat(_0xa4d9x10[_0xa4d9x72 - 2]) % 2 == 1))) {
                _0xa4d9x8d = "Olive";
                pat6didgitfontCol = "Olive";
                pat6digit = _0xa4d9x10[_0xa4d9x72];
              } else {
                pat6didgitfontCol = "white";
                pat6digit = "";
              }
              ;
              if (parseFloat(_0xa4d9x58[_0xa4d9x72 - 1]) + 1 == _0xa4d9x58[_0xa4d9x72] && parseFloat(_0xa4d9x59[_0xa4d9x72 - 1]) - 1 == _0xa4d9x59[_0xa4d9x72] || +(parseFloat(_0xa4d9x58[_0xa4d9x72 - 1]) - 1 == _0xa4d9x58[_0xa4d9x72] && parseFloat(_0xa4d9x59[_0xa4d9x72 - 1]) + 1 == _0xa4d9x59[_0xa4d9x72]) || +(parseFloat(_0xa4d9x58[_0xa4d9x72 + 1]) + 1 == _0xa4d9x58[_0xa4d9x72] && parseFloat(_0xa4d9x59[_0xa4d9x72 + 1]) - 1 == _0xa4d9x59[_0xa4d9x72]) || +(parseFloat(_0xa4d9x58[_0xa4d9x72 + 1]) - 1 == _0xa4d9x58[_0xa4d9x72] && parseFloat(_0xa4d9x59[_0xa4d9x72 + 1]) + 1 == _0xa4d9x59[_0xa4d9x72])) {
                _0xa4d9x5a = "#ebebeb";
                _0xa4d9x5b = "#ebebeb";
              } else {
                if (parseFloat(_0xa4d9x58[_0xa4d9x72 - 1]) == 0 && parseFloat(_0xa4d9x58[_0xa4d9x72]) == 5 || +(parseFloat(_0xa4d9x58[_0xa4d9x72 - 1]) == 5 && parseFloat(_0xa4d9x58[_0xa4d9x72]) == 0) || +(parseFloat(_0xa4d9x58[_0xa4d9x72 + 1]) == 0 && parseFloat(_0xa4d9x58[_0xa4d9x72]) == 5) || +(parseFloat(_0xa4d9x58[_0xa4d9x72 + 1]) == 5 && parseFloat(_0xa4d9x58[_0xa4d9x72]) == 0)) {
                  _0xa4d9x5a = "#faf0e6";
                  _0xa4d9x5b = "#faf0e6";
                } else {
                  _0xa4d9x5a = "white";
                  _0xa4d9x5b = "white";
                }
              }
              ;
              _0xa4d9x61.push({x: _0xa4d9x72, y: _0xa4d9x50, indexLabel: pat1digit, indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x8a, indexLabelPlacement: "inside", color: pat1didgitfontCol});
              _0xa4d9x62.push({x: _0xa4d9x72, y: _0xa4d9x50, indexLabel: pat2digit, indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: "#29abe2", indexLabelPlacement: "inside", color: pat2didgitfontCol});
              _0xa4d9x63.push({x: _0xa4d9x72, y: _0xa4d9x50, indexLabel: pat3digit, indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: "#c03", indexLabelPlacement: "inside", color: pat3didgitfontCol});
              _0xa4d9x64.push({x: _0xa4d9x72, y: _0xa4d9x50, indexLabel: pat4digit, indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x8a, indexLabelPlacement: "inside", color: pat4didgitfontCol});
              _0xa4d9x65.push({x: _0xa4d9x72, y: _0xa4d9x50, indexLabel: pat5digit, indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x8a, indexLabelPlacement: "inside", color: pat5didgitfontCol});
              _0xa4d9x66.push({x: _0xa4d9x72, y: _0xa4d9x50, indexLabel: pat6digit, indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x8a, indexLabelPlacement: "inside", color: pat6didgitfontCol});
              _0xa4d9x5c.push({x: _0xa4d9x72, y: _0xa4d9x51, indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x8a, indexLabelPlacement: "outstde", color: didgitfontCol});
              _0xa4d9x5d.push({x: _0xa4d9x72, y: _0xa4d9x52, indexLabel: _0xa4d9x58[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: "#29abe2", indexLabelPlacement: "inside", color: _0xa4d9x5a});
              _0xa4d9x5e.push({x: _0xa4d9x72, y: _0xa4d9x53, indexLabel: _0xa4d9x59[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: "#c03", indexLabelPlacement: "inside", color: _0xa4d9x5b});
              _0xa4d9x67.push({x: _0xa4d9x72, y: _0xa4d9x54[_0xa4d9x72], indexLabel: _0xa4d9x58[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: "#29abe2", indexLabelPlacement: "inside", color: "white"});
              _0xa4d9x68.push({x: _0xa4d9x72, y: _0xa4d9x55[_0xa4d9x72], indexLabel: _0xa4d9x59[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: "#c03", indexLabelPlacement: "inside", color: "white"});
              _0xa4d9x8.push({x: xDigit, y: yDigit, indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, markerType: "circle", markerColor: _0xa4d9x8a, markerBorderColor: "#ccc"});
              _0xa4d9x9.push({x: xDigit, y: parseFloat(_0xa4d9x10[_0xa4d9x72]), indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x4a, indexLabelPlacement: "inside", color: "white", markerBorderColor: "#ccc"});
              _0xa4d9xa.push({x: xDigit, y: parseFloat(_0xa4d9x10[_0xa4d9x72]), indexLabel: _0xa4d9x10[_0xa4d9x72], indexLabelFontWeight: "bold", indexLabelFontSize: 18, indexLabelFontColor: _0xa4d9x4a, indexLabelPlacement: "inside", color: "white", markerBorderColor: "#ccc"});
            }
            ;
            if (_0xa4d9x8.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x8.length != _0xa4d9x11) {
                _0xa4d9x8.shift();
              }
            }
            ;
            if (_0xa4d9x9.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x9.length != _0xa4d9x11) {
                _0xa4d9x9.shift();
              }
            }
            ;
            if (_0xa4d9xa.length > _0xa4d9x11 + 1) {
              while (_0xa4d9xa.length != _0xa4d9x11) {
                _0xa4d9xa.shift();
              }
            }
            ;
            if (_0xa4d9x61.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x61.length != _0xa4d9x11) {
                _0xa4d9x61.shift();
              }
            }
            ;
            if (_0xa4d9x62.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x62.length != _0xa4d9x11) {
                _0xa4d9x62.shift();
              }
            }
            ;
            if (_0xa4d9x63.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x63.length != _0xa4d9x11) {
                _0xa4d9x63.shift();
              }
            }
            ;
            if (_0xa4d9x64.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x64.length != _0xa4d9x11) {
                _0xa4d9x64.shift();
              }
            }
            ;
            if (_0xa4d9x65.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x65.length != _0xa4d9x11) {
                _0xa4d9x65.shift();
              }
            }
            ;
            if (_0xa4d9x66.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x66.length != _0xa4d9x11) {
                _0xa4d9x66.shift();
              }
            }
            ;
            if (_0xa4d9x5c.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x5c.length != _0xa4d9x11) {
                _0xa4d9x5c.shift();
              }
            }
            ;
            if (_0xa4d9x5d.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x5d.length != _0xa4d9x11) {
                _0xa4d9x5d.shift();
              }
            }
            ;
            if (_0xa4d9x5e.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x5e.length != _0xa4d9x11) {
                _0xa4d9x5e.shift();
              }
            }
            ;
            if (_0xa4d9x67.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x67.length != _0xa4d9x11) {
                _0xa4d9x67.shift();
              }
            }
            ;
            if (_0xa4d9x68.length > _0xa4d9x11 + 1) {
              while (_0xa4d9x68.length != _0xa4d9x11) {
                _0xa4d9x68.shift();
              }
            }
            ;
            chart_Odd_Even.render();
            chart_Odd_Even_5x5.render();
            chartDigit.render();
            chartSZPR.render();
            chartEven.render();
            chartTapeBlue.render();
            chartPattern1.render();
            chartPattern2.render();
            chartPattern3.render();
            chartPattern4.render();
            chartPattern5.render();
            chartPattern6.render();
            chartDigitGraphBlue.render();
            chartDigitBlueBin.render();
            chartDigitRedBin.render();
            tic1 = tic[19];
            tic2 = tic[18];
            tic3 = tic[17];
            tic4 = tic[16];
            tic5 = tic[15];
            tic6 = tic[14];
            var _0xa4d9x8f = thick[19];
            var _0xa4d9x90 = thick[18];
            var _0xa4d9x91 = thick[17];
            var _0xa4d9x92 = thick[16];
            var _0xa4d9x93 = thick[15];
            var _0xa4d9x94 = thick[14];
            if (_0xa4d9xd == 1 && _0xa4d9x71 < 6) {
              _0xa4d9x71++;
            }
            ;
            if (_0xa4d9x10[19] - _0xa4d9x10[20] == 1 || _0xa4d9x10[19] - _0xa4d9x10[20] == -1) {
              document.querySelector("#arrow_up > span:nth-child(1)").innerHTML = "&#241";
              _0xa4d9x80("#arrow_up", 1, "Start");
              document.querySelector("#arrow_down > span:nth-child(1)").innerHTML = "&#242";
              _0xa4d9x80("#arrow_down", 1, "Start");
              _0xa4d9x71 = 0;
              _0xa4d9xd = 1;
            }
            ;
            if (_0xa4d9x71 == 1) {
              document.querySelector("#arrow_up > span:nth-child(1)").innerHTML = "&#241";
              _0xa4d9x80("#arrow_up", 1, "Wait");
              document.querySelector("#arrow_down > span:nth-child(1)").innerHTML = "&#242";
              _0xa4d9x80("#arrow_down", 1, "Wait");
            }
            ;
            if (_0xa4d9x71 == 1) {
              document.querySelector("#arrow_up > span:nth-child(1)").classList.remove("Arrow_Bg_Start");
              document.querySelector("#arrow_down > span:nth-child(1)").classList.remove("Arrow_Bg_Start");
            }
            ;
            if (_0xa4d9x71 == 5) {
              document.querySelector("#arrow_up > span:nth-child(1)").classList.remove("Arrow_Bg_Wait");
              document.querySelector("#arrow_down > span:nth-child(1)").classList.remove("Arrow_Bg_Wait");
              _0xa4d9x71 = 0;
              _0xa4d9xd = 0;
            }
          }
        } else {
          console.log("время2: ", hour, min, sec);
          _0xa4d9x6b += 1;
          console.log("notTik", _0xa4d9x6b);
        }
      }
    };
    _0xa4d9x16 = new CanvasJS.Chart("chartContainer", {animationEnabled: false, theme: "light2", title: {fontColor: "red", text: "Tekashi", fontSize: 10}, subtitles: [{text: "Take the risk or lose the chance.", fontColor: "green"}], toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, maximum: 20.5, minimum: 0.7, interval: 1, labelFontSize: 10, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1}, axisY: {includeZero: false, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1}, data: [{type: "line", lineThickness: 2, markerType: "triangle", markerColor: "#6B8E23", markerSize: 20, dataPoints: _0xa4d9x7}, {type: "line", lineThickness: 2, markerType: "triangle", markerColor: "#6B8E23", markerSize: 20, dataPoints: _0xa4d9x70}, {type: "line", lineThickness: 2, markerType: "triangle", markerColor: "#6B8E23", markerSize: 20, dataPoints: _0xa4d9x6f}]});
    chart_Odd_Even = new CanvasJS.Chart("chartContainerAxisCord", {animationEnabled: false, theme: "light2", toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, labelFontSize: 10, interval: 1, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0.5}, axisY: {stripLines: [{startValue: 0, endValue: 12, color: "#c7fcec"}, {startValue: 0, endValue: -12, color: "#fff0f5"}], valueFormatString: "#000", includeZero: false, interval: 1, maximum: 12.5, minimum: -12.5, labelFontSize: 10, gridThickness: 1, gridDashType: "dash"}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "line", lineThickness: 1, lineDashType: "dash", showInLegend: true, name: "Even Чёт", markerType: "circle", markerSize: 5, color: "#F08080", dataPoints: _0xa4d9xb}, {type: "line", lineThickness: 1, showInLegend: true, name: "Odd Нечет", lineDashType: "dash", markerType: "circle", markerSize: 5, dataPoints: _0xa4d9xc}]});
    chart_Odd_Even_5x5 = new CanvasJS.Chart("chartContainerAxis5x5", {animationEnabled: false, theme: "light2", toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, labelFontSize: 10, interval: 1, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0.5}, axisY: {stripLines: [{startValue: 0, endValue: 12, color: "#c7fcec"}, {startValue: 0, endValue: -12, color: "#fff0f5"}], valueFormatString: "#000", includeZero: false, interval: 1, maximum: 6.5, minimum: -6.5, labelFontSize: 10, gridThickness: 1, gridDashType: "dash"}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "line", lineThickness: 1, lineDashType: "dash", showInLegend: true, name: "Even Чёт", markerType: "circle", markerSize: 5, color: "#F08080", dataPoints: _0xa4d9x3e}, {type: "line", lineThickness: 1, showInLegend: true, name: "Odd Нечет", lineDashType: "dash", markerType: "circle", markerSize: 5, dataPoints: _0xa4d9x3d}]});
    chartDigit = new CanvasJS.Chart("chartContainerDigit", {theme: "light2", animationEnabled: false, toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, labelFontSize: 10, interval: 1, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0.5}, axisY: {stripLines: [{startValue: 0, endValue: 12, color: "#c7fcec"}, {startValue: 0, endValue: -12, color: "#fff0f5"}], valueFormatString: "#000", includeZero: false, interval: 1, maximum: 11, minimum: -0.5, labelFontSize: 10, gridThickness: 1, gridDashType: "dash"}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "line", color: "black", lineThickness: 1, lineDashType: "dash", showInLegend: true, name: "Чс и Нк black", markerType: "circle", markerColor: "yellow", markerSize: 12, dataPoints: _0xa4d9x48}, {type: "line", color: "green", lineThickness: 1, showInLegend: true, name: "Нс Чк green", lineDashType: "dash", markerType: "circle", markerColor: "green", markerSize: 12, dataPoints: _0xa4d9x49}]});
    chartSZPR = new CanvasJS.Chart("chartContainerSZPR", {theme: "light2", animationEnabled: false, toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, labelFontSize: 10, interval: 1, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0.5}, axisY: {stripLines: [{startValue: 0, endValue: 12, color: "#c7fcec"}, {startValue: 0, endValue: -12, color: "#fff0f5"}], valueFormatString: "#000", includeZero: false, interval: 1, maximum: 12.5, minimum: -12.5, labelFontSize: 10, gridThickness: 1, gridDashType: "dash"}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "line", color: "black", lineThickness: 0.6, showInLegend: true, name: "Чс и Нк black", markerType: "circle", markerColor: "yellow", markerSize: 12, dataPoints: _0xa4d9x46}, {type: "line", color: "green", lineThickness: 0.6, showInLegend: true, name: "Нс Чк green", markerType: "circle", markerColor: "green", markerSize: 12, dataPoints: _0xa4d9x47}, {type: "line", lineDashType: "dash", showInLegend: true, lineThickness: 1, name: "Even Чёт", markerType: "circle", markerSize: 5, color: "#F08080", dataPoints: _0xa4d9xb}, {type: "line", showInLegend: true, name: "Odd Нечет", lineThickness: 1, lineDashType: "dash", markerType: "circle", markerSize: 5, dataPoints: _0xa4d9xc}]});
    chartEven = new CanvasJS.Chart("chartContainerDigitEven", {animationEnabled: false, theme: "light2", toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, labelFontSize: 10, interval: 1, gridThickness: 1, gridDashType: "dash", tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0.5}, axisY: {stripLines: [{startValue: 0, endValue: 12, color: "#c7fcec"}, {startValue: 0, endValue: -12, color: "#fff0f5"}], valueFormatString: "#000", includeZero: false, interval: 1, maximum: 11, minimum: -0.5, labelFontSize: 10, gridThickness: 1, gridDashType: "dash"}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "line", color: "black", lineThickness: 1, lineDashType: "dash", showInLegend: true, name: "ЧС чёрный пунктир", markerType: "circle", markerColor: "yellow", markerSize: 12, dataPoints: _0xa4d9x43}, {type: "line", color: "black", lineThickness: 1, showInLegend: true, name: "НК чёрная линия", markerType: "circle", markerColor: "yellow", markerSize: 12, dataPoints: _0xa4d9x45}, {type: "line", color: "Chocolate", lineThickness: 1, showInLegend: true, name: "НС Chocolate линия", markerType: "circle", markerColor: "green", markerSize: 12, dataPoints: _0xa4d9x44}, {type: "line", color: "Chocolate", lineThickness: 1, lineDashType: "dash", showInLegend: true, name: "ЧК Chocolate пунктир", markerType: "circle", markerColor: "green", markerSize: 12, dataPoints: _0xa4d9x42}]});
    chartTapeBlue = new CanvasJS.Chart("chartContainerDigitTapeBlue", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {valueFormatString: "#000", includeZero: false, interval: 1, labelFontSize: 0, gridThickness: 0, tickLength: 0}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x5e}, {type: "stackedColumn100", dataPoints: _0xa4d9x5d}, {type: "stackedColumn100", dataPoints: _0xa4d9x5c}]});
    chartPattern1 = new CanvasJS.Chart("chartPattern1", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {title: "ЧЧН", labelFontSize: 0, gridThickness: 0, tickLength: 0, lineThickness: 0}, legend: {fontSize: 15, verticalAlign: "center", horizontalAlign: "left"}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x61}]});
    chartPattern2 = new CanvasJS.Chart("chartPattern2", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {title: "ННЧ", labelFontSize: 0, gridThickness: 0, tickLength: 0, lineThickness: 0}, legend: {fontSize: 15, verticalAlign: "center", horizontalAlign: "left"}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x62}]});
    chartPattern3 = new CanvasJS.Chart("chartPattern3", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {title: "ЧНН", labelFontSize: 0, gridThickness: 0, tickLength: 0, lineThickness: 0}, legend: {fontSize: 15, verticalAlign: "center", horizontalAlign: "left"}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x63}]});
    chartPattern4 = new CanvasJS.Chart("chartPattern4", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {title: "НЧЧ", labelFontSize: 0, gridThickness: 0, tickLength: 0, lineThickness: 0}, legend: {fontSize: 15, verticalAlign: "center", horizontalAlign: "left"}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x64}]});
    chartPattern5 = new CanvasJS.Chart("chartPattern5", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {title: "ЧНЧ", labelFontSize: 0, gridThickness: 0, tickLength: 0, lineThickness: 0}, legend: {fontSize: 15, verticalAlign: "center", horizontalAlign: "left"}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x65}]});
    chartPattern6 = new CanvasJS.Chart("chartPattern6", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {title: "НЧН", labelFontSize: 0, gridThickness: 0, tickLength: 0, lineThickness: 0}, legend: {fontSize: 15, verticalAlign: "center", horizontalAlign: "left"}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x66}]});
    chartDigitGraphBlue = new CanvasJS.Chart("chartContainerDigitGraphBlue", {theme: "light2", animationEnabled: false, title: {fontColor: "blue", text: "Esher Analyzer", fontSize: 10}, subtitles: [{text: "Esher Analyzer", fontColor: "red", fontSize: 10}], toolTip: {enabled: true, animationEnabled: true, borderColor: "#ccc", borderThickness: 1, fontColor: "#000", content: "{y}"}, axisX: {includeZero: false, labelFontSize: 10, interval: 1, gridThickness: 0, gridDashType: "dash", tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0.5}, axisY: {stripLines: [{}], valueFormatString: "#000", includeZero: false, interval: 1, maximum: 7, minimum: -7, labelFontSize: 10, gridThickness: 1, gridDashType: "dash"}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "line", color: "black", lineThickness: 1, lineDashType: "dot", name: "Синие и красные преобразование в синие", markerType: "none", showInLegend: true, dataPoints: _0xa4d9x67}, {type: "line", color: "black", lineThickness: 1, name: "Красные и синие преобразование в красные", lineDashType: "dot", markerType: "circle", showInLegend: true, dataPoints: _0xa4d9x68}]});
    chartDigitBlueBin = new CanvasJS.Chart("chartContainerDigitBlueBin", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {valueFormatString: "#000", includeZero: false, maximum: 1, minimum: 0, labelFontSize: 0, gridThickness: 0}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9xa}]});
    chartDigitRedBin = new CanvasJS.Chart("chartContainerDigitRedBin", {theme: "light2", toolTip: {enabled: true, animationEnabled: true}, axisX: {includeZero: false, labelFontSize: 1, interval: 1, gridThickness: 0, tickLength: 0, lineThickness: 1, maximum: 20.5, minimum: 0}, axisY: {valueFormatString: "#000", includeZero: false, maximum: 1, minimum: 0, labelFontSize: 0, gridThickness: 0}, legend: {cursor: "pointer", verticalAlign: "bottom", horizontalAlign: "left", dockInsidePlotArea: true, itemclick: _0xa4d9x82}, data: [{type: "stackedColumn100", dataPoints: _0xa4d9x9}]});
  }, false);
  