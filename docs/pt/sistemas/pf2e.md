---
aiPortrait: true
---

# Pathfinder 2e

O Sheet Tailor tem suporte dedicado ao sistema **Pathfinder Second Edition** (pf2e), para personagens e NPCs. Foi verificado com o PF2e 7.12.2 no Foundry 13 e com o 8.6.0 no Foundry 14.

![A Ficha Livre do Pathfinder 2e: abas da ficha do sistema, rolagens e listas funcionando](/media/04-freeform-pf2e.gif)

## Personalizar a ficha do Pathfinder 2e

O botão **Personalizar ficha** fica no topo da janela da ficha do PF2e. A barra lateral do PF2e é uma área com rolagem: para levar um bloco dela para outro canto da ficha, use **Soltar do lugar**. Veja [Personalizar ficha](/pt/guia/personalizar-a-ficha).

![Uma ficha do Pathfinder 2e personalizada, com arte por trás e painéis transparentes](/media/02-customized-pf2e.webp)

## A Ficha Livre do Pathfinder 2e

A ficha gerada segue as abas da ficha do PF2e, e a própria ficha do PF2e fica na última aba.

| Página | O que tem |
| --- | --- |
| **Personagem** | Identidade, nível e experiência, pontos de vida, CA, pontos de heroísmo, deslocamento, percepção, iniciativa, CD de classe, morrendo, ferido e condenado com o teste de recuperação, pontos de foco, testes de resistência, atributos, perícias e conhecimentos, idiomas. |
| **Ações** | Cada golpe com a penalidade de ataques múltiplos, dano e crítico; depois ações, reações e ações livres, e as atividades de exploração e de folga. Nos NPCs, também as habilidades passivas. |
| **Magias** | Uma seção por entrada de conjuração, com o ataque e a CD de magia; os espaços de magia (conjuradores espontâneos) ou os próprios espaços preparados; magias e pontos de foco, usos inatos e rituais. |
| **Inventário** | Moedas, volume e itens investidos; depois armas, armaduras e escudos, equipamento, consumíveis, tesouro e recipientes, com quantidade, volume e se está empunhado ou vestido. |
| **Talentos** | Talentos de ancestralidade, classe, perícia, gerais e bônus, e as características de classe e de ancestralidade. |
| **Efeitos** | Condições e efeitos. |
| **Biografia** | Todos os campos de biografia do PF2e. Nos NPCs, a página **Notas**. |

Os NPCs começam por uma página de criatura, no lugar da página do personagem.

## Rolagens

Todas as rolagens são as do PF2e, com os modificadores, os diálogos e os cartões no chat do sistema:

- percepção, iniciativa, testes de resistência, perícias e conhecimentos;
- o teste de recuperação;
- golpes: ataque com cada penalidade de ataques múltiplos, dano e crítico.

As condições, como morrendo, ferido e condenado, mudam pelo tratamento de condições do próprio PF2e. Nos botões de rolagem que você cria, escolha **Uma rolagem do sistema** em **Rola** para ter essas opções; cada golpe aparece na lista pelo nome da arma, então ele continua certo mesmo quando o inventário muda.

## Magias

- Nos conjuradores preparados, cada espaço preparado é uma linha. Clicar num espaço conjura a magia **daquele espaço** e marca o espaço como gasto; os espaços gastos aparecem riscados.
- A mesma magia preparada duas vezes aparece duas vezes.
- Nos conjuradores espontâneos, os espaços de cada círculo aparecem como trilhas de caixas.

## Itens

- **Clicar num consumível** usa o item; clicar numa arma rola o golpe dela; os outros itens vão para o chat.
- **O +** de uma lista abre o navegador de compêndios do PF2e já na aba certa.
- O texto à direita do nome mostra o custo em ações (◆, ◆◆, ⟲, ◇), o volume, a quantidade, o nível do talento ou o valor da condição, conforme a lista.

## Arrastar itens para a ficha

Uma magia solta numa lista de magias entra naquela entrada de conjuração. Se não der para saber em qual entrada ela deve entrar, o módulo avisa em vez de criar uma magia solta: solte-a numa lista de magias da aba **Magias**, ou na aba **Ficha padrão**.

## Caminhos úteis

Os elementos de **Dados da ficha** já trazem estes vínculos prontos. Para ligar à mão:

| Dado | Caminho |
| --- | --- |
| Pontos de vida | `system.attributes.hp.value`, `.max`, `.temp` |
| CA (calculada) | `system.attributes.ac.value` |
| Nível | `system.details.level.value` |
| Experiência | `system.details.xp.value` |
| Pontos de heroísmo | `system.resources.heroPoints.value` |
| Pontos de foco | `system.resources.focus.value` |
| Deslocamento | `system.attributes.speed.value` |
| Percepção (calculada) | `system.perception.totalModifier` |
| Modificador de atributo | `system.abilities.str.mod` (e `dex`, `con`, `int`, `wis`, `cha`) |
| Teste de resistência (calculado) | `system.saves.fortitude.totalModifier` (e `reflex`, `will`) |
| Perícia (calculada) | `system.skills.athletics.totalModifier` |
| Morrendo, ferido, condenado | `system.attributes.dying.value`, `system.attributes.wounded.value`, `system.attributes.doomed.value` |
