## 🌳 README: Site Informativo COP30 - Belém

Este repositório contém o código-fonte de um website informativo e responsivo desenvolvido para a Conferência das Partes (COP30), que será realizada em Belém. O projeto foi construído utilizando **HTML, CSS e JavaScript** puros, seguindo uma abordagem **Mobile-First** e focada em **Acessibilidade** e **Usabilidade**.


## Sobre o Projeto

O objetivo principal deste projeto é criar uma plataforma educacional e informativa sobre a COP30, destacando a importância da conferência no contexto amazônico e global.

### Funcionalidades em Destaque

  * **Design Responsivo:** O layout se adapta perfeitamente a dispositivos móveis e desktops, utilizando **Flexbox** e **CSS Grid** para uma apresentação otimizada.
  * **Alternância de Tema (Light/Dark Mode):** Inclui um botão que permite ao usuário alternar manualmente entre o **Tema Claro** e o **Tema Escuro**. A preferência é salva no `localStorage` para persistência.
  * **Conteúdo Dinâmico e Modal:** A seção "Agenda" carrega sessões dinamicamente (simulando uma fonte JSON). Ao clicar em um cartão, um **Modal** é exibido, mostrando os detalhes completos da sessão.
  * **Formulário de Cadastro e Validação:** Possui um formulário de registro com campos obrigatórios e validação em **JavaScript** para garantir a integridade dos dados, além de exigir a aceitação dos termos da LGPD.


## Estrutura do Código

O projeto é dividido nos três arquivos essenciais:

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Estrutura principal da página, conteúdo estático, esqueletos de Modal e Formulário, e o botão de tema. |
| `styles.css` | Estilos responsivos, variáveis de cor (`--primary-color`, `body.dark-theme`), Flexbox/Grid e estilos para o botão de tema. |
| `script.js` | Lógica de interatividade: renderização da Agenda (simulação JSON), controle do Modal, validação do Formulário e funções de alternância/persistência do Tema. |

-----

## Como Executar Localmente

1.  **Clone o Repositório:**
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    cd cop30-site
    ```
2.  **Abra o Arquivo:**
    Abra o arquivo `index.html` diretamente no seu navegador de preferência para visualizar o site.


## Deploy (GitHub Pages)

O projeto foi configurado para ser facilmente implantado no GitHub Pages.

1.  Vá para **Settings** do seu repositório.
2.  Clique em **Pages** no menu lateral.
3.  Em **Branch**, selecione `main` (ou `master`) e clique em **Save**.
4.  O site estará acessível no link fornecido pelo GitHub Pages em poucos minutos.