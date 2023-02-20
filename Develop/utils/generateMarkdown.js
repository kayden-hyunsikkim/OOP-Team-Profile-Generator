const fs = require('fs');


function generateMarkdown(data) {
  const filename = 'index.html'
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
    <link rel="stylesheet" href="./style.css">
    <title>Team member generator</title>
</head>

<body>
    <header id="header">
        <p>My Team</p>
    </header>

    <div>
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
        integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U=" crossorigin="anonymous"></script>
    <script src="./assets/script.js"></script>
</body>

</html>
  
`);

;
}

module.exports = {
  generateMarkdown
};
