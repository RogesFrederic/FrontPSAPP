import { Subject } from "rxjs";

export class JoueurService {
    joueursSubject = new Subject<any[]>();

    private joueurs = [
        {
            id: 1,
            name: 'Mbappé',
            cote: 215
        },
        {
            id: 2,
            name: 'Benzema',
            cote: 251
        },
        {
            id: 3,
            name: 'Lukaku',
            cote: 280
        }
    ];

    emitJoueurSubject() : void {
        this.joueursSubject.next(this.joueurs.slice());
    }

    updateAllService() : void {
        for (let joueur of this.joueurs) {
            joueur.name = "Est updaté";
        }
        this.emitJoueurSubject();
    }

    updateOneService(index: number) : void {
        this.joueurs[index].name = "Ce joueur est updaté";
        this.emitJoueurSubject();
    }

    setJoueurNom(index: number, nom: string) : void {
        this.joueurs[index].name = nom;
        this.emitJoueurSubject();
    }

    getJoueurById(id: number) {
        const joueur = this.joueurs.find(s => s.id == id);
        return joueur ? joueur : this.joueurs[0];
    }
}

