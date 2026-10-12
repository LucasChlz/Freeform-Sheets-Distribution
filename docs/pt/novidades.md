# Versões

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
