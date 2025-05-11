# Documentação da Estrutura do Projeto GoFood Delivery

## Visão Geral da Estrutura

O projeto GoFood Delivery apresenta uma estrutura organizada e modular, seguindo boas práticas de desenvolvimento front-end. A estrutura de pastas está organizada da seguinte forma:

```
gofood-delivery/
|-- relatorio/
`-- src/
    |-- assets/
    |   |-- css/
    |   |   |-- global/
    |   |   `-- pages/
    |   |-- img/
    |   |   |-- global/
    |   |   `-- pages/
    |   `-- js/
    |       |-- components/
    |       `-- pages/
    |-- carrinho.html
    `-- index.html
```

## Benefícios da Estrutura Adotada

### 1. Organização Modular

A estrutura do projeto GoFood Delivery adota uma abordagem modular que separa claramente os diferentes tipos de recursos (CSS, JavaScript, imagens) e os organiza por contexto (global ou específico de página). Esta organização traz diversos benefícios:

- **Facilidade de manutenção**: Cada componente e página tem seus recursos isolados, facilitando a localização e modificação de arquivos específicos.
- **Reutilização de código**: Os componentes globais podem ser facilmente reutilizados em diferentes páginas do aplicativo.
- **Separação de responsabilidades**: A divisão clara entre componentes e páginas ajuda a manter o código organizado e com responsabilidades bem definidas.

### 2. Escalabilidade

A estrutura adotada é altamente escalável, permitindo o crescimento do projeto de forma organizada:

- **Adição de novas páginas**: Novas páginas podem ser adicionadas seguindo o mesmo padrão, com seus próprios recursos CSS e JavaScript.
- **Expansão de componentes**: Novos componentes podem ser criados e integrados facilmente ao sistema existente.
- **Gerenciamento de recursos**: A separação de recursos globais e específicos de página facilita o gerenciamento à medida que o projeto cresce.

### 3. Flexibilidade

A estrutura permite adaptações e modificações sem comprometer a integridade do projeto:

- **Independência entre componentes**: Alterações em um componente não afetam necessariamente outros componentes.
- **Facilidade de refatoração**: A organização modular facilita a refatoração de partes específicas do código.
- **Adaptação a diferentes necessidades**: A estrutura pode ser facilmente adaptada para acomodar novos requisitos ou tecnologias.

## Detalhamento da Estrutura

### Diretório `src/`

O diretório `src/` contém todo o código-fonte do projeto, incluindo HTML, CSS, JavaScript e recursos visuais.

#### Arquivos HTML

Os arquivos HTML principais estão na raiz do diretório `src/`:
- `index.html`: Página principal do aplicativo, exibindo produtos e categorias
- `carrinho.html`: Página do carrinho de compras

#### Diretório `assets/`

O diretório `assets/` contém todos os recursos utilizados pelo aplicativo, organizados por tipo:

##### CSS (`assets/css/`)

- **global/**: Contém estilos que são aplicados em todo o aplicativo
  - `global.css`: Estilos globais
  - `header.css`: Estilos para o cabeçalho
  - `menuLateral.css`: Estilos para o menu lateral
  - `modal.css`: Estilos para modais
  - `normalize.css`: Reset de estilos para consistência entre navegadores

- **pages/**: Contém estilos específicos para cada página
  - **index/**: Estilos para a página principal
    - `index.css`: Arquivo principal que importa os estilos parciais
    - **partials/**: Componentes específicos da página principal
      - `cards.css`: Estilos para os cards de produtos
      - `categorias.css`: Estilos para a seção de categorias
      - `filtros.css`: Estilos para os filtros de busca
  - **tela-de-carrinho/**: Estilos para a página do carrinho
    - `carrinho.css`: Estilos principais do carrinho
    - **partials/**: Componentes específicos da página de carrinho
      - `style.css`: Estilos adicionais para o carrinho

##### JavaScript (`assets/js/`)

- **components/**: Componentes JavaScript reutilizáveis
  - `header.js`: Funcionalidades do cabeçalho
  - `inputRange.js`: Componente para inputs do tipo range
  - `menuLateral.js`: Funcionalidades do menu lateral
  - `modal.js`: Funcionalidades para modais

- **pages/**: Scripts específicos para cada página
  - **index/**: Scripts da página principal
    - `index.js`: Script principal que inicializa a página
    - `iniciaPagina.js`: Configuração inicial da página
    - `eventos.js`: Gerenciamento de eventos da página
  - **tela-de-carrinho/**: Scripts da página de carrinho
    - `carrinho.js`: Script principal do carrinho
    - `eventos.js`: Gerenciamento de eventos do carrinho
    - `iniciaPagina.js`: Configuração inicial da página de carrinho

##### Imagens (`assets/img/`)

- **global/**: Imagens utilizadas em todo o aplicativo
  - Ícones e logo da aplicação
- **pages/**: Imagens específicas para cada página
  - **index/**: Imagens da página principal
    - Imagens de categorias e produtos

## Como a Estrutura Favorece a Escalabilidade

### Padrão de Componentes

O projeto utiliza um padrão baseado em componentes, onde cada elemento da interface (header, menu lateral, modal) é tratado como um componente independente com seus próprios arquivos CSS e JavaScript. Isso permite:

1. **Desenvolvimento paralelo**: Diferentes desenvolvedores podem trabalhar em diferentes componentes simultaneamente.
2. **Testabilidade**: Componentes isolados são mais fáceis de testar.
3. **Manutenção simplificada**: Problemas em um componente podem ser resolvidos sem afetar outros.

### Organização por Contexto

A separação de recursos por contexto (global vs. específico de página) facilita:

1. **Carregamento otimizado**: Apenas os recursos necessários para cada página são carregados.
2. **Prevenção de conflitos**: Estilos e scripts específicos de página não interferem em outras páginas.
3. **Clareza de propósito**: Cada arquivo tem um propósito claro e bem definido.

### Modularização de JavaScript

O JavaScript é organizado de forma modular, com:

1. **Importação/exportação de módulos**: Utiliza o sistema de módulos ES6 para importar e exportar funcionalidades.
2. **Separação de responsabilidades**: Cada arquivo JavaScript tem uma responsabilidade específica.
3. **Inicialização controlada**: Páginas são inicializadas de forma estruturada através de funções específicas.

## Conclusão

A estrutura do projeto GoFood Delivery foi projetada pensando em organização, manutenção e escalabilidade. A abordagem modular e a clara separação de responsabilidades permitem que o projeto cresça de forma organizada e sustentável.

A estrutura adotada facilita:
- A adição de novas funcionalidades
- A manutenção do código existente
- O trabalho em equipe
- A reutilização de componentes
- A consistência visual e funcional em toda a aplicação

Esta arquitetura proporciona uma base sólida para o desenvolvimento contínuo e a evolução do aplicativo GoFood Delivery, garantindo que ele possa se adaptar a novos requisitos e crescer de forma sustentável ao longo do tempo.