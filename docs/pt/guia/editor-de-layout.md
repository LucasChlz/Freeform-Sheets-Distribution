---
aiPortrait: true
---

# O editor de layout

Na Ficha Livre, clique no botão de régua e lápis, **Editar layout** (*Edit layout*), no topo da janela. A ficha entra em modo de edição: os elementos da página passam a ser selecionados e arrastados, e uma coluna de controles aparece ao lado da página.

![O editor de layout aberto: um botão de rolagem está selecionado na página, com as alças em volta, e o painel ao lado mostra a posição, os dados e as opções dele](/img/pt/editor.png)

O editor trabalha uma página por vez. As abas trocam a página que está sendo editada, e o **+** ao lado delas cria uma página nova. Clique duplo numa aba renomeia a página.

## A barra do topo

| Botão | O que faz |
| --- | --- |
| **Salvar layout** | Salva o layout no personagem (<kbd>Ctrl</kbd>+<kbd>S</kbd>). Mostra **Salvo** quando não há nada para salvar. |
| Desfazer / Refazer | <kbd>Ctrl</kbd>+<kbd>Z</kbd> e <kbd>Ctrl</kbd>+<kbd>Y</kbd>. |
| **Fechar editor** | Volta para o modo de jogo. |
| **Afastar** / **Aproximar** | Zoom da página. O número no meio mostra o zoom; clicar nele faz **Ajustar à janela**. |
| **Mostrar os contornos dos elementos** / **Destacar o elemento sob o mouse** | Desligam o contorno azul de cada elemento, ou o destaque ao passar o mouse, para ver a ficha como ela vai ficar. A escolha fica lembrada. |

Se você fechar o editor com mudanças não salvas, aparece a pergunta **Layout não salvo**, com **Salvar**, **Descartar** e **Continuar editando**.

## Selecionar

- **Clique** num elemento para selecioná-lo.
- <kbd>Shift</kbd> ou <kbd>Ctrl</kbd> + clique adiciona ou tira elementos da seleção.
- <kbd>Ctrl</kbd>+<kbd>A</kbd> seleciona todos os elementos da página; <kbd>Esc</kbd> tira a seleção.
- **Clique duplo** num elemento seleciona e já leva você ao texto ou ao dado dele no painel.
- **Arraste numa parte vazia** da página para desenhar um retângulo: tudo o que ele toca fica selecionado. Com <kbd>Shift</kbd> ou <kbd>Ctrl</kbd>, entra na seleção que já existe.
- A lista de **Camadas** também seleciona, o que ajuda com elementos pequenos ou escondidos atrás de outros.
- Elementos **travados** deixam o clique passar para o que está embaixo, então uma imagem de fundo travada nunca atrapalha. Selecione pelo nome deles em **Camadas**.

A seleção nunca mistura páginas.

## Mover e mudar o tamanho

- **Arraste** para mover. Os elementos se encaixam na grade da página e nas guias; segure <kbd>Alt</kbd> para ignorar as duas.
- **As alças** em volta do elemento selecionado mudam o tamanho; com <kbd>Shift</kbd>, a proporção é mantida.
- **A alça redonda** acima do elemento selecionado gira o elemento; com <kbd>Shift</kbd>, de 15° em 15°. Perto de um ângulo reto, ela segura um pouco. <kbd>[</kbd> e <kbd>]</kbd> giram a seleção 15°, com <kbd>Shift</kbd> 1°.
- **As setas do teclado** movem 1 pixel; com <kbd>Shift</kbd>, 10 pixels.

Um elemento girado muda de tamanho ao longo dos próprios lados, e o lado ou o canto oposto à alça fica no lugar.

Quando a fonte de um texto, campo ou botão de rolagem fica maior que a caixa (ou um texto fica mais longo), a caixa cresce para caber, em vez de cortar o texto. Ela cresce para o lado oposto ao alinhamento do texto, então o texto fica onde estava.

O tamanho da grade fica em [Fundo e tamanho](/pt/guia/paginas-e-fundos#grade-de-encaixe).

### Guias

Enquanto você arrasta ou muda o tamanho, o elemento se encaixa nas bordas e no centro dos outros elementos da página e da própria página, como nos programas de desenho. Uma linha rosa mostra com o que ele se alinhou. Ao mover, ele também se encaixa em espaçamentos iguais: no meio entre os dois vizinhos, ou mais um passo do espaço que dois vizinhos já têm. Linhas azuis mostram os espaços iguais.

### Além da borda da página

Os elementos podem passar da borda da página, para uma arte que sangra para fora dela. No editor eles aparecem inteiros, com as alças, e uma linha tracejada marca onde a página termina; na ficha, a página corta o que passa.

### Andar pela página

Com zoom, arraste com o botão direito ou o do meio do mouse para mover a vista, como uma mãozinha.

## O painel do elemento selecionado

A seção **Elemento selecionado** mostra o tipo do elemento e, logo abaixo:

- **Nome no editor**: opcional, aparece na lista de camadas.
- Os botões de camada: **Trazer para a frente**, **Avançar uma camada**, **Recuar uma camada** e **Enviar para trás**; e **Duplicar** e **Excluir**.
- **Posição**: X, Y, **Largura**, **Altura** e **Rotação**, em pixels da página e graus. A rotação também tem um controle deslizante.
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
| **Layout** | Modelos do mundo, e gerar, importar, exportar e limpar o layout. |
| **Documentação** e **Discord** | No fim do painel: abrem esta documentação e o convite para a comunidade no Discord. |

### Camadas

A lista mostra o nome de cada elemento e, ao lado, o dado ao qual ele está ligado, da frente para trás. Clique num deles para selecionar. O olho liga e desliga **Oculto fora do editor**; o cadeado liga e desliga **Travado**.

Arraste uma linha para cima ou para baixo para mudar o que fica na frente: solta na metade de cima de outra linha, ela vai para a frente daquele elemento; na metade de baixo, para trás. Os botões de camada do elemento selecionado fazem o mesmo: **Avançar uma camada** e **Recuar uma camada** passam o próximo elemento que fica por cima ou por baixo dele.

Na página, alguns elementos ganham um selo enquanto você edita:

- **Corrente quebrada**: o item ao qual o elemento estava ligado não existe mais no personagem.
- **Corrente**: o elemento ainda não está ligado a nenhum dado.
- **Cadeado** e **olho riscado**: travado e oculto fora do editor.

### Layout

**Modelos** são layouts que o Mestre salvou no mundo. Escolha um em **Modelo** (*Template*) e clique em **Aplicar nesta ficha** (*Apply to this sheet*): a ficha recebe as páginas e os elementos dele, e você salva para manter. A lista mostra os modelos do sistema de jogo do mundo.

**Manter a arte desta ficha ao aplicar um modelo ou importar um layout** (*Keep this sheet's artwork when applying a template or importing a layout*) vem ligado: cada página fica com a arte que já tem, no tamanho dela, e os elementos se ajustam a ela pela largura. Desligue para receber também a arte do modelo ou do arquivo. Veja [Um layout para vários personagens](/pt/guia/compartilhar#um-layout-para-varios-personagens).

| Botão | O que faz |
| --- | --- |
| **Aplicar nesta ficha** | Troca o layout pelo modelo escolhido. Ainda dá para desfazer antes de salvar. |
| **Excluir modelo** | Só o Mestre. Tira o modelo do mundo; as fichas que o usaram continuam com o layout. |
| **Salvar como modelo para todos** | Só o Mestre. Salva o layout, como está no editor, como modelo do mundo. |
| **Gerar a ficha de** *sistema* | Troca o layout inteiro por uma ficha completa e funcional, com todas as páginas. As imagens de fundo são mantidas, e ainda dá para desfazer antes de salvar. |
| **Importar layout…** | Carrega um layout de um arquivo JSON. |
| **Exportar layout** | Salva o layout num arquivo JSON. |
| **Remover todos os elementos desta página** | Limpa a página atual. O fundo continua. |
| **Apagar o layout salvo** | Apaga o layout guardado no personagem e volta para a ficha gerada. **Não pode ser desfeito.** |

## Teclado e mouse

| Atalho | O que faz |
| --- | --- |
| Arrastar | Move; com <kbd>Alt</kbd>, ignora a grade e as guias |
| Arrastar numa parte vazia | Seleciona o que o retângulo toca |
| Alças | Mudam o tamanho; com <kbd>Shift</kbd>, mantêm a proporção |
| Alça redonda | Gira; com <kbd>Shift</kbd>, de 15° em 15° |
| <kbd>[</kbd> / <kbd>]</kbd> | Giram 15°; com <kbd>Shift</kbd>, 1° |
| <kbd>Shift</kbd> ou <kbd>Ctrl</kbd> + clique | Adiciona à seleção |
| Clique duplo | Edita o texto ou o dado do elemento; numa aba, renomeia a página |
| Botão direito ou do meio + arrastar | Move a vista |
| <kbd>↑</kbd> / <kbd>↓</kbd> num campo de número | Mudam o valor; com <kbd>Ctrl</kbd> ou <kbd>Shift</kbd>, dez passos de cada vez |
| <kbd>←</kbd> <kbd>↑</kbd> <kbd>→</kbd> <kbd>↓</kbd> | Move 1 pixel; com <kbd>Shift</kbd>, 10 pixels |
| <kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Y</kbd> | Desfaz / refaz |
| <kbd>Ctrl</kbd>+<kbd>D</kbd> | Duplica |
| <kbd>Del</kbd> | Exclui |
| <kbd>Ctrl</kbd>+<kbd>A</kbd> | Seleciona todos os elementos da página |
| <kbd>Esc</kbd> | Tira a seleção |
| <kbd>Ctrl</kbd>+<kbd>S</kbd> | Salva |
| <kbd>Ctrl</kbd> + roda do mouse | Zoom |

Enquanto o editor está aberto, essas teclas não chegam ao resto do Foundry: as setas não movem tokens e o <kbd>Del</kbd> não apaga nada do mapa.
