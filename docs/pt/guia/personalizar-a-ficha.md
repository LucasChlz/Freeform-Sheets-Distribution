---
aiPortrait: true
---

# Personalizar a ficha do sistema

Com **Personalizar ficha** (*Customize sheet*) você mexe na própria ficha do sistema: muda os blocos de lugar e de tamanho, esconde o que não usa, troca cores e põe uma imagem, GIF ou vídeo por trás. Como continua sendo a ficha do sistema, tudo segue funcionando do mesmo jeito: rolagens, campos, arrastar itens e as atualizações do sistema.

![A ficha do D&D 5e sendo personalizada: um bloco é arrastado e uma arte aparece por trás](/media/01-customize-dnd5e.gif)

::: info Como funciona por baixo
O módulo não altera nem copia a ficha do sistema. Uma personalização é só um conjunto de ajustes visuais aplicados àquela janela, mais uma camada de arte por trás dela. Ela fica guardada no personagem e aparece para todos que abrem a ficha dele.
:::

## Abrir o personalizador

- **FateX, Pathfinder 2e e a maioria dos sistemas:** clique em **Personalizar ficha** no topo da janela da ficha.
- **D&D 5e:** o mesmo item fica no menu do topo da janela, no botão de três pontos.
- **Na Ficha Livre:** a aba **Ficha padrão** mostra a ficha do sistema já personalizada, e o lápis dessa aba abre o personalizador.

Uma janela pequena abre ao lado da ficha. O botão aparece para os donos do personagem e para o Mestre. Se o Mestre deixou a edição só com ele (veja [Configurações e permissões](/pt/guia/configuracoes)), só ele vê o botão.

## A janela do personalizador

No topo ficam **Salvar personalização**, desfazer, refazer e o botão de fechar. Logo abaixo, dois modos:

- **Selecionar e mover:** os cliques na ficha selecionam blocos. Nada é rolado nem editado sem querer.
- **Usar a ficha:** os cliques passam para a ficha, por exemplo para abrir outra aba dela e personalizá-la também.

O painel tem as seções **Bloco selecionado**, **Arte**, **Mudanças**, **Modelos e compartilhamento** e **Teclado e mouse**. No fim ficam os botões **Documentação** e **Discord**.

![A ficha do FateX com o personalizador aberto ao lado: o bloco de aspectos está selecionado e uma arte de pergaminho aparece por trás](/img/pt/personalizador.png)

## Selecionar um bloco

Passe o mouse sobre a ficha: o bloco embaixo do cursor fica destacado. Clique para selecioná-lo.

Acima do nome do bloco aparece o caminho até ele, com os blocos maiores que o contêm. Clique em um deles, ou em **Bloco maior**, para selecionar um bloco maior. Isso é útil quando você quer mover um grupo inteiro, como todas as perícias de uma vez.

::: tip Bloco que não pode ser selecionado
Se aparecer o aviso de que não dá para identificar aquela parte da ficha com segurança, selecione um bloco maior. Algumas partes mudam a cada atualização da ficha, e o módulo só guarda o que consegue encontrar de novo.
:::

## Mover e mudar o tamanho

- **Arraste** o bloco para movê-lo.
- **A alça do canto** muda o tamanho.
- **As setas do teclado** movem 1 pixel; com <kbd>Shift</kbd>, 10 pixels.

No painel, em **Posição**, os mesmos ajustes aparecem como números:

| Campo | O que faz |
| --- | --- |
| **Mover para a direita** | Distância horizontal, em pixels. Números negativos movem para a esquerda. |
| **Mover para baixo** | Distância vertical, em pixels. Números negativos movem para cima. |
| **Tamanho (%)** | Escala do bloco, de 20% a 500%, a partir do centro dele. |
| **Opacidade** | De 0 (invisível) a 1 (normal). |

Logo abaixo:

- **Na frente do resto:** põe o bloco por cima dos vizinhos.
- **Escondido:** esconde o bloco, mas o espaço dele continua reservado, para os outros blocos não pularem de lugar.

::: warning Mover muda só o desenho
O espaço original do bloco continua ocupado na ficha. Para tirar o bloco de vez do lugar dele, use **Soltar do lugar**, logo abaixo.
:::

## Soltar do lugar

Um bloco que está dentro de uma área com rolagem, como a barra lateral do Pathfinder 2e ou uma lista, é cortado na borda dessa área quando você o arrasta para fora. Quando isso acontece, o painel avisa e oferece **Soltar do lugar**.

Solto, o bloco sai da área dele e pode ir para qualquer lugar da ficha, e os blocos seguintes ocupam o espaço que ele deixou. A opção **Solto (fora da área dele)** mostra se o bloco está solto e permite prendê-lo de novo.

Quando o bloco não pode ser solto, o painel sugere mover um bloco maior.

## Cores

Em **Estilo**:

- **Fundo:** **Como a ficha deixa**, **Transparente (mostra a arte)** ou **Uma cor**. Com **Uma cor**, aparece o campo **Cor do fundo**.
- **Cor do texto:** vale para o bloco e para tudo dentro dele, porque as fichas costumam colorir cada rótulo separadamente.

## Arte atrás da ficha

Na seção **Arte**:

| Campo | O que faz |
| --- | --- |
| **Imagem, GIF ou vídeo atrás da ficha** | Caminho ou endereço da arte. O botão de pasta abre o navegador de arquivos do Foundry; o X remove a arte. |
| **Encaixe** | **Cobrir** preenche a janela e corta as sobras; **Conter** mostra a arte inteira; **Esticar** estica para caber. |
| **Opacidade** | Deixa a arte mais clara ou mais forte. |
| **Cor atrás da imagem** | Cor que aparece onde a arte não cobre. |

A arte preenche a janela por trás de tudo o que a ficha mostra, abaixo da barra de título.

![Uma ficha do Pathfinder 2e personalizada, com arte por trás e painéis transparentes](/media/02-customized-pf2e.webp)

### Mostrar a arte através da ficha

A maioria das fichas pinta pergaminho e painéis por cima da sua arte. Para enxergar a arte:

1. Abra a aba da ficha que quer mostrar.
2. Clique em **Mostrar a arte através desta aba**. Os painéis grandes daquela aba ficam transparentes.
3. Para outra aba, clique em **Usar a ficha**, abra a aba, volte para **Selecionar e mover** e repita.

**Devolver os fundos da ficha** desfaz isso; o número no botão mostra quantos painéis estão transparentes.

## Mudanças

A seção **Mudanças** lista todos os blocos que você alterou. Clique num deles para selecioná-lo; o olho esconde ou mostra; a seta desfaz as mudanças daquele bloco.

Um ícone de corrente quebrada indica um bloco que não está na ficha agora: um item que foi removido, ou uma parte que a ficha não mostra mais.

## Salvar

Clique em **Salvar personalização** ou use <kbd>Ctrl</kbd>+<kbd>S</kbd>. Se você fechar com mudanças não salvas, o módulo pergunta o que fazer.

A personalização vale para a ficha em que foi feita. Se o personagem passar a usar outra ficha, ela deixa de aparecer, e volta quando ele voltar para a ficha original.

## Modelos e compartilhamento

Na seção **Modelos e compartilhamento**:

- **Salvar como modelo para todos** (só o Mestre): guarda a personalização como um modelo com nome, disponível para a mesa inteira.
- **Modelo** e **Aplicar nesta ficha**: qualquer dono aplica um modelo na própria ficha. O modelo é copiado, então mudar ou excluir o modelo depois não muda as fichas que já o usaram.
- **Excluir modelo** (só o Mestre).
- **Exportar personalização** e **Importar personalização…**: salvam e carregam a personalização num arquivo JSON, para levar a outro mundo ou passar para alguém.
- **Remover toda a personalização**: volta a ficha a ser exatamente como o sistema desenha. Ainda dá para desfazer antes de salvar.

## Teclado e mouse

| Atalho | O que faz |
| --- | --- |
| Clique | Seleciona o bloco |
| Arrastar | Move o bloco; a alça do canto muda o tamanho |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Move 1 pixel; com <kbd>Shift</kbd>, 10 pixels |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Y</kbd> | Desfaz / refaz |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Salva |
| <kbd>Esc</kbd> | Tira a seleção |
| Roda do mouse | Rola a ficha |

## Limites

- Mover um bloco muda só o desenho: o espaço original continua ocupado, a não ser com **Soltar do lugar**.
- Alguns blocos são posicionados pela própria ficha em relação a um bloco maior. Ao mover esse bloco maior, eles podem mudar de lugar junto.
- Depois de uma atualização grande do sistema, algumas partes da ficha podem mudar. Os blocos que o módulo não encontrar aparecem em **Mudanças** com a corrente quebrada.
