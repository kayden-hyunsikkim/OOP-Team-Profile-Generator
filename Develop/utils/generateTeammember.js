const fs = require('fs');


function generateTeammember(data) {
    const filename = './dist/index.html'
    fs.writeFileSync(filename, `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,400;0,700;1,200&display=swap"
        rel="stylesheet" />
    <link rel="stylesheet" href="./dist/style.css">
    <title>Team member generator</title>
</head>

<body>
    <header id="header">
        <p>My Team</p>
    </header>
    <section>
    `);
    for (let i = 0; i < data.length; i++) {
        console.log(typeof data[0]);
        console.log(data[0].hasOwnProperty('officenumber'));
        if (data[i].hasOwnProperty('officenumber')) {
            fs.appendFileSync(filename, `
        <div class="card" style="width: 230px; display:inline-block; margin: 35px;">
        <div id="cardheader"class="card-header">
            <p>${data[i].name}</p>
            <p>Manager</p>
        </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${data[i].id}</li>
                <li class="list-group-item">Email: ${data[i].email}</li>
                <li class="list-group-item">Office number: ${data[i].officenumber}</li>
            </ul>
        </div>
        `)
        } else if (data[i].hasOwnProperty('Github')) {
            fs.appendFileSync(filename, `
            <div class="card" style="width: 230px; display:inline-block; margin: 35px;">
            <div id="cardheader" class="card-header">
                <p>${data[i].name}</p>
                <p>Engineer</p>
            </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Id: ${data[i].id}</li>
                    <li class="list-group-item">Email: ${data[i].email}</li>
                    <li class="list-group-item">Github: ${data[i].Github}</li>
                </ul>
            </div>
            `)
        } else {
            fs.appendFileSync(filename, `
                <div class="card" style="width: 230px; display:inline-block; margin: 35px;">
                <div id="cardheader" class="card-header">
                    <p>${data[i].name}</p>
                    <p>Intern</p>
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Id: ${data[i].id}</li>
                        <li class="list-group-item">Email: ${data[i].email}</li>
                        <li class="list-group-item">School: ${data[i].school}</li>
                    </ul>
                </div>
                `)
        }
    }
    fs.appendFileSync(filename, `
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    </body>
    `);  
}

module.exports = {
    generateTeammember
};
