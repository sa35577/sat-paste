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
}

function copyText(needCopy) {
  // Get the text field
  var copyText = document.getElementById('inp');
  var textSize = document.getElementById('inp').value.length;

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, textSize); // For mobile devices

   // Copy the text inside the text field
  if (needCopy)
    navigator.clipboard.writeText(copyText.value);
  

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

