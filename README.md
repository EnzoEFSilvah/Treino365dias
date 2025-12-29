# Treino365dias

Aplicativo web simples para acompanhar treinos, consumo de água e alimentação no desafio de 365 dias.

## Recursos

- Registrar treinos (tipo, duração, observações)
- Registrar água (incrementos rápidos e quantidade personalizada)
- Registrar refeições (tipo, descrição, calorias e proteína)
- Plano de treino diário personalizável por dia da semana
- Calendário de treinos concluídos em 2025
- Estatísticas do dia e metas nutricionais
- **Totalmente responsivo para mobile, tablet e desktop**

## Responsividade Mobile

O aplicativo foi otimizado para funcionar perfeitamente em todos os tamanhos de tela:

### Desktop (1200px+)
- Layout completo com múltiplas colunas
- Visualização otimizada de calendários e gráficos

### Tablet (768px - 1200px)
- Ajuste de layout para telas médias
- Compressão de elementos mantendo funcionalidade
- Botões e inputs adaptados para toque

### Mobile (480px - 768px)
- Layout mobile com coluna única
- Fontes otimizadas para leitura confortável
- Botões com tamanho mínimo de 44x44px para fácil toque
- Modais ajustadas para altura de tela
- Navegação por abas em coluna

### Celulares Pequenos (360px e abaixo)
- Adaptação para telas muito pequenas
- Cards com informações otimizadas
- Grid de calendário compactado

### Modo Paisagem
- Otimizações para dispositivos em landscape
- Redução de espaçamento vertical
- Priorização de conteúdo horizontal

## Melhorias Implementadas

✅ Meta viewport corretamente configurada
✅ Font smoothing para melhor legibilidade
✅ Touch-friendly (área de clique de 44x44px mínimo)
✅ Media queries para breakpoints estratégicos
✅ Tipografia responsiva com font-size adaptativo
✅ Padding e margin otimizados por dispositivo
✅ Modais ajustadas para mobile
✅ Inputs com font-size 16px para evitar zoom
✅ Suporte a orientação landscape
✅ Sem quebras de layout em dispositivos pequenos

## Editar Histórico

Agora você pode editar itens já registrados diretamente nas listas:

- Treinos: clique em “✏️ Editar” no item do histórico para alterar tipo, duração e observações.
- Água: clique em “✏️ Editar” para ajustar a quantidade (ml).
- Refeições: clique em “✏️ Editar” para alterar tipo, descrição, calorias e proteína.

As alterações são salvas automaticamente no navegador (localStorage) e a interface é atualizada, incluindo progresso de água e metas nutricionais.

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Use as abas para navegar entre Treinos, Água e Alimentação.
3. Registre novos itens pelos formulários e edite itens existentes pelo botão “✏️ Editar”.4. Acesse em qualquer dispositivo: mobile, tablet ou desktop.
## Observações

- Os dados ficam salvos localmente (localStorage). Limpar dados do navegador apaga o histórico.
- A edição não altera a data/hora original do registro; apenas os detalhes do item.
- A aplicação é totalmente responsiva e funciona offline (após carregamento inicial).
