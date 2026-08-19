# Celestial Scribe TUI

TUI Python sans dependance externe pour tester plusieurs comptes contre l'API du challenge HTB Celestial Scribe, via Burp Suite.

Utiliser uniquement contre une cible que vous etes autorise a tester. L'application envoie toutes les requetes vers le proxy Burp configure; la creation de comptes et de notes modifie la cible distante.

## Lancement

Python 3.11 ou plus recent suffit:

```bash
python3 run.py \
  --htb-url http://154.57.164.82:30785 \
  --proxy-url http://127.0.0.1:8080
```

Les deux arguments sont requis:

- `--htb-url`: URL racine du serveur HTB, par exemple `http://154.57.164.82:30785`;
- `--proxy-url`: URL du listener Burp, par exemple `http://127.0.0.1:8080`.

Le listener proxy de Burp doit etre actif. Les URLs sans schema recoivent automatiquement `http://`; une URL contenant un chemin, une query string ou un fragment est refusee. Utiliser `python3 run.py --help` pour afficher l'aide CLI.

Pour installer une commande locale facultative:

```bash
python3 -m pip install -e .
celestial-scribe-tui --htb-url http://154.57.164.82:30785 --proxy-url http://127.0.0.1:8080
```

## Utilisation

- `A`: genere et enregistre un compte. Les identifiants ont la forme `u<hex>@a.a` avec le mot de passe `a` confirme par la capture.
- `Tab`, `[`, `]`: passe d'un compte a l'autre.
- `L`: force une connexion du compte courant.
- `V`: verifie le JWT du compte courant.
- `R`: execute `GET /api/auth/verify`, puis `GET /api/notes`.
- `Haut`/`Bas`, `Enter`: selectionne et ouvre une note. L'ouverture execute toujours `GET /check-permission` avant `GET /api/notes/<id>`.
- `G`: ouvre une note a partir d'un UUID saisi, utile pour verifier les interactions entre comptes; le meme controle de permission est applique.
- `C`: cree une note avec un UUID client; `\\n` dans le champ de contenu devient un retour a la ligne.
- `D`: supprime la note selectionnee apres confirmation explicite `yes`.
- `Q`: quitte.

Les comptes, mots de passe et JWT restent uniquement en memoire. Un `401` ou `403` sur une lecture securisee declenche un `POST /api/auth/login`, puis un unique retry de la sequence complete. Ainsi, une liste refait `verify` et l'ouverture d'une note refait `check-permission`. Pour un `POST` ou un `DELETE`, le JWT est rafraichi mais la requete n'est pas rejouee automatiquement; relancer l'action manuellement evite un effet de bord double. Les autres erreurs ne sont pas interpretees comme une expiration de JWT.

## Verification

```bash
python3 -m unittest discover -s tests -v
python3 -m compileall -q scribe_tui
```
