alert('ko có  j ở đây 😭 ')
function tinhtuoi() {
    var tuoinhap = document.getElementById("ageinput").value;

    if(tuoinhap==""){
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-danger"> 🗣️ Không được để rỗng</div>'
    }else if(tuoinhap<=0){
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-danger"> 🤬 Mày chưa đẻ mà đòi tao tính à</div>'
    }else if(tuoinhap<=100){
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-success"> 🤖 Tuổi của bạn là: '+ tuoinhap+'</div>'
    } else {
        document.getElementById("vungchua").innerHTML = '<div class="alert alert-danger"> 🥶 Con lạy cụ, cụ có phải là người không vậy ?</div>';
    }
}
// const colors = require('colors')
function spam() {
    setInterval(()=>{
        alert('2')
        console.log(`Thông báo thành công \n  ${Math.random()} `)
    },1)
}