
//----------------------------
var hex = null;
var dec = null;
var bin = null;
var ascii = null;
//----------------------------	
	function updateValue(value, exclude) {
	  
	  if (exclude != hex) {
	    hex.value = value.toString(16);
	  }
	  if (exclude != dec) {
	    dec.value = value.toString(10);
	  }
	  if (exclude != bin) {
	    bin.value = value.toString(2);
	  }
	  if (exclude != ascii) {
	    try {
	      ascii.value = String.fromCodePoint(value);
	    } catch(e) {}
	  }
	}

//----------------------------
	
	window.addEventListener('load', function() {
	 


	  hex = document.querySelector('.hex.input');
	  hex.value = 0;
	  
	  hex.addEventListener('input', function() {
	    updateValue(parseInt(hex.value, 16), hex);
	  

	  }, false);





	  dec = document.querySelector('.dec.input');
	  dec.value = 0;
	  
	  dec.addEventListener('input', function() {
	    updateValue(parseInt(dec.value, 10), dec);
	  }, false);




	  bin = document.querySelector('.bin.input');
	  bin.value = 0;
	  
	  bin.addEventListener('input', function() {
	    updateValue(parseInt(bin.value, 2), bin);
	  }, false);





	  ascii = document.querySelector('.ascii.input');
}, false);

//----------------------------