var firstItem = document.getElementById('one');
var showTextContent = firstItem.textContent;
var showInnerText = firstItem.innerText;

var msg = '<p>Textcontent: ' + showTextContent + '</p>';
    msg += '<p>innerText: ' + showInterText + '</p>';

 var el = document.getElementById('scriptResults');
 el.innerText = msg;

 firstItem.textContent = 'sourdough bread';
 

