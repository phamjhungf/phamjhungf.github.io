//alert('ko có  j ở đây 😭 ')

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

function spam() {
    setInterval(()=>{
        int i=0
        
        alert('Heli')
        console.log(`Thông báo thành công \n  ${i++} `)
    },1)
}

console.log('Hello'.bgGreen)

let link ={
    "link":'https://youtu.be/dQw4w9WgXcQ?si=JkLeM3-8Zp0GeF5Oe'
}
function Redirect() {
    window.location.href =link.link;
}


