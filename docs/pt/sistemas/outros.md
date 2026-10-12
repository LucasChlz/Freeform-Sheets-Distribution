# Outros sistemas

O Sheet Tailor funciona em qualquer sistema do Foundry, mesmo sem suporte dedicado.

## O que funciona em qualquer sistema

- **Personalizar ficha** funciona na ficha de personagem de qualquer sistema: o botão aparece no topo da janela ou no menu de três pontos dela.
- **A Ficha Livre** abre com uma página com o nome e o retrato do personagem e uma aba **Itens**, com uma lista para cada tipo de item que ele tem. A ficha do sistema fica na última aba, como sempre.
- **Qualquer dado guardado no personagem** pode ser ligado a um campo, a uma caixa de marcar ou a uma trilha de caixas.
- **Rolagens** por fórmula funcionam em qualquer sistema; rolar um item usa a função de uso ou de rolagem do próprio item, quando o sistema tem uma, ou manda o item para o chat.
- **Listas de itens**, com adicionar, editar e excluir.

O que fica faltando sem suporte dedicado são as rolagens próprias do sistema na lista de **Uma rolagem do sistema**, os nomes amigáveis dos campos e as páginas prontas completas.

## Ligando os campos

1. Abra o editor de layout e adicione um **Campo**.
2. Em **Vinculado a**, escolha **Dados do personagem**.
3. Em **Caminho do dado**, digite `system.`: a lista sugere **todos os dados que o personagem guarda**, pelo caminho.
4. Escolha um e confira em **Valor atual**.

Repita para cada informação da ficha. Para contadores com máximo, como pontos de vida, uma **Trilha de caixas** ligada a um caminho que termina em `.value` usa o `.max` ao lado como número de caixas.

Valores que o sistema calcula sozinho não estão guardados no personagem, então não aparecem nas sugestões e ficam só para leitura. Mais detalhes em [Vínculos com os dados](/pt/guia/vinculos).

## Rolagens por fórmula

Em **Rolagem**, escolha **Uma fórmula de dados** e escreva a fórmula do jeito do Foundry. O `@` lê os dados de rolagem do personagem, que cada sistema monta do seu jeito: em muitos sistemas eles são os próprios dados de `system`, sem o `system.` na frente. Por exemplo, se a força está em `system.attributes.str.value`, a fórmula costuma ser `1d20 + @attributes.str.value`.

Para conferir o que o `@` enxerga, abra o console com <kbd>F12</kbd> e digite `game.actors.getName("Nome do personagem").getRollData()`.

## Suporte dedicado para outro sistema

Desenvolvedores podem acrescentar suporte a qualquer sistema com um adaptador, sem mexer no Sheet Tailor. Veja [Adaptadores de sistema](/pt/dev/adaptadores).
