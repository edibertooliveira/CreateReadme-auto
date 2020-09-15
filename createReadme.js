const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fullName, repositoryGithub;
let social = 'https://www.linkedin.com/in/ediberto-b-oliveira-872926178/';
let userGithub = 'https://github.com/edibertooliveira';
let color = 'blue';

let description = 'Criando meus proprios modelos de README.md.';

let features = 'Criado para padronizar projetos em grande escala, com um estilo moderno e avançado que deixa o README.md interesante de se ver.';
let technologies = 'HTML - CSS - JavaScript';
let Interesting = 'Trabalhar com node. - Usando readline e fs. - Formular um template. - Uso de metodos split e replace.';

let status = 'completo';

//Transforma de String para array e retorna toda a extensão do array como lista
function transformStrngArray(string){
  let array = string.split(' - ');
  let result = ''
  array.forEach(element => {
    result += `<li>${element}</li>`;
  });
  return result;
}


//Edite template README.md
function editMD(fullName, github, repository, social, color, description, features, technologies, Interesting, status){
  let userGithub = github.replace('https://github.com/', '');

  return `
<p align="center">	
<a href="${social}">
  <img alt="${fullName}" src="https://img.shields.io/badge/Author-${fullName.replace(' ', '%20')}-${color}" />
  </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/${userGithub}/${repository}?color=${color}">

  <a aria-label="Completed" href="https://${userGithub}.github.io/${repository}">
    <img src="https://img.shields.io/badge/Project-${repository.replace('-', '--')}-${color}"></img>
  </a>
  <a href="https://github.com/${userGithub}/${repository}/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/${userGithub}/${repository}?color=${color}">
  </a> 

  <a href="https://github.com/${userGithub}/${repository}/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-${color}">
  </a>
  
   <a href="https://github.com/${userGithub}/${repository}/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/${userGithub}/${repository}?color=${color}">
  </a>
</p>

# ${repository}

### Web Screenshot

<div align="center" style="display: flex; flex-direction: 'row'; align-items: 'center';">
   <img src="./.github/Screenshot_1.png" width="250px" height="400px">
   <img src="./.github/Screenshot_2.png" width="250px" height="400px">
   <img src="./.github/Screenshot_3.png" width="250px" height="400px">
</div>

> :rocket: ${description}
### :pushpin: Índice

* [Tecnologias](#computer-Tecnologias)
* [Como pode ajudar?](#rocket-Recursos)
* [Coisas interessantes abordadas neste projeto](#Covered-Abordados-neste-projeto)
* [Como executar](#construction_worker-Como-executar)
* [Encontrou um bug? Faltando um recurso específico?](#bug-issues)
* [Licença](#closed_book-licença)

### :computer: Tecnologias
Este projeto foi feito usando as seguintes tecnologias:
<ul>
  ${transformStrngArray(technologies)}
</ul>

### :rocket: Recursos
<ul>
   ${transformStrngArray(features)}
</ul>

### :Covered: Abordados neste projeto
<ul>
${transformStrngArray(Interesting)}
</ul>

> Status: ${status}.

### :construction_worker: Como executar

> ps: É necessario ter o nodejs e git instalado.
* Abra o terminal do seu computador. Se estiver no Windows, pode ser o Prompt de Comando ou PowerShell.
* Altere o diretório de trabalho atual para o local em que deseja ter o código do módulo salvo no seu computador. 
* Faça um clone desse repositório rodando: git clone https://github.com/${userGithub}/${repository}.git; 
* Entre na pasta rodando pelo terminal: cd ${repository};

### :bug: Issues
Sinta-se à vontade para **registrar um novo problema** com o respectivo título e descrição no [${repository}](https://github.com/${userGithub}/${repository}/issues) repositório. Se você já encontrou uma solução para o seu problema, **adoraria revisar sua pull request**!

### :closed_book: Licença
Released in 2020 :closed_book: Licença

Este projeto está sob o [MIT license](https://github.com/${userGithub}/${repository}/master/LICENSE).

Feito com muito amor by [${fullName}](https://github.com/${userGithub}/) 🚀.

`;
}

//Questionario de perguntas
rl.question("Author?: ", function(name) {
  fullName = name;
    rl.question("Projeto?: ", function(repository) {
      repositoryGithub = repository;
        console.log(`Repositorio ${repository}, do usuario ${name}`);

        //Salve arquivo README.md na pasta local
        fs.writeFile("./update/README.md", editMD(fullName, userGithub, repositoryGithub, social, color, description, features, technologies, Interesting, status), function(erro) {

          if(erro) {
              throw erro;
          }
        
          console.log("Arquivo salvo");
        });
        rl.close();
    });
}); 


