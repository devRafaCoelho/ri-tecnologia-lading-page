# Plano de Divulgação — Landing Page RI Tecnologia

**Objetivo:** colocar a landing page no ar no domínio `ritecnologia.com.br` e estruturar a divulgação para gerar conversas com possíveis clientes (WhatsApp / contato).

**Situação atual:**
- Landing page pronta (portfólio / apresentação de serviços)
- Botão flutuante de WhatsApp já implementado
- Domínio `ritecnologia.com.br` já existe
- Site ainda **não** está hospedado no domínio (hoje pode estar só no GitHub Pages)

---

## Visão geral dos próximos passos

| Ordem | Passo | Tipo | Prioridade |
|------:|------|------|------------|
| 1 | Hospedar a LP no domínio `ritecnologia.com.br` | Técnico | Crítica |
| 2 | Configurar HTTPS e redirecionamentos | Técnico | Crítica |
| 3 | Meta tags de compartilhamento (Open Graph) | Técnico | Alta |
| 4 | Analytics + eventos de conversão | Técnico | Alta |
| 5 | Ajustar CTAs e mensagens do WhatsApp | Conteúdo / Código | Alta |
| 6 | Cases e depoimentos na LP | Conteúdo | Alta |
| 7 | LinkedIn como canal principal | Divulgação | Alta |
| 8 | Indicação e reativação de clientes | Comercial | Alta |
| 9 | Google Business + SEO básico | Divulgação | Média |
| 10 | Anúncios pagos (só depois do tracking) | Divulgação | Baixa (agora) |

---

## 1. Hospedar a LP no domínio `ritecnologia.com.br`

### O que fazer
- Publicar a landing page no domínio próprio (não só no GitHub Pages).
- Apontar DNS do domínio para o serviço de hospedagem escolhido.

### Opções comuns
- **GitHub Pages + domínio customizado** (mais simples, se o deploy estiver estável)
- **Netlify / Vercel / Cloudflare Pages** (bom para site estático)
- Hospedagem tradicional (cPanel etc.), se já tiverem contratada

### Por que é necessário
- Credibilidade: cliente confia mais em `ritecnologia.com.br` do que em `github.io`.
- Profissionalismo em propostas, assinatura de e-mail e LinkedIn.
- Base para SEO, anúncios e compartilhamentos.
- Evita perda de lead por link “estranho” ou instável.

### Resultado esperado
Site acessível em: `https://ritecnologia.com.br`

---

## 2. Configurar HTTPS e redirecionamentos

### O que fazer
- Ativar certificado SSL (HTTPS).
- Redirecionar:
  - `http://` → `https://`
  - `www.ritecnologia.com.br` → `ritecnologia.com.br` (ou o inverso, escolhendo **uma** versão canônica)

### Por que é necessário
- Segurança e confiança no navegador (cadeado).
- Evita conteúdo duplicado (SEO).
- Evita erro de “site não seguro” em WhatsApp/LinkedIn.

### Resultado esperado
Qualquer URL do domínio chega na mesma versão HTTPS correta.

---

## 3. Meta tags de compartilhamento (Open Graph)

### O que fazer no código
Adicionar no `index.html`:
- Título e descrição otimizados
- Imagem de compartilhamento (ex.: 1200×630)
- Tags Open Graph / Twitter Card

Exemplo de mensagem ao compartilhar:
- **Título:** RI Tecnologia | Soluções em Desenvolvimento, Automação e Infraestrutura
- **Descrição:** Consultoria especializada em software, automação, dashboards e integrações — entregando valor real ao negócio.

### Por que é necessário
- Quando alguém compartilha o link no LinkedIn/WhatsApp, aparece preview bonito (logo/imagem + texto).
- Sem isso, o link fica “pobre” e reduz cliques.

### Resultado esperado
Preview profissional ao enviar o link em qualquer rede.

---

## 4. Analytics + eventos de conversão

### O que fazer no código
- Instalar **Google Analytics 4** (ou Plausible, se preferirem privacidade).
- Medir eventos:
  - Clique no botão flutuante do WhatsApp
  - Clique em “Fale conosco” / “Entre em contato”
  - Clique em “Conheça nossos serviços”
  - (Opcional) scroll até a seção de contato

### Por que é necessário
- Sem métricas, a divulgação vira “achismo”.
- Permite saber:
  - De onde veio o visitante (LinkedIn, Google, indicação)
  - Quantos clicaram no WhatsApp
  - Qual canal traz conversa de verdade

### Resultado esperado
Dashboard simples com visitas e cliques de contato por semana.

---

## 5. Ajustar CTAs e mensagens do WhatsApp

### O que fazer
- Manter o botão flutuante.
- Diferenciar mensagens por contexto, por exemplo:
  - Hero: “Olá! Vi o site da RI Tecnologia e quero saber mais sobre os serviços.”
  - Serviços: “Olá! Tenho interesse em Automação / Dashboards / Desenvolvimento.”
  - CTA final: “Olá! Quero iniciar uma conversa sobre parceria.”

### Por que é necessário
- Facilita o atendimento (já chega com intenção).
- Aumenta conversão: o visitante sabe exatamente o próximo passo.
- WhatsApp é o canal mais natural para o perfil de cliente da RI.

### Resultado esperado
Mais conversas iniciadas e menos “Oi, quem é?” no começo.

---

## 6. Cases e depoimentos na LP

### O que fazer (conteúdo)
Incluir 2–3 blocos curtos com:
- Cliente / segmento (quando permitido)
- Problema
- Solução entregue
- Resultado (mesmo qualitativo: “reduziu retrabalho”, “visibilidade de KPIs”, etc.)

E 1–2 depoimentos curtos de clientes/parceiros.

### Por que é necessário
- Prova social: logos sozinhas ajudam, mas case + depoimento fecham venda.
- Diferencia a RI de “mais uma software house”.
- Material pronto para reaproveitar no LinkedIn.

### Resultado esperado
Visitante entende valor real, não só lista de tecnologias.

---

## 7. LinkedIn como canal principal de divulgação

### O que fazer
- Atualizar página da empresa e perfis dos sócios com link `ritecnologia.com.br`
- Publicar 2–3 posts por semana:
  - Case curto
  - Antes/depois de processo
  - Dica técnica aplicada a negócio (Grafana, automação, integração)
- Contato outbound leve: 8–15 mensagens/semana para leads qualificados

### Por que é necessário
- Melhor canal B2B para consultoria de tecnologia.
- Custo baixo e alto potencial de indicação.
- Combina com o tipo de serviço (software, automação, infra).

### Resultado esperado
Tráfego qualificado + conversas no WhatsApp/LinkedIn.

---

## 8. Indicação e reativação de clientes

### O que fazer
- Pedir indicação aos clientes atuais (AES, Neoenergia, SENAI, etc., conforme relacionamento).
- Pedir depoimento curto (texto ou áudio).
- Reativar contatos antigos com mensagem objetiva + link da LP.

### Por que é necessário
- Indicação costuma converter mais que anúncio.
- Vocês já têm histórico e logos — isso é ativo comercial.
- Ciclo de venda B2B encurta com confiança prévia.

### Resultado esperado
Leads mais quentes e com maior taxa de fechamento.

---

## 9. Google Business + SEO básico

### O que fazer
- Criar/atualizar Google Business Profile (se operação local/regional fizer sentido).
- SEO on-page:
  - Título e descrição da página
  - Textos com termos reais de busca (“desenvolvimento de software”, “automação de rotinas”, “dashboards Grafana”, cidade/região se aplicável)
- Garantir velocidade e mobile (já bem encaminhado)

### Por que é necessário
- Captura demanda de quem já está buscando solução.
- Complementa LinkedIn (LinkedIn = prospecção ativa; Google = demanda inbound).

### Resultado esperado
Entrada orgânica gradual de visitas interessadas.

---

## 10. Anúncios pagos (somente depois)

### O que fazer (mais tarde)
- LinkedIn Ads ou Google Ads com orçamento controlado.
- Só depois de:
  - Domínio no ar
  - Tracking funcionando
  - CTA/WhatsApp claros

### Por que deixar para depois
- Sem tracking, você gasta sem saber retorno.
- Sem prova social e CTA fortes, o anúncio traz clique, não conversa.

### Resultado esperado
Escala controlada de leads, com custo por conversa mensurável.

---

## Checklist técnico mínimo (antes de divulgar em massa)

- [ ] Site no ar em `https://ritecnologia.com.br`
- [ ] HTTPS + redirecionamento www/non-www
- [ ] Open Graph (preview no LinkedIn/WhatsApp)
- [ ] Analytics instalado
- [ ] Evento de clique no WhatsApp medido
- [ ] Link da LP atualizado no LinkedIn e assinatura de e-mail
- [ ] Mensagem padrão do WhatsApp revisada

---

## Checklist de divulgação (primeiros 30 dias)

### Semana 1
- [ ] Subir domínio + HTTPS
- [ ] Implementar analytics e Open Graph
- [ ] Atualizar links oficiais (LinkedIn, e-mail, cartão)

### Semana 2
- [ ] Publicar 3 posts no LinkedIn
- [ ] Pedir 2 depoimentos / 1 case
- [ ] Enviar LP para base de contatos frios/quentes

### Semana 3
- [ ] Incluir case/depoimento na LP
- [ ] 10–15 abordagens LinkedIn
- [ ] Revisar taxa de clique no WhatsApp

### Semana 4
- [ ] Ajustar textos da LP com base no que gerou conversa
- [ ] Definir se vale investir em ads no mês seguinte

---

## O que precisa (e não precisa) no código agora

### Precisa implementar
1. Open Graph / meta de compartilhamento
2. Analytics + eventos de conversão
3. (Opcional) CTAs de WhatsApp com mensagens diferentes por seção

### Não precisa agora
- Blog completo
- Área logada
- Chatbot complexo
- Muitas páginas internas
- Formulário avançado (WhatsApp já cobre o primeiro contato)

---

## Critérios de sucesso (simples)

Acompanhar semanalmente:
- Visitas na LP
- Cliques no WhatsApp
- Conversas iniciadas
- Reuniões agendadas
- Origem do lead (LinkedIn, indicação, Google, etc.)

**Meta inicial sugerida (30 dias):**  
gerar conversas reais no WhatsApp de forma consistente (ex.: 8–15 conversas/mês), mesmo com tráfego ainda pequeno.

---

## Ordem recomendada (resumo executivo)

1. **Domínio no ar** (senão a divulgação aponta para o lugar errado)
2. **Tracking + preview de link** (para medir e compartilhar bem)
3. **LinkedIn + indicação** (canal e prova social)
4. **Cases na LP** (aumenta conversão)
5. **SEO/Google** (médio prazo)
6. **Ads** (só com base pronta)

---

## Próxima ação imediata

1. Definir onde hospedar (`ritecnologia.com.br`)
2. Apontar DNS
3. Implementar Open Graph + Analytics na LP
4. Começar posts e abordagens no LinkedIn com o link definitivo

---

*Documento gerado para apoiar a divulgação da landing page da RI Tecnologia.*
