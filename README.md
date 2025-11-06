#  🐳 Desafio de Orquestração de Containers (Docker)

Este repositório contém as soluções dos desafios de orquestração de containers proposto pelo **Orion Bootcamp** da **New Rizon**.

<br>

## 📚 Exercícios propostos

| Exercício | Objetivo Principal | Foco Técnico |
| :--- | :--- | :--- |
| **Exercício 1** | Containerização de uma aplicação Node.js simples. | `Dockerfile` básico, `docker-compose.yml` e mapeamento de portas. |
| **Exercício 2** | Conexão de dois serviços (API + DB). | Redes internas do Compose, volumes persistentes e uso de variáveis de ambiente. |
| **Exercício 3** | Diferenciação de ambientes DEV/PROD. | Múltiplos arquivos Compose (`-f`), `Dockerfile` otimizado (Multi-Stage) e `target` de build. |
| **Desafio Extra** | Montagem de uma stack completa (API + DB + Admin). | `healthchecks`, `depends_on: service_healthy`, volumes nomeados e estrutura profissional. |

<br>

## 🚀 Tecnologias e Ferramentas

| Componente | Tecnologia |
| :--- | :--- |
| **Containerização** | Docker |
| **Orquestração** | Docker Compose |
| **API** | Node.js (Express) |
| **Banco de Dados** | PostgreSQL |
| **Admin.** | Adminer |

<br>

## 👨‍💻 Guia de Execução e Teste
Para executar e testar cada solução, navegue para a pasta correspondente no terminal.

### 1. Exercício-01: Dockerfile + Compose: “Hello Container”
* **Pasta:** exercicio-01/
* **Teste:** Acessar a mensagem "Hello from Docker!" no navegador.

```bash
# Comando de Inicialização
docker compose up -d --build

# Acessar: http://localhost:3000
docker compose down
```

### 2. Exercício-02: Compose com API + Banco de Dados
* **Pasta:** exercicio-02/
* **Teste:** Acessar a API e ver a data/hora retornada do banco de dados.

```bash
# Comando de Inicialização
docker compose up -d --build

# Acessar: http://localhost:3000
docker compose down
```

### 3. Exercício-03: Boas Práticas + Múltiplos Ambientes
* **Pasta:** exercicio-03/
* **Teste:** Verificar se a imagem PROD é mais leve e se as variáveis de ambiente são aplicadas.

#### 3.1. Ambiente de Desenvolvimento (DEV)

```bash
# Usa o arquivo docker-compose.yml base
docker compose up -d --build

# Teste: Acesse http://localhost:3000
docker compose down
```

#### 3.2. Ambiente de Produção (PROD)

```bash
# Usa os dois arquivos de composição
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build

# Teste: Acesse http://localhost:3000
docker compose down
```

### 4. Desafio Extra: Stack Completa (API + DB + Admin)
Pasta: exercicio-extra/
Teste: Testar todas as rotas e acessar o Adminer.

```bash
# O comando inicia os 3 serviços (API, DB, Adminer)
docker compose up -d --build

# Acessar a API: http://localhost:3000
# Acessar o Healthcheck: http://localhost:3000/health
# Acessar o Adminer: http://localhost:8080

# Derrubar a stack e dados
docker compose down
```