function oppCrikel(straal){
    let uitkomstCirkel = Math.PI * straal *straal;
    console.log('De oppervlakte van een cirkel is: ' + uitkomstCirkel);
}

function oppDriehoek(basis, hoogte){
    let uitkomstDriehoek = basis * hoogte / 2;
    console.log('De oppervlakte van een driehoek is: ' + uitkomstDriehoek);
}

function oppRechthoekEnVierkant(zijde, zijde2 = zijde){
    let uitkomst = zijde * zijde2;
    console.log('De oppervlakte van een rechthoek/vierkant is: ' + uitkomst);
}

oppCrikel(5);
oppDriehoek(7, 3);
oppRechthoekEnVierkant(3, 5);
oppRechthoekEnVierkant(7);