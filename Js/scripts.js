
// função do cadastro
function cadastroRealizado() {
    const alertTrigger = Function;
    alert("Dados enviados com Sucesso!");
  }

  // função seleção
  (function(){
    "use strict";
  
    var marcados = 0;
    var verifyCheckeds = function($checks) {
      if( marcados>=3 ) {
        loop($checks, function($element) {
          $element.disabled = $element.checked ? '' : 'disabled';
        });
      } else {
        loop($checks, function($element) {
          $element.disabled = '';
        });
      }
    };
    var loop = function($elements, cb) {
      var max = $elements.length;
      while(max--) {
        cb($elements[max]);
      }
    }
    var count = function($element) {
      return $element.checked ? marcados + 1 : marcados - 1;
    }
    window.onload = function(){
      var $checks = document.querySelectorAll('input[name="TEAM"]');
      loop($checks, function($element) {
        $element.onclick = function(){
          marcados = count(this);
          verifyCheckeds($checks);
        }
        if($element.checked) marcados = marcados + 1 ;
      });
      verifyCheckeds($checks);
    }
  }());

  //e-parking button enviar

  let contagem = 0;
  function contadorCarros() {
      contagem = contagem + 1;
      document.getElementById('carros').value = contagem;

      console.writeline(input);

  };
  let motosCont = 0;
  function contadorMotos() {
      motosCont = motosCont + 1;
      document.getElementById('moto').value = motosCont;

      console.writeline(input);

  };
  let biciletaCont = 0;
  function contadorBicicleta() {
      biciletaCont = biciletaCont + 1;
      document.getElementById('bicicleta').value = biciletaCont;
      console.writeline(input);

  };
  let uberCont = 0;
  function contadorUber() {
      uberCont = uberCont + 1;
      document.getElementById('uber').value = uberCont;

      console.writeline(input);

  };

  let personCont = 0;
  function contadorPessoas() {
      personCont = personCont + 1;
      document.getElementById('pessoas').value = personCont;

      console.writeline(input);

  };

  let childrenCont = 0;
  function contadorChildren() {
      childrenCont = childrenCont + 1;
      document.getElementById('children').value = childrenCont;

      console.writeline(input);

  };

  let adultosCont = 0;
  function contadorAdultos() {
      adultosCont = adultosCont + 1;
      document.getElementById('adultos').value = adultosCont;

      console.writeline(input);

  };
