

var rootAfterStyle = document.createElement('style');
function menu(n){
    if(n.style.display=="none") {
        m1.style.display='none';
        m2.style.display='none';
        m3.style.display='none';
        m4.style.display='none';
        n.style.display='block';
        if(n==plain){
        body.style.filter='blur(10px)'
    }
    } else {
        n.style.display = 'none';
        if(n==plain) {
        body.style.filter='blur(0px)'
    }
            
    }
     
    if(n==m1){
        if(n.style.display=="block"){
            rootAfterStyle.innerHTML = `.d1::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rootAfterStyle.innerHTML = `.d1::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rootAfterStyle);
    }
    if(n==m2){
        if(n.style.display=="block"){
            rootAfterStyle.innerHTML = `.d2::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rootAfterStyle.innerHTML = `.d2::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rootAfterStyle);
    }
    if(n==m3){
        if(n.style.display=="block"){
            rootAfterStyle.innerHTML = `.d3::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rootAfterStyle.innerHTML = `.d3::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rootAfterStyle);
    }
    if(n==m4){
        if(n.style.display=="block"){
            rootAfterStyle.innerHTML = `.d4::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rootAfterStyle.innerHTML = `.d4::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rootAfterStyle);
    }
}
var rrAfterStyle = document.createElement('style');
function m2_d(n){
    if(n.style.display=="none") {
        m2_1.style.display='none';
        m2_2.style.display='none';
        m2_3.style.display='none';
        n.style.display='block';
    } else {
        n.style.display = 'none';
            
    }
     
    if(n==m2_1){
        if(n.style.display=="block"){
            rrAfterStyle.innerHTML = `.d2_1::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rrAfterStyle.innerHTML = `.d2_1::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rrAfterStyle);
    }
    if(n==m2_2){
        if(n.style.display=="block"){
            rrAfterStyle.innerHTML = `.d2_2::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rrAfterStyle.innerHTML = `.d2_2::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rrAfterStyle);
    }
    if(n==m2_3){
        if(n.style.display=="block"){
            rrAfterStyle.innerHTML = `.d2_3::after {
            transform: rotate(135deg) translateY(-270%)!important;
        }`;}  else { rrAfterStyle.innerHTML = `.d2_3::after {
        transform: rotate(-45deg) translateY(180%)!important;
    }`;

        }
        document.head.appendChild(rrAfterStyle);
    }

}
