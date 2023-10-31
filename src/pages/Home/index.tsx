import './style.css';

export function Home() {
  //-----DESAFIO NÚMERO 1
  const numeros = [ 0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29 ,30 ];
  const numeros2 = numeros.join(', ')

  const impares = numeros.filter(impar => {
  return impar % 2 !== 0
})
  const impares2 = impares.join(', ')

  //-----DESAFIO NÚMERO 2
  const palavras = ["arara", "amor", "asa", "longo", "ele", "dinossauro", "esse", "peppa", "mamam", "tartaruga", "bandolin", "matam", "desodorante", "mundo", "metem", "terra", "agua", "mirim", "fogo", "sopapos"]
  const palavras2 = palavras.join(', ')

  const palindromos = palavras.filter(palavra => {
  const palindromo = palavra.split("").reverse().join('');
  return palavra === palindromo;
})
  const palindromos2 = palindromos.join(', ')

  //-----DESAFIO NÚMERO 3
  let n1 = 0;
  let n2 = 1;
  let n3 = 0;

  var fibo = []
  while (n1 <= 100) {
    fibo.push(n1)
    n3 = n1 + n2
    n1 = n2
    n2 = n3
  }
  const fibonacci = fibo.join(' -> ')

  //-----DESAFIO NÚMERO 4
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  //- ADICIONANDO O ZERO
  num.unshift(0)
   // - ADICIONANDO O ONZE
  num.push(11)
  // - REMOVENDO O CINCO
  num.splice(5,1);
  //- Removendo o 7
  num.splice(7,1, 20, 21, 22);


  //-----DESAFIO NÚMERO 5
  const pessoas = [
    {id: 1, nome: 'Liz', idade: 2},
    {id: 2, nome: 'Thaís', idade: 32},
    {id: 3, nome: 'Jonathan', idade: 30},
    {id: 4, nome: 'Thainá', idade: 29},
    {id: 5, nome: 'Fabiano', idade: 45},
  ]
  
  const semId = pessoas.map((arg) => {
    return {nome : arg.nome, idade: arg.idade}
  })

  //-----DESAFIO NÚMERO 6
  const pessoasH3 = pessoas.map((emh) => {
    return <h3 key={emh.id}> {emh.id} - {emh.nome} - {emh.idade} </h3>
  })
 
  
  //-----DESAFIO NÚMERO 7
  const jotas: { [key: string]: string } = {
    jason: "Jason",
    thais: "Thaís",
    liz: "Liz",
    jennei: "Jennei",
    jenyffer: "Jennyfer",
    joao: "João",
    bola: "Bola",
    gato: "Gato",
    jaguar: "Jaguar"
  };

  const soJotas: { [key: string]: string } = {};

  for (const j in jotas) {
    if (j.startsWith('j') || j.startsWith("J")) {
      soJotas[j] = jotas[j]
    }
  }

  ///-----FIM!!------------

  return (
    <body>
      <header>
        <h1 className='cabecalho'>Teste de Wagner Vital.</h1>
        <p>Wagner Vital, estudante de programação com mais experiência em HTML e CSS, estou em busca de uma oportunidade para iniciar nessa carreira, pretendo crescer junto com a empresa, aprimorando os meus conhecimentos e aumentando minhas habilidades, agradeço desde já pela oportunidade e espero que este seja o início de uma incrível parceria.</p>
      </header>

      <main className='container'>
        <div className='desafio'> 
          <h1 className='desafios'>Desafio nº 1</h1>
          <p className='enunciado'>
            Crie um Array contendo os numerais de 0 à 30 e filtre quais desses números são ímpares:
          </p>
          <hr />
          <div>
            <p className='resolucao'>
              Resolução:
            </p>
            <code>
                const numeros = [{numeros2}]
            </code>
            <code>
              const impares = [ {impares2}]
            </code>
          </div>
        </div>

        <div className='desafio'>
          <h1 className='desafios'>Desafio nº2</h1>
          <p className='enunciado'>
          Crie um Array contendo a lista de palavras abaixo e filtre apenas quais dessas palávras são palíndromos: <br /><br />
          <span>arara, amor, asa, longo, ele, dinossáuro, esse, peppa, mamam, tartaruga, bandolin, matam, desodorante, mundo, metem, terra, água, mirim, fogo, sopapos</span>
          </p>
          <hr />
          <div>
            <p className='resolucao'>
              Resolução:
            </p>
            <code>
              const palavras = [{palavras2}]
            </code>
            <code>
              const palindromos = [{palindromos2}]
            </code>
          </div>
        </div>

        <div className="desafio">
          <h1 className="desafios">Desafio nº3</h1>
          <p className="enunciado">
          Crie uma automação que calcule a sequencia fibonacci até o número máximo 100.
          </p>
          <hr />
          <div>
            <p className="resolucao">Resolução:</p>
            <code>
              A sequência de Fibonacci: {fibonacci}
            </code>
          </div>
        </div>

        <div className="desafio">
          <h1 className="desafios">Desafio nº4</h1>
          <p className="enunciado">
            A - crie um Array contendo números de 1 à 10 <br />
            B - insira o número 0 no início do array <br />
            C - insira o número 11 no final do array <br />
            D - remova o número 5 do array <br />
            E - remova o número 8 do array e no lugar adicione uma sequencia de números: 20, 21, 22. Nesse ponto seu Array deve estar dessa forma: 0, 1, 2, 3, 4, 6, 7, 20, 21, 22, 9, 10, 11.
          </p>
          <hr />
          <div>
            <p className="resolucao">Resolução:</p>
            <code>
              Questão A - const num = [{nums.join(', ')}] <br />
              foi utilizado algumas funções de Array para alterar o Array, foram elas: <br />
              num.unshift(0) - Na questão B <br />
              num.push(11) - Na questão C <br />
              num.splice(5,1) - Na questão D <br />
              num.splice(7,1,20,21,22) Na questão E . <br />
              E assim ficou o Array principal: <br />
              const numeros = [{num.join(', ')}]
            </code>
          </div>
        </div>
        <div className="desafio">
          <h1 className="desafios">Desafio nº5</h1>
          <p className="enunciado">
          a partir do Array abaixo crie um novo array contendo apenas nome e idade: <br /><br />
          <span>[
            {'{'}id: 1, nome: 'Liz', idade: 2{'}'},<br />
            {'{'}id: 2, nome: 'Thaís', idade: 32{'}'},<br />
            {'{'}id: 3, nome: 'Jonathan', idade: 30{'}'},<br />
            {'{'}id: 4, nome: 'Thainá', idade: 29{'}'},<br />
            {'{'}id: 5, nome: 'Fabiano', idade: 45{'}'},
                ]
            </span>
          </p>
          <hr />
          <div>
            <p className="resolucao">Resolução:</p>
            <code>const pessoasSemId = {JSON.stringify(semId)}</code>
          </div>
        </div>

        <div className="desafio">
          <h1 className="desafios">Desafio nº6</h1>
          <p className="enunciado">
          Utilize o mesmo array do desafio anterior para criar um array que contenha os valores abaixo dentro de uma tag h3 como no exemplo abaixo: <br />
          <span>&lt;h3&gt; {'{'}id{'}'} - {'{'}nome{'}'} - {'{'}idade{'}'} &lt;/h3&gt; </span>
          </p>
          <hr />
          <div>
            <p className="resolucao">Resolução:</p>
            <code>
              const pessoasH3 = {pessoasH3}
            </code>
          </div>        
        </div>

        <div className="desafio">
          <h1 className="desafios">Desafio nº7</h1>
          <p className="enunciado">
          Crie uma automação que remova todas as propriedades do objeto abaixo que não comecem com a letra "j": <br />
          <span>{'{'}
              jason: "Jason",
	            thais: "Thaís",
	            liz: "Liz",
	            jennei: "Jennei",
	            jenyffer: "Jennyfer",
	            joao: "João",
	            bola: "Bola",
	            gato: "Gato",
	            jaguar: "Jaguar"
              {'}'}
          </span>
          </p>
          <hr />
          <div>
            <p className="resolucao">Resolução:</p>
            <code>const jotas = {JSON.stringify(soJotas, null, 2)}</code>
          </div>
        </div>
      </main>
    </body>
  )
}