---
aiPortrait: true
---

# Pathfinder 2e

Sheet Tailor has dedicated support for the **Pathfinder Second Edition** system (pf2e), for characters and NPCs. It was verified with PF2e 7.12.2 on Foundry 13 and with 8.6.0 on Foundry 14.

![The Pathfinder 2e Freeform Sheet: the tabs of the system sheet, with rolls and lists working](/media/04-freeform-pf2e.gif)

## Customize the Pathfinder 2e sheet

The **Customize sheet** button is at the top of the PF2e sheet window. The PF2e sidebar is a scrolling area: to take a block from it to another corner of the sheet, use **Place freely**. See [Customize sheet](/guide/customize-sheet).

![A customized Pathfinder 2e sheet, with artwork behind it and see-through panels](/media/02-customized-pf2e.webp)

## The Pathfinder 2e Freeform Sheet

The generated sheet follows the tabs of the PF2e sheet, and the PF2e sheet itself is the last tab.

| Page | What it has |
| --- | --- |
| **Character** | Identity, level and experience, hit points, AC, hero points, speed, perception, initiative, class DC, dying, wounded and doomed with the recovery check, focus points, saving throws, attributes, skills and lores, languages. |
| **Actions** | Every strike with the multiple attack penalty, damage and critical; then actions, reactions and free actions, and the exploration and downtime activities. NPCs also get their passive abilities. |
| **Spells** | One section per spellcasting entry, with its spell attack and DC; the spell slots (spontaneous casters) or the prepared slots themselves; focus spells and points, innate uses and rituals. |
| **Inventory** | Coins, bulk and invested items; then weapons, armor and shields, equipment, consumables, treasure and containers, with quantity, bulk and whether it is held or worn. |
| **Feats** | Ancestry, class, skill, general and bonus feats, and the class and ancestry features. |
| **Effects** | Conditions and effects. |
| **Biography** | Every PF2e biography field. For NPCs, the **Notes** page. |

NPCs start with a creature page instead of the character page.

## Rolls

Every roll is the PF2e roll, with the system's modifiers, dialogs and chat cards:

- perception, initiative, saving throws, skills and lores;
- the recovery check;
- strikes: the attack at each multiple attack penalty, damage and critical.

Conditions such as dying, wounded and doomed change through PF2e's own condition handling. On the roll buttons you create, choose **A roll of the system** in **Rolls** to get these options; each strike shows in the list by the weapon's name, so it stays right even when the inventory changes.

## Spells

- For prepared casters, each prepared slot is a row. Clicking a slot casts the spell **from that slot** and marks the slot as expended; expended slots show struck through.
- The same spell prepared twice shows twice.
- For spontaneous casters, the slots of each rank show as box tracks.

## Items

- **Clicking a consumable** uses it; clicking a weapon rolls its strike; other items go to chat.
- **The +** of a list opens the PF2e compendium browser on the right tab.
- The text to the right of the name shows the action cost (◆, ◆◆, ⟲, ◇), bulk, quantity, feat level or condition value, depending on the list.

## Dragging items onto the sheet

A spell dropped on a spell list joins that spellcasting entry. When it is not clear which entry it should join, the module warns you instead of creating a loose spell: drop it on a spell list of the **Spells** tab, or on the **Standard Sheet** tab.

## Useful paths

The **Sheet data** elements come with these links ready. To link by hand:

| Data | Path |
| --- | --- |
| Hit points | `system.attributes.hp.value`, `.max`, `.temp` |
| AC (calculated) | `system.attributes.ac.value` |
| Level | `system.details.level.value` |
| Experience | `system.details.xp.value` |
| Hero points | `system.resources.heroPoints.value` |
| Focus points | `system.resources.focus.value` |
| Speed | `system.attributes.speed.value` |
| Perception (calculated) | `system.perception.totalModifier` |
| Attribute modifier | `system.abilities.str.mod` (and `dex`, `con`, `int`, `wis`, `cha`) |
| Saving throw (calculated) | `system.saves.fortitude.totalModifier` (and `reflex`, `will`) |
| Skill (calculated) | `system.skills.athletics.totalModifier` |
| Dying, wounded, doomed | `system.attributes.dying.value`, `system.attributes.wounded.value`, `system.attributes.doomed.value` |
