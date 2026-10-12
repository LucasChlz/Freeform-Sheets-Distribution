---
aiPortrait: true
---

# FateX

O Sheet Tailor tem suporte dedicado ao **FateX** (Fate Extended), verificado com o FateX 1.5.4 no Foundry 13 e no 14. O FateX é o sistema de referência do módulo: foi nele que a Ficha Livre nasceu.

![Uma ficha desenhada do FateX sendo montada no editor de layout](/media/05-design-fatex.gif)

## Personalizar a ficha do FateX

O botão **Personalizar ficha** fica no topo da janela da ficha do FateX. Veja [Personalizar ficha](/pt/guia/personalizar-a-ficha).

## A Ficha Livre do FateX

A ficha gerada tem tudo o que a ficha do FateX tem, pronto para ser arrastado para cima da sua arte:

- **aspectos**;
- **consequências e condições**, com a marcação das condições;
- **perícias**, com o nível;
- **barras de estresse**, com as caixas;
- **façanhas** e **extras**, com as descrições;
- **pontos de destino** e **recarga**;
- **biografia**.

As perícias, as façanhas e os extras também aparecem como listas que se atualizam sozinhas, em **Dados da ficha**.

## Rolagens

Clicar numa perícia rola do jeito do FateX e posta o cartão normal do FateX no chat. Nos botões de rolagem, use **O item vinculado (perícia)** em **Rola** e escolha a perícia em **Item**.

## Estresse e aspectos

- **Estresse:** cada barra de estresse do FateX guarda as caixas como bits de um número. Nas trilhas de estresse, use **Caixas independentes (bitmask)** em **Marcação**; numa caixa de marcar avulsa, use o **Bit** da caixa (0 para a primeira, 1 para a segunda...). As automações de estresse do FateX continuam funcionando.
- **Aspectos e consequências:** o FateX guarda esses textos como HTML. Os campos ligados a eles usam **HTML (aspectos do FateX)** em **Guardado como**, mostram o texto limpo e gravam no formato que o FateX espera. Nada é regravado se você não mudar o texto.

## Caminhos úteis

| Dado | Onde |
| --- | --- |
| Pontos de destino | personagem: `system.fatepoints.current` |
| Recarga | personagem: `system.fatepoints.refresh` |
| Biografia | personagem: `system.biography.value` |
| Texto de um aspecto | item aspecto: `system.value` |
| Texto, rótulo e marcação de uma consequência | item consequência: `system.value`, `system.label`, `system.active` |
| Caixas de estresse | item estresse: `system.value` (e o número de caixas em `system.size`) |
| Nível de uma perícia | item perícia: `system.rank` |
| Descrição de uma façanha ou extra | item: `system.description` |

## Exemplo incluído

O módulo traz uma ficha de exemplo do FateX desenhada à mão: veja [Compartilhar e exemplos](/pt/guia/compartilhar#exemplos-incluidos).
