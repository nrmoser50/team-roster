function createManagerCard(manager) {
    return `
    <div class="card">
        <div class="card-title">
            <h3>${manager.name}</h3>
            <h4>Manager</h4><i class="fa-sharp fa-solid fa-user"></i>
        </div>

        <div class="card-body">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: ${manager.email}</p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
        </div>
</div>
    `
}

function createEngineerCard(engineer) {
    return `
    <div class="card">
    <div class="card-title">
        <h3>${engineer.name}</h3>
        <h4>Engineer</h4><i class="fa-sharp fa-solid fa-wrench-simple"></i>
    </div>

    <div class="card-body">
        <p class = "id">ID: ${engineer.id}</p>
        <p class = "email">Email: ${engineer.email}</p>
        <p class = "github">Github: ${engineer.github}</p>
    </div>

</div>
    `
}

function createInternCard(intern) {
    return `
    <div class="card">
    <div class="card-title">
        <h3>${intern.name}</h3>
        <h4>Engineer</h4><i class="fa-solid fa-circle-user"></i>
    </div>

    <div class="card-body">
        <p class = "id">ID: ${intern.id}</p>
        <p class = "email">Email: ${intern.email}</p>
        <p class = "github">Github: ${intern.school}</p>
    </div>

</div>
   
    `
}

function insertCard(team){
    const HTML = [];
    HTML.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManagerCard(manager)))
    HTML.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineerCard(engineer)).join(""))
    HTML.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createInternCard(intern)).join(""))
    console.log(HTML)
    return HTML.join("");
}

module.exports = function(team){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <title>Team Roster</title>
</head>
<body>
    <div class="container">
        <header style="height:100px; color:black; background-color:aqua; width: 100%"><h1 style = "text-align:center; ">Roster</h1></header>
        <main style="display:flex">
        ${insertCard(team)}
        </main>
    </div>

    <script src="https://kit.fontawesome.com/56b142c64e.js" crossorigin="anonymous"></script>
</body>
</html>
    `
}