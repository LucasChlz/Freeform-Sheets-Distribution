# System adapters

Sheet Tailor's core (editor, elements, links) knows no system. Everything specific to a system lives in an **adapter**: the path suggestions, the rolls, the item lists, the generated sheet. D&D 5e, Pathfinder 2e, Daggerheart and FateX are adapters; any other system uses the generic adapter.

Another module, or the system itself, can register an adapter without changing Sheet Tailor.

## The main rule

**The adapter calls the system; it does not reimplement rules.** Each button should call the same function the system sheet calls, so dialogs, modifiers, chat cards and automations stay the same.

## Register an adapter

```js
Hooks.once("freeformSheets.init", (api) => {
  class MySystemAdapter extends api.GenericAdapter {
    id = "my-system";

    matches(actor) {
      return game.system.id === "my-system" && actor.type === "character";
    }

    get label() {
      return "My System";
    }

    actorPaths(actor) {
      return [
        { path: "system.health.value", label: "Health" },
        ...super.actorPaths(actor)
      ];
    }

    actionGroups(actor) {
      return [{
        id: "attributes",
        label: "Attributes",
        entries: [{ key: "attribute:might", label: "Might" }]
      }];
    }

    async runAction(actor, key, event) {
      if (key === "attribute:might") return actor.rollAttribute("might", { event });
      return super.runAction(actor, key, event);
    }
  }

  api.registerAdapter(new MySystemAdapter());
});
```

- `id` and `matches(actor)` are required. For each character, the module uses the first adapter whose `matches` returns `true`, from the most recently registered to the first. That way, your adapter can replace one of those that ship with the module, and the generic one always comes last.
- Registering an adapter with an `id` that already exists replaces the previous one.
- Extend `api.GenericAdapter` and override only what the system needs.

## Methods

| Method | What it is for |
| --- | --- |
| `actorPaths(actor)`, `itemPaths(item)` | Suggestions of the **Data path** field: `[{ path, label }]`. The generic adapter suggests all the stored data. |
| `itemTypes(actor)` | Item types for lists: `[{ type, label }]`. May include virtual lists, such as the inventory sections. |
| `defaultItemPath(item, widgetType)` | Field used when the element points to an item without naming the field. |
| `fieldFormat(item, path)` | `"plain"` or `"html"`, for data the system stores as HTML. |
| `canWrite(document, path)`, `write(actor, widget, resolved, value, bindings)` | Writing data the system handles in a special way, such as conditions or calculated values. |
| `boxInfo(actor, widget, resolved)`, `toggleBox(actor, widget, resolved, index, bindings)` | Box tracks: how many boxes, labels, states, and what happens on click. |
| `actionGroups(actor)`, `describeAction(actor, key)`, `runAction(actor, key, event)` | Rolls that are not items, for **A roll of the system**: skills, saves, strikes. |
| `listItems(actor, type)`, `listRows(actor, type)` | The items of a list. `listRows` may repeat an item or tag rows (`muted`, `faded`), like PF2e's prepared slots. |
| `itemRank(item)`, `itemDetail(item)`, `itemDescription(item)` | What shows next to the name and in the description of lists. |
| `rollItem(actor, item, event, row)`, `sendItemToChat(item, event)`, `createItem(actor, type)` | Using, posting to chat and creating items. |
| `rollFormula(actor, formula, flavor)` | Formula roll. The generic adapter uses the character's roll data. |
| `dropItem(actor, item, { event, listType })` | An item dropped on the page. Return `undefined` to let Foundry create the item as usual. |
| `systemSheetClass(actor)` | The sheet shown in the **Standard Sheet** tab. |
| `buildDefaultLayout(actor)` | The generated sheet, with the ready-made pages. |
| `quickAddGroups(actor)`, `quickAddWidgets(actor, key)` | The groups and elements of **Sheet data**. |

## Tips

- Identify rolls by stable text (`skill:athletics`, `strike:<weapon id>:1`), never by their position in a list, which changes with the inventory.
- Use the labels of the system's own translation whenever possible: the text shows in the player's language and the module needs no new translation.
- Click events reach the adapter: pass the `event` on to the system, which often reads keys like <kbd>Shift</kbd> to skip dialogs.
