# Treino365dias

Aplicativo web simples para acompanhar treinos, consumo de água e alimentação no desafio de 365 dias.

## Recursos

- Registrar treinos (tipo, duração, observações)
- Registrar água (incrementos rápidos e quantidade personalizada)
- Registrar refeições (tipo, descrição, calorias e proteína)
- Plano de treino diário personalizável por dia da semana
- Calendário de treinos concluídos em 2025
- Estatísticas do dia e metas nutricionais

## Editar Histórico

Agora você pode editar itens já registrados diretamente nas listas:

- Treinos: clique em “✏️ Editar” no item do histórico para alterar tipo, duração e observações.
- Água: clique em “✏️ Editar” para ajustar a quantidade (ml).
- Refeições: clique em “✏️ Editar” para alterar tipo, descrição, calorias e proteína.

As alterações são salvas automaticamente no navegador (localStorage) e a interface é atualizada, incluindo progresso de água e metas nutricionais.

## Como usar

1. Abra o arquivo `index.html` no navegador.
2. Use as abas para navegar entre Treinos, Água e Alimentação.
3. Registre novos itens pelos formulários e edite itens existentes pelo botão “✏️ Editar”.

## Observações

- Os dados ficam salvos localmente (localStorage). Limpar dados do navegador apaga o histórico.
- A edição não altera a data/hora original do registro; apenas os detalhes do item.
