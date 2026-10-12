---
aiPortrait: true
---

# Compartilhar e exemplos

Layouts da Ficha Livre e personalizações da ficha do sistema podem ser salvos em arquivos JSON e carregados em outro personagem, em outro mundo ou no Foundry de outra pessoa.

![Um layout pronto sendo importado numa Ficha Livre do FateX](/media/07-import-noir.gif)

## Exportar um layout

Há dois caminhos:

- no menu de três pontos do topo da Ficha Livre, **Exportar layout** (*Export layout*);
- no editor de layout, seção **Layout**, **Exportar layout**.

O navegador baixa um arquivo chamado `nome-do-personagem-sheet-layout.json`.

## Importar um layout

1. Abra a Ficha Livre do personagem que vai receber o layout e clique em **Editar layout**.
2. Na seção **Layout**, clique em **Importar layout…** e escolha o arquivo JSON.
3. O layout aparece no editor. Confira e clique em **Salvar layout**: até salvar, nada muda no personagem.

Os elementos ligados a itens procuram, no personagem que recebe o layout, um item **com o mesmo tipo e o mesmo nome**. Se algum não for encontrado, o módulo avisa quantos elementos ficaram sem item; eles ganham o selo de corrente quebrada no editor, e você pode adicionar o item ao personagem ou ligar o elemento a outro.

::: warning A arte não vai dentro do arquivo
O JSON guarda o caminho ou o endereço das imagens de fundo, não as imagens. Para passar um layout para outra pessoa, mande também a arte e peça para ela colocar os arquivos no mesmo caminho dentro do Foundry dela. Se a arte estiver num endereço da internet, o layout já funciona direto.
:::

## Compartilhar uma personalização

As personalizações da ficha do sistema funcionam do mesmo jeito, no painel do personalizador, seção **Modelos e compartilhamento**:

- **Exportar personalização** baixa um JSON;
- **Importar personalização…** carrega um JSON; salve para manter.

Dentro do mesmo mundo, o caminho mais fácil são os **modelos**: o Mestre salva uma personalização como modelo e cada jogador aplica na própria ficha. Veja [Modelos e compartilhamento](/pt/guia/personalizar-a-ficha#modelos-e-compartilhamento).

Uma personalização só vale para o mesmo tipo de ficha em que foi feita: uma personalização da ficha de personagem do PF2e não serve na ficha do D&D 5e.

## Exemplos incluídos

O módulo traz dois layouts de exemplo, cada um com uma arte original desenhada para ele. As artes já estão instaladas junto com o módulo; baixe o layout aqui e importe.

### Caderno de casos (FateX)

Uma ficha do FateX desenhada à mão, com cada elemento em cima de uma caixa da arte.

- Baixe: [fatex-demo-layout.json](/examples/fatex-demo-layout.json)
- Os itens são reconhecidos pelo tipo e pelo nome. O personagem precisa ter: os aspectos **High Concept** e **Trouble**; as perícias **Lore**, **Athletics** e **Will**; as barras de estresse **Physical** e **Mental**; a consequência **Mild**; e a façanha **Arcane Shield**.

### The Sorcerer's Codex (Pathfinder 2e)

Uma ficha original para uma feiticeira de nível 3 do Pathfinder 2e, feita para a Seoni de nível 3, dos personagens icônicos que vêm com o sistema. Tem espaços de magia, pontos de foco, magias por círculo (clique para conjurar), ataque e CD de magia.

- Baixe: [pf2e-sorcerer-layout.json](/examples/pf2e-sorcerer-layout.json)
- Depois de importar, use **Páginas** → **Páginas prontas** para acrescentar as outras abas, como ações, inventário e talentos, ao lado da arte.

::: tip Baixar em vez de abrir
Se o navegador abrir o arquivo em vez de baixar, clique com o botão direito no link e escolha salvar.
:::

## Mostre o que você fez

Fez uma ficha bonita? Compartilhe no [Discord](https://discord.gg/BtCGmbGEWR): outras mesas podem usar o seu layout, e os seus exemplos ajudam a melhorar o módulo.
