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

## Um layout para vários personagens

Quando todos os personagens da mesa usam o mesmo layout, cada um com a sua arte, não é preciso posicionar os elementos ficha por ficha:

1. Monte o layout uma vez, em qualquer personagem. Como Mestre, clique em **Salvar como modelo para todos** (*Save as a template for everyone*) na seção **Layout** do editor.
2. Em cada personagem, abra o editor, escolha o modelo em **Modelo** (*Template*) e clique em **Aplicar nesta ficha** (*Apply to this sheet*). Os jogadores podem fazer isso nos próprios personagens.
3. Ponha a arte do personagem na página, se ela ainda não tiver, e salve.

Com **Manter a arte desta ficha ao aplicar um modelo ou importar um layout** ligado, como vem, a ficha que já tem arte fica com ela, e os elementos se ajustam a ela pela largura. O **Importar layout…** funciona do mesmo jeito.

::: tip Desenhe as variações na mesma tela
Para os elementos caírem nos mesmos lugares, faça todas as artes do mesmo tamanho, ou pelo menos na mesma proporção: desenhe as variações a partir de um arquivo base, sem tirar as caixas do lugar. Uma proporção diferente mantém as posições na horizontal, mas desloca as verticais.
:::

Os modelos são do mundo e do sistema de jogo dele. Um modelo é uma cópia: mudar ou excluir o modelo depois não muda as fichas que o usaram. Para aplicar em muitos personagens de uma vez, veja os [exemplos da API](/pt/dev/api#exemplos).

## Compartilhar uma personalização

As personalizações da ficha do sistema funcionam do mesmo jeito, no painel do personalizador, seção **Modelos e compartilhamento**:

- **Exportar personalização** baixa um JSON;
- **Importar personalização…** carrega um JSON; salve para manter.

Dentro do mesmo mundo, o caminho mais fácil são os **modelos**: o Mestre salva uma personalização como modelo e cada jogador aplica na própria ficha. Veja [Modelos e compartilhamento](/pt/guia/personalizar-a-ficha#modelos-e-compartilhamento).

Uma personalização só vale para o mesmo tipo de ficha em que foi feita: uma personalização da ficha de personagem do PF2e não serve na ficha do D&D 5e.

## Exemplo incluído

O módulo traz um layout de exemplo com uma arte original desenhada para ele. A arte já está instalada junto com o módulo; baixe o layout aqui e importe.

### Caderno de casos (FateX)

Uma ficha do FateX desenhada à mão, com cada elemento em cima de uma caixa da arte.

- Baixe: [fatex-demo-layout.json](/examples/fatex-demo-layout.json)
- Os itens são reconhecidos pelo tipo e pelo nome. O personagem precisa ter: os aspectos **High Concept** e **Trouble**; as perícias **Lore**, **Athletics** e **Will**; as barras de estresse **Physical** e **Mental**; a consequência **Mild**; e a façanha **Arcane Shield**.

::: tip Baixar em vez de abrir
Se o navegador abrir o arquivo em vez de baixar, clique com o botão direito no link e escolha salvar.
:::

## Mostre o que você fez

Fez uma ficha bonita? Compartilhe no [Discord](https://discord.gg/BtCGmbGEWR): outras mesas podem usar o seu layout, e os seus exemplos ajudam a melhorar o módulo.
