# Daggerheart

Sheet Tailor has dedicated support for **Daggerheart** (the Foundryborne system), for characters, adversaries and companions. It was verified with Daggerheart 2.10.11 on Foundry 14 and with 1.9.14, the last version for Foundry 13, on Foundry 13.

![The Daggerheart Freeform Sheet: traits with their rolls, Evasion, armor, damage thresholds, Hit Points, Stress, Hope, experiences and attacks](/img/en/daggerheart.png)

## Customize the Daggerheart sheet

On the Daggerheart sheet, **Customize sheet** is in the menu at the top of the window, behind the three-dot button. Everything else works as in [Customize sheet](/guide/customize-sheet), on character, adversary and companion sheets.

## The Daggerheart Freeform Sheet

The generated character sheet follows the tabs of the Daggerheart sheet, and the Daggerheart sheet itself is the last tab.

| Page | What it has |
| --- | --- |
| **Character** | Class, subclass, ancestry and community, level, the six traits with their rolls, Evasion, armor score and Armor Slots, damage thresholds, Hit Points, Stress, Hope, Proficiency, experiences, the weapons in hand and the unarmed attack, short and long rest, the death move and the conditions. |
| **Features** | Grouped like the Daggerheart sheet: by ancestry, community, class and subclass (and a multiclass), then companion features and the rest. |
| **Loadout** | The domain cards in the loadout and in the vault, and how many loadout slots are in use. |
| **Inventory** | Gold, weapons, armor, consumables and loot. Weapons and armor that are not in hand or worn show faded. |
| **Biography** | Pronouns, age and faith, background and connections. |

Adversaries get one page with tier, type, difficulty, damage thresholds, Hit Points, Stress, their attack, motives and tactics, experiences, features, description and notes. Companions get one page with their partner, Evasion, Stress, attack and experiences.

Page and field names come from Daggerheart's own translation, so they show in the language the system uses.

## Rolls

Every roll goes through the same functions and dialogs as the Daggerheart sheet:

- trait rolls, with Hope and Fear, advantage and experiences in the system's roll dialog. With the system's Hope and Fear automation on, a roll with Hope gives the character a Hope and a roll with Fear gives the GM a Fear, as on the Daggerheart sheet;
- the attack of a weapon in hand, the unarmed attack, and the attack of an adversary or a companion;
- short and long rest (the downtime moves) and the death move;
- the conditions Vulnerable, Hidden and Restrained, which the system turns on and off.

On the roll buttons you create, choose **A roll of the system** in **Rolls** to get all of these in the list.

## Items and resources

- **Clicking an item** uses it the Daggerheart way: weapons attack, domain cards and features run their actions, consumables are used.
- **Hit Points, Stress and Hope** are box tracks: marking a box changes the value as on the Daggerheart sheet.
- **Armor Slots** are marked on the armor worn, through the system, as its sheet does.
- **The +** of a list creates an item of that section's type. The + of the loadout and the vault opens the domain cards compendium: the system checks that a card belongs to the character's domains.
- **Items dropped from a compendium** keep their source, so a subclass dropped on the sheet is tied to its class, as the system requires.

## Useful paths

The **Sheet data** elements come with these links ready. To link by hand:

| Data | Path |
| --- | --- |
| Traits | `system.traits.agility.value` (and `strength`, `finesse`, `instinct`, `presence`, `knowledge`) |
| Hit Points, Stress and Hope | `system.resources.hitPoints.value`, `system.resources.stress.value`, `system.resources.hope.value` |
| Armor Slots and armor score | `system.resources.armor.value`, `system.resources.armor.max` |
| Evasion (calculated) | `system.evasion` |
| Proficiency (calculated) | `system.proficiency` |
| Damage thresholds | `system.damageThresholds.major`, `system.damageThresholds.severe` |
| Level | `system.levelData.level.current` |
| Experiences | `system.experiences.<id>.name`, `system.experiences.<id>.value` |
| Gold | `system.gold.handfuls` (and `coins`, `bags`, `chests`) |
| Adversary | `system.tier`, `system.difficulty`, `system.motivesAndTactics` |

::: tip Foundry 13 and 14
Daggerheart 2 needs Foundry 14; on Foundry 13, Daggerheart 1.9 is the last version. Sheet Tailor works with both: where they differ (the trait roll, the armor marks, how features record where they came from), it calls what each version's own sheet calls.
:::
