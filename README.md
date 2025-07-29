# 🚀 Testes de Performance com K6 na API JSONPlaceholder

Este projeto realiza testes de performance utilizando a ferramenta **[K6](https://k6.io/)** na API pública **[JSONPlaceholder](https://jsonplaceholder.typicode.com/)**. Os testes simulam requisições aos principais endpoints, verificando integridade de dados e tempo de resposta.

---

## 🧪 Scripts de Teste

### 🔍 `get-user-id.js`

Teste do endpoint `/users/1`.

**Validações realizadas:**
- ✅ Status da resposta é `200`
- ✅ Campo `id` na resposta é igual a `1`

**Configuração de execução:**
- 👥 10 usuários virtuais (VU)
- ⏱️ Duração de 10 segundos

**Relatório gerado:** `get-user-id.html`

---

### 🔍 `get-users.js`

Teste do endpoint `/users`.

**Validações realizadas:**
- ✅ Status da resposta é `200`
- ✅ Lista de usuários retornada não está vazia

**Configuração de execução:**
- 👥 10 usuários virtuais (VU)
- ⏱️ Duração de 10 segundos

**Relatório gerado:** `get-users.html`

---

## ▶️ Executando os Testes

Certifique-se de ter o [K6 instalado](https://k6.io/docs/getting-started/installation/).

### Clonar o repositório e acessa-lo

```bash
git clone https://github.com/rfausto/k6-placeholder.git
```

```bash
cd k6-placeholder
```

### Para rodar os testes:

```bash
k6 run tests/get-user-id.js
```

```bash
k6 run tests/get-users.js
```

## Geração e Interpretação dos Relatórios

Após a execução de cada teste, um relatório em HTML é gerado automaticamente por meio da função handleSummary(). Esse relatório pode ser aberto no navegador e fornece uma visão detalhada da performance da API durante o teste.

### 🔍 Como interpretar o relatório

| Seção                | Descrição                                                                 |
|----------------------|---------------------------------------------------------------------------|
| **Checks**           | Validações feitas no teste (ex: status, conteúdo da resposta).            |
| **HTTP Requests**    | Total de requisições feitas e taxa por segundo.                           |
| **Response Times**   | Tempos de resposta: mínimo, máximo, mediana e percentis (p(95), p(99)).   |
| **VU Metrics**       | Informações dos usuários virtuais simulados durante o teste.              |
| **Errors**           | Lista de erros ocorridos: timeouts, falhas de conexão ou de validação.    |
