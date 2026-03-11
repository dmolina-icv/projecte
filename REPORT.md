# Nom del projecte

## 1. Dades generals

**Nom del projecte:**  

**Integrants:** Adrià Garcia Jordà i Daniel Molina Medina  

**Tecnologia principal:** React  

**Enllaç al repositori:**  
https://github.com/dmolina-icv/projecte  

**Data d'entrega:**  


## 2. Estat inicial del projecte

El projecte abans de començar amb el desplegament era un llistat de tasques senzill fet amb React, sense Docker i amb el següent `.gitignore`:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules/
dist/
dist-ssr
*.local
.env

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
```

## Estructura inicial del repositori

Inicialment el projecte:

- Només existia en local
- No estava pujat a GitHub
- No tenia workflow de branques
- No tenia Docker
- No tenia documentació completa

L’estructura bàsica era la típica d’un projecte React:

projecte/
│
├── src/
├── public/
├── package.json
├── package-lock.json
└── README.md


## Problemes detectats

Els principals problemes detectats eren:

- El projecte no estava versionat amb Git
- No hi havia treball col·laboratiu estructurat
- No existia dockerització
- No es podia desplegar fàcilment en un altre ordinador
- No hi havia documentació tècnica clara

## Existenacia de Docker

inicialment el projecte no tenia cap docker

## Problemes de configuració o dependències

Les dependències només es podien instal·lar manualment amb:

npm install


Durant la instal·lació també apareixien advertències de vulnerabilitats amb `npm audit`.

### Reflexió breu

Perquè el projecte es pogués considerar professional faltaven diversos elements importants:

- control de versions amb Git
- resolució de conflictes
- dockerització de l'aplicació



##  3. Workflow Git aplicat
Per treballar en equip es va utilitzar un model de branques basat en:

- `main` → branca principal
- `feature/...` → branques per funcionalitats o proves

## Model de branques utilitzat

Cada desenvolupador treballava en la seva pròpia branca i després es feia un **Pull Request** per integrar els canvis.

## Convencions de noms

S'han utilitzat noms descriptius com per exemple:

feature/docker-setup
feature/conflicte-1-adria
feature/conflicte-1-daniel
feature/conflicte-2-adria
feature/conflicte-2-daniel

## Estratègia de merge utilitzada

Els canvis s'han integrat a `main` utilitzant un **Pull Requests a GitHub**.

# 4. Conflicte 1 – Mateixa línia

## 4.1 Com s’ha provocat

El conflicte es va provocar modificant **la mateixa línia del fitxer README.md**.

Procés:

1. Adrià crea la branca:

feature/conflicte-1-adria


2. Modifica una línia del README.

3. Daniel crea la branca:

feature/conflicte-1-daniel


4. Modifica la mateixa línia amb un text diferent.

5. Es fa merge de la branca d’Adrià a `main`.

6. Quan es fa el merge de la branca de Daniel apareix el conflicte.

---

## 4.2 Missatge d’error generat

Git mostra el següent error:

CONFLICT (content): Merge conflict in README.md


I GitHub mostra el missatge:

This branch has conflicts that must be resolved


---

<<<<<<< HEAD
Text modificat per Adrià

Text modificat per Daniel

                            feature/conflicte-1-daniel


---

## 4.4 Resolució aplicada

Per resoldre el conflicte es va:

1. Obrir el fitxer `README.md`
2. Revisar els dos textos
3. Crear una versió final correcta
4. Eliminar els marcadors de conflicte

Després es va executar:

git add README.md
git commit -m "fix: resolve conflict in README"


Finalment es va comprovar que el merge funcionava correctament.

---

## 4.5 Reflexió

Aquest conflicte ens ha ajudat a entendre com Git detecta modificacions en la mateixa línia d’un fitxer i obliga a resoldre el conflicte manualment.

També hem entès la importància de revisar els canvis abans de fer merges en un projecte col·laboratiu.

---

# 5. Conflicte 2 – Dependències o estructura

## 5.1 Descripció del conflicte

El segon conflicte es va provocar modificant el fitxer:

package.json


Cada membre va modificar la mateixa línia del fitxer afegint versions diferents d'una dependència.

Quan es va intentar fer el merge va aparèixer el conflicte.

---

## 5.2 Error generat

Git mostra:

CONFLICT (content): Merge conflict in package.json


---

## 5.3 Resolució aplicada

Al fitxer apareixien els marcadors:

<<<<<<< HEAD
"conflicte-test": "1.0.0",

"conflicte-test": "2.0.0",

                            feature/conflicte-2-daniel


Es va decidir mantenir la versió final més recent.

Després es va executar:

git add package.json
git commit -m "fix: resolve dependency conflict"


---

## 5.4 Diferències respecte al conflicte anterior

El primer conflicte afectava un fitxer de documentació (`README.md`).

El segon conflicte afectava **les dependències del projecte**, cosa que pot provocar errors d’execució si no es resol correctament.

---

# 6. Dockerització

## 6.1 Arquitectura final

Per dockeritzar el projecte es van crear:

- `Dockerfile`
- `docker-compose.yml`
- `.dockerignore`

El Dockerfile utilitza:

- **Node** per construir l'aplicació
- **Nginx** per servir l'aplicació React

El `docker-compose.yml` defineix el servei web que executa el contenidor.

---

## 6.2 Variables d’entorn

En aquest projecte React no es necessiten variables d’entorn específiques.

Tot i així, en projectes reals és habitual utilitzar un fitxer `.env` per guardar configuracions sensibles.

Aquest fitxer **no es versiona** perquè pot contenir informació privada com claus o contrasenyes.

---

## 6.3 Persistència

En aquest projecte **no s’utilitzen volums**, ja que l'aplicació React és una aplicació estàtica que només serveix fitxers generats en el build.

---

## 6.4 Problemes trobats

Durant la dockerització es van trobar alguns problemes:

- errors inicials al Dockerfile
- branques divergents a Git
- errors de push sense upstream
- conflictes en merges
- advertències de vulnerabilitats de npm

Tots aquests problemes es van solucionar revisant la configuració, consultant un asistent IA i utilitzant correctament les comandes de Git.

---

# 7. Prova de desplegament des de zero

Si un usuari extern volguesi executar el projecte hauria de seguir els passos següents:

## 1. Clonar repositori

git clone https://github.com/dmolina-icv/projecte.git


## 2. Entrar al projecte

cd projecte


## 3. Executar Docker

docker compose up --build


## 4. Accedir a l’aplicació

Obrir el navegador a:

http://localhost:3000


## Ports utilitzats

port 3000

# 8. Repartiment de tasques

**Adrià Garcia**

- configuració inicial del projecte
- creació de branques
- generació del conflicte 1
- dockerització
- Report

**Daniel Molina**

- instal·lació de dependències
- generació del conflicte 2
- resolució de conflictes
- proves d'execució
- Report

---

# 9. Temps invertit

Temps aproximat dedicat:

Git i conflictes → 4 hores  
Docker → 4 hores  
Documentació → 2 hores  

Temps total: **10 hores Aproximadament**

---

# 10. Reflexió final

**Quina ha estat la part més complexa?**
La part que mes hens ha costat a sigut el segon conflicte, ja que no podiem fer que es provoques
**Què faríeu diferent en un projecte real?**

En un projecte real intentaríem planificar millor el workflow de branques per reduir conflictes.
**Heu entès realment com funcionen els conflictes i Docker?**
Si, Després d'aquest projecte entenem millor tant el funcionament dels conflictes de Git com el procés de desplegament utilitzant Docker.