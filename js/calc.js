var tr = document.getElementsByTagName("tr");
var output = document.querySelector("p"); 
var button = document.querySelector(".button-calc");
button.onclick = function(){    
    var summ = 0;
  output.innerHTML = "";
    for (var i=0; i<tr.length; i++){
        var inputfill = tr[i].getElementsByTagName("td")[4].querySelector("input");    
    if ( inputfill === null) {
      console.log('error');
    } else {
        var name  = tr[i].getElementsByTagName("td")[1].innerText;
        var count = tr[i].getElementsByTagName("td")[2].querySelector("input").value;
      var price = tr[i].getElementsByTagName("td")[3].innerText;      
      summ = summ + price*count;
      output.innerHTML += `Выбрана услуга ${name}`;
    }
  }
  output.innerHTML += "\nОбщая стоимость: "+summ+"р";
  console.log(output.innerHTML);
}