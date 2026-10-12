# Perguntas frequentes

## Não vejo o botão Personalizar ficha

- **Na ficha do D&D 5e** e em outras fichas novas, ele fica no menu de três pontos do topo da janela.
- **Você precisa ser dono do personagem.** Se o Mestre escolheu **Somente Mestres** em [Quem pode editar o layout das fichas](/pt/guia/configuracoes), só ele vê o botão.
- **Confira se o módulo está ativo** no mundo, em **Manage Modules**.

## Não vejo o botão de régua e lápis na Ficha Livre

Ele aparece só para quem pode editar o layout daquele personagem: o dono e o Mestre, ou só o Mestre com **Somente Mestres**.

## Um campo não deixa editar

- O valor pode ser **calculado pelo sistema**, como uma CA que vem da armadura. Ele aparece só para leitura; edite os dados de onde ele vem.
- O campo pode estar marcado como **Somente leitura**, nas opções dele.
- Você pode não ter permissão para editar aquele personagem.

## Um elemento mostra uma corrente quebrada no editor

O item ao qual ele estava ligado não existe mais no personagem. Adicione o item de novo, com o mesmo nome e tipo, ou ligue o elemento a outro item. Veja [Vínculos com os dados](/pt/guia/vinculos#um-item-do-personagem).

## Importei um layout e alguns elementos ficaram vazios

Os itens são reconhecidos pelo **tipo e pelo nome**. Se o personagem que recebeu o layout não tem um item com o mesmo nome e tipo, aquele elemento fica sem item. Veja [Importar um layout](/pt/guia/compartilhar#importar-um-layout).

## Os jogadores não veem a minha arte

- A arte precisa estar num lugar que todos acessam: dentro da pasta de dados do Foundry, ou num endereço público da internet.
- Arquivos no seu computador, fora do Foundry, só aparecem para você.
- Se você compartilhou um layout, lembre que **a arte não vai dentro do arquivo**. Veja [Compartilhar e exemplos](/pt/guia/compartilhar).

## Não consigo selecionar uma parte da ficha no personalizador

Algumas partes da ficha mudam a cada atualização e não podem ser guardadas com segurança. Selecione um bloco maior, pelo caminho acima do nome ou com **Bloco maior**.

## Mudei um bloco de lugar e outro bloco mudou junto

Alguns blocos são posicionados pela própria ficha em relação a um bloco maior. Quando o bloco maior se move, eles vão junto. Mova o bloco maior em vez do menor, ou use **Soltar do lugar**.

## A personalização sumiu

- **O personagem trocou de ficha?** A personalização vale só para a ficha em que foi feita. Volte para ela e a personalização reaparece.
- **O sistema foi atualizado?** Algumas partes da ficha podem ter mudado. Abra o personalizador e veja em **Mudanças** os blocos com a corrente quebrada.

## A ficha está pesada ou lenta

Artes e vídeos muito grandes pesam para todos que abrem a ficha. Use arquivos menores, prefira WebM a GIF e feche as fichas animadas que não está usando. Veja [Fichas animadas](/pt/guia/fichas-animadas#desempenho).

## Eu usava o Freeform Sheets. Preciso fazer alguma coisa?

Não. O módulo mudou de nome na versão 0.4.2, mas o identificador continua `freeform-sheets`. Atualize normalmente: layouts, personalizações e modelos continuam onde estão.

## O que acontece se eu desativar o módulo?

Cada personagem volta para a ficha normal do sistema. Nada é apagado: quando o módulo é ativado de novo, layouts e personalizações voltam como estavam.

## O Sheet Tailor funciona com fichas alternativas, como o Tidy 5e Sheets?

Com o Tidy 5e Sheets, sim, testado no Foundry 13 e no 14: o **Personalizar ficha** funciona nas fichas do Tidy, e quando o Tidy é a ficha de personagem a aba **Ficha padrão** mostra o Tidy, com o cadeado de edição. As outras fichas alternativas ainda não foram testadas uma a uma. Se encontrar um problema, conte para nós.

## Vários personagens podem usar o mesmo layout, cada um com a sua arte?

Podem. O Mestre salva o layout como modelo do mundo, e cada ficha aplica o modelo e fica com a própria arte; os elementos se ajustam a ela. Veja [Um layout para vários personagens](/pt/guia/compartilhar#um-layout-para-varios-personagens).

## Dá para abrir a ficha numa janela separada, em outra tela?

Dá. No Foundry 14, use o **Detach Window** no menu da janela (vem com o Foundry). No Foundry 13, use o módulo PopOut!. A Ficha Livre, a aba **Ficha padrão**, o **Personalizar ficha** e o editor de layout funcionam nessa janela; o painel do **Personalizar ficha** fica na janela principal.

O PopOut! não destaca fichas no Foundry 14: lá, use o **Detach Window**.

## Onde peço ajuda?

- **No [Discord](https://discord.gg/BtCGmbGEWR)**, no canal de suporte ou em mensagem direta.
- **No GitHub**, abrindo uma [issue](https://github.com/LucasChlz/Freeform-Sheets-Distribution/issues) com a versão do Foundry, o sistema e os passos para repetir o problema.
