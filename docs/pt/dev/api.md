# API e ganchos

O Sheet Tailor expõe uma API pequena para macros e outros módulos. O identificador do módulo continua `freeform-sheets`, então é por ele que a API é encontrada.

```js
const api = game.modules.get("freeform-sheets").api;
```

A API fica disponível a partir do gancho `init` do Foundry. Para usá-la assim que estiver pronta, escute o gancho `freeformSheets.init`, que recebe a própria API.

## Funções

| Membro | O que faz |
| --- | --- |
| `api.version` | Versão da API. Hoje é `2`: a versão 2 trouxe os modelos de layout. |
| `api.getLayout(actor)` | O layout salvo no personagem, já normalizado, ou `null` se ele usa a ficha gerada. |
| `await api.setLayout(actor, layout)` | Normaliza e salva um layout no personagem. Devolve o layout salvo e dispara `freeformSheets.layoutSaved`. |
| `await api.clearLayout(actor)` | Apaga o layout salvo; o personagem volta para a ficha gerada. |
| `api.normalizeLayout(data)` | Valida e completa um layout, como numa importação. Veja [Formato do layout](/pt/dev/layout). |
| `api.getLayoutTemplates()` | Os modelos de layout salvos no mundo, cada um `{ id, name, system, layout }`. |
| `await api.applyLayoutTemplate(actor, templateId, { keepArtwork })` | Salva o layout de um modelo no personagem, como **Aplicar nesta ficha** seguido de salvar: os itens são encontrados pelo tipo e pelo nome e, com `keepArtwork` (ligado por padrão), cada página fica com a arte do layout salvo do personagem. Um personagem sem layout salvo recebe a arte do modelo. Devolve o layout salvo, ou `null` se o modelo não existir. |
| `api.getSkin(actor)` | A personalização da ficha do sistema salva no personagem, ou `null`. |
| `await api.setSkin(actor, skin)` | Valida e salva uma personalização, como numa importação. Uma personalização vazia remove a atual. |
| `api.normalizeSkin(data)` | Valida e completa uma personalização. |
| `api.registerAdapter(adapter)` | Registra um adaptador de sistema. Veja [Adaptadores de sistema](/pt/dev/adaptadores). |
| `api.GenericAdapter` | A classe base dos adaptadores. |
| `api.sheetClass` | A classe da Ficha Livre (`ActorSheetV2`). |

## Ganchos

| Gancho | Argumentos | Quando |
| --- | --- | --- |
| `freeformSheets.init` | `(api)` | No `init` do Foundry, logo depois de a API ficar disponível. |
| `freeformSheets.layoutSaved` | `(actor, layout)` | Depois que um layout é salvo, pelo editor ou por `setLayout`. |

## Onde os dados ficam

| Dado | Onde |
| --- | --- |
| Layout da Ficha Livre | `actor.flags["freeform-sheets"].layout` |
| Personalização da ficha do sistema | `actor.flags["freeform-sheets"].skin` |
| Valores personalizados | `actor.flags["freeform-sheets"].data` |
| Modelos de personalização | configuração de mundo `freeform-sheets.skinTemplates` |
| Modelos de layout | configuração de mundo `freeform-sheets.layoutTemplates` |

Prefira a API a mexer nessas flags diretamente: a API normaliza os dados e dispara os ganchos.

## Exemplos

Copiar o layout de um personagem para outro. Os elementos ligados a itens encontram os itens do outro personagem pelo tipo e pelo nome:

```js
const api = game.modules.get("freeform-sheets").api;
const layout = api.getLayout(game.actors.getName("Vera Kincaid"));
if (layout) await api.setLayout(game.actors.getName("Ana Ribeiro"), layout);
```

Pôr a Ficha Livre e o mesmo layout em todos os personagens de uma pasta:

```js
const api = game.modules.get("freeform-sheets").api;
const modelo = api.getLayout(game.actors.getName("Modelo"));
const pasta = game.folders.getName("Grupo");
if (!modelo) throw new Error("O personagem Modelo não tem um layout salvo.");
for (const actor of pasta.contents) {
  await api.setLayout(actor, modelo);
  await actor.setFlag("core", "sheetClass", "freeform-sheets.FreeformSheet");
}
```

Aplicar o modelo "Ficha do grupo" em todos os personagens de uma pasta, cada um com a própria arte:

```js
const api = game.modules.get("freeform-sheets").api;
const modelo = api.getLayoutTemplates().find((entry) => entry.name === "Ficha do grupo");
if (!modelo) throw new Error("Não existe um modelo chamado Ficha do grupo.");
for (const actor of game.folders.getName("Grupo").contents) {
  await api.applyLayoutTemplate(actor, modelo.id);
  await actor.setFlag("core", "sheetClass", "freeform-sheets.FreeformSheet");
}
```

Avisar no console sempre que um layout é salvo:

```js
Hooks.on("freeformSheets.layoutSaved", (actor, layout) => {
  console.log(`${actor.name}: ${layout.widgets.length} elementos em ${layout.pages.length} páginas`);
});
```
