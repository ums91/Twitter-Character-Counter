// fieldname, warningname, remainingname, maxchars
function CheckFieldLength(fn,wn,rn,mc) {
  var len = fn.value.length;
  if (len > mc) {
    fn.value = fn.value.substring(0,mc);
    len = mc;
  }
  document.getElementById(wn).innerHTML = len;
  document.getElementById(rn).innerHTML = mc - len;
}

function ClearFields() {

  document.getElementById("taMessage2").value = "";
  document.getElementById("taMessage2").value = "";
}

