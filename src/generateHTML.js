function createManagerCard(manager) {
    return `
    <div class="card">
    <div class="card-title">Manager:${manager.name}</div>
    <div class="card-body"></div>
</div>
    `
}

function createEngineerCard(engineer) {
    return `
    <div class="card">
    <div class="card-title">Engineer:${engineer.name}</div>
    <div class="card-body"></div>
</div>
    `
}

function createInternCard(intern) {
    return `
    <div class="card">
    <div class="card-title">Intern:${intern.name}</div>
    <div class="card-body"></div>
</div>
    `
}

function insertCard(team){
    const HTML = [];
    HTML.push(team.filter(employee => employee.getRole() === "Manager").map(manager => createManagerCard(manager)))
    HTML.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineerCard(engineer)).join(""))
    HTML.push(team.filter(employee => employee.getRole() === "Intern").map(intern => createInternCard(intern)).join(""))
    console.log(HTML)
    return HTML.join("")
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
        <header style="height:250px; color:white; background-color:black; width: 100%"><h1 style = "text-align:center; ">Company</h1></header>
        <main style="display:flex">
        ${insertCard(team)}
        </main>
    </div>

    
</body>
</html>
    `
}