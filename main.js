


// Add this code inside your main.js file or within a script tag

// Wait for the document to finish loading

  var maryamcalculateBtn = document.querySelector('.maryamcalculate-btn');

  maryamcalculateBtn.addEventListener("click",ficnCalculation)

  function ficnCalculation() {
    var ΔP = parseFloat(document.getElementById('ΔP').value);
    var S = parseFloat(document.getElementById('S').value);
    var Dg = parseFloat(document.getElementById('Dg').value);
    var E = parseFloat(document.getElementById('E').value);
    var C = parseFloat(document.getElementById('C').value);
    var pmar = parseFloat(document.getElementById('pmar').value);

    var marres=(3*ΔP)/(16*S*E);
    // var result= [Dg*Math.sqrt(marres)+C]+2*pmar
    var result= Dg*Math.sqrt(marres)+C+2*pmar
    document.querySelector('.maryamcalories').textContent = result.toFixed(3);
    document.querySelector('.maryamresult-message').style.display = 'block';
    document.querySelector('.maryamerror-message').style.display = 'none';

  }

 
  




// Add this code inside your main.js file or within a script tag

function performCalculation() {
  // Get the values of the input fields
  var cci = parseFloat(document.getElementById('height').value);
  var a = parseFloat(document.getElementById('weight').value);
  var c1 = parseFloat(document.getElementById('cun').value);
  var reau = parseFloat(document.getElementById('Aeau').value);
  var p1 = parseFloat(document.getElementById('p1').value);
  var p4 = parseFloat(document.getElementById('P4').value);
  var k = parseFloat(document.getElementById('k').value);
  // Perform the calculation

  var superk=(k+1)/(k-1);
  var omega = 0.97 * cci * a * Math.sqrt(k* p1 * c1 * (2/(k+1)) * (superk));

  var result = Math.sqrt(((4*omega)/(Math.PI*0.97*cci))/Math.sqrt(k*p1*c1*reau*(2/superk)))

  // Display the result
  document.querySelector('.calories').textContent = result.toFixed(3);
  document.querySelector('.result-message').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
}

function performAlternateCalculation() {
  // Get the values of the input fields
  var cci = parseFloat(document.getElementById('height').value);
  var a = parseFloat(document.getElementById('weight').value);
  var c1 = parseFloat(document.getElementById('cun').value);
  var reau = parseFloat(document.getElementById('Aeau').value);
  var p1 = parseFloat(document.getElementById('p1').value);
  var p4 = parseFloat(document.getElementById('P4').value);
  var k = parseFloat(document.getElementById('k').value);
  var r4 = parseFloat(document.getElementById('r4').value);
  // Perform the alternate calculation
  var const1=(2*k*p1*c1*reau)/(k-1);
  var const2=Math.pow(r4, 2 / k);
  var const3=1-Math.pow(r4, (k-1)/k);

  var omega = 0.97 * cci * a * Math.sqrt(const1*const2*(1-const3));

  var result = Math.sqrt(((4*omega)/(Math.PI*0.97*cci))/Math.sqrt(Math.sqrt(const1*const2*(1-const3))));
  // Display the result
  document.querySelector('.calories').textContent = result.toFixed(3);
  document.querySelector('.result-message').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
}

function clearResult() {
  // Clear the result
  document.querySelector('.calories').textContent = '0,000';
  document.querySelector('.result-message').style.display = 'none';
  document.querySelector('.error-message').style.display = 'none';
}


function performFemaleCalculation() {
  // Get the values of the input fields
  var cci = parseFloat(document.getElementById('height').value);
  var a = parseFloat(document.getElementById('weight').value);
  var c1 = parseFloat(document.getElementById('cun').value);
  var reau = parseFloat(document.getElementById('Aeau').value);
  var p1 = parseFloat(document.getElementById('p1').value);
  var p4 = parseFloat(document.getElementById('P4').value);
  var k = parseFloat(document.getElementById('k').value);
  
  // Perform the female calculation
  var const1=Math.sqrt(2*c1*reau*(p1-p4));
  var omega = 0.97 * cci * a * const1;
  var const2=(4*omega)/(Math.PI*0.97*cci);
  var result=Math.sqrt(const2/const1);
  // var result= const2;

  // Display the result
  document.querySelector('.calories').textContent = result.toFixed(3);
  document.querySelector('.result-message').style.display = 'block';
  document.querySelector('.error-message').style.display = 'none';
}