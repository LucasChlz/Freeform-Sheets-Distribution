# Instalação

O Sheet Tailor é gratuito e funciona no Foundry VTT 13 e 14.

## Versões verificadas

| | Foundry 13 | Foundry 14 |
| --- | --- | --- |
| Foundry VTT | 13.351 | 14.369 |
| D&D 5e | 5.3.3 | 6.0.6 |
| Pathfinder 2e | 7.12.2 | 8.6.0 |
| FateX | 1.5.4 | 1.5.4 |

Qualquer outro sistema também funciona: os campos são ligados pelo caminho dos dados do personagem. Veja [Outros sistemas](/pt/sistemas/outros).

## Instalar o módulo

1. Na tela de configuração do Foundry, abra **Add-on Modules** e clique em **Install Module**.
2. Procure **Sheet Tailor** e clique em **Install**.
3. Se ele não aparecer na busca, cole este endereço no campo **Manifest URL** e clique em **Install**:

```text
https://github.com/LucasChlz/Freeform-Sheets-Distribution/releases/latest/download/module.json
```

## Ativar no mundo

1. Entre no mundo como Mestre.
2. Abra **Game Settings** e clique em **Manage Modules**.
3. Marque **Sheet Tailor** e salve.

A partir daí, as fichas de personagem ganham o botão **Personalizar ficha** (*Customize sheet*) e a opção de ficha **Ficha Livre (layout personalizado)** (*Freeform Sheet (custom layout)*). O próximo passo está em [Primeiros passos](/pt/guia/primeiros-passos).

::: tip Idiomas
A interface do módulo está em inglês e em português do Brasil e segue o idioma escolhido no Foundry.
:::

## Atualizar

O Foundry avisa quando sai uma versão nova; atualize pela lista de módulos, como qualquer outro.

::: info Instalou quando ele se chamava Freeform Sheets?
É só atualizar. O módulo mudou de nome na versão 0.4.2, mas o identificador continua `freeform-sheets`, então layouts, personalizações e modelos ficam onde estão.
:::

## Onde ficam os seus dados

- **Layouts da Ficha Livre e personalizações** ficam guardados no próprio personagem. Eles vão junto quando o personagem é exportado, importado ou guardado num compêndio.
- **Modelos de personalização** que o Mestre salva ficam guardados no mundo.

Se o módulo for desativado, cada personagem volta para a ficha normal do sistema. Nada é apagado: quando o módulo é ativado de novo, layouts e personalizações voltam como estavam.

## Problemas?

Veja as [Perguntas frequentes](/pt/guia/problemas). Se não resolver, abra uma [issue no GitHub](https://github.com/LucasChlz/Freeform-Sheets-Distribution/issues) contando a versão do Foundry, o sistema e os passos para repetir o problema, ou chame no [Discord](https://discord.gg/BtCGmbGEWR).
