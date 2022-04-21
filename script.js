{function myFun1(){
    var d1=document.getElementById("detail1");
        if (d1.style.display !== "none") {
          d1.style.display = "none";
        } else {
          d1.style.display = "block";
        }
        d1.classList.add("animate");
}}
{function myFun2(){
    var d2=document.getElementById("detail2");
        if (d2.style.display !== "none") {
          d2.style.display = "none";
        } else {
          d2.style.display = "block";
        }
        d2.classList.add("animate");
}}
{
  function myFun3(){
  var d3=document.getElementById("detail3");
      if (d3.style.display !== "none") {
        d3.style.display = "none";
      } else {
        d3.style.display = "block";
      }
      d3.classList.add("animate");
}}

setTimeout("location.reload(true);", 15000);

async function fetchText() {
  let response = await fetch('https://api.thingspeak.com/channels/1707490/feeds.json?results=2');

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
      let data = await response.text();
      let jsdata=JSON.parse(data);
      let weather=document.getElementById('tem');
      weather.innerHTML=jsdata.feeds[1].field1;
      let pre=document.getElementById('pre');
      let pred=jsdata.feeds[1].field2;
      pre.innerHTML=pred;
      let alt=document.getElementById('alt');
      let ad=jsdata.feeds[1].field3;
      alt.innerHTML=ad;
      let ud=jsdata.feeds[1].created_at;
      let time=document.getElementById('time');
      time.innerHTML='Updated at: '+ ud;
      var date = new Date;
      var hour = date.getHours();
      if(hour>=19||hour<=6)
      document.getElementById("ayush").src="moon.png";

  }
}

fetchText();

