---
aiPortrait: true
---

# D&D 5e

O Sheet Tailor tem suporte dedicado ao sistema **D&D Fifth Edition** (dnd5e), para personagens e NPCs. Foi verificado com o dnd5e 5.3.3 no Foundry 13 e com o 6.0.6 no Foundry 14.

![A Ficha Livre do D&D 5e, com as abas da ficha do sistema e as rolagens funcionando](/media/03-freeform-dnd5e.gif)

## Personalizar a ficha do D&D 5e

Na ficha do dnd5e, **Personalizar ficha** fica no menu do topo da janela, no botão de três pontos. O resto funciona como em [Personalizar ficha](/pt/guia/personalizar-a-ficha), nas fichas de personagem e de NPC.

## A Ficha Livre do D&D 5e

A ficha gerada segue as abas da ficha do dnd5e, e a própria ficha do dnd5e fica na última aba.

| Página | O que tem |
| --- | --- |
| **Detalhes** | Espécie, antecedente e classes, tendência, inspiração, pontos de vida, classe de armadura, proficiência, iniciativa, deslocamento, testes contra a morte, exaustão, dados de vida, descansos curto e longo, os seis atributos (valor, modificador, teste e salvamento), perícias com os valores passivos, ferramentas, sentidos, idiomas, resistências e imunidades. |
| **Inventário** | Moedas, carga e as seções do inventário do dnd5e: armas, equipamento, consumíveis, ferramentas, recipientes e tesouro. |
| **Características** | Agrupadas como na ficha do dnd5e: por classe, espécie e antecedente nos personagens, e por tipo de ação nos NPCs, com as ações lendárias. |
| **Magias** | Ataque, CD e atributo de conjuração, os truques e uma lista por círculo com as bolinhas dos espaços de magia, magia de pacto incluída. Magias não preparadas aparecem esmaecidas. |
| **Efeitos** | As condições, para ligar e desligar, a exaustão e a concentração. |
| **Biografia** | Características, traços de personalidade, ideais, vínculos, defeitos, aparência e a biografia. |

Os NPCs ganham também uma página de criatura, com nível de desafio, tipo de criatura, deslocamentos e as bolinhas de ações e resistências lendárias.

Os nomes das abas e dos campos vêm da tradução do próprio dnd5e, então aparecem no idioma do seu Foundry.

## Rolagens

Todas as rolagens chamam as mesmas funções da ficha do dnd5e, com os mesmos diálogos e cartões no chat:

- testes de atributo, salvamentos, perícias e ferramentas;
- iniciativa, testes contra a morte, concentração e dados de vida;
- descansos curto e longo;
- condições, que ligam e desligam pelo próprio dnd5e.

Segurar <kbd>Shift</kbd> ao clicar pula o diálogo de rolagem, como na ficha do dnd5e.

Nos botões de rolagem que você cria, escolha **Uma rolagem do sistema** em **Rola** para ter todas essas opções na lista.

## Itens

- **Clicar num item** usa o item do jeito do dnd5e: ataques, diálogo de uso, espaços de magia e usos limitados. Itens que gastam alguma coisa abrem o diálogo de uso mesmo com <kbd>Shift</kbd>, como na ficha do dnd5e.
- **Recipientes** abrem a ficha deles.
- **O +** de uma lista cria um item do tipo daquela seção, como o **+** da ficha do dnd5e. Numa lista de magias, a magia nova já vem com o círculo e o método da lista.

## Arrastar itens para a ficha

Os itens soltos numa página entram do mesmo jeito que na ficha do dnd5e:

- **Classes, espécies e antecedentes** passam pelo avanço do dnd5e.
- **Uma magia solta numa lista do inventário** vira um pergaminho, com o diálogo do dnd5e.
- **Uma magia solta numa lista de magias** entra com o método de conjuração daquela lista.

## Caminhos úteis

Os elementos de **Dados da ficha** já trazem estes vínculos prontos. Para ligar à mão:

| Dado | Caminho |
| --- | --- |
| Pontos de vida | `system.attributes.hp.value`, `.max`, `.temp` |
| Classe de armadura (calculada) | `system.attributes.ac.value` |
| Iniciativa (calculada) | `system.attributes.init.total` |
| Proficiência (calculada) | `system.attributes.prof` |
| Inspiração | `system.attributes.inspiration` |
| Exaustão | `system.attributes.exhaustion` |
| Testes contra a morte | `system.attributes.death.success`, `system.attributes.death.failure` |
| Valor de um atributo | `system.abilities.str.value` (e `dex`, `con`, `int`, `wis`, `cha`) |
| Modificador (calculado) | `system.abilities.str.mod` |
| Total de uma perícia (calculado) | `system.skills.ath.total` |
| Valor passivo (calculado) | `system.skills.prc.passive` |
| Moedas | `system.currency.gp` (e `pp`, `ep`, `sp`, `cp`) |
| Experiência | `system.details.xp.value` |
| Espaços de magia | `system.spells.spell1.value` (até `spell9`, e `pact`) |
| CD de magia (calculada) | `system.attributes.spell.dc` |
| Tendência | `system.details.alignment` |
| Nível de desafio (NPC) | `system.details.cr` |
| Ações e resistências lendárias (NPC) | `system.resources.legact.value`, `system.resources.legres.value` |

::: tip Deslocamento no Foundry 14
No dnd5e 6, o caminho `system.attributes.movement.walk` só mostra o deslocamento. Para editar, use `system.attributes.movement.speeds.walk`.
:::
