function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function nextLeesinTest(){
  window.frames[3].document.getElementById('c').submit();
}
function iti(){
  if (window.frames[3].document.getElementById("start"))
    {
      window.frames[3].document.getElementById('s').submit();
      sleep(5000);
    }else
      {
        if (window.frames[3].document.getElementById("resume"))
    {
      window.frames[3].document.getElementById('r').submit();
      sleep(5000);
    } 
      }
}
function damnDaniel(){
  console.log('damnDaniel Started');
  if(API_1484_11.GetValue("cmi.completion_status") == "incomplete")
    {
      API_1484_11.SetValue("cmi.completion_status", "completed");
      sleep(5000);
      damnDaniel();
    }else
      {
        if(API_1484_11.GetValue("cmi.completion_status") == "unknown")
          {
            sleep(5000);
            damnDaniel();
          }else
            {
              if(API_1484_11.GetValue("cmi.completion_status") == "completed")
                {
                  window.frames[3].document.getElementById('c').submit();
                  sleep(5000);
                  damnDaniel();
                }
            }
      }
}
function startRun()
{
  console.log('startRun iti');
  console.log("ran func iti");
  iti();
  console.log("running damnDaniel");
  damnDaniel();
}
console.log("starting Script");
startRun();