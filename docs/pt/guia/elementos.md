---
aiPortrait: true
---

# Elementos

Tudo o que aparece numa página da Ficha Livre é um elemento. Para criar um, abra o editor e clique num tipo em **Adicionar elemento**; ele aparece no meio da área visível, pronto para ser arrastado. Para criar elementos já ligados aos dados do sistema, use **Dados da ficha**.

| Tipo | Para que serve | Pode ser ligado a |
| --- | --- | --- |
| [Texto](#texto) | Rótulos e títulos fixos | — |
| [Campo](#campo) | Mostrar e editar um valor: nome, pontos de vida, nível | Personagem, item ou valor personalizado |
| [Caixa de marcar](#caixa-de-marcar) | Um valor de liga e desliga | Personagem, item ou valor personalizado |
| [Trilha de caixas](#trilha-de-caixas) | Contadores e trilhas: pontos de heroísmo, estresse, espaços de magia | Personagem, item ou valor personalizado |
| [Imagem](#imagem) | O retrato do personagem ou uma imagem fixa | — |
| [Rolagem](#rolagem) | Um botão que rola | Um item, uma fórmula ou uma rolagem do sistema |
| [Texto rico](#texto-rico) | Textos longos com formatação: biografia, descrições | Personagem ou item |
| [Lista de itens](#lista-de-itens) | Os itens do personagem, atualizada sozinha | Um tipo de item |
| [Forma](#forma) | Retângulos e círculos decorativos | — |

![Uma página com um elemento de cada tipo: texto, campo, caixa de marcar, trilha de caixas, imagem, rolagem, texto rico, lista de itens e forma](/img/pt/elementos.png)

Cada elemento tem, no painel, as partes **Posição**, **Dados** (quando pode ser ligado), **Opções** e **Estilo**. A ligação com os dados está explicada em [Vínculos com os dados](/pt/guia/vinculos).

## Texto

Um texto fixo, que não muda com o personagem. Use para rótulos e títulos que não estão desenhados na arte.

| Opção | O que faz |
| --- | --- |
| **Texto** | O que aparece. Aceita várias linhas. |

## Campo

Mostra um valor do personagem e deixa editar, como na ficha do sistema.

| Opção | O que faz |
| --- | --- |
| **Entrada** | **Uma linha**, **Número** ou **Várias linhas**. **Número** só aceita números. |
| **Guardado como** | **Texto simples** ou **HTML (aspectos do FateX)**, para dados que o sistema guarda como HTML. O campo mostra o texto limpo e grava no formato certo. |
| **Texto de exemplo** | O texto cinza que aparece quando o campo está vazio. |
| **Mostrar + em números positivos** | Mostra `+2` em vez de `2`, para modificadores. |
| **Somente leitura** | Só mostra o valor, sem deixar editar. |

Valores que o sistema calcula sozinho aparecem sempre só para leitura.

## Caixa de marcar

Uma caixa que liga e desliga um valor.

| Opção | O que faz |
| --- | --- |
| **Bit** | **-1** para um valor de liga e desliga comum. **0** ou mais usa um bit de um número, como as caixas de estresse do FateX. |
| **Invertido** | A caixa aparece marcada quando o valor está desligado. |
| **Marca** | **X**, **Visto**, **Preenchido** ou **Ponto**. |
| **Formato** | **Quadrado** ou **Círculo**. |
| **Cor da marca** e **Contorno da caixa** | As cores da marca e da borda da caixa. Sem contorno, a caixa desmarcada fica invisível: é o jeito de usar as caixas que já estão desenhadas na sua arte. |

## Trilha de caixas

Uma fileira de caixas ligada a um único valor.

| Opção | O que faz |
| --- | --- |
| **Marcação** | **Contador (primeiras caixas marcadas)**, para pontos de heroísmo ou morrendo: o valor é quantas caixas estão marcadas. **Caixas independentes (bitmask)**, para o estresse do FateX: cada caixa é marcada por conta própria. |
| **Número de caixas** | Quantas caixas mostrar. **0** usa o número vindo dos dados, como o máximo de pontos de foco. |
| **Colunas** | Quantas caixas por linha. **0** põe todas numa linha. |
| **Espaço** | Distância entre as caixas, em pixels. |
| **Mostrar rótulos das caixas** | Mostra o rótulo de cada caixa, quando os dados têm um. |

As opções de **Marca**, **Formato** e cores são as mesmas da caixa de marcar.

No modo contador, clicar numa caixa marca até ela; clicar na última caixa marcada desmarca essa caixa. Dados guardados como lista de verdadeiro e falso também funcionam: cada caixa é um item da lista.

## Imagem

| Opção | O que faz |
| --- | --- |
| **Mostra** | **Retrato do personagem** ou **Imagem fixa**. |
| **Encaixe** | **Cobrir**, **Conter** ou **Esticar**. |
| **Imagem ou vídeo** | Só para a imagem fixa: o arquivo ou endereço. Vídeos tocam em repetição, sem som. |

No modo de jogo, clicar no retrato abre o navegador de arquivos para trocar a imagem do personagem. Quem não pode enviar arquivos só vê a imagem ampliada.

## Rolagem

Um botão que rola. As rolagens são sempre as do sistema, com os mesmos diálogos e cartões no chat da ficha do sistema.

| Opção | O que faz |
| --- | --- |
| **Rola** | **O item vinculado (perícia)**: rola um item do personagem, como uma perícia do FateX ou uma arma. **Uma fórmula de dados**: rola a fórmula que você escrever. **Uma rolagem do sistema (perícia, salvamento, golpe…)**: escolhe numa lista as rolagens que o sistema oferece. |
| **Texto do botão** | O texto do botão. Vazio, usa o nome do item. |
| **Fórmula** | Para **Uma fórmula de dados**: uma fórmula do Foundry, como `1d20 + @abilities.str.mod`. O `@` lê os dados de rolagem do personagem. |
| **Rolagem** | Para **Uma rolagem do sistema**: a rolagem escolhida, agrupada por tipo. |
| **Mostrar nível ou modificador** | Mostra o nível da perícia ou o modificador ao lado do nome. |
| **Mostrar o nome (desligado: só o número, para formas desenhadas na arte)** | Desligado, o botão mostra só o número, para caber num espaço que a arte já identifica. |
| **Mostrar ícone de dado** | Mostra um dado no botão. |

A lista de **Uma rolagem do sistema** muda de sistema para sistema: testes de atributo, salvamentos, perícias, iniciativa e golpes, por exemplo. Veja o que cada um oferece em [Sistemas](/pt/sistemas/dnd5e).

## Texto rico

Mostra um texto formatado, como a biografia do personagem ou a descrição de uma façanha.

| Opção | O que faz |
| --- | --- |
| **Editável** | Mostra um lápis que abre o editor de texto do Foundry. O texto é salvo com **Salvar e fechar**. |

## Lista de itens

Uma lista dos itens do personagem que se atualiza sozinha: itens novos aparecem, itens excluídos somem.

| Opção | O que faz |
| --- | --- |
| **Tipo de item** | **Todos os itens** ou um tipo. Nos sistemas com suporte, há também as listas da ficha do sistema, como as armas do inventário ou as magias de um círculo. |
| **Mostra** | **Nome**, **Nome e nível**, **Nome e descrição** ou **Nome e detalhes**, como custo em ações, acerto e dano ou usos. |
| **Ao clicar em um item** | **Abre a ficha dele**, **Rola** (no D&D 5e e no Pathfinder 2e, usa o item do jeito do sistema), **Envia ao chat** ou **Nada**. |
| **Altura da linha** | Altura de cada linha, em pixels. |
| **Mostrar a imagem dos itens** | Mostra o ícone de cada item. |
| **Mostrar botões de adicionar, editar e excluir** | O **+** cria um item do tipo da lista; o lápis abre a ficha do item; a lixeira exclui, depois de confirmar. |

Itens soltos em cima de uma lista entram nela, quando o sistema tem suporte. Clicar com o botão direito num item sempre abre a ficha dele.

## Forma

Um retângulo sem conteúdo. Use para desenhar caixas, faixas e molduras atrás dos campos quando você não tem uma arte, ou para destacar uma parte da arte. A aparência vem toda do [Estilo](#estilo): **Fundo**, **Borda** e **Arredondamento**. Com um arredondamento grande, a forma vira um círculo.

## Estilo

A seção **Estilo** muda a aparência de qualquer elemento. Os elementos com texto têm todas as opções; imagens, caixas de marcar e formas têm só as da segunda tabela.

| Opção de texto | O que faz |
| --- | --- |
| **Fonte** | **Padrão da página** ou uma das fontes do Foundry, incluindo as que o Mestre adicionou ao mundo. |
| **Tamanho** | Tamanho da letra em pixels. **0** usa o padrão da página. |
| **Peso** | **Normal** ou **Negrito**. |
| **Cor do texto** | Vazio, usa a cor padrão da página. |
| **Alinhamento** e **Vertical** | Posição do texto dentro do elemento. |
| **Altura da linha** e **Espaçamento** | Espaço entre as linhas e entre as letras. |
| **Itálico**, **Maiúsculas**, **Sombra no texto** | A sombra ajuda a ler texto claro sobre uma arte com muitos detalhes. |

| Opção de caixa | O que faz |
| --- | --- |
| **Fundo** | Cor atrás do elemento. Vazio, o elemento fica transparente e mostra a arte. |
| **Borda** e **Cor da borda** | Espessura e cor da borda, em pixels. |
| **Arredondamento** | Arredonda os cantos. |
| **Margem interna** | Espaço entre a borda e o conteúdo. |
| **Opacidade** | De 0 (invisível) a 1 (normal). |

Com vários elementos selecionados, as mudanças de estilo valem para todos. O texto padrão da ficha inteira fica em [Fundo e tamanho](/pt/guia/paginas-e-fundos#texto-padrao).
