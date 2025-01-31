const today = new Date();
var year = today.getFullYear();
var month = today.getMonth() +1;
if(month == 1){
    var day = new Date(String(year)+'-01-01').getDay()
    var start = String(year)+'0101'
    var end = String(year)+'0131'
    var endday = 31 + new Date(String(year)+'-01-01').getDay()
}
if(month == 2){
    var day = new Date(String(year)+'-02-01').getDay()
    var start = String(year)+'0201'
    var end = String(year)+'0228'
    var endday = 28 + new Date(String(year)+'-02-01').getDay()
}
if(month == 3){
    var day = new Date(String(year)+'-03-01').getDay()
    var start = String(year)+'0301'
    var end = String(year)+'0331'
    var endday = 31 + new Date(String(year)+'-03-01').getDay()
}
if(month == 4){
    var day = new Date(String(year)+'-04-01').getDay()
    var start = String(year)+'0401'
    var end = String(year)+'0430'
    var endday = 30 + new Date(String(year)+'-04-01').getDay()
}
if(month == 5){
    var day = new Date(String(year)+'-05-01').getDay()
    var start = String(year)+'0501'
    var end = String(year)+'0531'
    var endday = 31 + new Date(String(year)+'-05-01').getDay()
}
if(month == 6){
    var day = new Date(String(year)+'-06-01').getDay()
    var start = String(year)+'0601'
    var end = String(year)+'0630'
    var endday = 30 + new Date(String(year)+'-06-01').getDay()
}
if(month == 7){
    var day = new Date(String(year)+'-07-01').getDay()
    var start = String(year)+'0701'
    var end = String(year)+'0731'
    var endday = 31 + new Date(String(year)+'-07-01').getDay()
}
if(month == 8){
    var day = new Date(String(year)+'-08-01').getDay()
    var start = String(year)+'0801'
    var end = String(year)+'0831'
    var endday = 31 + new Date(String(year)+'-08-01').getDay()
}
if(month == 9){
    var day = new Date(String(year)+'-09-01').getDay()
    var start = String(year)+'0901'
    var end = String(year)+'0930'
    var endday = 30 + new Date(String(year)+'-09-01').getDay()
}
if(month == 10){
    var day = new Date(String(year)+'-10-01').getDay()
    var start = String(year)+'1001'
    var end = String(year)+'1031'
    var endday = 31 + new Date(String(year)+'-10-01').getDay()
}
if(month == 11){
    var day = new Date(String(year)+'-11-01').getDay()
    var start = String(year)+'1101'
    var end = String(year)+'1130'
    var endday = 30 + new Date(String(year)+'-11-01').getDay()
}
if(month == 12){
    var day = new Date(String(year)+'-12-01').getDay()
    var start = String(year)+'1201'
    var end = String(year)+'1231'
    var endday = 31 + new Date(String(year)+'-12-01').getDay()
}

function setdate(){
month = month + 1
if(month == 13){
    year = year + 1
    month = 1
}
var q = 1
while(q < 38){
    document.getElementById(String(q)).innerHTML = '' 
    q = q + 1
}
if(month == 1){
    var day = new Date(String(year)+'-01-01').getDay()
    var start = String(year)+'0101'
    var end = String(year)+'0131'
    var endday = 31 + new Date(String(year)+'-01-01').getDay()
}
if(month == 2){
    var day = new Date(String(year)+'-02-01').getDay()
    var start = String(year)+'0201'
    var end = String(year)+'0228'
    var endday = 28 + new Date(String(year)+'-02-01').getDay()
}
if(month == 3){
    var day = new Date(String(year)+'-03-01').getDay()
    var start = String(year)+'0301'
    var end = String(year)+'0331'
    var endday = 31 + new Date(String(year)+'-03-01').getDay()
}
if(month == 4){
    var day = new Date(String(year)+'-04-01').getDay()
    var start = String(year)+'0401'
    var end = String(year)+'0430'
    var endday = 30 + new Date(String(year)+'-04-01').getDay()
}
if(month == 5){
    var day = new Date(String(year)+'-05-01').getDay()
    var start = String(year)+'0501'
    var end = String(year)+'0531'
    var endday = 31 + new Date(String(year)+'-05-01').getDay()
}
if(month == 6){
    var day = new Date(String(year)+'-06-01').getDay()
    var start = String(year)+'0601'
    var end = String(year)+'0630'
    var endday = 30 + new Date(String(year)+'-06-01').getDay()
}
if(month == 7){
    var day = new Date(String(year)+'-07-01').getDay()
    var start = String(year)+'0701'
    var end = String(year)+'0731'
    var endday = 31 + new Date(String(year)+'-07-01').getDay()
}
if(month == 8){
    var day = new Date(String(year)+'-08-01').getDay()
    var start = String(year)+'0801'
    var end = String(year)+'0831'
    var endday = 31 + new Date(String(year)+'-08-01').getDay()
}
if(month == 9){
    var day = new Date(String(year)+'-09-01').getDay()
    var start = String(year)+'0901'
    var end = String(year)+'0930'
    var endday = 30 + new Date(String(year)+'-09-01').getDay()
}
if(month == 10){
    var day = new Date(String(year)+'-10-01').getDay()
    var start = String(year)+'1001'
    var end = String(year)+'1031'
    var endday = 31 + new Date(String(year)+'-10-01').getDay()
}
if(month == 11){
    var day = new Date(String(year)+'-11-01').getDay()
    var start = String(year)+'1101'
    var end = String(year)+'1130'
    var endday = 30 + new Date(String(year)+'-11-01').getDay()
}
if(month == 12){
    var day = new Date(String(year)+'-12-01').getDay()
    var start = String(year)+'1201'
    var end = String(year)+'1231'
    var endday = 31 + new Date(String(year)+'-12-01').getDay()
}
fetch("https://open.neis.go.kr/hub/SchoolSchedule?KEY=dba1fc9266654cf5921022efad652d33&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7041169&AA_FROM_YMD=" + start + "&AA_TO_YMD="+ end)

.then((response) => response.json())

.then((data) => {
    var w = 1
    var dd = day
    while(dd < endday){
        document.getElementById(String(dd + 1)).innerHTML = String(w)
        dd = dd + 1
        w = w + 1
    }
    var i = 0
    while(typeof data.SchoolSchedule[1].row[i] !== 'undefined'){
    
    var str = JSON.stringify(data.SchoolSchedule[1].row[i].EVENT_NM);
    var re = str.replace(/"/g, '');
    var AA_YMD = JSON.stringify(data.SchoolSchedule[1].row[i].AA_YMD);
    var AA_d = Number(AA_YMD.substring(7, 9)) + day;
    document.getElementById(String(AA_d)).innerHTML +=  '<br>' + re
    console.log(String(AA_d))
    console.log(str)
    i = i + 1
}
}).catch((error) => {
console.error('Error:', error)
});
document.querySelector("#dat").innerHTML = String(year) + '년 ' + String(month) + '월 ';
}
function setminus(){
    month = month - 1
    if(month == 0){
        year = year - 1
        month = 12
    }
    var q = 1
    while(q < 38){
        document.getElementById(String(q)).innerHTML = '' 
        q = q + 1
    }
    if(month == 1){
        var day = new Date(String(year)+'-01-01').getDay()
        var start = String(year)+'0101'
        var end = String(year)+'0131'
        var endday = 31 + new Date(String(year)+'-01-01').getDay()
    }
    if(month == 2){
        var day = new Date(String(year)+'-02-01').getDay()
        var start = String(year)+'0201'
        var end = String(year)+'0228'
        var endday = 28 + new Date(String(year)+'-02-01').getDay()
    }
    if(month == 3){
        var day = new Date(String(year)+'-03-01').getDay()
        var start = String(year)+'0301'
        var end = String(year)+'0331'
        var endday = 31 + new Date(String(year)+'-03-01').getDay()
    }
    if(month == 4){
        var day = new Date(String(year)+'-04-01').getDay()
        var start = String(year)+'0401'
        var end = String(year)+'0430'
        var endday = 30 + new Date(String(year)+'-04-01').getDay()
    }
    if(month == 5){
        var day = new Date(String(year)+'-05-01').getDay()
        var start = String(year)+'0501'
        var end = String(year)+'0531'
        var endday = 31 + new Date(String(year)+'-05-01').getDay()
    }
    if(month == 6){
        var day = new Date(String(year)+'-06-01').getDay()
        var start = String(year)+'0601'
        var end = String(year)+'0630'
        var endday = 30 + new Date(String(year)+'-06-01').getDay()
    }
    if(month == 7){
        var day = new Date(String(year)+'-07-01').getDay()
        var start = String(year)+'0701'
        var end = String(year)+'0731'
        var endday = 31 + new Date(String(year)+'-07-01').getDay()
    }
    if(month == 8){
        var day = new Date(String(year)+'-08-01').getDay()
        var start = String(year)+'0801'
        var end = String(year)+'0831'
        var endday = 31 + new Date(String(year)+'-08-01').getDay()
    }
    if(month == 9){
        var day = new Date(String(year)+'-09-01').getDay()
        var start = String(year)+'0901'
        var end = String(year)+'0930'
        var endday = 30 + new Date(String(year)+'-09-01').getDay()
    }
    if(month == 10){
        var day = new Date(String(year)+'-10-01').getDay()
        var start = String(year)+'1001'
        var end = String(year)+'1031'
        var endday = 31 + new Date(String(year)+'-10-01').getDay()
    }
    if(month == 11){
        var day = new Date(String(year)+'-11-01').getDay()
        var start = String(year)+'1101'
        var end = String(year)+'1130'
        var endday = 30 + new Date(String(year)+'-11-01').getDay()
    }
    if(month == 12){
        var day = new Date(String(year)+'-12-01').getDay()
        var start = String(year)+'1201'
        var end = String(year)+'1231'
        var endday = 31 + new Date(String(year)+'-12-01').getDay()
    }
    fetch("https://open.neis.go.kr/hub/SchoolSchedule?KEY=dba1fc9266654cf5921022efad652d33&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7041169&AA_FROM_YMD=" + start + "&AA_TO_YMD="+ end)
    
    .then((response) => response.json())
    
    .then((data) => {
        var w = 1
        var dd = day
        while(dd < endday){
            document.getElementById(String(dd + 1)).innerHTML = String(w)
            dd = dd + 1
            w = w + 1
        }
        var i = 0
        while(typeof data.SchoolSchedule[1].row[i] !== 'undefined'){
        
        var str = JSON.stringify(data.SchoolSchedule[1].row[i].EVENT_NM);
        var re = str.replace(/"/g, '');
        var AA_YMD = JSON.stringify(data.SchoolSchedule[1].row[i].AA_YMD);
        var AA_d = Number(AA_YMD.substring(7, 9)) + day;
        document.getElementById(String(AA_d)).innerHTML += '<br>' + re
        console.log(String(AA_d))
        console.log(str)
        i = i + 1
    }
    }).catch((error) => {
    console.error('Error:', error)
    });
    document.querySelector("#dat").innerHTML = String(year) + '년 ' + String(month) + '월 ';
    }
fetch("https://open.neis.go.kr/hub/SchoolSchedule?KEY=dba1fc9266654cf5921022efad652d33&Type=json&pIndex=1&pSize=100&ATPT_OFCDC_SC_CODE=B10&SD_SCHUL_CODE=7041169&AA_FROM_YMD=" + start + "&AA_TO_YMD="+ end)

  .then((response) => response.json())
  
  .then((data) => {
    var w = 1
    var dd = day
    while(dd < endday){
        document.getElementById(String(dd + 1)).innerHTML = String(w)
        dd = dd + 1
        w = w + 1
    }
    var i = 0
    while(typeof data.SchoolSchedule[1].row[i] !== 'undefined'){
    
    var str = JSON.stringify(data.SchoolSchedule[1].row[i].EVENT_NM);
    var re = str.replace(/"/g, '');
    var AA_YMD = JSON.stringify(data.SchoolSchedule[1].row[i].AA_YMD);
    var AA_d = Number(AA_YMD.substring(7, 9)) + day;
    document.getElementById(String(AA_d)).innerHTML += '<br>' + re
    console.log(String(AA_d))
    console.log(str)
    i = i + 1
}
    
}).catch((error) => {
    console.error('Error:', error)
    });

