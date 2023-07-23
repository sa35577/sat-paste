var filePath = "data.txt";


function writeOut() {
  var data = document.getElementById('inp').value;
  fetch("http://localhost:1457/newText", {
    method : "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      "text" : data
    })
  })
  // .then(res => {
  //   if (res.status == 200) {
  //     console.log("Success")
  //   }
  //   else {
  //     console.log("Fail")
  //   }
  // })
}

document.addEventListener('DOMContentLoaded', function() {
  fetch("http://localhost:1457/initialText", {
    method : "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => (res.json()))
  .then((res) => {
    document.getElementById('inp').value = res.text;
    document.getElementById('adsf').innerHTML = res.text;
    //console.log(res);
  })
}, false);

