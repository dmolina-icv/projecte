# Projecte React – Desplegament d'aplicacions web

## Descripció del projecte

Projecte del Tema2 fet amb React dockeritzat.

L’objectiu és convertir un projecte funcional en un projecte:

- Col·laboratiu
- Versionat correctament
- Dockeritzat
- Reproduïble amb una sola comanda


## Arquitectura del projecte

L’aplicació està formada per:

- Frontend React
- Build de producció generat amb Node
- Servidor Nginx per servir fitxers estàtics
- Docker multi-stage per optimitzar la imatge final

Flux d’execució amb Docker:

1. Node instal·la dependències
2. Es genera el build de producció
3. Nginx serveix els fitxers estàtics al port 80
4. Docker publica el servei al port 5173 (host)


## Requisits

Per executar el projecte cal tenir instal·lat:

- Node.js (si s’executa en local)
- Docker
- Docker Compose


## Execució local (sense Docker)

Instal·lar dependències:
npm install

Executar:
npm run dev

Accedir a:
http://localhost:5173


## Execució amb Docker

Construir i executar:
docker compose up --build

Accedir a:
http://localhost:5173

Per aturar el servei:
docker compose down


## Troubleshooting bàsic

Si hi ha errors amb el build:
docker compose down
docker compose up --build --no-cache

Si el port està ocupat:
- Canviar el port al fitxer `docker-compose.yml`

Si hi ha problemes amb dependències:
- Esborrar `node_modules`
- Tornar a executar `npm install`