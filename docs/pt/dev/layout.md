# Formato do layout

Layouts e personalizações são objetos JSON. Tudo o que entra no módulo, seja por importação, pelo editor ou pela API, passa por uma normalização: campos que faltam ganham o valor padrão e valores inválidos são descartados.

## Arquivo exportado

```json
{
  "format": "freeform-sheets.layout",
  "schema": 2,
  "module": "freeform-sheets",
  "moduleVersion": "0.4.2",
  "system": "dnd5e",
  "exportedAt": "2026-10-11T12:00:00.000Z",
  "actor": "Nome do personagem",
  "layout": { }
}
```

Na importação, só `layout` é usado. Um objeto de layout sozinho, sem o envelope, também é aceito.

## Layout (schema 2)

```js
{
  schema: 2,
  pages: [{ id, label, stage: { width, height, grid, background: { src, fit, color, opacity } } }],
  systemTab: { enabled, label },        // a ficha do sistema como última aba
  text: { fontFamily, fontSize, color }, // texto padrão de todas as páginas
  widgets: [{ id, type, page, label, x, y, w, h, rotation, locked, hidden, style, binding, options }]
}
```

| Campo | Detalhes |
| --- | --- |
| `pages` | De 1 a 20 páginas. `id` é único; a primeira página costuma ser `main`. |
| `stage.width`, `stage.height` | Tamanho da página em pixels, de 100 a 8000. Padrão: 1000 × 1400. |
| `stage.grid` | Grade de encaixe em pixels, de 0 a 200. Padrão: 5. |
| `stage.background.fit` | `fill`, `contain` ou `cover`. |
| `widgets` | Até 800 elementos. `page` é o `id` da página; um elemento de uma página que não existe vai para a primeira. |
| `x`, `y`, `w`, `h` | Posição e tamanho em pixels da página. |
| `rotation` | Graus, de -360 a 360. |

### Tipos e opções

| `type` | `options` (padrão) |
| --- | --- |
| `text` | `text` |
| `field` | `input` (`text`, `number`, `textarea`), `format` (`plain`, `html`), `placeholder`, `signed`, `readonly` |
| `checkbox` | `bit` (-1), `invert`, `mark` (`cross`, `check`, `fill`, `dot`), `shape` (`square`, `circle`), `markColor`, `boxColor` |
| `boxes` | `mode` (`count`, `bits`), `count` (0 = dos dados), `columns`, `gap` (6), `labels` (true), e as opções de marca |
| `image` | `mode` (`portrait`, `static`), `src`, `fit` (`cover`, `contain`, `fill`) |
| `roll` | `mode` (`item`, `formula`, `action`), `action`, `formula`, `text`, `showLabel` (true), `showRank` (true), `icon` (true) |
| `richtext` | `editable` (true) |
| `itemlist` | `itemType`, `display` (`name`, `name-rank`, `name-detail`, `name-description`), `clickAction` (`sheet`, `roll`, `chat`, `none`), `controls` (true), `icons` (false), `rowHeight` (28) |
| `shape` | nenhuma |

### Vínculos

```js
{ source: "none" }
{ source: "actor", path: "system.attributes.hp.value" }
{ source: "item", itemId: "abc123", itemName: "Lore", itemType: "skill", path: "system.rank" }
{ source: "custom", key: "xp" }
```

Num vínculo de item, `itemId` é procurado primeiro; se o item não existir, o módulo procura pelo nome (sem diferenciar maiúsculas) e pelo tipo.

### Estilo

`fontFamily`, `fontSize` (0 = padrão da página), `fontWeight` (`normal`, `bold`), `italic`, `uppercase`, `color`, `align` (`left`, `center`, `right`), `valign` (`top`, `middle`, `bottom`), `lineHeight`, `letterSpacing`, `background`, `borderColor`, `borderWidth`, `radius`, `padding`, `opacity` (0 a 1), `shadow`.

## Personalização da ficha do sistema

```js
{
  schema,
  sheetClass,                                   // a ficha em que a personalização vale
  background: { src, fit, opacity, color },
  elements: [{
    selector, label,
    dx, dy, scale, opacity,                     // deslocamento em pixels, escala a partir do centro
    hidden, front, positioned,                  // escondido (mantém o espaço), na frente do resto
    free, x, y, w,                              // solto do lugar, com posição e largura
    background, color,                          // "transparent" ou uma cor; cor do texto
    auto                                        // criado por "Mostrar a arte através desta aba"
  }]
}
```

O arquivo exportado usa `format: "freeform-sheets.skin"`.

## Segurança

Layouts e personalizações podem vir de qualquer jogador ou de um arquivo baixado, e são vistos pelo Mestre. Por isso a normalização:

- aceita cores, fontes e endereços de imagem só em formatos conhecidos; o resto vira vazio;
- aceita vínculos só a `name`, `img` e caminhos `system.…`, nunca a permissões ou flags;
- rejeita os segmentos `__proto__`, `prototype` e `constructor` nos caminhos;
- nos seletores das personalizações, aceita só uma gramática restrita (tag, classe, id, atributo com valor simples, `:nth-of-type`/`:nth-child` e os combinadores espaço e `>`), para um seletor nunca escapar da regra de estilo.

## Layouts antigos

Layouts do schema 1, com um único `stage` no topo, continuam funcionando: viram uma página `main` e ganham a aba da ficha do sistema. O formato novo só é gravado quando o layout é salvo de novo.
