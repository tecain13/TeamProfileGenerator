function createMainHTML(message) {
    return `<!doctype html>
    <html lang="en">
    
    <head>
        <title>Team Profile Generator</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

            <script src="https://kit.fontawesome.com/e6646741c0.js" crossorigin="anonymous"></script>
    </head>
    
    
    <body>
    
        <section>
            <div class="jumbotron jumbotron-fluid" style="background-color:darkseagreen">
                <div class="container">
                    <h1 class="display-4" style="text-align: center; font-weight: bolder;">My Team</h1>
                </div>
            </div>
        </section>
        <section>
    
    
            <row>
                <div class="col-sm">

                   ${message}
    
                </div>
                <!--column 1-->
    
    
            </row>
    
    
        </section>
    
    
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`
};


function createMessage(obj) {
    let personnelInfo;
    switch (obj.getRole()) {
        case "Manager":
            personnelInfo = `Office number: ${obj.getOfficeNumber()}`;
            break;
        case "Engineer":
            personnelInfo = `Github username: ${obj.getGithub()}`;
            break;
        case "Intern":
            personnelInfo = `School: ${obj.getSchool()}`;
            break;
    }
    return `<div class="col-sm">
    <div class="card-header">Team Member</div>
    <div class="card-body">
    <h5 class="card-title">${ obj.getName()}</h5>
    <p class="card-text">${ obj.getRole()}</p>
    <p class="card-text">ID: ${ obj.getId()}</p>
    <p class="card-text">Email: ${ obj.getEmail()}</p>
    <p class="card-text">${personnelInfo}</p>
    </div>
    </div>

</div>\n`
}

module.exports = {
    createMainHTML: createMainHTML,
    createMessage: createMessage
};

