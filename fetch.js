fetch('https://www.gaming-style.com/RushTeam/RushTeamWebGL/Pages/GetKeyNewGet.php?GetInfo=oxMwlTJpdc3IIbSXN6XY9HGLh3R15P1ihGAfFO%2bX%2fUA%3d').then((res) => res.php())
.then(response => {
    console.log(response)
}).catch(error => console.log(error));
