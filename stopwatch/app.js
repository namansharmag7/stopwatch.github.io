window.onload = function()
{
  var sec = 00;
  var tens = 00;

  var appendtens = document.getElementById("milisec");
  var appendseconds = document.getElementById("seconds");

  var buttonstart = document.getElementById("button-start");
  var buttonstop = document.getElementById("button-stop");
  var buttonreset = document.getElementById("button-reset");

  var Interval;

buttonstart.onclick = function()
{
  clearInterval(Interval);
  Interval = setInterval(startTimer,10);
};

buttonstop.onclick = function()
{
  clearInterval(Interval);
};

buttonreset.onclick = function()
{
  
  clearInterval(Interval);
  tens = "00";
  sec = "00";
  appendtens.innerHTML = tens;
  appendseconds.innerHTML = sec;
};

  function startTimer()
  {
    tens++;

    if(tens<=9)
    {
        appendtens.innerHTML = "0" + tens;
    }
    if(tens>9)
    {
        appendtens.innerHTML = tens;
    }
    if(tens >99)
    {
        sec++;
		
        appendseconds.innerHTML = "0" + sec;
        tens = 0;
        appendtens.innerHTML = "0"+ 0;
    }

    if(sec>9)
    {
        appendseconds.innerHTML = sec;
    }
  }
}
