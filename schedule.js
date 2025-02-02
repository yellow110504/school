const today = new Date();
var day = today.getDay()
const monday = new Date(new Date().setDate(today.getDate() - day + 1)) 
const friday = new Date(new Date().setDate(monday.getDate() + 4))
var year = today.getFullYear();
var month = today.getMonth() +1;
var date = today.getDate() ;
var str_year = String(year)
var str_month = String(month).padStart(2, '0')
var str_date = String(date).padStart(2, '0')
var mon_year = monday.getFullYear();
var mon_month = monday.getMonth() +1;
var mon_date = monday.getDate() ;
var mon_str_year = String(mon_year)
var mon_str_month = String(mon_month).padStart(2, '0')
var mon_str_date = String(mon_date).padStart(2, '0')
var fri_year = friday.getFullYear();
var fri_month = friday.getMonth() +1;
var fri_date = friday.getDate() ;
var fri_str_year = String(fri_year)
var fri_str_month = String(fri_month).padStart(2, '0')
var fri_str_date = String(fri_date).padStart(2, '0')

console.log(str_year + str_month + str_date)
console.log(mon_str_year+ mon_str_month + mon_str_date)
console.log(fri_str_year+ fri_str_month + fri_str_date)

fetch("https://open.neis.go.kr/hub/misTimetable?KEY=dba1fc9266654cf5921022efad652d33&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7041169&TI_FROM_YMD=" + mon_str_year + mon_str_month + mon_str_date + "&TI_TO_YMD=" +fri_str_year + fri_str_month + fri_str_date+"&GRADE=" +grade+ "&CLASS_NM=" + clas )

  .then((response) => response.json())
  
  .then((data) => {

    // let spl = str.substring(str.indexOf('"DDISH_NM":"'), str.indexOf('","ORPLC_INFO"'));

    var i = 0
    while(i < 5){
      var v = 0
      while(v < 6){

      var str = data.misTimetable[1].row[v].ITRT_CNTNT
      var re = str.replace(/"/g, '');
      console.log(data.misTimetable[1].row[v].ALL_TI_YMD)
      document.getElementById(String(i)+String(v)).innerHTML = re
      if(i == day - 1) {
        document.getElementById(String(i)+String(v)).style.backgroundColor = 'rgb(243, 243, 243)';
          
       }
      v = v + 1
    }
      if(typeof data.misTimetable[1].row[6] !== 'undefined') {

        var str = data.misTimetable[1].row[6].ITRT_CNTNT
        var re = str.replace(/"/g, '');
        console.log(re)
        document.getElementById(String(i)+String(6)).innerHTML = re
        if(i == day - 1) {
          document.getElementById(String(i)+String(v)).style.backgroundColor = 'rgb(243, 243, 243)';
            
         }
        
     }
     i = i + 1
    }

    
}).catch((error) => {
    console.error('Error:', error)
    });