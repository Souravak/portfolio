var $ = function(id) {
    return document.getElementById(id);
  };
  var inc = 0;
  var out = 0;
  var str = " It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.";
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
  var t;
  
  var anim = function() {
    inc++;
    if (inc % 4 === 0 && out < str.length) {
      $('anim').appendChild(document.createTextNode(str[out]));
      out++;
    } 
    else if (out >= str.length) {
      $('shuffle').innerHTML = '';
      removeInterval(t);
    }
    $('shuffle').innerHTML =
      chars[Math.floor(Math.random() * chars.length)];
  };
  
  
  t = setInterval(anim, 20);
  $('anim').innerHTML = '';