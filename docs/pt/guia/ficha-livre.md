---
aiPortrait: true
---

# A Ficha Livre

A Ficha Livre (*Freeform Sheet*) é uma ficha nova que o Sheet Tailor oferece para qualquer personagem. Ela já abre completa, com tudo o que a ficha do sistema tem, e pode ser montada em cima da sua própria arte, em até 20 páginas.

![A Ficha Livre do Pathfinder 2e: abas da ficha do sistema, rolagens e listas funcionando](/media/04-freeform-pf2e.gif)

## Ativar

1. Abra o personagem e clique em **Sheet** no topo da janela. No D&D 5e, use **Configure Sheet**, no menu de três pontos.
2. Em **This Sheet**, escolha **Ficha Livre (layout personalizado)** (*Freeform Sheet (custom layout)*) e salve.

A escolha vale só para aquele personagem. Para que todos os personagens de um tipo usem a Ficha Livre, o Mestre pode escolhê-la em **Default Sheet**, na mesma janela. O módulo nunca troca a ficha de ninguém sozinho.

## O que já vem pronto

- **D&D 5e, Pathfinder 2e, Daggerheart e FateX:** uma ficha completa, dividida em abas como a ficha do sistema, com as rolagens, os recursos e as listas de itens de cada um. Os detalhes estão em [Sistemas](/pt/sistemas/dnd5e).
- **Outros sistemas:** uma página com nome e retrato e uma aba **Itens** com uma lista por tipo de item. A partir daí, qualquer campo do sistema pode ser ligado pelo editor. Veja [Outros sistemas](/pt/sistemas/outros).

Toda lista aparece mesmo vazia, para que os itens adicionados depois apareçam no lugar certo. A arte de fundo é um extra: a ficha funciona sem ela.

## Jogando com a Ficha Livre

![A Ficha Livre de uma personagem do FateX montada sobre uma arte desenhada, com as abas Página 1, Elementos e Ficha padrão](/img/pt/ficha-livre.png)

| Elemento | Como usar |
| --- | --- |
| Abas | Uma por página da ficha. A última é a **Ficha padrão**. A aba que você deixou aberta é lembrada neste navegador. |
| Campos | Clique e digite. <kbd>Enter</kbd> ou sair do campo salva; <kbd>Esc</kbd> desfaz o que foi digitado. |
| Caixas de marcar e trilhas | Clique para marcar ou desmarcar. Numa trilha de contador, clicar na última caixa marcada desmarca essa caixa. |
| Botões de rolagem | Chamam a rolagem do próprio sistema, com os mesmos diálogos e cartões no chat. |
| Textos ricos | O lápis abre o editor de texto do Foundry. |
| Listas de itens | Clique no nome para abrir, rolar ou mandar ao chat, conforme o layout. O lápis edita, a lixeira exclui e o **+** adiciona. Com o botão direito, o item abre a ficha dele. |
| Retrato | Clique para trocar a imagem do personagem, ou só para vê-la, se você não pode enviar arquivos. |

Valores que o sistema calcula sozinho, como uma CA derivada da armadura, aparecem só para leitura. Todos que podem abrir a ficha veem o layout, mas só quem pode editar o personagem consegue mudar os valores.

### Arrastar itens para a ficha

Solte um item vindo de um compêndio ou da barra lateral em qualquer lugar da página, e ele é adicionado ao personagem como na ficha do sistema. No D&D 5e e no Pathfinder 2e, a lista embaixo do cursor decide onde o item entra: uma magia solta na lista de magias de um círculo, por exemplo, vai para aquele círculo.

## A aba Ficha padrão

A última aba é a ficha do próprio sistema, inteira e funcionando como sempre, dentro da mesma janela. Ela serve para tudo o que as páginas não cobrem: criação de personagem, configurações do sistema, abas que você não quis levar para a sua arte.

- Se você [personalizou a ficha do sistema](/pt/guia/personalizar-a-ficha), ela aparece personalizada aqui também, e o lápis desta aba abre o personalizador.
- A janela alarga quando esta aba abre, para a ficha do sistema caber.
- A aba pode ser renomeada ou desligada no editor, em [Páginas](/pt/guia/paginas-e-fundos#a-aba-da-ficha-padrao).

No menu de três pontos do topo da janela ficam:

- **Abrir a ficha do sistema** (*Open the system sheet*): vai para a aba **Ficha padrão**. Se ela estiver desligada, abre a ficha do sistema numa janela separada.
- **Exportar layout** (*Export layout*): salva o layout num arquivo JSON. Veja [Compartilhar e exemplos](/pt/guia/compartilhar).

## Editar o layout

O botão de régua e lápis, **Editar layout** (*Edit layout*), fica no topo da janela, ao lado do botão de fechar. Ele só aparece para quem pode editar o layout daquele personagem. O que dá para fazer com ele está em [O editor de layout](/pt/guia/editor-de-layout).

## Onde o layout fica guardado

O layout é guardado no próprio personagem. Por isso ele vai junto quando o personagem é duplicado, exportado ou guardado num compêndio. Para usar o mesmo layout em outro personagem, exporte e importe o JSON: os itens são reconhecidos pelo tipo e pelo nome.
