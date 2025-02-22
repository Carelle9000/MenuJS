// Fonction pour afficher le menu
function showMenu() {
    console.log("Menu :");
    console.log("1. Maturité");
    console.log("2. Parité");
    console.log("3. Les mois de l'année");
    console.log("4. Le nombre secret");
    console.log("5. La méthode for");
    console.log("6. La méthode while");
    console.log("7. Les suites de Fibonacci");
    console.log("8. Quitter");

    const choice = prompt("Veuillez choisir une option (1, 2, 3, 4, 5, 6, 7 ou 8) :");

    switch (choice) {
        case '1':
            const age = parseInt(prompt("Veuillez entrer votre âge pour vérifier votre maturité :"));
            maturite(age);
            break;
        case '2':
            const nbre = parseInt(prompt("Entrez un nombre pour vérifier sa parité :"));
            parite(nbre);
            break;
        case '3':
            const mois = parseInt(prompt("Entrez un nombre pour vérifier son mois :"));
            month(mois);
            break;
        case '4':
            secret_number(); // Appel sans argument
            break;
        case '5':
            for1(); // Retirer le paramètre
            break;
        case '6':
            while1(); // Retirer le paramètre
            break;
        case '7':
            const N = parseInt(prompt("Entrez le nombre de termes de la séquence de Fibonacci à afficher :"));
            fibonacciSequence(N);
            break;
        case '8':
            console.log("Au revoir !");
            return; // Quitter la fonction pour terminer le programme
        default:
            console.log("Choix invalide. Veuillez réessayer.");
    }

    // Afficher le menu à nouveau après l'exécution d'une fonction
    showMenu();
}

// fonction Maturité
function maturite(age) {
    if (isNaN(age) || age < 0) {
        console.log("Ce n'est pas un chiffre valide. Veuillez réessayer.");
        return;
    }
    if (age < 18) {
        console.log("Vous êtes mineur");
    } else {
        console.log("Vous êtes majeur");
    }
}

// fonction parité
function parite(nbre) {
    if (isNaN(nbre)) {
        console.log("Veuillez entrer une valeur de type number.");
        return;
    }
    if (nbre % 2 === 0) {
        console.log("Ce nombre est pair");
    } else {
        console.log("Ce nombre est impair");
    }
}

// fonction les mois de l'année
function month(mois) {
    if ( !Number.isInteger(mois) || mois.trim() === "" || mois < 1 || mois > 12 ) {
        console.log("Ce n'est pas un chiffre valide. Veuillez réessayer");
        return;
    }

    switch (mois) {
        case 1: console.log("janvier"); break;
        case 2: console.log("février"); break;
        case 3: console.log("mars"); break;
        case 4: console.log("avril"); break;
        case 5: console.log("mai"); break;
        case 6: console.log("juin"); break;
        case 7: console.log("juillet"); break;
        case 8: console.log("août"); break;
        case 9: console.log("septembre"); break;
        case 10: console.log("octobre"); break;
        case 11: console.log("novembre"); break;
        case 12: console.log("décembre"); break;
        default: console.log("mois invalide");
    }
}

// fonction nombre secret
function secret_number() {
    let nombreSecret = Math.floor(Math.random() * 100) + 1;
    let proposition;
    let essais = 0;

    do {
        proposition = prompt("Devinez le nombre secret entre 1 et 100 :");
        proposition = parseInt(proposition);
        essais++;

        if (isNaN(proposition)) {
            console.log("Veuillez entrer un nombre valide.");
            continue; // Recommencer la boucle
        }

        if (proposition < nombreSecret) {
            console.log("Le nombre secret est plus grand.");
        } else if (proposition > nombreSecret) {
            console.log("Le nombre secret est plus petit.");
        } else {
            console.log("Félicitations ! Vous avez deviné le nombre secret en " + essais + " essais.");
            console.log("Le nombre secret est:" + nombreSecret);
        }

    } while (proposition !== nombreSecret);
}

// méthode for
function for1() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}

// méthode while
function while1() {
    let i = 0; // Initialiser i
    while (i < 100) {
        console.log(i);
        i++;
    }
}

// Fonction pour générer et afficher la séquence de Fibonacci
function fibonacciSequence(N) {
    if (N <= 0) {
        console.log("Veuillez entrer un nombre entier positif.");
        return;
    }

    let a = 0; // Premier terme de Fibonacci
    let b = 1; // Deuxième terme de Fibonacci

    console.log("Séquence de Fibonacci :");

    for (let i = 1; i <= N; i++) {
        if (i === 1) {
            console.log(a);
        } else if (i === 2) {
            console.log(b);
        } else {
            let c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }
}

// Démarrer le programme en affichant le menu
showMenu();