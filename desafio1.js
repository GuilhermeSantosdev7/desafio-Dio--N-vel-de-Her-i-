
let nome = "Link"
let experiencia = 2001
let xp = ""

switch (true){
    case experiencia <= 1000:
         xp = "Ferro"
    break;
    case experiencia >= 1001 && experiencia <= 2000:
        xp = "Bronze"
        break;
    case experiencia >= 2001 && experiencia <= 5000:
        xp = "Prata"
        break;
    case experiencia >= 6001 && experiencia <= 7000:
        xp = "Ouro"
        break; 
    case experiencia >= 7001 && experiencia <= 8000:
        xp = "Platina"
        break;
    case experiencia >= 8001 && experiencia <= 9000:
        xp = "Diamante"
        break;
    case experiencia >= 9001 && experiencia <= 10000:
        xp = "Ascendente"
        break;
    case experiencia >= 9001 && experiencia <= 10000:
        xp = "Imortal"
        break;
    case experiencia >= 10001:
        xp = "Radiante"
            break;
            default:
}

    console.log("O Herói de nome " + nome + " está no nivel " + xp )