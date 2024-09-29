


var btn = document.getElementById('btn')

btn.addEventListener('click',function(){

    var dob =  new Date(document.getElementById('input-dob').value);
   var today = new Date();
   console.log(today);

   if(!dob || isNaN(dob)){

    alert('plz enter the valid date')
    return;
   }

   var year = today.getFullYear()- dob.getFullYear();
   var month = today.getMonth() - dob.getMonth();
   var day = today.getDate() - dob.getDate();

   document.getElementById('year').innerText = year;
   document.getElementById('month').innerText = month;
   document.getElementById('day').innerText = day;
});