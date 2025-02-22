class Livre {
    constructor(titre, auteur, anneePublication) {
        this.titre = titre;
        this.auteur = auteur;
        this.anneePublication = anneePublication;
        this.suivant = null;
    }
}

class Bibliotheque {
    constructor() {
        this.listeLivres = null;
        this.listeArchive = null;
    }

    ajouterLivre(titre, auteur, annee) {
        const nouveauLivre = new Livre(titre, auteur, annee);

        if (!this.listeLivres) {
            this.listeLivres = nouveauLivre;
            return;
        }

        let dernier = this.listeLivres;
        while (dernier.suivant) {
            dernier = dernier.suivant;
        }
        dernier.suivant = nouveauLivre;
    }

    afficherLivres() {
        let livre = this.listeLivres;
        const livresAffiches = [];
        while (livre) {
            livresAffiches.push(`Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.anneePublication}`);
            livre = livre.suivant;
        }
        return livresAffiches.length ? livresAffiches.join('\n') : "Aucun livre enregistré.";
    }

    rechercherLivre(titre) {
        let livre = this.listeLivres;
        while (livre) {
            if (livre.titre === titre) {
                return livre;
            }
            livre = livre.suivant;
        }
        return null;
    }

    trierLivres() {
        let sorted = null;
        let current = this.listeLivres;

        while (current) {
            const next = current.suivant;
            if (!sorted || current.titre < sorted.titre) {
                current.suivant = sorted;
                sorted = current;
            } else {
                let temp = sorted;
                while (temp.suivant && current.titre >= temp.suivant.titre) {
                    temp = temp.suivant;
                }
                current.suivant = temp.suivant;
                temp.suivant = current;
            }
            current = next;
        }
        this.listeLivres = sorted;
    }

    archiverLivre(titre) {
        let livre = this.listeLivres;
        let prev = null;

        while (livre && livre.titre !== titre) {
            prev = livre;
            livre = livre.suivant;
        }

        if (!livre) {
            return `Livre '${titre}' non trouvé.`;
        }

        if (!prev) {
            this.listeLivres = livre.suivant;
        } else {
            prev.suivant = livre.suivant;
        }

        livre.suivant = this.listeArchive;
        this.listeArchive = livre;
        return `Livre '${titre}' archivé.`;
    }

    afficherArchives() {
        let livre = this.listeArchive;
        const livresAffiches = [];
        while (livre) {
            livresAffiches.push(`Titre: ${livre.titre}, Auteur: ${livre.auteur}, Année: ${livre.anneePublication}`);
            livre = livre.suivant;
        }
        return livresAffiches.length ? livresAffiches.join('\n') : "Aucun livre archivé.";
    }
}

const bibliotheque = new Bibliotheque();

// Fonction pour mettre à jour l'affichage des livres
function mettreAJourAffichage() {
    const livresAffiches = bibliotheque.afficherLivres();
    document.getElementById("listeLivres").textContent = livresAffiches;
}

// Fonction pour ajouter un livre
function ajouterLivre() {
    const titre = document.getElementById("titre").value;
    const auteur = document.getElementById("auteur").value;
    const annee = document.getElementById("annee").value;

    bibliotheque.ajouterLivre(titre, auteur, annee);
    mettreAJourAffichage();
}

// Fonction pour rechercher et afficher un livre
function rechercherLivre() {
    const titreRecherche = document.getElementById("titreRecherche").value;
    const livreTrouve = bibliotheque.rechercherLivre(titreRecherche);
    
    const resultatRecherche = document.getElementById("resultatRecherche");
    if (livreTrouve) {
        resultatRecherche.textContent = `Livre trouvé : Titre: ${livreTrouve.titre}, Auteur: ${livreTrouve.auteur}, Année: ${livreTrouve.anneePublication}`;
    } else {
        resultatRecherche.textContent = `Livre '${titreRecherche}' non trouvé.`;
    }
}

// Fonction pour archiver un livre
function archiverLivre() {
    const titre = document.getElementById("titreRecherche").value;
    const message = bibliotheque.archiverLivre(titre);
    alert(message);
    mettreAJourAffichage();
}

// Initialiser l'affichage
mettreAJourAffichage();

function reinitialiserFormulaire() {
    // Récupérer le formulaire par son ID (ajoutez l'ID à votre balise <form>)
    document.getElementById("monFormulaire").reset();
}