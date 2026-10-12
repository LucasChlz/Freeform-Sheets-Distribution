# Adaptadores de sistema

O núcleo do Sheet Tailor (editor, elementos, vínculos) não conhece nenhum sistema. Tudo o que é específico de um sistema fica num **adaptador**: as sugestões de caminhos, as rolagens, as listas de itens, a ficha gerada. O D&D 5e, o Pathfinder 2e, o Daggerheart e o FateX são adaptadores; qualquer outro sistema usa o adaptador genérico.

Outro módulo, ou o próprio sistema, pode registrar um adaptador sem mexer no Sheet Tailor.

## A regra principal

**O adaptador chama o sistema; ele não reimplementa regra.** Cada botão deve chamar a mesma função que a ficha do sistema chama, para que diálogos, modificadores, cartões no chat e automações continuem iguais.

## Registrar um adaptador

```js
Hooks.once("freeformSheets.init", (api) => {
  class MeuSistemaAdapter extends api.GenericAdapter {
    id = "meu-sistema";

    matches(actor) {
      return game.system.id === "meu-sistema" && actor.type === "character";
    }

    get label() {
      return "Meu Sistema";
    }

    actorPaths(actor) {
      return [
        { path: "system.vida.value", label: "Vida" },
        ...super.actorPaths(actor)
      ];
    }

    actionGroups(actor) {
      return [{
        id: "atributos",
        label: "Atributos",
        entries: [{ key: "atributo:forca", label: "Força" }]
      }];
    }

    async runAction(actor, key, event) {
      if (key === "atributo:forca") return actor.rollAttribute("forca", { event });
      return super.runAction(actor, key, event);
    }
  }

  api.registerAdapter(new MeuSistemaAdapter());
});
```

- `id` e `matches(actor)` são obrigatórios. Para cada personagem, o módulo usa o primeiro adaptador cujo `matches` devolver `true`, do registrado por último para o primeiro. Assim, um adaptador seu pode substituir um dos que vêm com o módulo, e o genérico fica sempre por último.
- Registrar um adaptador com um `id` que já existe troca o anterior.
- Estenda `api.GenericAdapter` e sobrescreva só o que o sistema precisa.

## Métodos

| Método | Para que serve |
| --- | --- |
| `actorPaths(actor)`, `itemPaths(item)` | Sugestões do campo **Caminho do dado**: `[{ path, label }]`. O genérico sugere todos os dados guardados. |
| `itemTypes(actor)` | Tipos de item para as listas: `[{ type, label }]`. Pode incluir listas virtuais, como as seções do inventário. |
| `defaultItemPath(item, widgetType)` | Campo usado quando o elemento aponta para um item sem dizer o campo. |
| `fieldFormat(item, path)` | `"plain"` ou `"html"`, para dados que o sistema guarda como HTML. |
| `canWrite(document, path)`, `write(actor, widget, resolved, value, bindings)` | Gravar dados que o sistema trata de um jeito especial, como condições ou valores calculados. |
| `boxInfo(actor, widget, resolved)`, `toggleBox(actor, widget, resolved, index, bindings)` | Trilhas de caixas: quantas caixas, rótulos, estados, e o que acontece ao clicar. |
| `actionGroups(actor)`, `describeAction(actor, key)`, `runAction(actor, key, event)` | Rolagens que não são itens, para **Uma rolagem do sistema**: perícias, salvamentos, golpes. |
| `listItems(actor, type)`, `listRows(actor, type)` | Itens de uma lista. `listRows` pode repetir um item ou marcar linhas (`muted`, `faded`), como os espaços preparados do PF2e. |
| `itemRank(item)`, `itemDetail(item)`, `itemDescription(item)` | O que aparece ao lado do nome e na descrição das listas. |
| `rollItem(actor, item, event, row)`, `sendItemToChat(item, event)`, `createItem(actor, type)` | Usar, mandar ao chat e criar itens. |
| `rollFormula(actor, formula, flavor)` | Rolagem de fórmula. O genérico usa os dados de rolagem do personagem. |
| `dropItem(actor, item, { event, listType })` | Item solto na página. Devolva `undefined` para o Foundry criar o item como sempre. |
| `systemSheetClass(actor)` | A ficha mostrada na aba **Ficha padrão**. |
| `buildDefaultLayout(actor)` | A ficha gerada, com as páginas prontas. |
| `quickAddGroups(actor)`, `quickAddWidgets(actor, key)` | Os grupos e os elementos de **Dados da ficha**. |

## Dicas

- Identifique rolagens por texto estável (`skill:athletics`, `strike:<id da arma>:1`), nunca pela posição numa lista, que muda com o inventário.
- Use os rótulos da tradução do próprio sistema sempre que possível: o texto fica no idioma do jogador e o módulo não precisa de tradução nova.
- Os eventos de clique chegam ao adaptador: repasse o `event` para o sistema, que costuma ler teclas como <kbd>Shift</kbd> para pular diálogos.
