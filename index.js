function writeOut() {
  var data = document.getElementById('inp').value;
  fetch("https://csclub.uwaterloo.ca/~s97arora/sat-paste/newText", {
    method : "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      "text" : data
    })
  })
}

function selectText(needCopy) {
  var copyText = document.getElementById('inp');
  var textSize = document.getElementById('inp').value.length;

  copyText.select(); 
  copyText.setSelectionRange(0, textSize);

  if (needCopy)
    navigator.clipboard.writeText(copyText.value);

}

document.addEventListener('DOMContentLoaded', function() {
  fetch("https://csclub.uwaterloo.ca/~s97arora/sat-paste/initialText", {
    method : "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then((res) => (res.json()))
  .then((res) => {
    document.getElementById('inp').value = res.text;
    //console.log(res.text);
  })
}, false);

