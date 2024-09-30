


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

   if (day < 0) {
    month--;
    // var lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    day += 30;
}


if (month < 0) {
    year--;
    month += 12;
}

   document.getElementById('year').innerText = year;
   document.getElementById('month').innerText = month;
   document.getElementById('day').innerText = day;
});