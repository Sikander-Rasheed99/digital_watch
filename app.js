setInterval(() => {
    let date = new Date();
    let h;
    let m;
    let s;
    let day;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let session = " AM"
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

  if(h === 0){
    h = 12;
  }
  if(h > 12){
    h = h - 12;

  }
  if(h === 12) {
    session = " PM";
  }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    day = date.toLocaleDateString(undefined, options);
    document.getElementById("date").innerHTML = day;
    let time = h + " : " + m + " : " + s + session;
    document.getElementById("hours").innerHTML = time;
}, 100);