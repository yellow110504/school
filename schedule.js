const today = new Date();
var year = today.getFullYear();
var month = today.getMonth() +1;
var date = today.getDate() ;
var str_year = String(year)
var str_month = String(month).padStart(2, '0')
var str_date = String(date).padStart(2, '0')

console.log(str_year + str_month + str_date)
function setdate(){
var set = document.getElementById('date').value;
str_year = set.substring(0, 4);
str_month = set.substring(5, 7);
str_date = set.substring(8, 10);
year = Number(str_year)
month = Number(str_month)
date = Number(str_date)
console.log(str_year+str_month+str_date);
document.querySelector("#container").innerHTML = "시간표 정보가 없습니다."
fetch("https://open.neis.go.kr/hub/misTimetable?KEY=dba1fc9266654cf5921022efad652d33&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7041169&ALL_TI_YMD=" + str_year + str_month + str_date +"&GRADE=" +grade+ "&CLASS_NM=" + clas )

.then((response) => response.json())

.then((data) => {

// let spl = str.substring(str.indexOf('"DDISH_NM":"'), str.indexOf('","ORPLC_INFO"'));

    var str = JSON.stringify(data.misTimetable[1].row[0].ITRT_CNTNT);
    var re = str.replace(/"/g, '');
    var str1 = JSON.stringify(data.misTimetable[1].row[1].ITRT_CNTNT);
    var re1 = str1.replace(/"/g, '');
    var str2 = JSON.stringify(data.misTimetable[1].row[2].ITRT_CNTNT);
    var re2 = str2.replace(/"/g, '');
    var str3 = JSON.stringify(data.misTimetable[1].row[3].ITRT_CNTNT);
    var re3 = str3.replace(/"/g, '');
    var str4 = JSON.stringify(data.misTimetable[1].row[4].ITRT_CNTNT);
    var re4 = str4.replace(/"/g, '');
    var str5 = JSON.stringify(data.misTimetable[1].row[5].ITRT_CNTNT);
    var re5 = str5.replace(/"/g, '');

    if(typeof data.misTimetable[1].row[6] !== 'undefined') {
    var str6 = JSON.stringify(data.misTimetable[1].row[6].ITRT_CNTNT);
    var re6 = str6.replace(/"/g, '');
    var rst = '1교시 : '+ re + '<br>2교시 : '+ re1 + '<br>3교시 : '+ re2 + '<br>4교시 : '+ re3 + '<br>5교시 : '+ re4 + '<br>6교시 : '+ re5 + '<br>7교시 : '+ re6
   } else {
    var rst = '1교시 : '+ re + '<br>2교시 : '+ re1 + '<br>3교시 : '+ re2 + '<br>4교시 : '+ re3 + '<br>5교시 : '+ re4 + '<br>6교시 : '+ re5
   } 
  document.querySelector("#container").innerHTML = rst
  
    console.log(re6)

}).catch((error) => {
console.error('Error:', error)
});
document.querySelector("#dat").innerHTML = String(year) + '년 ' + String(month) + '월 ' + String(date) + '일';
}
fetch("https://open.neis.go.kr/hub/misTimetable?KEY=dba1fc9266654cf5921022efad652d33&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7041169&ALL_TI_YMD=" + str_year + str_month + str_date +"&GRADE=" +grade+ "&CLASS_NM=" + clas)

  .then((response) => response.json())
  
  .then((data) => {

    // let spl = str.substring(str.indexOf('"DDISH_NM":"'), str.indexOf('","ORPLC_INFO"'));

    var str = JSON.stringify(data.misTimetable[1].row[0].ITRT_CNTNT);
    var re = str.replace(/"/g, '');
    var str1 = JSON.stringify(data.misTimetable[1].row[1].ITRT_CNTNT);
    var re1 = str1.replace(/"/g, '');
    var str2 = JSON.stringify(data.misTimetable[1].row[2].ITRT_CNTNT);
    var re2 = str2.replace(/"/g, '');
    var str3 = JSON.stringify(data.misTimetable[1].row[3].ITRT_CNTNT);
    var re3 = str3.replace(/"/g, '');
    var str4 = JSON.stringify(data.misTimetable[1].row[4].ITRT_CNTNT);
    var re4 = str4.replace(/"/g, '');
    var str5 = JSON.stringify(data.misTimetable[1].row[5].ITRT_CNTNT);
    var re5 = str5.replace(/"/g, '');

    if(typeof data.misTimetable[1].row[6] !== 'undefined') {
    var str6 = JSON.stringify(data.misTimetable[1].row[6].ITRT_CNTNT);
    var re6 = str6.replace(/"/g, '');
    var rst = '1교시 : '+ re + '<br>2교시 : '+ re1 + '<br>3교시 : '+ re2 + '<br>4교시 : '+ re3 + '<br>5교시 : '+ re4 + '<br>6교시 : '+ re5 + '<br>7교시 : '+ re6
   } else {
    var rst = '1교시 : '+ re + '<br>2교시 : '+ re1 + '<br>3교시 : '+ re2 + '<br>4교시 : '+ re3 + '<br>5교시 : '+ re4 + '<br>6교시 : '+ re5
   } 
  document.querySelector("#container").innerHTML = rst
  
    console.log(re6)

    
}).catch((error) => {
    console.error('Error:', error)
    });