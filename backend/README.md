# Local Commerce

Plataforma para registro de comércios locais, focando inicialmente em estabelecimentos de delivery como lanchonetes e pizzarias.

## Funcionalidades

- Cadastro de comércios locais
- Informações detalhadas como:
  - Nome do estabelecimento
  - Descrição
  - Telefone
  - Endereço
  - Taxa de entrega
  - Horário de funcionamento
  - Tipo de comércio
  - Foto
  - Cardápio com preços

## Tecnologias Utilizadas

- Java 17
- Spring Boot 3.2.3
- Spring Data JPA
- H2 Database
- Lombok
- Maven

## Como Executar

1. Certifique-se de ter o Java 17 instalado
2. Clone o repositório
3. Execute o comando Maven para baixar as dependências:
   ```
   mvn clean install
   ```
4. Execute a aplicação:
   ```
   mvn spring-boot:run
   ```
5. Acesse a aplicação em: http://localhost:8080
6. Para acessar o console do H2 Database: http://localhost:8080/h2-console

## Endpoints da API

- GET /api/comercios - Lista todos os comércios
- GET /api/comercios/{id} - Busca um comércio específico
- POST /api/comercios - Cria um novo comércio
- PUT /api/comercios/{id} - Atualiza um comércio existente
- DELETE /api/comercios/{id} - Remove um comércio
