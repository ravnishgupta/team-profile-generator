const writeFile = require('./generate-site');

const generateTeam = teamArr => {
    let teamHTML = `<!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <!-- <link rel="stylesheet" href="style.css"> -->
    </head>
  
    <body>
      <header>
        <div class="d-flex justify-content-center bg-info">
          <h2>My Team</h2>
        </div>
      </header>
      <main>
        <div class="row justify-content-center">
          `
            teamArr.forEach(object => {
            teamHTML += 
           `<div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${object.name} (${object.getRole()})</h5>
                <p class="card-text">ID: ${object.id}</p>
                <p class="card-text">Email: <a href='mailto:${object.email}'>${object.email}</a></p>
                <p class="card-text">${(object.getRole().toUpperCase() === 'MANAGER') ? `Office Number: ${object.officeNumber}`
                                : object.getRole().toUpperCase() === 'ENGINEER'? `Github: <a href='https://github.com/${object.github}' target='_blank'>${object.github}</a>`
                                : `School: ${object.school}`}</p>
              </div>
            </div>`
    })
    teamHTML += `</div>
                </main>
                </body>
                </html>`
    return(writeFile(teamHTML));
}

module.exports = generateTeam;
