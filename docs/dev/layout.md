# Layout format

Layouts and customizations are JSON objects. Everything that enters the module, through import, the editor or the API, goes through normalization: missing fields get their default value and invalid values are dropped.

## Exported file

```json
{
  "format": "freeform-sheets.layout",
  "schema": 2,
  "module": "freeform-sheets",
  "moduleVersion": "0.4.2",
  "system": "dnd5e",
  "exportedAt": "2026-10-11T12:00:00.000Z",
  "actor": "Character name",
  "layout": { }
}
```

On import, only `layout` is used. A bare layout object, without the envelope, is accepted too.

## Layout (schema 2)

```js
{
  schema: 2,
  pages: [{ id, label, stage: { width, height, grid, background: { src, fit, color, opacity } } }],
  systemTab: { enabled, label },        // the system sheet as the last tab
  text: { fontFamily, fontSize, color }, // default text of every page
  widgets: [{ id, type, page, label, x, y, w, h, rotation, locked, hidden, style, binding, options }]
}
```

| Field | Details |
| --- | --- |
| `pages` | 1 to 20 pages. `id` is unique; the first page is usually `main`. |
| `stage.width`, `stage.height` | Page size in pixels, from 100 to 8000. Default: 1000 × 1400. |
| `stage.grid` | Snap grid in pixels, from 0 to 200. Default: 5. |
| `stage.background.fit` | `fill`, `contain` or `cover`. |
| `widgets` | Up to 800 elements. `page` is the page `id`; an element of a page that does not exist goes to the first page. |
| `x`, `y`, `w`, `h` | Position and size in page pixels. |
| `rotation` | Degrees, from -360 to 360. |

### Types and options

| `type` | `options` (default) |
| --- | --- |
| `text` | `text` |
| `field` | `input` (`text`, `number`, `textarea`), `format` (`plain`, `html`), `placeholder`, `signed`, `readonly` |
| `checkbox` | `bit` (-1), `invert`, `mark` (`cross`, `check`, `fill`, `dot`), `shape` (`square`, `circle`), `markColor`, `boxColor` |
| `boxes` | `mode` (`count`, `bits`), `count` (0 = from the data), `columns`, `gap` (6), `labels` (true), and the mark options |
| `image` | `mode` (`portrait`, `static`), `src`, `fit` (`cover`, `contain`, `fill`) |
| `roll` | `mode` (`item`, `formula`, `action`), `action`, `formula`, `text`, `showLabel` (true), `showRank` (true), `icon` (true) |
| `richtext` | `editable` (true) |
| `itemlist` | `itemType`, `display` (`name`, `name-rank`, `name-detail`, `name-description`), `clickAction` (`sheet`, `roll`, `chat`, `none`), `controls` (true), `icons` (false), `rowHeight` (28) |
| `shape` | none |

### Links

```js
{ source: "none" }
{ source: "actor", path: "system.attributes.hp.value" }
{ source: "item", itemId: "abc123", itemName: "Lore", itemType: "skill", path: "system.rank" }
{ source: "custom", key: "xp" }
```

In an item link, `itemId` is looked up first; if that item does not exist, the module looks for one by name (case-insensitive) and type.

### Style

`fontFamily`, `fontSize` (0 = page default), `fontWeight` (`normal`, `bold`), `italic`, `uppercase`, `color`, `align` (`left`, `center`, `right`), `valign` (`top`, `middle`, `bottom`), `lineHeight`, `letterSpacing`, `background`, `borderColor`, `borderWidth`, `radius`, `padding`, `opacity` (0 to 1), `shadow`.

## Customization of the system sheet

```js
{
  schema,
  sheetClass,                                   // the sheet the customization applies to
  background: { src, fit, opacity, color },
  elements: [{
    selector, label,
    dx, dy, scale, opacity,                     // offset in pixels, scale from the center
    hidden, front, positioned,                  // hidden (keeps its space), in front of the rest
    free, x, y, w,                              // placed freely, with position and width
    background, color,                          // "transparent" or a color; text color
    auto                                        // created by "Show the artwork through this tab"
  }]
}
```

The exported file uses `format: "freeform-sheets.skin"`.

## Security

Layouts and customizations can come from any player or from a downloaded file, and the GM sees them. That is why normalization:

- only accepts colors, fonts and image addresses in known formats; anything else becomes empty;
- only accepts links to `name`, `img` and `system.…` paths, never to permissions or flags;
- rejects the `__proto__`, `prototype` and `constructor` segments in paths;
- in customization selectors, only accepts a restricted grammar (tag, class, id, attribute with a simple value, `:nth-of-type`/`:nth-child` and the space and `>` combinators), so a selector can never escape its style rule.

## Older layouts

Schema 1 layouts, with a single top-level `stage`, keep working: they become a `main` page and gain the system sheet tab. The new format is only written when the layout is saved again.
