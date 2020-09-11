const readline = require("readline");
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let fullName, repositoryGithub;
let social = 'https://www.linkedin.com/in/renata-novais/';
let userGithub = 'https://github.com/RenataNovais';
let color = 'blue';


//Edite template README.md
function editMD(fullName, github, repository, social, color){
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

> :rocket: created for study using as basis the lessons of the <a href="https://github.com/maykbrito" target="_blink">Maik Brito</a> of <a href="https://github.com/Rocketseat" target="_blink">Rocketseat</a>. I made my modifications, because I use it constantly to cut images quickly.

### :pushpin: Table of Contents

* [Technologies](#computer-technologies)
* [Features](#rocket-features)
* [Interesting things covered in this project](#Covered-in-this-project)
* [How to Run](#construction_worker-how-to-run)
* [Found a bug? Missing a specific feature?](#bug-issues)
* [License](#closed_book-license)

### :computer: Technologies
This project was made using the follow technologies:
<ul>
  <li><a href="https://developer.mozilla.org/">HTML5</a></li>
  <li><a href="https://css-tricks.com/">CSS3</a></li>
  <li><a href="https://www.javascript.com/">Javascript</a></li>
</ul>

### :rocket: Features

* To speed up image editing without using more elaborate applications

### Covered in this project

<ul>
  <li>Create a new instance of HTMLImageElement Image().</li>
  <li>Working with objects in events.</li>
  <li>HTML Canvas API</li>
  <li>Cropping image in Canvas API.</li>
  <li>Handling multiple events in an element.</li>
  <li>Download image modification</li>
</ul>

> Status: Completo.

### :construction_worker: How to run

### :bug: Issues
Feel free to **file a new issue** with a respective title and description on the the [${repository}](https://github.com/${userGithub}/${repository}/issues) repository. If you already found a solution to your problem, **i would love to review your pull request**!

### :closed_book: License
Released in 2020 :closed_book: License

Made with love by [${fullName}](https://github.com/${userGithub}/) 🚀.
This project is under the [MIT license](https://github.com/${userGithub}/${repository}/master/LICENSE).

Give a ⭐️ if this project helped you!

`;
}

//Questionario de perguntas
rl.question("Qual o perfil do GitHub? ", function(name) {
  fullName = name;
    rl.question("Qual o nome  do repositorio? ", function(repository) {
      repositoryGithub = repository;
        console.log(`Repositorio ${repository}, do usuario ${name}`);

        //Salve arquivo README.md na pasta local
        fs.writeFile("README.md", editMD(fullName, userGithub, repositoryGithub, social, color), function(erro) {

          if(erro) {
              throw erro;
          }
        
          console.log("Arquivo salvo");
        });
        rl.close();
    });
}); 


