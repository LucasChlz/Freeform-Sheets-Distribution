# Daggerheart

O Sheet Tailor tem suporte dedicado ao **Daggerheart** (o sistema da Foundryborne), para personagens, adversários e companheiros. Foi verificado com o Daggerheart 2.10.11 no Foundry 14 e com o 1.9.14, a última versão para o Foundry 13, no Foundry 13.

![A Ficha Livre do Daggerheart: atributos com as rolagens, Evasão, armadura, limiares de dano, Pontos de Vida, Estresse, Esperança, experiências e ataques](/img/en/daggerheart.png)

## Personalizar a ficha do Daggerheart

Na ficha do Daggerheart, **Personalizar ficha** fica no menu do topo da janela, no botão de três pontos. O resto funciona como em [Personalizar ficha](/pt/guia/personalizar-a-ficha), nas fichas de personagem, adversário e companheiro.

## A Ficha Livre do Daggerheart

A ficha gerada do personagem segue as abas da ficha do Daggerheart, e a própria ficha do Daggerheart fica na última aba.

| Página | O que tem |
| --- | --- |
| **Personagem** | Classe, subclasse, ancestralidade e comunidade, nível, os seis atributos com as rolagens, Evasão, valor de armadura e espaços de armadura, limiares de dano, Pontos de Vida, Estresse, Esperança, Proficiência, experiências, as armas em mãos e o ataque desarmado, descanso curto e longo, o movimento de morte e as condições. |
| **Habilidades** | Agrupadas como na ficha do Daggerheart: por ancestralidade, comunidade, classe e subclasse (e uma multiclasse), depois as habilidades do companheiro e as demais. |
| **Cartas de domínio** | As cartas em uso e as do cofre, e quantos espaços de cartas em uso estão ocupados. |
| **Inventário** | Ouro, armas, armaduras, consumíveis e itens. Armas e armaduras que não estão em mãos ou vestidas aparecem esmaecidas. |
| **Biografia** | Pronomes, idade e fé, história e conexões. |

Os adversários ganham uma página com patamar, tipo, dificuldade, limiares de dano, Pontos de Vida, Estresse, o ataque, motivações e táticas, experiências, habilidades, descrição e anotações. Os companheiros ganham uma página com o parceiro, Evasão, Estresse, ataque e experiências.

Os nomes das páginas e dos campos vêm da tradução do próprio Daggerheart, então aparecem no idioma que o sistema usa.

## Rolagens

Toda rolagem passa pelas mesmas funções e diálogos da ficha do Daggerheart:

- testes de atributo, com Esperança e Medo, vantagem e experiências no diálogo de rolagem do sistema. Com a automação de Esperança e Medo do sistema ligada, uma rolagem com Esperança dá uma Esperança ao personagem e uma rolagem com Medo dá um Medo ao Mestre, como na ficha do Daggerheart;
- o ataque de uma arma em mãos, o ataque desarmado e o ataque de um adversário ou de um companheiro;
- descanso curto e longo (os movimentos de descanso) e o movimento de morte;
- as condições Vulnerável, Oculto e Contido, que o próprio sistema liga e desliga.

Nos botões de rolagem que você cria, escolha **Uma rolagem do sistema** em **Rola** para ter todas essas opções na lista.

## Itens e recursos

- **Clicar num item** usa o item do jeito do Daggerheart: armas atacam, cartas de domínio e habilidades executam as ações delas, consumíveis são usados.
- **Pontos de Vida, Estresse e Esperança** são trilhas de caixinhas: marcar uma muda o valor como na ficha do Daggerheart.
- **Os espaços de armadura** são marcados na armadura vestida, pelo sistema, como a ficha dele faz.
- **O +** de uma lista cria um item do tipo daquela seção. O + das cartas em uso e do cofre abre o compêndio de cartas de domínio: o sistema confere se a carta é dos domínios do personagem.
- **Itens arrastados de um compêndio** guardam a origem, então uma subclasse solta na ficha fica ligada à classe, como o sistema exige.

## Caminhos úteis

Os elementos de **Dados da ficha** já vêm com estes vínculos. Para ligar à mão:

| Dado | Caminho |
| --- | --- |
| Atributos | `system.traits.agility.value` (e `strength`, `finesse`, `instinct`, `presence`, `knowledge`) |
| Pontos de Vida, Estresse e Esperança | `system.resources.hitPoints.value`, `system.resources.stress.value`, `system.resources.hope.value` |
| Espaços e valor de armadura | `system.resources.armor.value`, `system.resources.armor.max` |
| Evasão (calculada) | `system.evasion` |
| Proficiência (calculada) | `system.proficiency` |
| Limiares de dano | `system.damageThresholds.major`, `system.damageThresholds.severe` |
| Nível | `system.levelData.level.current` |
| Experiências | `system.experiences.<id>.name`, `system.experiences.<id>.value` |
| Ouro | `system.gold.handfuls` (e `coins`, `bags`, `chests`) |
| Adversário | `system.tier`, `system.difficulty`, `system.motivesAndTactics` |

::: tip Foundry 13 e 14
O Daggerheart 2 precisa do Foundry 14; no Foundry 13, o Daggerheart 1.9 é a última versão. O Sheet Tailor funciona com os dois: onde eles diferem (o teste de atributo, as marcas da armadura, como as habilidades registram de onde vieram), ele chama o que a ficha de cada versão chama.
:::
