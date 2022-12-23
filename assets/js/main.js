
$('.type-it').typeIt({
});


// setTimeout(function () {
//   $('.type-it2').typeIt({
//   });
// },2000 );

//detected terminal words

// var span = $("#span");
// span.html(span.html().replace(/adnan/, '<span style="color: #3498db ; font-weight: bold; ">$&</span>'));

var span = $("#span");
span.html(span.html().replace(/~/, '<span style="color: #2ecc71 ; font-weight: bold; ">$&</span>'));

var span = $("#span2");
span.html(span.html().replace(/~/, '<span style="color: #2ecc71 ; font-weight: bold; ">$&</span>'));



// var span = $("#span2");
// span.html(span.html().replace(/root/, '<span style="color: #e74c3c ; font-weight: bold; ">$&</span>'));

var span = $("#span2");
span.html(span.html().replace(/Info/, '<span style="color: #2ecc71 ; font-weight: bold; ">$&</span>'));

//result proccess
setInterval(Timer, 4000);
function Timer() {
  $(".result").show();
}


//function codify
let btnCripto = document.getElementById("cripto");

btnCripto.onclick = function () {
  let texto = document.getElementById("entrada-texto").value;

  let res = texto.replace(/e/g, "enter");
  res = res.replace(/i/g, "imes");
  res = res.replace(/a/g, "ai");
  res = res.replace(/o/g, "ober");
  res = res.replace(/u/g, "ufat");

  document.getElementById("entrada-texto").value = res;
}

let btnDecripto = document.getElementById("decripto");

btnDecripto.onclick = function () {
  let texto = document.getElementById("entrada-texto").value;

  let res = texto.replace(/enter/g, "e");
  res = res.replace(/imes/g, "i");
  res = res.replace(/ai/g, "a");
  res = res.replace(/ober/g, "o");
  res = res.replace(/ufat/g, "u");

  document.getElementById("entrada-texto").value = res;
}

function copiar() {
  let texto = document.getElementById("entrada-texto");
  texto.select();
  document.execCommand("copy");

  alert("Texto copiado para área de transferência");
}

function RemoveSpecialChar(txtName) {
  if (txtName.value != '' && txtName.value.match(/^[\w ]+$/) == null) {
    txtName.value = txtName.value.replace(/[\W]/g, '');
  }
}

