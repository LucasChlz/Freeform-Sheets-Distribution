---
aiPortrait: true
---

# O editor de layout

Na Ficha Livre, clique no botão de régua e lápis, **Editar layout** (*Edit layout*), no topo da janela. A ficha entra em modo de edição: os elementos da página passam a ser selecionados e arrastados, e uma coluna de controles aparece ao lado da página.

![O editor de layout aberto: um botão de rolagem está selecionado na página, com as alças em volta, e o painel ao lado mostra a posição, os dados e as opções dele](/img/pt/editor.png)

O editor trabalha uma página por vez. As abas trocam a página que está sendo editada, e o **+** ao lado delas cria uma página nova.

## A barra do topo

| Botão | O que faz |
| --- | --- |
| **Salvar layout** | Salva o layout no personagem (<kbd>Ctrl</kbd>+<kbd>S</kbd>). Mostra **Salvo** quando não há nada para salvar. |
| Desfazer / Refazer | <kbd>Ctrl</kbd>+<kbd>Z</kbd> e <kbd>Ctrl</kbd>+<kbd>Y</kbd>. |
| **Fechar editor** | Volta para o modo de jogo. |
| **Afastar** / **Aproximar** | Zoom da página. O número no meio mostra o zoom; clicar nele faz **Ajustar à janela**. |

Se você fechar o editor com mudanças não salvas, aparece a pergunta **Layout não salvo**, com **Salvar**, **Descartar** e **Continuar editando**.

## Selecionar

- **Clique** num elemento para selecioná-lo.
- <kbd>Shift</kbd> ou <kbd>Ctrl</kbd> + clique adiciona ou tira elementos da seleção.
- <kbd>Ctrl</kbd>+<kbd>A</kbd> seleciona todos os elementos da página; <kbd>Esc</kbd> tira a seleção.
- **Clique duplo** num elemento seleciona e já leva você ao texto ou ao dado dele no painel.
- A lista de **Camadas** também seleciona, o que ajuda com elementos pequenos ou escondidos atrás de outros.

A seleção nunca mistura páginas.

## Mover e mudar o tamanho

- **Arraste** para mover. Os elementos se encaixam na grade da página; segure <kbd>Alt</kbd> para ignorá-la.
- **As alças** em volta do elemento selecionado mudam o tamanho; com <kbd>Shift</kbd>, a proporção é mantida.
- **As setas do teclado** movem 1 pixel; com <kbd>Shift</kbd>, 10 pixels.

O tamanho da grade fica em [Fundo e tamanho](/pt/guia/paginas-e-fundos#grade-de-encaixe).

## O painel do elemento selecionado

A seção **Elemento selecionado** mostra o tipo do elemento e, logo abaixo:

- **Nome no editor**: opcional, aparece na lista de camadas.
- Os botões de camada: **Trazer para a frente**, **Avançar uma camada**, **Recuar uma camada** e **Enviar para trás**; e **Duplicar** e **Excluir**.
- **Posição**: X, Y, **Largura**, **Altura** e **Rotação**, em pixels da página e graus.
- **Travado (não pode ser movido)**: protege o elemento de arrastos acidentais.
- **Oculto fora do editor**: o elemento só aparece enquanto você edita. Serve para guardar elementos que você ainda não quer mostrar.
- **Página**: leva o elemento para outra página. Só aparece quando a ficha tem mais de uma.
- **Dados**: a que o elemento está ligado. Veja [Vínculos com os dados](/pt/guia/vinculos).
- **Opções**: o que muda de um tipo de elemento para outro. Veja [Elementos](/pt/guia/elementos).
- **Estilo**: fonte, cores, bordas e o resto da aparência. Veja [Estilo](/pt/guia/elementos#estilo).

### Vários elementos selecionados

Com mais de um elemento selecionado, o painel mostra botões para alinhar e distribuir:

| Botão | O que faz |
| --- | --- |
| **Alinhar bordas esquerdas**, **Alinhar centros horizontais**, **Alinhar bordas direitas** | Alinha na horizontal. |
| **Alinhar topos**, **Alinhar centros verticais**, **Alinhar bases** | Alinha na vertical. |
| **Distribuir na horizontal**, **Distribuir na vertical** | Deixa o mesmo espaço entre os elementos. |
| **Mesma largura do último selecionado**, **Mesma altura do último selecionado** | Iguala os tamanhos. |

As mudanças de estilo feitas nesse momento valem para todos os elementos selecionados.

## As outras seções do painel

| Seção | Para que serve |
| --- | --- |
| **Adicionar elemento** | Os nove tipos de elemento. O novo elemento aparece no meio da área visível. Veja [Elementos](/pt/guia/elementos). |
| **Dados da ficha** | Elementos prontos e funcionando para o sistema do personagem, como pontos de vida, perícias ou listas de magias. Eles aparecem no meio da área visível; arraste-os para cima da sua arte. |
| **Páginas** | Criar, renomear, reordenar e excluir páginas, adicionar páginas prontas e configurar a aba da ficha padrão. Veja [Páginas e fundos](/pt/guia/paginas-e-fundos). |
| **Fundo e tamanho** | A arte, o tamanho e a grade da página, e o texto padrão da ficha. |
| **Camadas** | Todos os elementos da página, do que está na frente para o que está atrás. |
| **Layout** | Gerar, importar, exportar e limpar o layout. |

### Camadas

A lista mostra o nome de cada elemento e, ao lado, o dado ao qual ele está ligado. Clique num deles para selecionar. O olho liga e desliga **Oculto fora do editor**; o cadeado liga e desliga **Travado**.

Na página, alguns elementos ganham um selo enquanto você edita:

- **Corrente quebrada**: o item ao qual o elemento estava ligado não existe mais no personagem.
- **Corrente**: o elemento ainda não está ligado a nenhum dado.
- **Cadeado** e **olho riscado**: travado e oculto fora do editor.

### Layout

| Botão | O que faz |
| --- | --- |
| **Gerar a ficha de** *sistema* | Troca o layout inteiro por uma ficha completa e funcional, com todas as páginas. As imagens de fundo são mantidas, e ainda dá para desfazer antes de salvar. |
| **Importar layout…** | Carrega um layout de um arquivo JSON. |
| **Exportar layout** | Salva o layout num arquivo JSON. |
| **Remover todos os elementos desta página** | Limpa a página atual. O fundo continua. |
| **Apagar o layout salvo** | Apaga o layout guardado no personagem e volta para a ficha gerada. **Não pode ser desfeito.** |

## Teclado e mouse

| Atalho | O que faz |
| --- | --- |
| Arrastar | Move; com <kbd>Alt</kbd>, ignora a grade |
| Alças | Mudam o tamanho; com <kbd>Shift</kbd>, mantêm a proporção |
| <kbd>Shift</kbd> ou <kbd>Ctrl</kbd> + clique | Adiciona à seleção |
| Clique duplo | Edita o texto ou o dado do elemento |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Move 1 pixel; com <kbd>Shift</kbd>, 10 pixels |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Y</kbd> | Desfaz / refaz |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | Duplica |
| <kbd>Del</kbd> | Exclui |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | Seleciona todos os elementos da página |
| <kbd>Esc</kbd> | Tira a seleção |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Salva |
| <kbd>Ctrl</kbd> + roda do mouse | Zoom |

Enquanto o editor está aberto, essas teclas não chegam ao resto do Foundry: as setas não movem tokens e o <kbd>Del</kbd> não apaga nada do mapa.
