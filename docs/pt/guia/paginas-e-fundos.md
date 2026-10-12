# Páginas e fundos

Cada página da Ficha Livre é uma aba, com a sua própria arte e o seu próprio tamanho. Uma ficha pode ter até 20 páginas: uma para o personagem, uma para as magias, uma para o inventário, ou qualquer divisão que combine com a sua arte.

## Páginas

No editor, as abas trocam a página que está sendo editada, e o **+** ao lado delas cria uma página em branco. A seção **Páginas** do painel reúne o resto:

| Controle | O que faz |
| --- | --- |
| Ícone à esquerda | Abre aquela página para edição. Na página que está sendo editada ele é um lápis, **Renomear a página**: leva você ao nome. |
| Nome | Renomeia a aba. Vazio, ela se chama "Página 1", "Página 2" e assim por diante. Clique duplo na aba também renomeia. |
| Número | Quantos elementos a página tem. |
| **Mover para a esquerda** / **Mover para a direita** | Muda a ordem das abas. |
| **Excluir página** | Exclui a página e os elementos dela. Se ela tiver elementos, o módulo pergunta antes. Ainda dá para desfazer antes de salvar. |
| **Adicionar página** | Cria uma página em branco. |

A ficha sempre tem pelo menos uma página.

![A seção Páginas do editor, com duas páginas, o botão Adicionar página e as opções da aba da ficha padrão](/img/pt/paginas.png)

### Páginas prontas

**Páginas prontas** lista as páginas completas da ficha gerada para o sistema do personagem, como **Magias** ou **Inventário**. Cada uma entra como uma aba nova, funcionando.

Isso é útil quando você montou uma página sobre a sua arte e quer as outras partes da ficha sem desenhar nada: por exemplo, a sua arte para a frente do personagem e as páginas prontas de ações, inventário e talentos ao lado.

### Mover elementos entre páginas

Selecione os elementos e escolha a outra página em **Página**, na seção do elemento selecionado. O editor vai junto para a página de destino.

### A aba da ficha padrão

Em **Aba da ficha padrão**:

- **Mostrar a ficha do próprio sistema como última aba**: liga ou desliga a aba **Ficha padrão**.
- **Nome da aba**: o nome que a aba mostra.

Com a aba desligada, a ficha do sistema continua a um clique, em **Abrir a ficha do sistema**, no menu de três pontos da janela.

## Fundo e tamanho

A seção **Fundo e tamanho** vale para a página que está sendo editada; o nome dela aparece no título da seção.

![A seção Fundo e tamanho do editor, com a imagem de fundo, o encaixe, a cor, o tamanho da página, a grade e o texto padrão](/img/pt/fundo-e-tamanho.png)

### Fundo

| Campo | O que faz |
| --- | --- |
| **Imagem, GIF ou vídeo** | Caminho ou endereço da arte. O botão de pasta abre o navegador de arquivos do Foundry; o X remove a arte. |
| **Encaixe** | **Cobrir** preenche a página e corta as sobras; **Conter** mostra a arte inteira; **Esticar** estica para caber; **Livre (ajustado na página)** deixa a arte onde você a colocou com **Ajustar na página**. |
| **Opacidade** | Deixa a arte mais clara ou mais forte. |
| **Ajustar na página** | Posicionar a arte arrastando. Veja abaixo. |
| **Cor da página** | Cor que aparece onde a arte não cobre, ou a página inteira, sem arte. |

Quando você escolhe uma imagem para uma **página vazia**, a página assume o tamanho da imagem. Assim, os espaços que você desenhou ficam exatamente onde os elementos estão, e o alinhamento se mantém em qualquer tamanho de janela: a página inteira é escalada para caber. Uma página que já tem elementos mantém o tamanho e o layout: a arte cobre a página, sem esticar, e **Igualar ao tamanho da imagem** fica a um clique.

### Posicionar a arte arrastando

**Ajustar na página** mostra a imagem inteira, apagada onde a página corta, com alças em volta, e os elementos saem da frente enquanto isso:

- **Arraste a imagem** para escolher a parte que aparece, por exemplo o lado limpo de uma textura.
- **Puxe as alças** para mudar o tamanho, por exemplo para pôr as bordas de uma moldura nos cantos da página. Com <kbd>Shift</kbd>, a proporção é mantida.
- As bordas e o centro dela se encaixam nos da página; <kbd>Alt</kbd> desliga. As setas do teclado movem 1 pixel; com <kbd>Shift</kbd>, 10 pixels.
- <kbd>Esc</kbd>, um clique duplo ou **Concluir o ajuste** terminam.

O encaixe passa a ser **Livre (ajustado na página)**. Escolher outro encaixe guarda o lugar que você deu, para quando voltar ao **Livre**. Uma imagem nova com a mesma proporção (uma cópia melhor do mesmo desenho) mantém o lugar; outra imagem começa cobrindo a página.

GIFs animados e vídeos WebM ou MP4 também funcionam como fundo. Os vídeos tocam em repetição e sem som. Veja [Fichas animadas](/pt/guia/fichas-animadas).

### Tamanho da página

| Campo | O que faz |
| --- | --- |
| **Largura** / **Altura** | Tamanho da página em pixels, de 100 a 8000. |
| **Redimensionar os elementos junto com a largura da página (mantém as proporções)** | Ligado, os elementos acompanham qualquer mudança de largura da página na mesma proporção. Vem ligado. |
| **Igualar ao tamanho da imagem** | Volta a página ao tamanho exato da imagem de fundo. |

Com a opção de redimensionar ligada, trocar a arte por uma versão maior ou menor do mesmo desenho mantém tudo alinhado: a página assume o tamanho da nova imagem e os elementos acompanham a largura. Mudar só a altura acrescenta ou tira espaço embaixo, sem mexer nos elementos.

### Grade de encaixe

Tamanho da grade em pixels. Os elementos se encaixam nela quando você arrasta ou muda o tamanho. **0** desliga a grade, e segurar <kbd>Alt</kbd> durante o arrasto ignora a grade só naquele movimento.

### Texto padrão

**Fonte**, **Tamanho** e **Cor do texto** valem para todos os elementos de texto da ficha, em todas as páginas, que não tenham estilo próprio. É o jeito mais rápido de trocar a fonte da ficha inteira.

**Usar esta cor em todos os textos da página** tira a cor de texto de cada elemento da página, para que todos sigam a **Cor do texto**: numa arte escura, ponha branco e clique uma vez.

## Dicas para a arte

- **Desenhe no tamanho em que vai usar.** Entre 1000 e 1600 pixels de largura costuma ficar nítido sem pesar.
- **Arquivos leves carregam mais rápido para todos.** Prefira WebP ou JPG para imagens e WebM curto para animações. Uma arte de vários megabytes é baixada por cada jogador que abre a ficha.
- **Deixe os espaços dos campos vazios na arte.** O texto dos campos aparece por cima, e números desenhados na arte não mudam.
- **Guarde a arte dentro do Foundry**, na pasta de dados, para todos os jogadores conseguirem ver. Endereços da internet funcionam, mas dependem do site continuar no ar.
- **Sem permissão para enviar arquivos**, o jogador pode colar o endereço de uma imagem no campo do fundo.
