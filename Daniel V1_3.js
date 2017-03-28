function nsos(milliseconds) {
setTimeout(function(){ console.log("yawn"); }, milliseconds);
}
function nextLeesinTest(){
  console.log("nextLeesinTest running.");
  window.frames[3].document.getElementById('c').submit();
  console.log("nextLeesinTest executed.");
}
function iti(){
  console.log("iti running");
  console.log("looking for start element");
  if (window.frames[3].document.getElementById("start"))
    {
	  console.log("start element was populated.");
      window.frames[3].document.getElementById('s').submit();
	  console.log("ran start element.");
	  console.log("nsosing for 5 seconds");
      nsos(5000);
	  console.log("finsihed nsosing");
    }else
      {
		console.log("start element not found. Checking for resume element.");
        if (window.frames[3].document.getElementById("resume"))
    {
	  console.log("found resume element. Clicking resume element.");
      window.frames[3].document.getElementById('r').submit();
	  console.log("resume element submitted. Now nsosing for 5 seconds.");
      nsos(5000);
	  console.log("iti script is complete. If it did not work as planned... damn you suck.");
    } 
      }
}
function damnDaniel(){
  console.log('damnDaniel Started. Checking current course status.');
  if(API_1484_11.GetValue("cmi.completion_status") == "incomplete")
    {
	  console.log("course status found incomplete. submitting complete request.");
      API_1484_11.SetValue("cmi.completion_status", "completed");
	  console.log("completed request sent. now nsosing for 5 seconds");
      nsos(5000);
	  console.log("nsos status complete. Now restarting damnDaniel");
      damnDaniel();
    }else
      {
		console.log("incomplete status was not found now looking for unknown status.");
        if(API_1484_11.GetValue("cmi.completion_status") == "unknown")
          {
			console.log("Found unknown status. nsosing for 5 seconds to wait for content to load.");
            nsos(5000);
			console.log("finished nsosing. Now restarting damnDaniel");
            damnDaniel();
          }else
            {
		      console.log("unknown wasnt found either was this script started on a completed level already? Checking for a completed status.");
              if(API_1484_11.GetValue("cmi.completion_status") == "completed")
                {
				  console.log("completed status was found. now pressing next lesson");
                  window.frames[3].document.getElementById('c').submit();
				  console.log("next lesson was clicked. now nsosing for 5 seconds.");
                  nsos(5000);
				  console.log("I woken up, now restarting damnDaniel");
                  damnDaniel();
                }
            }
      }
}
function startRun()
{
  console.log('startRun iti');
  iti();
  console.log("ran func iti");
  console.log("running damnDaniel");
  damnDaniel();
}
console.log("starting Script");
startRun();