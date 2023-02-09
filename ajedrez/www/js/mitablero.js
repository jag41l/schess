/**
 * Created by tornado on 18/02/15.
 */
!function(){"use strict";function e(e){if("string"!=typeof e)return!1;var r=e.split("-");return 2!==r.length?!1:n(r[0])===!0&&n(r[1])===!0}function n(e){return"string"!=typeof e?!1:-1!==e.search(/^[a-h][1-8]$/)}function r(e){return"string"!=typeof e?!1:-1!==e.search(/^[bw][KQRNBP]$/)}function t(e){if("string"!=typeof e)return!1;e=e.replace(/ .+$/,"");var n=e.split("/");if(8!==n.length)return!1;for(var r=0;8>r;r++)if(""===n[r]||n[r].length>8||-1!==n[r].search(/[^kqrbnpKQRNBP1-8]/))return!1;return!0}function o(e){if("object"!=typeof e)return!1;for(var t in e)if(e.hasOwnProperty(t)===!0&&(n(t)!==!0||r(e[t])!==!0))return!1;return!0}function a(e){return e.toLowerCase()===e?"b"+e.toUpperCase():"w"+e.toUpperCase()}function i(e){var n=e.split("");return"w"===n[0]?n[1].toUpperCase():n[1].toLowerCase()}function s(e){if(t(e)!==!0)return!1;e=e.replace(/ .+$/,"");for(var n=e.split("/"),r={},o=8,i=0;8>i;i++){for(var s=n[i].split(""),p=0,f=0;f<s.length;f++)if(-1!==s[f].search(/[1-8]/)){var u=parseInt(s[f],10);p+=u}else{var d=c[p]+o;r[d]=a(s[f]),p++}o--}return r}function p(e){if(o(e)!==!0)return!1;for(var n="",r=8,t=0;8>t;t++){for(var a=0;8>a;a++){var s=c[a]+r;n+=e.hasOwnProperty(s)===!0?i(e[s]):"1"}7!==t&&(n+="/"),r--}return n=n.replace(/11111111/g,"8"),n=n.replace(/1111111/g,"7"),n=n.replace(/111111/g,"6"),n=n.replace(/11111/g,"5"),n=n.replace(/1111/g,"4"),n=n.replace(/111/g,"3"),n=n.replace(/11/g,"2")}var c="abcdefgh".split("");window.ChessBoard=window.ChessBoard||function(r,a){function i(){return"xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g,function(){var e=16*Math.random()|0;return e.toString(16)})}function f(e){return JSON.parse(JSON.stringify(e))}function u(e){var n=e.split(".");return{major:parseInt(n[0],10),minor:parseInt(n[1],10),patch:parseInt(n[2],10)}}function d(e,n){e=u(e),n=u(n);var r=1e4*e.major*1e4+1e4*e.minor+e.patch,t=1e4*n.major*1e4+1e4*n.minor+n.patch;return r>=t}function h(e,n,r){if(a.hasOwnProperty("showErrors")===!0&&a.showErrors!==!1){var t="ChessBoard Error "+e+": "+n;return"console"===a.showErrors&&"object"==typeof console&&"function"==typeof console.log?(console.log(t),void(arguments.length>=2&&console.log(r))):"alert"===a.showErrors?(r&&(t+="\n\n"+JSON.stringify(r)),void window.alert(t)):void("function"==typeof a.showErrors&&a.showErrors(e,n,r))}}function l(){if("string"==typeof r){if(""===r)return window.alert("ChessBoard Error 1001: The first argument to ChessBoard() cannot be an empty string.\n\nExiting..."),!1;var e=document.getElementById(r);if(!e)return window.alert('ChessBoard Error 1002: Element with id "'+r+'" does not exist in the DOM.\n\nExiting...'),!1;pn=$(e)}else if(pn=$(r),1!==pn.length)return window.alert("ChessBoard Error 1003: The first argument to ChessBoard() must be an ID or a single DOM node.\n\nExiting..."),!1;return window.JSON&&"function"==typeof JSON.stringify&&"function"==typeof JSON.parse?$.fn&&$.fn.jquery&&d($.fn.jquery,mn)===!0?!0:(window.alert("ChessBoard Error 1005: Unable to find a valid version of jQuery. Please include jQuery "+mn+" or higher on the page.\n\nExiting..."),!1):(window.alert("ChessBoard Error 1004: JSON does not exist. Please include a JSON polyfill.\n\nExiting..."),!1)}function v(e){return"fast"===e||"slow"===e?!0:parseInt(e,10)+""!=e+""?!1:e>=0}function g(){return("string"==typeof a||o(a)===!0)&&(a={position:a}),"black"!==a.orientation&&(a.orientation="white"),$n=a.orientation,a.showNotation!==!1&&(a.showNotation=!0),a.draggable!==!0&&(a.draggable=!1),"trash"!==a.dropOffBoard&&(a.dropOffBoard="snapback"),a.sparePieces!==!0&&(a.sparePieces=!1),a.sparePieces===!0&&(a.draggable=!0),(a.hasOwnProperty("pieceTheme")!==!0||"string"!=typeof a.pieceTheme&&"function"!=typeof a.pieceTheme)&&(a.pieceTheme="img/chesspieces/wikipedia/{piece}.png"),(a.hasOwnProperty("appearSpeed")!==!0||v(a.appearSpeed)!==!0)&&(a.appearSpeed=200),(a.hasOwnProperty("moveSpeed")!==!0||v(a.moveSpeed)!==!0)&&(a.moveSpeed=200),(a.hasOwnProperty("snapbackSpeed")!==!0||v(a.snapbackSpeed)!==!0)&&(a.snapbackSpeed=50),(a.hasOwnProperty("snapSpeed")!==!0||v(a.snapSpeed)!==!0)&&(a.snapSpeed=25),(a.hasOwnProperty("trashSpeed")!==!0||v(a.trashSpeed)!==!0)&&(a.trashSpeed=100),a.hasOwnProperty("position")===!0&&("start"===a.position?En=f(bn):t(a.position)===!0?En=s(a.position):o(a.position)===!0?En=f(a.position):h(7263,"Invalid value passed to config.position.",a.position)),!0}function w(){var e=parseInt(pn.css("width"),10);if(!e||0>=e)return 0;for(var n=e-1;n%8!==0&&n>0;)n--;return n/8}function m(){for(var e=0;e<c.length;e++)for(var n=1;8>=n;n++){var r=c[e]+n;Bn[r]=r+"-"+i()}for(var t="KQRBNP".split(""),e=0;e<t.length;e++){var o="w"+t[e],a="b"+t[e];kn[o]=o+"-"+i(),kn[a]=a+"-"+i()}}function y(){var e='<div class="'+Pn.chessboard+'">';return a.sparePieces===!0&&(e+='<div class="'+Pn.sparePieces+" "+Pn.sparePiecesTop+'"></div>'),e+='<div class="'+Pn.board+'"></div>',a.sparePieces===!0&&(e+='<div class="'+Pn.sparePieces+" "+Pn.sparePiecesBottom+'"></div>'),e+="</div>"}function b(e){"black"!==e&&(e="white");var n="",r=f(c),t=8;"black"===e&&(r.reverse(),t=1);for(var o="white",i=0;8>i;i++){n+='<div class="'+Pn.row+'">';for(var s=0;8>s;s++){var p=r[s]+t;n+='<div class="'+Pn.square+" "+Pn[o]+" square-"+p+'" style="width: '+hn+"px; height: "+hn+'px" id="'+Bn[p]+'" data-square="'+p+'">',a.showNotation===!0&&(("white"===e&&1===t||"black"===e&&8===t)&&(n+='<div class="'+Pn.notation+" "+Pn.alpha+'">'+r[s]+"</div>"),0===s&&(n+='<div class="'+Pn.notation+" "+Pn.numeric+'">'+t+"</div>")),n+="</div>",o="white"===o?"black":"white"}n+='<div class="'+Pn.clearfix+'"></div></div>',o="white"===o?"black":"white","white"===e?t--:t++}return n}function P(e){return"function"==typeof a.pieceTheme?a.pieceTheme(e):"string"==typeof a.pieceTheme?a.pieceTheme.replace(/{piece}/g,e):(h(8272,"Unable to build image source for cfg.pieceTheme."),"")}function O(e,n,r){var t='<img src="'+P(e)+'" ';return r&&"string"==typeof r&&(t+='id="'+r+'" '),t+='alt="" class="'+Pn.piece+'" data-piece="'+e+'" style="width: '+hn+"px;height: "+hn+"px;",n===!0&&(t+="display:none;"),t+='" />'}function x(e){var n=["wK","wQ","wR","wB","wN","wP"];"black"===e&&(n=["bK","bQ","bR","bB","bN","bP"]);for(var r="",t=0;t<n.length;t++)r+=O(n[t],!1,kn[n[t]]);return r}function S(e,n,r,t){var o=$("#"+Bn[e]),s=o.offset(),p=$("#"+Bn[n]),c=p.offset(),f=i();$("body").append(O(r,!0,f));var u=$("#"+f);u.css({display:"",position:"absolute",top:s.top,left:s.left}),o.find("."+Pn.piece).remove();var d=function(){p.append(O(r)),u.remove(),"function"==typeof t&&t()},h={duration:a.moveSpeed,complete:d};u.animate(c,h)}function E(e,n,r){var t=$("#"+kn[e]).offset(),o=$("#"+Bn[n]),s=o.offset(),p=i();$("body").append(O(e,!0,p));var c=$("#"+p);c.css({display:"",position:"absolute",left:t.left,top:t.top});var f=function(){o.find("."+Pn.piece).remove(),o.append(O(e)),c.remove(),"function"==typeof r&&r()},u={duration:a.moveSpeed,complete:f};c.animate(s,u)}function q(e,n,r){function t(){o++,o===e.length&&(N(),xn=!1,a.hasOwnProperty("onMoveEnd")===!0&&"function"==typeof a.onMoveEnd&&a.onMoveEnd(f(n),f(r)))}xn=!0;for(var o=0,i=0;i<e.length;i++)"clear"===e[i].type&&$("#"+Bn[e[i].square]+" ."+Pn.piece).fadeOut(a.trashSpeed,t),"add"===e[i].type&&a.sparePieces!==!0&&$("#"+Bn[e[i].square]).append(O(e[i].piece,!0)).find("."+Pn.piece).fadeIn(a.appearSpeed,t),"add"===e[i].type&&a.sparePieces===!0&&E(e[i].piece,e[i].square,t),"move"===e[i].type&&S(e[i].source,e[i].destination,e[i].piece,t)}function k(e,n){e=e.split("");var r=c.indexOf(e[0])+1,t=parseInt(e[1],10);n=n.split("");var o=c.indexOf(n[0])+1,a=parseInt(n[1],10),i=Math.abs(r-o),s=Math.abs(t-a);return i>=s?i:s}function B(e){for(var n=[],r=0;8>r;r++)for(var t=0;8>t;t++){var o=c[r]+(t+1);e!==o&&n.push({square:o,distance:k(e,o)})}n.sort(function(e,n){return e.distance-n.distance});for(var a=[],r=0;r<n.length;r++)a.push(n[r].square);return a}function C(e,n,r){for(var t=B(r),o=0;o<t.length;o++){var a=t[o];if(e.hasOwnProperty(a)===!0&&e[a]===n)return a}return!1}function T(e,n){e=f(e),n=f(n);var r=[],t={};for(var o in n)n.hasOwnProperty(o)===!0&&e.hasOwnProperty(o)===!0&&e[o]===n[o]&&(delete e[o],delete n[o]);for(var o in n)if(n.hasOwnProperty(o)===!0){var a=C(e,n[o],o);a!==!1&&(r.push({type:"move",source:a,destination:o,piece:n[o]}),delete e[a],delete n[o],t[o]=!0)}for(var o in n)n.hasOwnProperty(o)===!0&&(r.push({type:"add",square:o,piece:n[o]}),delete n[o]);for(var o in e)e.hasOwnProperty(o)===!0&&t.hasOwnProperty(o)!==!0&&(r.push({type:"clear",square:o,piece:e[o]}),delete e[o]);return r}function N(){cn.find("."+Pn.piece).remove();for(var e in En)En.hasOwnProperty(e)===!0&&$("#"+Bn[e]).append(O(En[e]))}function I(){cn.html(b($n)),N(),a.sparePieces===!0&&("white"===$n?(un.html(x("black")),dn.html(x("white"))):(un.html(x("white")),dn.html(x("black"))))}function M(e,n){e=f(e);for(var r in n)if(n.hasOwnProperty(r)===!0&&e.hasOwnProperty(r)===!0){var t=e[r];delete e[r],e[n[r]]=t}return e}function D(e){var n=f(En),r=f(e),t=p(n),o=p(r);t!==o&&(a.hasOwnProperty("onChange")===!0&&"function"==typeof a.onChange&&a.onChange(n,r),En=e)}function j(e,n){for(var r in wn)if(wn.hasOwnProperty(r)===!0){var t=wn[r];if(e>=t.left&&e<t.left+hn&&n>=t.top&&n<t.top+hn)return r}return"offboard"}function J(){wn={};for(var e in Bn)Bn.hasOwnProperty(e)===!0&&(wn[e]=$("#"+Bn[e]).offset())}function Q(){cn.find("."+Pn.square).removeClass(Pn.highlight1+" "+Pn.highlight2)}function X(){function e(){N(),fn.css("display","none"),a.hasOwnProperty("onSnapbackEnd")===!0&&"function"==typeof a.onSnapbackEnd&&a.onSnapbackEnd(ln,gn,f(En),$n)}if("spare"===gn)return void Y();Q();var n=$("#"+Bn[gn]).offset(),r={duration:a.snapbackSpeed,complete:e};fn.animate(n,r),qn=!1}function Y(){Q();var e=f(En);delete e[gn],D(e),N(),fn.fadeOut(a.trashSpeed),qn=!1}function R(e){Q();var n=f(En);delete n[gn],n[e]=ln,D(n);var r=$("#"+Bn[e]).offset(),t=function(){N(),fn.css("display","none"),a.hasOwnProperty("onSnapEnd")===!0&&"function"==typeof a.onSnapEnd&&a.onSnapEnd(gn,e,ln)},o={duration:a.snapSpeed,complete:t};fn.animate(r,o),qn=!1}function K(e,n,r,t){("function"!=typeof a.onDragStart||a.onDragStart(e,n,f(En),$n)!==!1)&&(qn=!0,ln=n,gn=e,vn="spare"===e?"offboard":e,J(),fn.attr("src",P(n)).css({display:"",position:"absolute",left:r-hn/2,top:t-hn/2}),"spare"!==e&&$("#"+Bn[e]).addClass(Pn.highlight1).find("."+Pn.piece))}function L(e,r){fn.css({left:e-hn/2,top:r-hn/2});var t=j(e,r);t!==vn&&(n(vn)===!0&&$("#"+Bn[vn]).removeClass(Pn.highlight2),n(t)===!0&&$("#"+Bn[t]).addClass(Pn.highlight2),"function"==typeof a.onDragMove&&a.onDragMove(t,vn,gn,ln,f(En),$n),vn=t)}function U(e){var r="drop";if("offboard"===e&&"snapback"===a.dropOffBoard&&(r="snapback"),"offboard"===e&&"trash"===a.dropOffBoard&&(r="trash"),a.hasOwnProperty("onDrop")===!0&&"function"==typeof a.onDrop){var t=f(En);"spare"===gn&&n(e)===!0&&(t[e]=ln),n(gn)===!0&&"offboard"===e&&delete t[gn],n(gn)===!0&&n(e)===!0&&(delete t[gn],t[e]=ln);var o=f(En),i=a.onDrop(gn,e,ln,t,o,$n);("snapback"===i||"trash"===i)&&(r=i)}"snapback"===r?X():"trash"===r?Y():"drop"===r&&R(e)}function z(){return"ontouchstart"in document.documentElement}function A(){return navigator&&navigator.userAgent&&-1!==navigator.userAgent.search(/MSIE/)}function F(e){e.preventDefault()}function W(e){if(a.draggable===!0){var r=$(this).attr("data-square");n(r)===!0&&En.hasOwnProperty(r)===!0&&K(r,En[r],e.pageX,e.pageY)}}function G(e){if(a.draggable===!0){var r=$(this).attr("data-square");n(r)===!0&&En.hasOwnProperty(r)===!0&&(e=e.originalEvent,K(r,En[r],e.changedTouches[0].pageX,e.changedTouches[0].pageY))}}function H(e){if(a.sparePieces===!0){var n=$(this).attr("data-piece");K("spare",n,e.pageX,e.pageY)}}function V(e){if(a.sparePieces===!0){var n=$(this).attr("data-piece");e=e.originalEvent,K("spare",n,e.changedTouches[0].pageX,e.changedTouches[0].pageY)}}function Z(e){qn===!0&&L(e.pageX,e.pageY)}function _(e){qn===!0&&(e.preventDefault(),L(e.originalEvent.changedTouches[0].pageX,e.originalEvent.changedTouches[0].pageY))}function en(e){if(qn===!0){var n=j(e.pageX,e.pageY);U(n)}}function nn(e){if(qn===!0){var n=j(e.originalEvent.changedTouches[0].pageX,e.originalEvent.changedTouches[0].pageY);U(n)}}function rn(e){if(qn===!1&&a.hasOwnProperty("onMouseoverSquare")===!0&&"function"==typeof a.onMouseoverSquare){var r=$(e.currentTarget).attr("data-square");if(n(r)===!0){var t=!1;En.hasOwnProperty(r)===!0&&(t=En[r]),a.onMouseoverSquare(r,t,f(En),$n)}}}function tn(e){if(qn===!1&&a.hasOwnProperty("onMouseoutSquare")===!0&&"function"==typeof a.onMouseoutSquare){var r=$(e.currentTarget).attr("data-square");if(n(r)===!0){var t=!1;En.hasOwnProperty(r)===!0&&(t=En[r]),a.onMouseoutSquare(r,t,f(En),$n)}}}function on(){$("body").on("mousedown mousemove","."+Pn.piece,F),cn.on("mousedown","."+Pn.square,W),pn.on("mousedown","."+Pn.sparePieces+" ."+Pn.piece,H),cn.on("mouseenter","."+Pn.square,rn),cn.on("mouseleave","."+Pn.square,tn),A()===!0?(document.ondragstart=function(){return!1},$("body").on("mousemove",Z),$("body").on("mouseup",en)):($(window).on("mousemove",Z),$(window).on("mouseup",en)),z()===!0&&(cn.on("touchstart","."+Pn.square,G),pn.on("touchstart","."+Pn.sparePieces+" ."+Pn.piece,V),$(window).on("touchmove",_),$(window).on("touchend",nn))}function an(){pn.html(y()),cn=pn.find("."+Pn.board),a.sparePieces===!0&&(un=pn.find("."+Pn.sparePiecesTop),dn=pn.find("."+Pn.sparePiecesBottom));var e=i();$("body").append(O("wP",!0,e)),fn=$("#"+e),Sn=parseInt(cn.css("borderLeftWidth"),10),On.resize()}function sn(){l()===!0&&g()===!0&&(m(),an(),on())}a=a||{};var pn,cn,fn,un,dn,hn,ln,vn,gn,wn,mn="1.7.0",yn="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",bn=s(yn),Pn={alpha:"alpha-d2270",black:"black-3c85d",board:"board-b72b1",chessboard:"chessboard-63f37",clearfix:"clearfix-7da63",highlight1:"highlight1-32417",highlight2:"highlight2-9c5d2",notation:"notation-322f9",numeric:"numeric-fc462",piece:"piece-417db",row:"row-5277c",sparePieces:"spare-pieces-7492f",sparePiecesBottom:"spare-pieces-bottom-ae20f",sparePiecesTop:"spare-pieces-top-4028b",square:"square-55d63",white:"white-1e1d7"},On={},xn=!1,Sn=2,$n="white",En={},qn=!1,kn={},Bn={};return On.clear=function(e){On.position({},e)},On.destroy=function(){pn.html(""),fn.remove(),pn.unbind()},On.fen=function(){return On.position("fen")},On.flip=function(){On.orientation("flip")},On.move=function(){if(0!==arguments.length){for(var n=!0,r={},t=0;t<arguments.length;t++)if(arguments[t]!==!1)if(e(arguments[t])===!0){var o=arguments[t].split("-");r[o[0]]=o[1]}else h(2826,"Invalid move passed to the move method.",arguments[t]);else n=!1;var a=M(En,r);return On.position(a,n),a}},On.orientation=function(e){return 0===arguments.length?$n:"white"===e||"black"===e?($n=e,void I()):"flip"===e?($n="white"===$n?"black":"white",void I()):void h(5482,"Invalid value passed to the orientation method.",e)},On.position=function(e,n){return 0===arguments.length?f(En):"string"==typeof e&&"fen"===e.toLowerCase()?p(En):(n!==!1&&(n=!0),"string"==typeof e&&"start"===e.toLowerCase()&&(e=f(bn)),t(e)===!0&&(e=s(e)),o(e)!==!0?void h(6482,"Invalid value passed to the position method.",e):void(n===!0?(q(T(En,e),En,e),D(e)):(D(e),N())))},On.resize=function(){hn=w(),cn.css("width",8*hn+"px"),fn.css({height:hn,width:hn}),a.sparePieces===!0&&pn.find("."+Pn.sparePieces).css("paddingLeft",hn+Sn+"px"),I()},On.start=function(e){On.position("start",e)},sn(),On},window.ChessBoard.fenToObj=s,window.ChessBoard.objToFen=p}();