# Cart Challenge 🛒✨

Velkommen til cart challenge!

Hovedmålet er å forstå hvilke utfordringer som kan oppstå i forbindelse med handlekurver og hvordan vi kan løse dette. I tillegg skal vi få få testet ut Vue 3 med typescript!

## Agenda
10:00 - 10:30 Introduksjon til kodebasen og installasjon av pakker.

10:30 - 12:00 Oppgaveløsning. Individuelt eller i grupper

13:30 - 14:00 Presentasjoner og diskusjon

## Oppgaver
1. Implementer cartModule.js slik at det går an å legge varer i handlekurven lokalt

1. Endre cartModule slik at den initialiseres med handlekurven fra backend.

1. Oppdater backend ved endringer i handlekurven slik at endringer fremdeles er der etter refresh. gjør dette ved å gette api/cart etter hver request og overskrive handlekurven. Da får vi også den oppdaterte totalprisen i responsen

1. Vis handlekurvens totalpris. Alle kunder har forskjellige priser, så dette må vi komme fra backendens api etter hver endring

1. Debounce endringer i handlekurven slik at vi ikke sender requests til backend mens brukeren fremdeles trykker på plussknappen. 500ms er en god ventetid.

1. Håndter at handlekurven kan laste tregt. Det kan allerede ligge varer i handlekurven fra før

1. Make it pretty

1. Importer typene som er deklarert i backend, slik at vi ikke trenger å duplisere dem

### Bonusoppgaver 🏎 
1. Test løsningen med Cypress
1. Skriv enhetstester til løsningen

# Hvordan kjøre
1. Installer node (minst v16)
2. Installer pakkene
```sh
$ npm install
```
3. Kjør opp backend
```sh
$ cd backend
$ node app.js
```
4. Start så webserveren med HMR fra rot
```sh
$ npm run dev
```
Endringer i frontend lastes nå automatisk, men backend må restartes hvis du gjør endringer.

# Recommended IDE Setup
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
