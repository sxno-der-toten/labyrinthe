let m = 'm';
let p = 'p';
let b = 'b'; 
let f = "f";

let xperso = 1; 
let yperso = 1; 

let labyCoordinate = [
    [m, m, m, m, m, m, m, m, m, m],
    [m, p, m, b, b, b, b, b, b, m],
    [m, b, m, b, m, m, m, b, m, m],
    [m, b, m, b, m, b, m, b, b, m],
    [m, b, b, b, m, b, m, m, b, m],
    [m, b, m, b, m, b, b, b, b, f],
    [m, m, m, m, m, m, m, m, m, m]
];

function affichage() {
    let elementLaby = document.querySelector("#laby");
    let html = "<table border=0 cellspacing=0 cellpadding=0'>";

    for (let i = 0; i < 7; i++) {
        html += "<tr>";
        for (let j = 0; j < 10; j++) {
            if (labyCoordinate[i][j] == m) {
                html += "<td>";
                html += "<img width='52px' height='52px' src='assets/src/stonewall.png'>";
                html += "</td>";
            }
            if (labyCoordinate[i][j] == p) {
                html += "<td>";
                html += "<img width='52px' height='52px' style='background-image:assets/src/ground.png' src='assets/src/kappa.png'>";
                html += "</td>";
            }
            if (labyCoordinate[i][j] == b) {
                html += "<td>";
                html += "<img width='52px' height='52px' src='assets/src/ground.png'>";
                html += "</td>";
            }
            if (labyCoordinate[i][j] == f) {
                html += "<td>";
                html += "<img width='52px' height='52px' src='assets/src/trophy.png'>";
                html += "</td>";
            }
        }
        html += "</tr>";
    }

    html += "</table>";
    elementLaby.innerHTML = html;
}

function move(dx, dy) {
    let newX = xperso + dx;
    let newY = yperso + dy;

    if (newX >= 0 && newX < labyCoordinate.length && newY >= 0 && newY < labyCoordinate[0].length) {
        if (labyCoordinate[newX][newY] !== m) {
            labyCoordinate[xperso][yperso] = b;
            xperso = newX;
            yperso = newY;
            if (labyCoordinate[xperso][yperso] === f) {
                labyCoordinate[xperso][yperso] = p;
                affichage();
                setTimeout(afficherPopupVictoire, 100);
            } else {
                labyCoordinate[xperso][yperso] = p;
                affichage();
            }
        }
    }
}

function afficherPopupVictoire() {
    alert("Félicitations ! Vous avez gagné la partie !");
}

function startGame() {
    affichage(); 
    document.querySelector(".container").classList.add("gameStarted");
    document.querySelector("#startButton").style.display = "none";

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            move(-1, 0); 
        } else if (event.key === 'ArrowDown') {
            move(1, 0); 
        } else if (event.key === 'ArrowLeft') {
            move(0, -1); 
        } else if (event.key === 'ArrowRight') {
            move(0, 1); 
        }
    });
}
