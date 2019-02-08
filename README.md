# js-brasil-woj

Javascript Utils para Brasil (cpf, cnpj...)
Forked from Mario Mol https://github.com/mariohmol <--


[![Build Status](https://travis-ci.org/mariohmol/js-brasil.svg?branch=master)](https://travis-ci.org/mariohmol/js-brasil)


`npm i js-brasil-woj --save` 

 ou 

`<script src="js-brasil-woj.js"></script>`

# Validate

Verifique se os dados dos seus usuários são válidos

Javascript:
```js
const { validateBr } = require('js-brasil-woj');
const cpf = validateBr.cpf('123.456.789-00');
```

Typescript:
```ts
import { validateBr } from 'js-brasil-woj';
const cpf = validateBr.cpf('123.456.789-00');
```

Browser:
```html
<script src="js-brasil-woj.js"></script>
<script>
var cpf = jsbrasilwoj.validateBr.cpf('123.456.789-00');
</script>  
```


# Mask 

Formate seus dados com mascaras de tipos de dados brasileiros

Javascript:
```js
const { maskBr } = require('js-brasil-woj');
const cpf = maskBr.cpf('12345678900'); 
console.log(cpf) // '123.456.789-00'
```

Typescript:
```ts
import { maskBr } from 'js-brasil-woj';
const cpf = maskBr.cpf('12345678900'); 
console.log(cpf) // '123.456.789-00'
```

Browser:
```html
<script src="js-brasil-woj.js"></script>
<script>
var cpf = jsbrasil.maskBr.cpf('12345678900'); 
console.log(cpf) // '123.456.789-00'
</script>  
```




# Faker

Gere dados de teste usando tipos de dados brasileiro, similar o fakejs

Javascript:
```js
const { fakerBr } = require('js-brasil-woj');
const cep = fakerBr.cep();
```

Typescript:
```ts
import { fakerBr } from 'js-brasil';
const cep = fakerBr.cep();
```

Browser:
```html
<script src="js-brasil-woj.js"></script>
<script>
var cep = jsbrasilwoj.fakerBr.cep();
</script>  
```

# Tipos Suportados

* cep
* cnpj
* cpf
* currency
* inscricaoestadual - Todos os estados do Brasil
* percentage
* rg
* placa
* telefone
* celular
* time
* titulo


