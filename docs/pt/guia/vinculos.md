# Vínculos com os dados

Na Ficha Livre, um campo funciona por causa do dado ao qual está ligado, e não por causa da posição na página. Por isso você pode pôr qualquer elemento em qualquer lugar da sua arte, e ele continua lendo e gravando o dado certo do personagem.

O vínculo fica na parte **Dados** do elemento selecionado, em **Vinculado a**:

| Opção | Para que serve |
| --- | --- |
| **Nada** | O elemento não lê nenhum dado. |
| **Dados do personagem** | Um dado do próprio personagem, como pontos de vida ou nível. |
| **Um item do personagem** | Um dado de um item que o personagem tem, como o nível de uma perícia ou a descrição de uma façanha. |
| **Valor personalizado** | Um valor que o módulo guarda no personagem, para o que o sistema não controla. |

Logo abaixo, **Valor atual** mostra o que o elemento está lendo naquele momento. É o jeito mais rápido de conferir se o vínculo está certo.

![A parte Dados de um campo: vinculado aos dados do personagem, no caminho system.fatepoints.current, com o valor atual 3](/img/pt/vinculo.png)

::: tip Comece por Dados da ficha
Nos sistemas com suporte, a seção **Dados da ficha** do editor cria elementos já ligados aos dados certos. Use os vínculos à mão para o que não estiver lá.
:::

## Dados do personagem

Em **Caminho do dado**, escreva onde o dado fica no personagem. Os caminhos aceitos são:

- `name`: o nome do personagem;
- `img`: o retrato;
- qualquer caminho que comece com `system.`, como `system.attributes.hp.value`.

Ao digitar, o campo sugere os caminhos mais usados do sistema, com o nome de cada um.

Valores que o sistema calcula sozinho a partir de outros, como uma CA que vem da armadura, aparecem marcados como **somente leitura**: o elemento mostra o valor, mas não deixa editar. Para mudar, edite os dados de onde ele vem.

::: info Por que só esses caminhos
Os layouts podem ser importados e editados pelos jogadores, e o Mestre também abre essas fichas. Limitar os vínculos a `name`, `img` e `system.` impede que um elemento aparentemente inocente mexa em permissões ou em dados de outros módulos quando o Mestre clica nele.
:::

## Um item do personagem

1. Em **Item**, escolha um dos itens do personagem. Eles aparecem agrupados por tipo.
2. Em **Campo do item**, escreva o caminho do dado dentro do item, como `system.rank`. Vazio, o módulo escolhe o campo mais comum para aquele tipo de elemento: o nome do item num campo, a descrição num texto rico e, no FateX, o nível de uma perícia ou o texto de um aspecto.

O elemento guarda o item e também o nome e o tipo dele. Se o item sumir, por exemplo quando o layout é importado em outro personagem, o módulo procura um item com o mesmo nome e o mesmo tipo. É por isso que um layout exportado de um personagem funciona em outro que tenha os mesmos itens.

Quando nenhum item é encontrado, o elemento ganha o selo de corrente quebrada no editor, e o item aparece como "(ausente)" na lista.

## Valor personalizado

Em **Chave**, dê um nome curto ao valor, como `xp` ou `sorte`. O módulo guarda esse valor no próprio personagem.

Use para qualquer coisa que o sistema não controla: uma trilha da sua campanha, uma reputação, anotações curtas. Dois elementos com a mesma chave mostram o mesmo valor, então dá para ter a mesma trilha em duas páginas.

## Como descobrir um caminho

1. **Comece pelas sugestões** do campo **Caminho do dado** e pelos elementos de **Dados da ficha**.
2. **Use a ficha do sistema como guia.** O nome do dado costuma lembrar o rótulo da ficha: os pontos de vida, por exemplo, costumam ficar em algo como `system.attributes.hp.value`.
3. **Olhe os dados do personagem.** Pressione <kbd>F12</kbd> no Foundry, abra o console e digite `game.actors.getName("Nome do personagem").system`. O resultado mostra tudo o que o personagem guarda; o caminho é o nome de cada nível separado por pontos, começando por `system.`.

Depois de escrever o caminho, confira em **Valor atual**.

Os caminhos de cada sistema com suporte estão nas páginas de [Sistemas](/pt/sistemas/dnd5e), e em [Outros sistemas](/pt/sistemas/outros) há exemplos para sistemas sem suporte dedicado.
