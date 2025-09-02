README — UI no padrão Spotify (Agrotech)

Este guia descreve tudo o que foi implementado/ajustado: páginas, componentes, CSS, navegação e correções de layout (overflow), sempre seguindo um visual inspirado no Spotify (verde, cinza-escuro, cartões com sombra e bordas suaves).

Visão geral

Header Reformulado

Formulário de Contato estilizado (validado, textarea sem redimensionar, feedback de sucesso).

Login com validação simples (nega acesso se as credenciais forem incorretas).

Form (nome/altura/peso/gênero) com envio e tela de resultado.

Gráficos (Recharts) com layout lado a lado (grid responsivo) e sem overflow.

Página “Sobre nós” em grid de cartões, com botão “Voltar” e respiro superior.

Footer no padrão, com redes sociais.

Correções de overflow e padronização de cores/estética.

Paleta e princípios de estilo

Verde Spotify: #1db954 (variar para #1ed760, #0fa653).

Fundo escuro: gradientes discretos + cartões #1a1a1a/#232323.

Tipografia: Inter, peso forte para títulos, labels legíveis, contraste alto.

Acessibilidade: foco visível (box-shadow verde), labels conectadas a inputs, navegação por teclado.

Contato

O que foi feito:

Formulário no padrão Spotify (cartão escuro, labels legíveis, campos com foco verde).

Textarea sem redimensionar (resize: none) e espaço acima do botão.

Feedback visual de sucesso após envio (mensagem + reset do formulário).

Validação básica: nome completo, e-mail válido, mensagem com tamanho mínimo.

Pontos-chave do CSS (contato.css):

Containers com max-width, padding e box-shadow.

textarea { resize: none; }

.btn-enviar { margin-top: 14px; }

Fixes contra resets agressivos: forçar display: block e visibility.

Login

Comportamento:

Não desabilitamos o botão.

Nega acesso se as credenciais não forem as esperadas (ex.: teste@gmail.com / 12345).

Em caso de sucesso, redireciona para Home (ou rota que você definir).

Form (Nome/Altura/Peso/Gênero) + Resultado com Gráficos

O que foi feito:

Formulário estilizado no padrão.

Após enviar com todos os campos válidos, aparece a tela de resultado com os gráficos.

Responsivo e sem overflow.

Importante (graficos.css):

Container de resultado com limite de largura e sem overflow horizontal:

Gráficos (Recharts) — lado a lado e responsivo

O que foi feito:

Dois gráficos em grid responsivo:

1 coluna no mobile,

2 colunas em ≥ 900px (ou com auto-fit para se adaptar).

Correção de overflow:

min-width: 0 em cada card (impede o conteúdo de “alargar” o grid).

width: min(1200px, 96vw) no container.

overflow-x: hidden no container de resultado.

Trechos chave (graficos.css):

Sobre nós

O que foi feito:

Grid de cartões (Quem somos / Missão / O que fazemos), estilo consistente.

Botão Voltar com gradiente verde.

“Respiro” acima do bloco de título + botão:

Footer

O que foi feito:

Rodapé escuro, centralizado, com ícones de redes sociais.

Hover com leve scale e cor verde.

Boas práticas aplicadas

Sem CSS global agressivo: classes específicas, evitar seletores genéricos (header {}) que quebram tudo.

Acessibilidade: aria-labels, aria-expanded, role="dialog", foco visível.

Responsividade: clamp(), min(), grid responsivo, ResponsiveContainer nos gráficos.

Overflow: contenção de largura (min(1200px, 96vw)), min-width: 0 em itens do grid, overflow-x: hidden onde necessário.

Header único no layout global (evita duplicação e conflitos).

Rodando o projeto
npm install
npm run dev
# abra http://localhost:5173


Dependências usadas:

react-router-dom

recharts

react-icons

(opcional) bootstrap — se usar, evite misturar classes do Bootstrap com os componentes “blindados” para não alterar o layout.