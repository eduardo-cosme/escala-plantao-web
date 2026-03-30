# 🏥 Sistema de Gestão de Escala de Plantões

Sistema web para gerenciamento de escalas de plantões hospitalares, permitindo cadastro de profissionais, alocação de plantões e visualização da escala semanal com controle de carga horária.

---

## 📋 Funcionalidades

### 1. Profissionais
- ✅ Cadastro com: nome, CRM/COREN, categoria (MÉDICO | ENFERMEIRO | TÉCNICO), carga horária semanal contratada
- ✅ Listagem com filtro por categoria
- ✅ Visualização de dados completos (categoria e carga horária)

### 2. Plantões
- ✅ Cadastro de plantões com: profissional, data e turno (Manhã/Tarde/Noturno)
- ✅ Consideração de horas: manhã/tarde = 6h, noturno = 12h

### 3. Escala Semanal
- ✅ Busca por data inicial da semana
- ✅ Visualização de todos os plantões com: data, profissional, turno e horas
- ✅ **Destaque visual** para profissionais que atingiram o limite de horas na semana
- ✅ Exclusão de plantões
- ✅ Alerta "⚠️ LIMITE ATINGIDO" quando profissional atinge/ultrapassa carga horária contratada

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- **Angular 16**
- **TypeScript**
- **HTML5 / CSS3**
- **HttpClient** (comunicação com API)
- **FormsModule** (formulários)

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16.x ou superior) - [Download](https://nodejs.org/)
- **Angular CLI** (versão 16.x)
  ```bash
  npm install -g @angular/cli@16
  ```

---

### **Configurar e Rodar o Front-end**

1. Navegue até a pasta do projeto front-end:
   ```bash
   cd escala-plantao-front
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

4. Acesse a aplicação em: `http://localhost:4200`

---

## 🎯 Como Usar o Sistema

### Cadastrar Profissional
1. Na tela inicial, clique em **"Cadastrar Profissional"**
2. Preencha: Nome, Registro (CRM/COREN), Categoria e Carga Horária Semanal
3. Clique em **"Salvar"**

### Listar Profissionais
1. Clique em **"Listar Profissionais"**
2. Use o filtro por categoria para visualizar apenas médicos, enfermeiros ou técnicos
3. Veja todos os dados cadastrados: nome, registro, categoria e carga horária

### Cadastrar Plantão
1. Na tela inicial, clique em **"Cadastrar Plantão"**
2. Selecione: Profissional, Turno (Manhã/Tarde/Noturno) e Data
3. Clique em **"Salvar"**

### Visualizar Escala Semanal
1. Clique em **"Visualizar Escala"**
2. Selecione a **data inicial** da semana
3. Clique em **"Buscar"**
4. Veja a escala com:
   - Data do plantão
   - Nome do profissional
   - Turno
   - Quantidade de horas
   - **Destaque em vermelho** se o profissional atingiu o limite de horas
5. Use o botão **"Excluir"** para remover plantões

---

## Estrutura do Projeto

```
escala-plantao-front/
├── src/
│   ├── app/
│   │   ├── models/              # Modelos de dados (interfaces TypeScript)
│   │   │   ├── profissional/
│   │   │   ├── plantao/
│   │   │   └── escala/
│   │   ├── pages/               # Componentes de páginas
│   │   │   ├── home/
│   │   │   ├── profissionais/
│   │   │   │   ├── cadastro/
│   │   │   │   └── listagem/
│   │   │   ├── plantoes/
│   │   │   │   └── cadastro/
│   │   │   └── escala/
│   │   ├── services/            # Serviços HTTP (comunicação com API)
│   │   │   ├── profissional.service.ts
│   │   │   └── plantao.service.ts
│   │   ├── app-routing.module.ts
│   │   └── app.module.ts
│   └── assets/
├── angular.json
├── package.json
└── README.md
```

---

## 🔗 Endpoints da API

### Profissionais
- **POST** `/api/profissionais` - Criar profissional
- **GET** `/api/profissionais` - Listar todos
- **GET** `/api/profissionais/categoria/{id}` - Filtrar por categoria

### Plantões
- **POST** `/api/plantoes` - Criar plantão
- **GET** `/api/plantoes/semana?data={data}` - Buscar escala semanal
- **DELETE** `/api/plantoes/{id}` - Excluir plantão

---

## Configuração CORS (Back-end)

Para permitir requisições do front-end, foi adicionado no back-end:

```java
@CrossOrigin(origins = "http://localhost:4200")
```
---

## 📝 Regras de Negócio Implementadas

1. ✅ Profissionais possuem carga horária semanal contratada (ex: 20h, 30h, 40h)
2. ✅ Turnos possuem duração específica:
   - Manhã/Tarde = 6 horas
   - Noturno = 12 horas
3. ✅ Sistema calcula automaticamente total de horas trabalhadas na semana por profissional
4. ✅ Destaque visual (fundo vermelho + alerta) quando profissional atinge/ultrapassa limite

