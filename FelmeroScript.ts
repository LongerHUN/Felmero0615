document.write("<hr>1.Feladat<hr>")
function DiakInfo(nev: string, osztaly: number, tipus: boolean): void {
    let kiirandoSzoveg: string = "";
    kiirandoSzoveg += nev + " ";
    kiirandoSzoveg += "[Team" + osztaly + "]"
    if (tipus = true) {
        kiirandoSzoveg += " - Junior Fontend"
    }
    if (tipus = false) {
        kiirandoSzoveg += " - Webprogramozó"
    }
    document.write(kiirandoSzoveg)
}
DiakInfo("Minta Márton", 8, true);

document.write("<hr>2.Feladat<hr>")

function SzovegesErtekeles(jegy: number): void {
    let sablon: [string, string] = ["", ""];
    if (jegy = 5) {
        sablon = ["Példás", "Példás"];
    }
    if (jegy = 4) {
        sablon = ["Jó", "Jó"];
    }
    if (jegy = 3) {
        sablon = ["Változó", "Változó"];
    }
    if (jegy = 2) {
        sablon = ["Hanyag", "Rossz"];
    }
    document.write(`[${sablon}]`)
}
SzovegesErtekeles(2);

document.write("<hr>3.Feladat<hr>")

function HarommalOszthatokSzama(tomb: number[]): void {
    let ertek: number = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (tomb[i] % 3 == 0) {
            ertek += 1;
        }
    }
    document.write(`${ertek}`);
}
HarommalOszthatokSzama([10, 23, 12, 24, 31, 33, 42, 20]);

document.write("<hr>4.Feladat<hr>")

function Nyeroszamok(mennyiseg: number, alsoHatar: number, felsoHatar: number):  number[] {
    let tombNyeroszamok: number[] = [];
    for (let i = 0; i < mennyiseg; i++) {
        let generaltSzam: number = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        tombNyeroszamok.push(generaltSzam);
    }
    for (let k = 0; k < tombNyeroszamok.length; k++){
        for(let j = 0; j < tombNyeroszamok.length; j++)
        if(tombNyeroszamok[k]==tombNyeroszamok[j]){
            tombNyeroszamok[k] = Math.round(Math.random() * (felsoHatar - alsoHatar)) + alsoHatar;
        }
    }
    return tombNyeroszamok;
}
document.write(`${Nyeroszamok(5, 1, 90)}`);