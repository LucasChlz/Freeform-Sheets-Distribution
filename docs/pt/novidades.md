# Versões

## 0.7.0

- **Suporte ao Daggerheart** (o sistema da Foundryborne, 2.x no Foundry 14 e 1.9 no Foundry 13), para personagens, adversários e companheiros. A Ficha Livre já vem completa, com as abas da ficha do Daggerheart: atributos com as rolagens, Evasão, valor e espaços de armadura, limiares de dano, Pontos de Vida, Estresse, Esperança, experiências, ataques, descansos, o movimento de morte e as condições; habilidades agrupadas como na ficha do Daggerheart; as cartas em uso e o cofre; inventário e biografia. Toda rolagem é a rolagem de dualidade do Daggerheart, com Esperança e Medo, e os itens são usados do jeito do Daggerheart. O **Personalizar ficha** também funciona nas fichas do Daggerheart. Veja [Daggerheart](/pt/sistemas/daggerheart).

## 0.6.0

O pacote agora se chama **Sheet Tailor: Character Sheet Editor**, para quem procura "sheet editor" ou "character sheet" encontrar. Só o título muda: o identificador, os layouts, as personalizações e o endereço do manifesto continuam iguais.

**Editor de layout**

- **Guias.** Ao arrastar ou mudar o tamanho, os elementos se encaixam nas bordas e no centro dos outros elementos e da página, e em espaçamentos iguais entre vizinhos. Linhas rosa mostram o alinhamento, azuis os espaços iguais. <kbd>Alt</kbd> ignora a grade e as guias. Veja [Guias](/pt/guia/editor-de-layout#guias).
- **Alça de rotação.** A alça redonda acima do elemento selecionado gira o elemento; com <kbd>Shift</kbd>, de 15° em 15°. <kbd>[</kbd> e <kbd>]</kbd> giram 15°, e a **Rotação** ganhou um controle deslizante. Um elemento girado agora muda de tamanho ao longo dos próprios lados; antes, a caixa podia crescer sem controle.
- **Retângulo de seleção.** Arraste numa parte vazia da página para selecionar tudo o que ele toca.
- **Camadas arrastando.** Arraste uma linha de **Camadas** para cima ou para baixo para mudar o que fica na frente. **Avançar uma camada** e **Recuar uma camada** agora passam o próximo elemento que fica por cima ou por baixo, e um elemento selecionado não pula mais para a frente, então o que você manda para trás fica atrás.
- **Elementos travados deixam o clique passar**: uma imagem de fundo travada não pega mais todos os cliques.
- **Além da borda da página**, os elementos aparecem inteiros no editor, com as alças, e uma linha tracejada marca onde a página termina.
- **Mover a vista** com o botão direito ou o do meio do mouse.
- **Renomear uma página** com clique duplo na aba, ou pelo lápis da página que está sendo editada em **Páginas**, que agora leva ao nome.
- **Contornos e destaque ao passar o mouse** podem ser desligados na barra de cima.
- **Campos de número:** <kbd>↑</kbd>/<kbd>↓</kbd> mudam o valor; com <kbd>Ctrl</kbd> ou <kbd>Shift</kbd>, dez passos de cada vez.
- **Uma fonte maior aumenta a caixa**, em vez de cortar o texto.
- **Uma imagem nova** abre o navegador de arquivos na hora, mostra a imagem inteira e assume a proporção dela.

**Páginas e estilo**

- **Posicionar o fundo arrastando:** **Ajustar na página** mostra a imagem inteira com alças, para escolher a parte que aparece ou pôr as bordas de uma moldura nos cantos da página. Veja [Posicionar a arte arrastando](/pt/guia/paginas-e-fundos#posicionar-a-arte-arrastando).
- Um fundo novo numa página que já tem elementos mantém o tamanho da página; uma página vazia continua assumindo o tamanho da imagem.
- **Opacidade do fundo** no **Estilo** apaga só a cor de fundo, não o texto.
- **×** ao lado de cada campo de cor esvazia o campo.
- **Usar esta cor em todos os textos da página**, em **Fundo e tamanho**.
- Botões de rolagem centralizados mantêm o modificador ao lado do nome.

**Janela**

- A Ficha Livre mostra os botões na barra de título (ficha, token, ficha padrão, exportar...), como as fichas do sistema, em vez de escondê-los no menu ⋮.

**Personalizar ficha**

- **Importar um layout da Ficha Livre** no **Personalizar ficha** oferece trocar a ficha do personagem para a Ficha Livre com esse layout, em vez de dizer que o arquivo não é um layout. Uma personalização importada no editor de layout diz onde ela entra.
- **Mover a arte ao rolar a ficha (paralaxe)**, uma opção da arte.
- Uma ficha personalizada volta a mudar de tamanho pelo canto, também enquanto é personalizada.
- Salvar mostra uma mensagem só (ela se repetia uma vez para cada mudança feita antes).

## 0.5.0

- **Modelos de layout no mundo.** O Mestre salva um layout da Ficha Livre como modelo para todos, e cada jogador aplica na própria ficha pela seção **Layout** do editor. Com **Manter a arte desta ficha** ligado, cada página fica com a arte que tem e os elementos se ajustam a ela; isso vale também ao importar um arquivo de layout. Veja [Um layout para vários personagens](/pt/guia/compartilhar#um-layout-para-varios-personagens).
- **API:** `getLayoutTemplates` e `applyLayoutTemplate`, para aplicar um modelo em muitos personagens com uma macro (versão 2 da API).
- **Fichas em janela separada.** A Ficha Livre, a aba **Ficha padrão**, o **Personalizar ficha** e o editor de layout agora funcionam numa janela separada do navegador: com o **Detach Window** do Foundry 14 e com o módulo PopOut! no Foundry 13. Antes, a aba Ficha padrão ficava para trás na janela principal, arrastar no editor não fazia nada e mudanças numa personalização não chegavam à ficha.
- **Tidy 5e Sheets:** testado no Foundry 13 e no 14. O **Personalizar ficha** funciona nas fichas do Tidy, e com o Tidy como ficha de personagem a aba **Ficha padrão** mostra o Tidy com o cadeado de edição.
- **D&D 5e 6:** os campos de deslocamento voltam a ser editáveis.
- O exemplo do feiticeiro do Pathfinder 2e não vem mais com o módulo.

## 0.4.3

- **Botão Documentação** ao lado do botão do Discord: no fim do editor de layout e do personalizador, e em **Configure Settings** → **Sheet Tailor**. Ele abre esta documentação, em português quando o Foundry está em português.
- O manifesto do módulo passa a apontar para a documentação, para as versões e para o lugar de relatar problemas.

## 0.4.2

- **Freeform Sheets agora se chama Sheet Tailor.** Outro módulo do catálogo da Foundry já tinha o nome Freeform Sheets. Só o nome mudou: o identificador continua `freeform-sheets`, então layouts, personalizações, modelos, a API e o endereço de instalação continuam iguais, e basta atualizar.
- **Botão do Discord** no fim do editor de layout e do personalizador, e em **Configure Settings** → **Sheet Tailor**.

## 0.4.1

- **Verificado no Foundry 14** (14.369) com D&D 5e 6.0.6, Pathfinder 2e 8.6.0 e FateX 1.5.4, e de novo no Foundry 13 (13.351).
- **Correção no D&D 5e 6:** as bolinhas de ações e resistências lendárias dos NPCs não eram salvas.

## 0.4.0

- **Suporte ao D&D 5e**, para personagens e NPCs: a Ficha Livre completa, com as abas da ficha do dnd5e, rolagens e ações do próprio sistema, uso de itens, magias e espaços, avanço ao soltar classes, espécies e antecedentes, e pergaminhos ao soltar magias no inventário.
- **Personalizar ficha** passa a funcionar também na ficha do dnd5e, pelo menu do topo da janela.
- **A aba Ficha padrão** mostra fichas ApplicationV2 inteiras, com o cabeçalho e as abas laterais do dnd5e.
- Primeira versão publicada.
