# CanesFood

Este é um sistema completo para gerenciamento de comércios, desenvolvido com uma arquitetura moderna de frontend e backend.

## 🚀 Tecnologias Utilizadas

### Backend
- Java 17
- Spring Boot 3.2.4
- Spring Data JPA
- PostgreSQL
- Docker
- Maven

### Frontend
- React 18
- TypeScript
- Material-UI (MUI)
- React Router
- Vite
- React Query

## 📋 Pré-requisitos

- Java 17 ou superior
- Node.js 18 ou superior
- Docker e Docker Compose
- Maven
- npm ou yarn

## 🔧 Instalação

### Backend

1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

3. Inicie os containers Docker:
```bash
docker-compose up -d
```

4. Execute o projeto:
```bash
mvn spring-boot:run
```

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 📦 Estrutura do Projeto

### Backend
```
backend/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── commerce/
│   │   │           ├── controller/
│   │   │           ├── model/
│   │   │           ├── repository/
│   │   │           ├── service/
│   │   │           └── CommerceApplication.java
│   │   └── resources/
│   │       └── application.properties
├── Dockerfile
├── docker-compose.yml
└── pom.xml
```

### Frontend
```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
└── vite.config.ts
```

## 🌐 Funcionalidades

- Cadastro e gerenciamento de comércios
- Interface responsiva e moderna
- Autenticação de usuários
- Busca e filtragem de comércios
- Detalhes completos de cada comércio

## 🔒 Variáveis de Ambiente

### Backend (.env)
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=commerce_db
DB_USER=postgres
DB_PASSWORD=postgres
```

## 🛠️ Desenvolvimento

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuidores

- [Daniel Souza](https://github.com/dnsouzadev)

## 📞 Suporte

Para suporte, envie um email para contato@dnsouzadev.tech
