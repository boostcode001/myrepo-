function f01() {


  x = document.querySelector("#target01");
  console.log(x); // <h1 id="target">개요</h1>
  c = document.querySelector("#color01").value; // <input type="color" name="color01" value="#ff0000">
  x.style.backgroundColor = c; // <h1 id="target">개요</h1>의 배경색을 빨간색으로 변경


}

function f02(num) {
  x = document.querySelector("#target02");
  x.style.width = num + 'px';
  x.style.height = num + 'px';
}

function f03(num) {
  input31 = document.querySelector("#input31").value;
  input32 = document.querySelector("#input32").value;
  input33 = document.querySelector('#input33').value;

  resultArea = document.querySelector("#result-area");


  s = "구매자 : " + input31 + "상품명 : " + input32 + "가격 :" + input33;
  resultArea.innerHTML = s;

}