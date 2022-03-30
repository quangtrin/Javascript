let answer_main = document.querySelector(".ket-qua__main");
let answer_sub = document.querySelector(".ket-qua__sub");
let phim_bam = document.querySelectorAll("[class ^= 'phim-']");
console.log(phim_bam);
let count = 0;
let toan_tu = '';
let answer_log = '';
function click_so(str){
    if(count ===1 && toan_tu==='=') answer_sub.innerText='';
    if(answer_main.innerText==='0' || count===1){
        answer_main.innerText = str;
        count=0;
    } 
    else answer_main.innerText += str;
}
function click_xoa(str){
    str = str.split('');
    str.pop();
    if(str.length === 0) str.push('0');
    str = str.join('');
    answer_main.innerText = str;
}
function click_bang(a){
    let answer;
    switch (toan_tu) {
        case '+':
            answer = Number.parseFloat(answer_log) + Number.parseFloat(answer_main.innerText);
            if(a==='=') answer_sub.innerText = answer_log + ' '+toan_tu+' '+ answer_main.innerText+' = ';  
            answer_main.innerText = answer.toString();
            count = 1;
            break;
        case '-':
            answer = Number.parseFloat(answer_log) - Number.parseFloat(answer_main.innerText);
            if(a==='=') answer_sub.innerText = answer_log + ' '+toan_tu+' '+ answer_main.innerText+' = ';
            answer_main.innerText = answer.toString();
            count = 1;
            break;
        case '*':
            answer = Number.parseFloat(answer_log) * Number.parseFloat(answer_main.innerText);
            if(a==='=') answer_sub.innerText = answer_log + ' '+toan_tu+' '+ answer_main.innerText+' = ';
            answer_main.innerText = answer.toString();
            count = 1;
            break;
        case '/':
            answer = Number.parseFloat(answer_log) / Number.parseFloat(answer_main.innerText);
            if(a==='=') answer_sub.innerText = answer_log + ' '+toan_tu+' '+ answer_main.innerText+' = ';
            answer_main.innerText = answer.toString();
            count = 1;
            break;
        default:
            answer_sub.innerText = answer_main.innerText + ' = ';
            count = 1;
            break;
    }
    toan_tu='=';
}
function click_toan_tu(str){
    if(answer_log!=='') click_bang('');
    answer_log = answer_main.innerText;
    answer_sub.innerText = answer_main.innerText + " " +str;
    count = 1;
}
function click_phim(e){
    switch(e.path[0].value){
        case '0':
            click_so(e.path[0].value);
            break;
        case '1':
            click_so(e.path[0].value);
            break;
        case '2':
            click_so(e.path[0].value);
            break;
        case '3':
            click_so(e.path[0].value);
            break;
        case '4':
            click_so(e.path[0].value);
            break;
        case '5':
            click_so(e.path[0].value);
            break;
        case '6':
            click_so(e.path[0].value);
            break;
        case '7':
            click_so(e.path[0].value);
            break;
        case '8':
            click_so(e.path[0].value);
            break;
        case '9':
            click_so(e.path[0].value);
            break;
        case '+':
            click_toan_tu(e.path[0].value);
            toan_tu = e.path[0].value;
            break;
        case '-':
            click_toan_tu(e.path[0].value);
            toan_tu = e.path[0].value;
            break;
        case '*':
            click_toan_tu(e.path[0].value); 
            toan_tu = e.path[0].value;
            break;
        case '/':
            click_toan_tu(e.path[0].value);
            toan_tu = e.path[0].value;           
            break;
        case '=': 
            click_bang('=');
            break;
        case 'X':
            if(count!==1)click_xoa(answer_main.innerText);          
            break;
        case 'C':
            answer_main.innerText = '';
            answer_sub.innerText = '';
            break;
    }
}
for(let i in phim_bam){
    if (Number.isInteger(Number.parseFloat(i))===false) {
        break;
    }
    phim_bam[i].onclick = (e)=>click_phim(e);
}
document.onkeydown= (e)=>{
    console.log(e);
};
