// Sistema de armazenamento local
const Storage = {
  get(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

// Treinos padrão por dia da semana
const defaultWorkoutPlans = {
  1: {
    // Segunda-feira
    name: "Peito, Ombro e Tríceps",
    exercises: [
      {
        name: "Supino Inclinado com Halteres",
        details: "4 séries de 8-12 reps",
        completed: false,
      },
      {
        name: "Supino Reto (Barra ou Halter)",
        details: "3 séries de 8-10 reps",
        completed: false,
      },
      {
        name: "Voador (Peck Deck)",
        details: "3 séries de 15 reps",
        completed: false,
      },
      {
        name: "Desenvolvimento Militar (Sentado ou em pé)",
        details: "4 séries de 8-12 reps",
        completed: false,
      },
      {
        name: "Elevação Lateral",
        details: "4 séries de 12-15 reps",
        completed: false,
      },
      {
        name: "Tríceps Corda",
        details: "4 séries de 12 reps",
        completed: false,
      },
    ],
  },
  2: {
    // Terça-feira
    name: "Costas, Bíceps e Abdômen",
    exercises: [
      {
        name: "Puxada Alta (Polia)",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Remada Curvada (Barra ou Máquina)",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Remada Baixa Triângulo",
        details: "3 séries de 15 reps",
        completed: false,
      },
      {
        name: "Rosca Direta (Barra ou Halteres)",
        details: "3 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Rosca Martelo",
        details: "3 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Abdômen Supra (com peso)",
        details: "4 séries de 15-20 reps",
        completed: false,
      },
      {
        name: "Prancha Abdominal",
        details: "3 séries até a falha",
        completed: false,
      },
    ],
  },
  3: {
    // Quarta-feira
    name: "Pernas",
    exercises: [
      {
        name: "Agachamento Livre",
        details: "4 séries de 10 reps",
        completed: false,
      },
      { name: "Hack", details: "4 séries de 10 reps", completed: false },
      {
        name: "Leg Press 45º",
        details: "3 séries de 12 reps",
        completed: false,
      },
      {
        name: "Cadeira Extensora",
        details: "3 séries de 12 reps",
        completed: false,
      },
      {
        name: "Cadeira Flexora",
        details: "3 séries de 12 reps",
        completed: false,
      },
      {
        name: "Mesaa Flexora",
        details: "4 séries de 12 reps",
        completed: false,
      },
      {
        name: "Panturrilha em Pé",
        details: "4 séries de 15-20 reps",
        completed: false,
      },
    ],
  },
  4: {
    // Quinta-feira
    name: "Treino Upper",
    exercises: [
      {
        name: "Supino Inclinado com Halteres",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Puxada Alta pela Frente (Pegada Aberta)",
        details: "3 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Desenvolvimento com Halteres (Sentado)",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Remada Serrote (Unilateral com Halter)",
        details: "4 séries de 12 reps cada lado",
        completed: false,
      },
      {
        name: "Elevação Lateral",
        details: "4 séries de 12-15 reps",
        completed: false,
      },
      {
        name: "Rosca Direta (Barra W ou Halteres)",
        details: "3 séries de 12 reps",
        completed: false,
      },
      {
        name: "Tríceps Corda",
        details: "3 séries de 12 reps",
        completed: false,
      },
    ],
  },
  5: {
    // Sexta-feira
    name: "Treino Lower",
    exercises: [
      {
        name: "Stiff",
        details: "4 séries de 10 reps",
        completed: false,
      },
      {
        name: "Elevação Pélvica",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Mesa Flexora",
        details: "4 séries de 15 reps",
        completed: false,
      },
      {
        name: "Afundo com Halteres(Passada)",
        details: "3 séries de 20 reps(10 passos para cada perna.)",
        completed: false,
      },
      {
        name: "Cadeira Adutora",
        details: "4 séries de 20 reps",
        completed: false,
      },
      {
        name: "Panturrilha no Leg Press",
        details: "4 séries de 20 reps",
        completed: false,
      },
      {
        name: "Abdômen Supra (com peso)",
        details: "4 séries de 15-20 reps",
        completed: false,
      },
      {
        name: "Prancha Abdominal",
        details: "3 séries até a falha",
        completed: false,
      },
    ],
  },
  0: {
    // Domingo - Descanso
    name: "Dia de Descanso",
    exercises: [],
  },
  6: {
    // Sábado - Descanso
    name: "Dia de Descanso",
    exercises: [],
  },
};

// Refeições padrão
const defaultMeals = [
  {
    name: "Café da Manhã",
    description: "3 Ovos, 2 fatias pão integral, 1 banana, 30g aveia",
    calories: 530,
    protein: 28,
    carbs: 63,
    fat: 18,
  },
  {
    name: "Lanche da Manhã",
    description: "1 Maçã, 1 Iogurte Natural 170g, 1 colher pasta de amendoim",
    calories: 260,
    protein: 10,
    carbs: 30,
    fat: 11,
  },
  {
    name: "Almoço",
    description:
      "250g Arroz, 1 concha feijão, 120g Frango grelhado, Salada + 1 col. azeite",
    calories: 740,
    protein: 48,
    carbs: 90,
    fat: 17,
  },
  {
    name: "Pré-Treino",
    description: "200g Batata Doce, 1 dose Whey Protein",
    calories: 295,
    protein: 27,
    carbs: 43,
    fat: 2,
  },
  {
    name: "Pós-Treino / Jantar",
    description: "200g Arroz Branco, 120g Patinho moído/Carne magra",
    calories: 500,
    protein: 41,
    carbs: 56,
    fat: 9,
  },
  {
    name: "Ceia",
    description: "2 Ovos cozidos, 1 colher azeite",
    calories: 250,
    protein: 12,
    carbs: 1,
    fat: 22,
  },
];

// Estado da aplicação
let workouts = Storage.get("workouts");
let waterRecords = Storage.get("waterRecords");
let meals = Storage.get("meals");
let waterGoal = parseInt(localStorage.getItem("waterGoal")) || 4000;
let workoutPlans =
  JSON.parse(localStorage.getItem("workoutPlans")) ||
  JSON.parse(JSON.stringify(defaultWorkoutPlans));
let dailyWorkoutStatus =
  JSON.parse(localStorage.getItem("dailyWorkoutStatus")) || {};
let completedWorkoutDates =
  JSON.parse(localStorage.getItem("completedWorkoutDates")) || [];

// Data alvo ao marcar/editar conclusão (usado pelo modal)
let completeTargetDate = null;

// Estado de edição de registros de histórico
let currentEdit = null; // { type: 'workout' | 'water' | 'meal', id: number }

// Mês atual do calendário
let currentCalendarMonth = new Date().getMonth();

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDailyWorkout();
  initWorkouts();
  initWater();
  initMeals();
  initEditRecordModal();
  initProfile();
  updateStats();
  renderWorkoutCalendar();
});

// Sistema de Abas
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.dataset.tab;

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

// TREINO DIÁRIO PERSONALIZADO
function initDailyWorkout() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dateKey = today.toISOString().split("T")[0];

  // Carregar treino do dia atual
  const adjustedDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek; // Domingo = 7
  loadWorkoutForDayOfWeek(adjustedDayOfWeek);

  // Mas se for o dia atual, permitir edição carregando o estado salvo
  if (
    dailyWorkoutStatus[dateKey] &&
    dailyWorkoutStatus[dateKey].exercises.length > 0
  ) {
    // Usar os exercícios salvos para edição
    const exercises = dailyWorkoutStatus[dateKey].exercises;
    const completedCount = exercises.filter((ex) => ex.completed).length;
    document.getElementById("exercisesCompleted").textContent = completedCount;
    document.getElementById("totalExercises").textContent = exercises.length;

    const exercisesList = document.getElementById("exercisesList");
    exercisesList.innerHTML = exercises
      .map(
        (exercise, index) => `
      <div class="exercise-item ${exercise.completed ? "completed" : ""}">
        <input 
          type="checkbox" 
          class="exercise-checkbox" 
          ${exercise.completed ? "checked" : ""}
          onchange="toggleExercise(${index})"
        >
        <div class="exercise-info">
          <div class="exercise-name">${exercise.name}</div>
          <div class="exercise-details">${exercise.details}</div>
        </div>
      </div>
    `
      )
      .join("");
  }

  // Botão de editar treino
  document
    .getElementById("editWorkoutBtn")
    .addEventListener("click", openEditModal);

  // Botão de concluir treino
  document
    .getElementById("completeWorkoutBtn")
    .addEventListener("click", completeWorkout);

  // Modal de edição
  document
    .querySelector(".modal-close")
    .addEventListener("click", closeEditModal);
  document
    .getElementById("cancelEditBtn")
    .addEventListener("click", closeEditModal);
  document
    .getElementById("saveWorkoutBtn")
    .addEventListener("click", saveWorkoutPlan);
  document
    .getElementById("addExerciseBtn")
    .addEventListener("click", addNewExercise);

  // Modal de conclusão do treino
  document
    .getElementById("completeWorkoutClose")
    .addEventListener("click", closeCompleteWorkoutModal);
  document
    .getElementById("cancelCompleteWorkoutBtn")
    .addEventListener("click", closeCompleteWorkoutModal);
  document
    .getElementById("confirmCompleteWorkoutBtn")
    .addEventListener("click", saveCompleteWorkout);
}

function renderDailyExercises() {
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];
  const dayStatus = dailyWorkoutStatus[dateKey];

  const exercisesList = document.getElementById("exercisesList");

  if (!dayStatus || dayStatus.exercises.length === 0) {
    exercisesList.innerHTML =
      '<div class="empty-state" style="color: #666;">Dia de descanso ou sem treino programado.</div>';
    document.getElementById("exercisesCompleted").textContent = "0";
    document.getElementById("totalExercises").textContent = "0";
    return;
  }

  const completedCount = dayStatus.exercises.filter(
    (ex) => ex.completed
  ).length;
  document.getElementById("exercisesCompleted").textContent = completedCount;
  document.getElementById("totalExercises").textContent =
    dayStatus.exercises.length;

  exercisesList.innerHTML = dayStatus.exercises
    .map(
      (exercise, index) => `
    <div class="exercise-item ${exercise.completed ? "completed" : ""}">
      <input 
        type="checkbox" 
        class="exercise-checkbox" 
        ${exercise.completed ? "checked" : ""}
        onchange="toggleExercise(${index})"
      >
      <div class="exercise-info">
        <div class="exercise-name">${exercise.name}</div>
        <div class="exercise-details">${exercise.details}</div>
      </div>
    </div>
  `
    )
    .join("");
}

// Permite marcar/desmarcar exercício no treino do dia (usa o dia atual)
function toggleExercise(index) {
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];

  if (!dailyWorkoutStatus[dateKey]) return;

  const exercises = dailyWorkoutStatus[dateKey].exercises;
  if (!exercises || !exercises[index]) return;

  exercises[index].completed = !exercises[index].completed;
  saveDailyWorkoutStatus();
  renderDailyExercises();
}

function loadWorkoutForDayOfWeek(dayOfWeek) {
  // dayOfWeek: 1=segunda, 2=terça, ..., 7=domingo
  const defaultPlan = defaultWorkoutPlans[dayOfWeek];
  let exercises = [];
  if (defaultPlan) {
    exercises = defaultPlan.exercises.map((ex) => ({ ...ex })); // Copia os exercícios
  }

  // Atualiza a interface
  document.getElementById("workoutDayName").textContent =
    defaultPlan?.name || "Dia de Descanso";
  document.getElementById("currentDay").textContent = [
    "",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ][dayOfWeek];

  const exercisesList = document.getElementById("exercisesList");
  if (exercises.length === 0) {
    exercisesList.innerHTML =
      '<div class="empty-state" style="color: #666;">Dia de descanso ou sem treino programado.</div>';
    document.getElementById("exercisesCompleted").textContent = "0";
    document.getElementById("totalExercises").textContent = "0";
    return;
  }

  const completedCount = exercises.filter((ex) => ex.completed).length;
  document.getElementById("exercisesCompleted").textContent = completedCount;
  document.getElementById("totalExercises").textContent = exercises.length;

  exercisesList.innerHTML = exercises
    .map(
      (exercise, index) => `
    <div class="exercise-item ${exercise.completed ? "completed" : ""}">
      <input 
        type="checkbox" 
        class="exercise-checkbox" 
        ${exercise.completed ? "checked" : ""}
        disabled
      >
      <div class="exercise-info">
        <div class="exercise-name">${exercise.name}</div>
        <div class="exercise-details">${exercise.details}</div>
      </div>
    </div>
  `
    )
    .join("");
}

function completeWorkout() {
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];
  const dayStatus = dailyWorkoutStatus[dateKey];

  if (!dayStatus || dayStatus.exercises.length === 0) {
    alert("Não há treino programado para hoje!");
    return;
  }

  const allCompleted = dayStatus.exercises.every((ex) => ex.completed);

  if (!allCompleted) {
    const confirmComplete = confirm(
      "Você não completou todos os exercícios. Deseja marcar o treino como concluído mesmo assim?"
    );
    if (!confirmComplete) return;
  }

  // Abrir modal para registrar tempo e calorias
  completeTargetDate = dateKey;

  // Preencher campos com valores salvos, se existirem
  const status = dailyWorkoutStatus[dateKey];
  const timeEl = document.getElementById("workoutTime");
  const calEl = document.getElementById("workoutCalories");
  if (status && status.duration) timeEl.value = status.duration;
  else timeEl.value = "";
  if (status && status.calories) calEl.value = status.calories;
  else calEl.value = "";

  openCompleteWorkoutModal();
}

function openCompleteWorkoutModal() {
  document.getElementById("completeWorkoutModal").classList.add("active");
  document.getElementById("workoutTime").focus();
}

function closeCompleteWorkoutModal() {
  document.getElementById("completeWorkoutModal").classList.remove("active");
  document.getElementById("completeWorkoutForm").reset();
}

function saveCompleteWorkout() {
  const workoutTime = parseInt(document.getElementById("workoutTime").value);
  const workoutCalories = parseInt(
    document.getElementById("workoutCalories").value
  );

  if (!workoutTime || !workoutCalories) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Determina qual data estamos registrando (pode ser uma data clicada no calendário)
  const dateKey = completeTargetDate || new Date().toISOString().split("T")[0];

  // Garantir que exista um objeto de status para a data
  if (!dailyWorkoutStatus[dateKey]) {
    const dt = new Date(dateKey + "T12:00:00");
    const dow = dt.getDay();
    const plan = workoutPlans[dow] || { exercises: [] };
    dailyWorkoutStatus[dateKey] = {
      exercises: JSON.parse(JSON.stringify(plan.exercises || [])),
      completed: false,
    };
  }

  // Marcar como concluído com tempo e calorias
  dailyWorkoutStatus[dateKey].completed = true;
  dailyWorkoutStatus[dateKey].duration = workoutTime;
  dailyWorkoutStatus[dateKey].calories = workoutCalories;

  // Adicionar à lista de datas concluídas
  if (!completedWorkoutDates.includes(dateKey)) {
    completedWorkoutDates.push(dateKey);
    localStorage.setItem(
      "completedWorkoutDates",
      JSON.stringify(completedWorkoutDates)
    );
  }

  saveDailyWorkoutStatus();
  renderWorkoutCalendar();
  updateStats();

  closeCompleteWorkoutModal();

  // Limpar data alvo após salvar
  completeTargetDate = null;

  showNotification(
    `🎉 Treino concluído! ⏱️ ${workoutTime}min | 🔥 ${workoutCalories}kcal`
  );

  // Resetar para o próximo dia
  setTimeout(() => {
    const nextDay = new Date(today);
    nextDay.setDate(nextDay.getDate() + 1);
    const nextDateKey = nextDay.toISOString().split("T")[0];

    if (!dailyWorkoutStatus[nextDateKey]) {
      const nextDayOfWeek = nextDay.getDay();
      const nextPlan = workoutPlans[nextDayOfWeek];
      dailyWorkoutStatus[nextDateKey] = {
        exercises: JSON.parse(JSON.stringify(nextPlan.exercises)),
        completed: false,
      };
      saveDailyWorkoutStatus();
    }
  }, 1000);
}

function openEditModal() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const dayNames = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  document.getElementById("modalDayName").textContent = dayNames[dayOfWeek];

  renderEditExercises();

  document.getElementById("editModal").classList.add("active");
}

function closeEditModal() {
  document.getElementById("editModal").classList.remove("active");
}

function renderEditExercises() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const currentPlan = workoutPlans[dayOfWeek];

  const editList = document.getElementById("editExercisesList");

  editList.innerHTML = currentPlan.exercises
    .map(
      (exercise, index) => `
    <div class="edit-exercise-item" data-index="${index}" draggable="true"
         ondragstart="handleExerciseDragStart(event, ${index})"
         ondragover="handleExerciseDragOver(event, ${index})"
         ondragleave="handleExerciseDragLeave(event, ${index})"
         ondrop="handleExerciseDrop(event, ${index})">
      <div class="edit-exercise-header">
        <div class="edit-exercise-number"><span class="drag-handle" title="Arraste para reordenar">↕️</span> Exercício ${
          index + 1
        }</div>
        <button class="btn-remove-exercise" onclick="removeExercise(${index})">🗑️ Remover</button>
      </div>
      <div class="edit-exercise-inputs">
        <input 
          type="text" 
          placeholder="Nome do exercício" 
          value="${exercise.name}"
          onchange="updateExerciseName(${index}, this.value)"
        >
        <input 
          type="text" 
          placeholder="Séries e repetições" 
          value="${exercise.details}"
          onchange="updateExerciseDetails(${index}, this.value)"
        >
      </div>
    </div>
  `
    )
    .join("");
}

// Estado para drag-and-drop
let exerciseDragIndex = null;

function handleExerciseDragStart(e, index) {
  exerciseDragIndex = index;
  if (e.dataTransfer) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(index));
  }
}

function handleExerciseDragOver(e, index) {
  e.preventDefault();
  const el = e.currentTarget;
  if (el && !el.classList.contains("drag-over")) {
    el.classList.add("drag-over");
  }
  if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
}

function handleExerciseDragLeave(e, index) {
  const el = e.currentTarget;
  if (el) el.classList.remove("drag-over");
}

function handleExerciseDrop(e, targetIndex) {
  e.preventDefault();
  const el = e.currentTarget;
  if (el) el.classList.remove("drag-over");

  const sourceStr = e.dataTransfer
    ? e.dataTransfer.getData("text/plain")
    : null;
  const sourceIndex =
    sourceStr !== null && sourceStr !== ""
      ? parseInt(sourceStr, 10)
      : exerciseDragIndex;
  if (
    Number.isNaN(sourceIndex) ||
    sourceIndex === null ||
    sourceIndex === targetIndex
  )
    return;

  const today = new Date();
  const dayOfWeek = today.getDay();
  const list = workoutPlans[dayOfWeek].exercises;
  if (
    !Array.isArray(list) ||
    sourceIndex < 0 ||
    sourceIndex >= list.length ||
    targetIndex < 0 ||
    targetIndex >= list.length
  )
    return;

  const [moved] = list.splice(sourceIndex, 1);
  list.splice(targetIndex, 0, moved);

  // Re-render para atualizar índices e UI
  renderEditExercises();
}

function updateExerciseName(index, value) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  workoutPlans[dayOfWeek].exercises[index].name = value;
}

function updateExerciseDetails(index, value) {
  const today = new Date();
  const dayOfWeek = today.getDay();
  workoutPlans[dayOfWeek].exercises[index].details = value;
}

function removeExercise(index) {
  if (confirm("Deseja realmente remover este exercício?")) {
    const today = new Date();
    const dayOfWeek = today.getDay();
    workoutPlans[dayOfWeek].exercises.splice(index, 1);
    renderEditExercises();
  }
}

function addNewExercise() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  workoutPlans[dayOfWeek].exercises.push({
    name: "Novo Exercício",
    details: "3 séries de 12 reps",
    completed: false,
  });

  renderEditExercises();

  // Scroll para o final
  const editList = document.getElementById("editExercisesList");
  setTimeout(() => {
    editList.lastElementChild.scrollIntoView({ behavior: "smooth" });
  }, 100);
}

function saveWorkoutPlan() {
  // Salvar plano atualizado
  localStorage.setItem("workoutPlans", JSON.stringify(workoutPlans));

  // Atualizar status do dia atual
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];
  const dayOfWeek = today.getDay();

  dailyWorkoutStatus[dateKey] = {
    exercises: JSON.parse(JSON.stringify(workoutPlans[dayOfWeek].exercises)),
    completed: false,
  };

  saveDailyWorkoutStatus();
  renderDailyExercises();
  closeEditModal();

  showNotification("Treino atualizado com sucesso! ✅");
}

function saveDailyWorkoutStatus() {
  localStorage.setItem(
    "dailyWorkoutStatus",
    JSON.stringify(dailyWorkoutStatus)
  );
}

// CALENDÁRIO DE TREINOS
function renderWorkoutCalendar() {
  const calendar = document.getElementById("workoutCalendar");
  const year = new Date().getFullYear();
  const today = new Date();

  let calendarHTML = "";

  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const month = currentCalendarMonth;
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  calendarHTML += `
    <div class="calendar-navigation">
      <button class="btn btn-secondary" id="prevMonthBtn">&larr; Anterior</button>
      <h3>${monthNames[month]} ${year}</h3>
      <button class="btn btn-secondary" id="nextMonthBtn">Próximo &rarr;</button>
    </div>
    <div class="calendar-month">
      <div class="calendar-weekdays">
        <div class="weekday-header">Dom</div>
        <div class="weekday-header">Seg</div>
        <div class="weekday-header">Ter</div>
        <div class="weekday-header">Qua</div>
        <div class="weekday-header">Qui</div>
        <div class="weekday-header">Sex</div>
        <div class="weekday-header">Sáb</div>
      </div>
      <div class="calendar-days">
  `;

  // Dias vazios antes do primeiro dia do mês
  for (let i = 0; i < startingDayOfWeek; i++) {
    calendarHTML += '<div class="calendar-day empty"></div>';
  }

  // Dias do mês
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateKey = date.toISOString().split("T")[0];

    const isToday = date.toDateString() === today.toDateString();
    const isCompleted = completedWorkoutDates.includes(dateKey);

    let classes = "calendar-day";
    if (isToday) classes += " today";
    if (isCompleted) classes += " completed";

    let titleText = date.toLocaleDateString("pt-BR");

    // Adicionar informações de tempo e calorias ao título se treino foi concluído
    if (isCompleted && dailyWorkoutStatus[dateKey]) {
      const workoutData = dailyWorkoutStatus[dateKey];
      if (workoutData.duration && workoutData.calories) {
        titleText += ` | ⏱️ ${workoutData.duration}min | 🔥 ${workoutData.calories}kcal`;
      }
    }

    calendarHTML += `<div class="${classes}" data-date="${dateKey}" title="${titleText}">${day}</div>`;
  }

  calendarHTML += `
      </div>
    </div>
  `;

  calendar.innerHTML = calendarHTML;

  // Adicionar event listeners para navegação
  document.getElementById("prevMonthBtn").addEventListener("click", () => {
    currentCalendarMonth =
      currentCalendarMonth > 0 ? currentCalendarMonth - 1 : 11;
    renderWorkoutCalendar();
  });

  document.getElementById("nextMonthBtn").addEventListener("click", () => {
    currentCalendarMonth =
      currentCalendarMonth < 11 ? currentCalendarMonth + 1 : 0;
    renderWorkoutCalendar();
  });

  // Adicionar event listener para os cards dos dias da semana
  const weekdayCardsContainer = document.getElementById(
    "weekdayCardsContainer"
  );
  if (weekdayCardsContainer) {
    weekdayCardsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("weekday-card")) {
        const dayOfWeek = parseInt(e.target.dataset.day);
        loadWorkoutForDayOfWeek(dayOfWeek);
      }
    });
  }

  // Atualizar estatísticas (usa o ano atual)
  const yearCount = completedWorkoutDates.filter((date) =>
    date.startsWith(`${year}-`)
  ).length;
  const currentMonth = today.getMonth() + 1;
  const monthPrefix = `${year}-${String(currentMonth).padStart(2, "0")}`;
  const monthCount = completedWorkoutDates.filter((date) =>
    date.startsWith(monthPrefix)
  ).length;

  document.getElementById("yearWorkoutCount").textContent = yearCount;
  document.getElementById("monthWorkoutCount").textContent = monthCount;

  // Atualiza rótulos do ano na página, se existirem
  const yearLabelEl = document.getElementById("yearLabel");
  if (yearLabelEl) yearLabelEl.textContent = year;
  const calendarYearEl = document.getElementById("calendarYear");
  if (calendarYearEl) calendarYearEl.textContent = year;

  // Adicionar listeners de clique aos dias do calendário
  const calendarDays = document.querySelectorAll(".calendar-day");
  calendarDays.forEach((day) => {
    day.addEventListener("click", (e) => {
      const dateKey = e.currentTarget.dataset.date;
      if (!dateKey) return;

      // Definir data alvo para o modal de conclusão
      completeTargetDate = dateKey;

      // Se não existir status para essa data, inicializar a partir do plano semanal
      if (!dailyWorkoutStatus[dateKey]) {
        const dt = new Date(dateKey + "T12:00:00");
        const dow = dt.getDay(); // 0=Dom, 1=Seg, ... 6=Sáb
        const plan = workoutPlans[dow] || { exercises: [] };
        dailyWorkoutStatus[dateKey] = {
          exercises: JSON.parse(JSON.stringify(plan.exercises || [])),
          completed: false,
        };
        saveDailyWorkoutStatus();
      }

      // Preencher campos do modal com valores existentes, se houver
      const status = dailyWorkoutStatus[dateKey];
      const timeEl = document.getElementById("workoutTime");
      const calEl = document.getElementById("workoutCalories");
      if (status && status.duration) timeEl.value = status.duration;
      else timeEl.value = "";
      if (status && status.calories) calEl.value = status.calories;
      else calEl.value = "";

      openCompleteWorkoutModal();
    });
  });
}

// SEÇÃO DE TREINOS
function initWorkouts() {
  const form = document.getElementById("workoutForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const workout = {
      id: Date.now(),
      type: document.getElementById("workoutType").value,
      duration: parseInt(document.getElementById("workoutDuration").value),
      notes: document.getElementById("workoutNotes").value,
      date: new Date().toISOString(),
    };

    workouts.unshift(workout);
    Storage.set("workouts", workouts);

    form.reset();
    renderWorkouts();
    updateStats();

    showNotification("Treino registrado com sucesso! 💪");
  });

  renderWorkouts();
}

function renderWorkouts() {
  const list = document.getElementById("workoutList");
  const today = new Date().toDateString();

  if (workouts.length === 0) {
    list.innerHTML =
      '<div class="empty-state">Nenhum treino registrado ainda. Comece agora!</div>';
    return;
  }

  list.innerHTML = workouts
    .map((workout) => {
      const workoutDate = new Date(workout.date);
      const isToday = workoutDate.toDateString() === today;

      return `
            <div class="record-item">
                <div class="record-info">
                    <div class="record-title">${workout.type} ${
        isToday ? "(Hoje)" : ""
      }</div>
                    <div class="record-details">
                        ⏱️ ${workout.duration} minutos
                        ${workout.notes ? `<br>📝 ${workout.notes}` : ""}
                    </div>
                    <div class="record-time">${formatDateTime(
                      workout.date
                    )}</div>
                </div>
                <div class="record-actions">
                    <button class="btn-edit" onclick="openEditRecordModal('workout', ${
                      workout.id
                    })">✏️ Editar</button>
                    <button class="btn-delete" onclick="deleteWorkout(${
                      workout.id
                    })">🗑️ Excluir</button>
                </div>
            </div>
        `;
    })
    .join("");
}

function deleteWorkout(id) {
  if (confirm("Deseja realmente excluir este treino?")) {
    workouts = workouts.filter((w) => w.id !== id);
    Storage.set("workouts", workouts);
    renderWorkouts();
    updateStats();
    showNotification("Treino excluído!");
  }
}

// SEÇÃO DE ÁGUA
function initWater() {
  const waterButtons = document.querySelectorAll(".btn-water");
  const customButton = document.getElementById("addCustomWater");

  waterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = parseInt(button.dataset.amount);
      addWater(amount);
    });
  });

  customButton.addEventListener("click", () => {
    const input = document.getElementById("customWater");
    const amount = parseInt(input.value);

    if (amount > 0) {
      addWater(amount);
      input.value = "";
    }
  });

  renderWaterRecords();
  updateWaterProgress();
}

function addWater(amount) {
  const record = {
    id: Date.now(),
    amount: amount,
    date: new Date().toISOString(),
  };

  waterRecords.unshift(record);
  Storage.set("waterRecords", waterRecords);

  renderWaterRecords();
  updateWaterProgress();
  updateStats();
  updateNutritionGoals();

  showNotification(`+${amount}ml de água adicionados! 💧`);
}

function updateWaterProgress() {
  const today = new Date().toDateString();
  const todayWater = waterRecords
    .filter((record) => new Date(record.date).toDateString() === today)
    .reduce((sum, record) => sum + record.amount, 0);

  const percentage = Math.min((todayWater / waterGoal) * 100, 100);

  document.getElementById("waterProgress").style.width = percentage + "%";
  document.getElementById("waterPercent").textContent = `${Math.round(
    percentage
  )}% (${todayWater}ml)`;
}

function renderWaterRecords() {
  const list = document.getElementById("waterList");
  const today = new Date().toDateString();

  const todayRecords = waterRecords.filter(
    (record) => new Date(record.date).toDateString() === today
  );

  if (todayRecords.length === 0) {
    list.innerHTML =
      '<div class="empty-state">Nenhum registro de água para hoje. Hidrate-se!</div>';
    return;
  }

  list.innerHTML = todayRecords
    .map((record) => {
      return `
            <div class="record-item">
                <div class="record-info">
                    <div class="record-title">💧 ${record.amount}ml</div>
                    <div class="record-time">${formatDateTime(
                      record.date
                    )}</div>
                </div>
                <div class="record-actions">
                    <button class="btn-edit" onclick="openEditRecordModal('water', ${
                      record.id
                    })">✏️ Editar</button>
                    <button class="btn-delete" onclick="deleteWaterRecord(${
                      record.id
                    })">🗑️ Excluir</button>
                </div>
            </div>
        `;
    })
    .join("");
}

function deleteWaterRecord(id) {
  if (confirm("Deseja realmente excluir este registro?")) {
    waterRecords = waterRecords.filter((w) => w.id !== id);
    Storage.set("waterRecords", waterRecords);
    renderWaterRecords();
    updateWaterProgress();
    updateStats();
    updateNutritionGoals();
    showNotification("Registro excluído!");
  }
}

// SEÇÃO DE ALIMENTAÇÃO
function initMeals() {
  const todayKey = new Date().toISOString().split("T")[0];
  const mealDateInput = document.getElementById("mealDate");
  const mealHistoryDateInput = document.getElementById("mealHistoryDate");

  if (mealDateInput) mealDateInput.value = todayKey;
  if (mealHistoryDateInput) {
    mealHistoryDateInput.value = todayKey;
    mealHistoryDateInput.addEventListener("change", () => {
      if (mealDateInput) mealDateInput.value = mealHistoryDateInput.value;
      renderMeals();
    });
  }

  const form = document.getElementById("mealForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedDate = getSelectedMealDate();
    const mealTimestamp = new Date(`${selectedDate}T12:00:00`).toISOString();

    const meal = {
      id: Date.now(),
      type: document.getElementById("mealType").value,
      description: document.getElementById("mealDescription").value,
      calories: parseInt(document.getElementById("mealCalories").value) || 0,
      protein: parseInt(document.getElementById("mealProtein").value) || 0,
      carbs: parseInt(document.getElementById("mealCarbs")?.value) || 0,
      fat: parseInt(document.getElementById("mealFat")?.value) || 0,
      date: mealTimestamp,
    };

    meals.unshift(meal);
    Storage.set("meals", meals);

    form.reset();
    if (mealDateInput) mealDateInput.value = todayKey;
    renderMeals();
    updateStats();
    updateNutritionGoals();

    showNotification("Refeição registrada! 🍽️");
  });

  renderDefaultMeals();
  renderMeals();
  updateNutritionGoals();
}

function getSelectedMealDate() {
  const input = document.getElementById("mealDate");
  const value = input?.value;
  if (value) return value;
  return new Date().toISOString().split("T")[0];
}

function renderDefaultMeals() {
  const container = document.getElementById("defaultMealsContainer");

  container.innerHTML = defaultMeals
    .map((meal) => {
      return `
        <div class="default-meal-card">
          <div class="meal-header">
            <h3>${meal.name}</h3>
          </div>
          <div class="meal-info">
            <p class="meal-description">${meal.description}</p>
            <div class="meal-macros">
              <div class="macro-item">
                <span class="macro-icon">🔥</span>
                <div class="macro-content">
                  <span class="macro-label">Calorias</span>
                  <span class="macro-value">${meal.calories} kcal</span>
                </div>
              </div>
              <div class="macro-item">
                <span class="macro-icon">🥩</span>
                <div class="macro-content">
                  <span class="macro-label">Proteína</span>
                  <span class="macro-value">${meal.protein}g</span>
                </div>
              </div>
              <div class="macro-item">
                <span class="macro-icon">🍚</span>
                <div class="macro-content">
                  <span class="macro-label">Carbs</span>
                  <span class="macro-value">${meal.carbs}g</span>
                </div>
              </div>
              <div class="macro-item">
                <span class="macro-icon">🧈</span>
                <div class="macro-content">
                  <span class="macro-label">Gordura</span>
                  <span class="macro-value">${meal.fat}g</span>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-small btn-success" onclick="addDefaultMeal('${
            meal.name
          }', '${meal.description.replace(/'/g, "\\'")}', ${meal.calories}, ${
        meal.protein
      }, ${meal.carbs}, ${meal.fat})">
            ➕ Adicionar
          </button>
        </div>
      `;
    })
    .join("");
}

function addDefaultMeal(type, description, calories, protein, carbs, fat) {
  const selectedDate = getSelectedMealDate();
  const mealTimestamp = new Date(`${selectedDate}T12:00:00`).toISOString();

  const meal = {
    id: Date.now(),
    type: type,
    description: description,
    calories: calories,
    protein: protein,
    carbs: carbs,
    fat: fat,
    date: mealTimestamp,
  };

  meals.unshift(meal);
  Storage.set("meals", meals);
  renderMeals();
  updateStats();
  updateNutritionGoals();
  showNotification(`${type} adicionada! 🍽️`);
}

function renderMeals() {
  const list = document.getElementById("mealList");
  const todayKey = new Date().toISOString().split("T")[0];
  const filterDate =
    document.getElementById("mealHistoryDate")?.value || todayKey;

  const mealsForDay = meals.filter((meal) => {
    const mealKey = new Date(meal.date).toISOString().split("T")[0];
    return mealKey === filterDate;
  });

  if (mealsForDay.length === 0) {
    list.innerHTML =
      '<div class="empty-state">Nenhuma refeição registrada ainda. Comece agora!</div>';
    return;
  }

  list.innerHTML = mealsForDay
    .map((meal) => {
      const mealDate = new Date(meal.date);
      const mealKey = mealDate.toISOString().split("T")[0];
      const isToday = mealKey === todayKey;

      return `
            <div class="record-item">
                <div class="record-info">
                    <div class="record-title">${meal.type} ${
        isToday ? "(Hoje)" : ""
      }</div>
                    <div class="record-details">
                        📝 ${meal.description}
                        ${
                          meal.calories
                            ? `<br>🔥 ${meal.calories} calorias`
                            : ""
                        }
                        ${
                          meal.protein
                            ? `<br>🥩 ${meal.protein}g de proteína`
                            : ""
                        }
                        ${
                          meal.carbs
                            ? `<br>🍚 ${meal.carbs}g de carboidratos`
                            : ""
                        }
                        ${meal.fat ? `<br>🧈 ${meal.fat}g de gorduras` : ""}
                    </div>
                    <div class="record-time">${formatDateTime(meal.date)}</div>
                </div>
                <div class="record-actions">
                    <button class="btn-edit" onclick="openEditRecordModal('meal', ${
                      meal.id
                    })">✏️ Editar</button>
                    <button class="btn-delete" onclick="deleteMeal(${
                      meal.id
                    })">🗑️ Excluir</button>
                </div>
            </div>
        `;
    })
    .join("");
}

function deleteMeal(id) {
  if (confirm("Deseja realmente excluir esta refeição?")) {
    meals = meals.filter((m) => m.id !== id);
    Storage.set("meals", meals);
    renderMeals();
    updateStats();
    updateNutritionGoals();
    showNotification("Refeição excluída!");
  }
}

// Atualizar metas nutricionais
function updateNutritionGoals() {
  const today = new Date().toDateString();

  const todayMeals = meals.filter(
    (m) => new Date(m.date).toDateString() === today
  );

  const totalCalories = todayMeals.reduce(
    (sum, m) => sum + (m.calories || 0),
    0
  );
  const totalProtein = todayMeals.reduce((sum, m) => sum + (m.protein || 0), 0);
  const totalCarbs = todayMeals.reduce((sum, m) => sum + (m.carbs || 0), 0);
  const totalFat = todayMeals.reduce((sum, m) => sum + (m.fat || 0), 0);

  // Meta de calorias: 2600-2800 (usando 2700 como média)
  const caloriesTarget = 2700;
  const caloriesPercent = Math.min((totalCalories / caloriesTarget) * 100, 100);

  // Meta de proteína: ~140g
  const proteinTarget = 140;
  const proteinPercent = Math.min((totalProtein / proteinTarget) * 100, 100);

  // Meta de carboidratos: 380-400g (usar 390 como média)
  const carbsTarget = 390;
  const carbsPercent = Math.min((totalCarbs / carbsTarget) * 100, 100);

  // Meta de gorduras: 65-75g (usar 70 como média)
  const fatTarget = 70;
  const fatPercent = Math.min((totalFat / fatTarget) * 100, 100);

  // Atualizar displays
  document.getElementById("currentCalories").textContent = totalCalories;
  document.getElementById("caloriesProgress").style.width =
    caloriesPercent + "%";

  document.getElementById("currentProtein").textContent = totalProtein;
  document.getElementById("proteinProgress").style.width = proteinPercent + "%";

  const currentCarbsEl = document.getElementById("currentCarbs");
  const carbsProgressEl = document.getElementById("carbsProgress");
  if (currentCarbsEl && carbsProgressEl) {
    currentCarbsEl.textContent = totalCarbs;
    carbsProgressEl.style.width = carbsPercent + "%";
  }

  const currentFatEl = document.getElementById("currentFat");
  const fatProgressEl = document.getElementById("fatProgress");
  if (currentFatEl && fatProgressEl) {
    currentFatEl.textContent = totalFat;
    fatProgressEl.style.width = fatPercent + "%";
  }

  // Atualizar água na seção de alimentação
  const todayWater = waterRecords
    .filter((record) => new Date(record.date).toDateString() === today)
    .reduce((sum, record) => sum + record.amount, 0);

  const waterPercent = Math.min((todayWater / 4000) * 100, 100);

  document.getElementById("currentWaterGoal").textContent = todayWater;
  document.getElementById("waterGoalProgress").style.width = waterPercent + "%";
}

// ESTATÍSTICAS
function updateStats() {
  const today = new Date().toDateString();

  const workoutsToday = workouts.filter(
    (w) => new Date(w.date).toDateString() === today
  ).length;

  const waterToday = waterRecords
    .filter((w) => new Date(w.date).toDateString() === today)
    .reduce((sum, w) => sum + w.amount, 0);

  const mealsToday = meals.filter(
    (m) => new Date(m.date).toDateString() === today
  ).length;

  document.getElementById("workoutsToday").textContent = workoutsToday;
  document.getElementById("waterToday").textContent = waterToday;
  document.getElementById("mealsToday").textContent = mealsToday;
}

// UTILITÁRIOS
function formatDateTime(dateString) {
  const date = new Date(dateString);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const dateStr = date.toDateString();
  const todayStr = today.toDateString();
  const yesterdayStr = yesterday.toDateString();

  let dayLabel;
  if (dateStr === todayStr) {
    dayLabel = "Hoje";
  } else if (dateStr === yesterdayStr) {
    dayLabel = "Ontem";
  } else {
    dayLabel = date.toLocaleDateString("pt-BR");
  }

  const time = date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${dayLabel} às ${time}`;
}

function showNotification(message) {
  // Criar elemento de notificação
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease";
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Adicionar estilos de animação
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================
// Modal de edição de histórico
// ==========================
function initEditRecordModal() {
  const modal = document.getElementById("editRecordModal");
  const closeBtn = document.getElementById("editRecordClose");
  const cancelBtn = document.getElementById("editRecordCancel");
  const saveBtn = document.getElementById("editRecordSave");

  closeBtn.addEventListener("click", closeEditRecordModal);
  cancelBtn.addEventListener("click", closeEditRecordModal);
  saveBtn.addEventListener("click", saveEditRecord);

  // Fechar ao clicar fora do conteúdo
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeEditRecordModal();
    }
  });
}

function openEditRecordModal(type, id) {
  currentEdit = { type, id };
  const title = document.getElementById("editRecordTitle");
  const container = document.getElementById("editRecordFormContainer");

  if (type === "workout") {
    const item = workouts.find((w) => w.id === id);
    title.textContent = "Editar Treino";
    container.innerHTML = `
      <div class="form-group">
        <label for="editWorkoutType">Tipo de Treino</label>
        <select id="editWorkoutType" required>
          <option value="Musculação">Musculação</option>
          <option value="Cardio">Cardio</option>
          <option value="Yoga">Yoga</option>
          <option value="Natação">Natação</option>
          <option value="Corrida">Corrida</option>
          <option value="Ciclismo">Ciclismo</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <div class="form-group">
        <label for="editWorkoutDuration">Duração (minutos)</label>
        <input type="number" id="editWorkoutDuration" min="1" required />
      </div>
      <div class="form-group">
        <label for="editWorkoutNotes">Observações</label>
        <textarea id="editWorkoutNotes" rows="3"></textarea>
      </div>
    `;
    // Preencher valores
    document.getElementById("editWorkoutType").value = item.type || "";
    document.getElementById("editWorkoutDuration").value = item.duration || 0;
    document.getElementById("editWorkoutNotes").value = item.notes || "";
  } else if (type === "water") {
    const item = waterRecords.find((r) => r.id === id);
    title.textContent = "Editar Consumo de Água";
    container.innerHTML = `
      <div class="form-group">
        <label for="editWaterAmount">Quantidade (ml)</label>
        <input type="number" id="editWaterAmount" min="1" required />
      </div>
    `;
    document.getElementById("editWaterAmount").value = item.amount || 0;
  } else if (type === "meal") {
    const item = meals.find((m) => m.id === id);
    title.textContent = "Editar Refeição";
    container.innerHTML = `
      <div class="form-group">
        <label for="editMealType">Tipo de Refeição</label>
        <select id="editMealType" required>
          <option value="Café da Manhã">Café da Manhã</option>
          <option value="Lanche da Manhã">Lanche da Manhã</option>
          <option value="Almoço">Almoço</option>
          <option value="Lanche da Tarde">Lanche da Tarde</option>
          <option value="Jantar">Jantar</option>
          <option value="Ceia">Ceia</option>
        </select>
      </div>
      <div class="form-group">
        <label for="editMealDescription">Descrição</label>
        <textarea id="editMealDescription" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="editMealCalories">Calorias</label>
        <input type="number" id="editMealCalories" min="0" />
      </div>
      <div class="form-group">
        <label for="editMealProtein">Proteína (gramas)</label>
        <input type="number" id="editMealProtein" min="0" />
      </div>
      <div class="form-group">
        <label for="editMealCarbs">Carboidratos (gramas)</label>
        <input type="number" id="editMealCarbs" min="0" />
      </div>
      <div class="form-group">
        <label for="editMealFat">Gorduras (gramas)</label>
        <input type="number" id="editMealFat" min="0" />
      </div>
    `;
    document.getElementById("editMealType").value = item.type || "";
    document.getElementById("editMealDescription").value =
      item.description || "";
    document.getElementById("editMealCalories").value = item.calories || 0;
    document.getElementById("editMealProtein").value = item.protein || 0;
    document.getElementById("editMealCarbs").value = item.carbs || 0;
    document.getElementById("editMealFat").value = item.fat || 0;
  }

  document.getElementById("editRecordModal").classList.add("active");
}

function closeEditRecordModal() {
  const modal = document.getElementById("editRecordModal");
  modal.classList.remove("active");
  currentEdit = null;
}

function saveEditRecord() {
  if (!currentEdit) return;
  const { type, id } = currentEdit;

  if (type === "workout") {
    const idx = workouts.findIndex((w) => w.id === id);
    if (idx >= 0) {
      const typeVal = document.getElementById("editWorkoutType").value;
      const durationVal = parseInt(
        document.getElementById("editWorkoutDuration").value
      );
      const notesVal = document.getElementById("editWorkoutNotes").value;

      if (!typeVal || !durationVal || durationVal <= 0) {
        alert("Preencha tipo e duração válidos.");
        return;
      }

      workouts[idx].type = typeVal;
      workouts[idx].duration = durationVal;
      workouts[idx].notes = notesVal;
      Storage.set("workouts", workouts);
      renderWorkouts();
      updateStats();
      showNotification("Treino atualizado! ✅");
    }
  } else if (type === "water") {
    const idx = waterRecords.findIndex((r) => r.id === id);
    if (idx >= 0) {
      const amountVal = parseInt(
        document.getElementById("editWaterAmount").value
      );
      if (!amountVal || amountVal <= 0) {
        alert("Informe uma quantidade válida em ml.");
        return;
      }
      waterRecords[idx].amount = amountVal;
      Storage.set("waterRecords", waterRecords);
      renderWaterRecords();
      updateWaterProgress();
      updateStats();
      updateNutritionGoals();
      showNotification("Registro de água atualizado! 💧");
    }
  } else if (type === "meal") {
    const idx = meals.findIndex((m) => m.id === id);
    if (idx >= 0) {
      const typeVal = document.getElementById("editMealType").value;
      const descVal = document.getElementById("editMealDescription").value;
      const calVal =
        parseInt(document.getElementById("editMealCalories").value) || 0;
      const protVal =
        parseInt(document.getElementById("editMealProtein").value) || 0;
      const carbsVal =
        parseInt(document.getElementById("editMealCarbs").value) || 0;
      const fatVal =
        parseInt(document.getElementById("editMealFat").value) || 0;

      if (!typeVal || !descVal) {
        alert("Tipo e descrição são obrigatórios.");
        return;
      }

      meals[idx].type = typeVal;
      meals[idx].description = descVal;
      meals[idx].calories = calVal;
      meals[idx].protein = protVal;
      meals[idx].carbs = carbsVal;
      meals[idx].fat = fatVal;
      Storage.set("meals", meals);
      renderMeals();
      updateStats();
      updateNutritionGoals();
      showNotification("Refeição atualizada! 🍽️");
    }
  }

  closeEditRecordModal();
}

// ==========================================
// SISTEMA DE PERFIL E AVALIAÇÕES
// ==========================================

let assessments = Storage.get("assessments") || [];

// Variáveis para armazenar dados das fotos temporariamente
let photoFrontData = "";
let photoBackData = "";
let photoSideData = "";
let currentAssessmentId = null;

// Função para processar upload de foto
function handlePhotoUpload(inputId, previewId, photoDataVar) {
  const input = document.getElementById(inputId);
  const preview = document.getElementById(previewId);

  input.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // Limite de 5MB
        alert("A imagem deve ter no máximo 5MB.");
        input.value = "";
        return;
      }

      const reader = new FileReader();

      reader.onload = function (event) {
        const imgData = event.target.result;

        // Armazenar dados da foto na variável correspondente
        if (inputId === "photoFront") photoFrontData = imgData;
        else if (inputId === "photoBack") photoBackData = imgData;
        else if (inputId === "photoSide") photoSideData = imgData;

        // Mostrar preview
        preview.innerHTML = `
          <img src="${imgData}" alt="Preview" class="photo-preview-img">
          <button type="button" class="btn-remove-photo" onclick="removePhoto('${inputId}', '${previewId}')">❌ Remover</button>
        `;
      };

      reader.readAsDataURL(file);
    }
  });
}

// Remover foto
function removePhoto(inputId, previewId) {
  document.getElementById(inputId).value = "";
  document.getElementById(previewId).innerHTML = "";

  if (inputId === "photoFront") photoFrontData = "";
  else if (inputId === "photoBack") photoBackData = "";
  else if (inputId === "photoSide") photoSideData = "";
}

// Calcular IMC automaticamente
function calculateBMI() {
  const height = parseFloat(document.getElementById("userHeight").value);
  const weight = parseFloat(document.getElementById("userWeight").value);

  if (height > 0 && weight > 0) {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    document.getElementById("bmi").value = bmi;
  }
}

// Salvar avaliação completa
function saveProfileAssessment() {
  const isEditing = Boolean(currentAssessmentId);
  const assessmentDate = document.getElementById("assessmentDate").value;

  if (!assessmentDate) {
    alert("Por favor, selecione a data da avaliação.");
    return;
  }

  const assessment = {
    id: isEditing ? currentAssessmentId : Date.now(),
    date: assessmentDate,
    timestamp: new Date(assessmentDate).getTime(),
    personal: {
      name: document.getElementById("userName").value || "",
      age: parseInt(document.getElementById("userAge").value) || 0,
      height: parseFloat(document.getElementById("userHeight").value) || 0,
      weight: parseFloat(document.getElementById("userWeight").value) || 0,
    },
    bioimpedance: {
      bodyFatPercent:
        parseFloat(document.getElementById("bodyFatPercent").value) || 0,
      muscleMassPercent:
        parseFloat(document.getElementById("muscleMassPercent").value) || 0,
      visceralFat:
        parseFloat(document.getElementById("visceralFat").value) || 0,
      bmr: parseInt(document.getElementById("bmr").value) || 0,
      bmi: parseFloat(document.getElementById("bmi").value) || 0,
      biologicalAge:
        parseInt(document.getElementById("biologicalAge").value) || 0,
    },
    perimeters: {
      shoulder:
        parseFloat(document.getElementById("shoulderPerimeter").value) || 0,
      chest: parseFloat(document.getElementById("chestPerimeter").value) || 0,
      waist: parseFloat(document.getElementById("waistPerimeter").value) || 0,
      abdomen:
        parseFloat(document.getElementById("abdomenPerimeter").value) || 0,
      hip: parseFloat(document.getElementById("hipPerimeter").value) || 0,
      neck: parseFloat(document.getElementById("neckPerimeter").value) || 0,
      thighRight:
        parseFloat(document.getElementById("thighRightPerimeter").value) || 0,
      thighLeft:
        parseFloat(document.getElementById("thighLeftPerimeter").value) || 0,
      armRelaxedRight:
        parseFloat(document.getElementById("armRelaxedRightPerimeter").value) ||
        0,
      armRelaxedLeft:
        parseFloat(document.getElementById("armRelaxedLeftPerimeter").value) ||
        0,
      forearmRight:
        parseFloat(document.getElementById("forearmRightPerimeter").value) || 0,
      forearmLeft:
        parseFloat(document.getElementById("forearmLeftPerimeter").value) || 0,
      calfRight:
        parseFloat(document.getElementById("calfRightPerimeter").value) || 0,
      calfLeft:
        parseFloat(document.getElementById("calfLeftPerimeter").value) || 0,
    },
    photos: {
      front: photoFrontData || "",
      back: photoBackData || "",
      side: photoSideData || "",
    },
  };

  if (isEditing) {
    const idx = assessments.findIndex((a) => a.id === currentAssessmentId);
    if (idx >= 0) {
      assessments[idx] = assessment;
    }
    showNotification("Avaliação atualizada! ✅");
  } else {
    assessments.push(assessment);
    showNotification("Avaliação salva com sucesso! 💪");
  }

  Storage.set("assessments", assessments);
  renderAssessmentHistory();
  updateComparisonSelects();
  clearProfileForms();
}

// Limpar formulários após salvar
function clearProfileForms() {
  document.getElementById("assessmentDate").value = "";
  // Manter dados pessoais, limpar apenas métricas
  document.getElementById("userWeight").value = "";
  document.getElementById("bodyFatPercent").value = "";
  document.getElementById("muscleMassPercent").value = "";
  document.getElementById("visceralFat").value = "";
  document.getElementById("bmr").value = "";
  document.getElementById("bmi").value = "";
  document.getElementById("biologicalAge").value = "";
  document.getElementById("shoulderPerimeter").value = "";
  document.getElementById("chestPerimeter").value = "";
  document.getElementById("waistPerimeter").value = "";
  document.getElementById("abdomenPerimeter").value = "";
  document.getElementById("hipPerimeter").value = "";
  document.getElementById("neckPerimeter").value = "";
  document.getElementById("thighRightPerimeter").value = "";
  document.getElementById("thighLeftPerimeter").value = "";
  document.getElementById("armRelaxedRightPerimeter").value = "";
  document.getElementById("armRelaxedLeftPerimeter").value = "";
  document.getElementById("forearmRightPerimeter").value = "";
  document.getElementById("forearmLeftPerimeter").value = "";
  document.getElementById("calfRightPerimeter").value = "";
  document.getElementById("calfLeftPerimeter").value = "";

  // Limpar fotos
  document.getElementById("photoFront").value = "";
  document.getElementById("photoBack").value = "";
  document.getElementById("photoSide").value = "";
  document.getElementById("photoFrontPreview").innerHTML = "";
  document.getElementById("photoBackPreview").innerHTML = "";
  document.getElementById("photoSidePreview").innerHTML = "";
  photoFrontData = "";
  photoBackData = "";
  photoSideData = "";

  // Resetar estado de edição
  currentAssessmentId = null;
  const saveBtn = document.getElementById("saveProfileBtn");
  if (saveBtn) saveBtn.textContent = "💾 Salvar Avaliação";
}

// Função auxiliar para formatar data corretamente (evita problema de timezone)
function formatDateBR(dateString) {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
}

// Renderizar histórico de avaliações
function renderAssessmentHistory() {
  const container = document.getElementById("assessmentHistory");

  if (assessments.length === 0) {
    container.innerHTML =
      '<p class="empty-message">Nenhuma avaliação registrada ainda.</p>';
    return;
  }

  // Ordenar por data (mais recente primeiro)
  const sortedAssessments = [...assessments].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  let html = '<div class="assessment-cards">';

  sortedAssessments.forEach((assessment) => {
    const dateFormatted = formatDateBR(assessment.date);

    html += `
      <div class="assessment-card">
        <div class="assessment-header">
          <span class="assessment-date">📅 ${dateFormatted}</span>
          <div class="assessment-actions">
            <button class="btn btn-secondary btn-small" onclick="editAssessment(${
              assessment.id
            })">✏️ Editar</button>
            <button class="btn-delete-assessment" onclick="deleteAssessment(${
              assessment.id
            })">🗑️</button>
          </div>
        </div>
        <div class="assessment-data">
          <div class="data-section">
            <h4>📋 Dados Pessoais</h4>
            <p><strong>Peso:</strong> ${assessment.personal.weight} kg</p>
            <p><strong>Altura:</strong> ${assessment.personal.height} cm</p>
          </div>
          <div class="data-section">
            <h4>⚡ Bioimpedância</h4>
            <p><strong>% Gordura:</strong> ${
              assessment.bioimpedance.bodyFatPercent
            }%</p>
            <p><strong>% Massa Muscular:</strong> ${
              assessment.bioimpedance.muscleMassPercent
            }%</p>
            <p><strong>IMC:</strong> ${assessment.bioimpedance.bmi}</p>
          </div>
          <div class="data-section">
            <h4>📏 Perímetros Principais</h4>
            <p><strong>Cintura:</strong> ${assessment.perimeters.waist} cm</p>
            <p><strong>Peitoral:</strong> ${assessment.perimeters.chest} cm</p>
            <p><strong>Quadril:</strong> ${assessment.perimeters.hip} cm</p>
            <p><strong>Pescoço:</strong> ${
              assessment.perimeters.neck || 0
            } cm</p>
          </div>
        </div>
        ${
          assessment.photos &&
          (assessment.photos.front ||
            assessment.photos.back ||
            assessment.photos.side)
            ? `
        <div class="assessment-photos">
          <h4>📸 Fotos da Avaliação</h4>
          <div class="photos-grid">
            ${
              assessment.photos.front
                ? `<div class="photo-item"><img src="${assessment.photos.front}" alt="Frente"><p>Anterior</p></div>`
                : ""
            }
            ${
              assessment.photos.back
                ? `<div class="photo-item"><img src="${assessment.photos.back}" alt="Costas"><p>Posterior</p></div>`
                : ""
            }
            ${
              assessment.photos.side
                ? `<div class="photo-item"><img src="${assessment.photos.side}" alt="Lateral"><p>Lateral Esquerda</p></div>`
                : ""
            }
          </div>
        </div>
        `
            : ""
        }
      </div>
    `;
  });

  html += "</div>";
  container.innerHTML = html;
}

// Deletar avaliação
function deleteAssessment(id) {
  if (confirm("Tem certeza que deseja excluir esta avaliação?")) {
    assessments = assessments.filter((a) => a.id !== id);
    Storage.set("assessments", assessments);
    renderAssessmentHistory();
    updateComparisonSelects();
    showNotification("Avaliação excluída!");
  }
}

// Editar avaliação
function editAssessment(id) {
  const assessment = assessments.find((a) => a.id === id);
  if (!assessment) {
    alert("Avaliação não encontrada.");
    return;
  }

  currentAssessmentId = id;

  // Ativar aba de perfil
  const tabBtn = document.querySelector('.tab-btn[data-tab="perfil"]');
  if (tabBtn) tabBtn.click();

  // Preencher dados pessoais
  document.getElementById("assessmentDate").value = assessment.date || "";
  document.getElementById("userName").value = assessment.personal.name || "";
  document.getElementById("userAge").value = assessment.personal.age || "";
  document.getElementById("userHeight").value =
    assessment.personal.height || "";
  document.getElementById("userWeight").value =
    assessment.personal.weight || "";

  // Preencher bioimpedância
  document.getElementById("bodyFatPercent").value =
    assessment.bioimpedance.bodyFatPercent || "";
  document.getElementById("muscleMassPercent").value =
    assessment.bioimpedance.muscleMassPercent || "";
  document.getElementById("visceralFat").value =
    assessment.bioimpedance.visceralFat || "";
  document.getElementById("bmr").value = assessment.bioimpedance.bmr || "";
  document.getElementById("bmi").value = assessment.bioimpedance.bmi || "";
  document.getElementById("biologicalAge").value =
    assessment.bioimpedance.biologicalAge || "";

  // Preencher perímetros
  document.getElementById("shoulderPerimeter").value =
    assessment.perimeters.shoulder || "";
  document.getElementById("chestPerimeter").value =
    assessment.perimeters.chest || "";
  document.getElementById("waistPerimeter").value =
    assessment.perimeters.waist || "";
  document.getElementById("abdomenPerimeter").value =
    assessment.perimeters.abdomen || "";
  document.getElementById("hipPerimeter").value =
    assessment.perimeters.hip || "";
  document.getElementById("neckPerimeter").value =
    assessment.perimeters.neck || "";
  document.getElementById("thighRightPerimeter").value =
    assessment.perimeters.thighRight || "";
  document.getElementById("thighLeftPerimeter").value =
    assessment.perimeters.thighLeft || "";
  document.getElementById("armRelaxedRightPerimeter").value =
    assessment.perimeters.armRelaxedRight || "";
  document.getElementById("armRelaxedLeftPerimeter").value =
    assessment.perimeters.armRelaxedLeft || "";
  document.getElementById("forearmRightPerimeter").value =
    assessment.perimeters.forearmRight || "";
  document.getElementById("forearmLeftPerimeter").value =
    assessment.perimeters.forearmLeft || "";
  document.getElementById("calfRightPerimeter").value =
    assessment.perimeters.calfRight || "";
  document.getElementById("calfLeftPerimeter").value =
    assessment.perimeters.calfLeft || "";

  // Carregar fotos
  photoFrontData = (assessment.photos && assessment.photos.front) || "";
  photoBackData = (assessment.photos && assessment.photos.back) || "";
  photoSideData = (assessment.photos && assessment.photos.side) || "";

  // Mostrar preview das fotos
  showPhotoPreview("photoFrontPreview", photoFrontData);
  showPhotoPreview("photoBackPreview", photoBackData);
  showPhotoPreview("photoSidePreview", photoSideData);

  // Mudar texto do botão
  const saveBtn = document.getElementById("saveProfileBtn");
  if (saveBtn) saveBtn.textContent = "✅ Atualizar Avaliação";

  // Scroll para o topo da seção de perfil
  const perfilSection = document.getElementById("perfil");
  if (perfilSection) {
    perfilSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Função auxiliar para mostrar preview de foto
function showPhotoPreview(previewId, imgData) {
  const preview = document.getElementById(previewId);
  if (!preview) return;

  if (imgData) {
    const inputId = previewId.replace("Preview", "");
    preview.innerHTML = `
      <img src="${imgData}" alt="Preview" class="photo-preview-img">
      <button type="button" class="btn-remove-photo" onclick="removePhoto('${inputId}', '${previewId}')">❌ Remover</button>
    `;
  } else {
    preview.innerHTML = "";
  }
}

// Atualizar selects de comparação
function updateComparisonSelects() {
  const select1 = document.getElementById("compareDate1");
  const select2 = document.getElementById("compareDate2");

  const sortedAssessments = [...assessments].sort(
    (a, b) => b.timestamp - a.timestamp
  );

  let options = '<option value="">Selecione...</option>';
  sortedAssessments.forEach((assessment) => {
    const dateFormatted = formatDateBR(assessment.date);
    options += `<option value="${assessment.id}">${dateFormatted}</option>`;
  });

  select1.innerHTML = options;
  select2.innerHTML = options;
}

// Comparar duas avaliações
function compareAssessments() {
  const id1 = parseInt(document.getElementById("compareDate1").value);
  const id2 = parseInt(document.getElementById("compareDate2").value);

  if (!id1 || !id2) {
    alert("Selecione duas avaliações para comparar.");
    return;
  }

  if (id1 === id2) {
    alert("Selecione avaliações diferentes.");
    return;
  }

  const assessment1 = assessments.find((a) => a.id === id1);
  const assessment2 = assessments.find((a) => a.id === id2);

  if (!assessment1 || !assessment2) {
    alert("Erro ao carregar avaliações.");
    return;
  }

  // Determinar qual é a mais antiga
  const [older, newer] =
    assessment1.timestamp < assessment2.timestamp
      ? [assessment1, assessment2]
      : [assessment2, assessment1];

  const container = document.getElementById("comparisonResults");

  const date1 = formatDateBR(older.date);
  const date2 = formatDateBR(newer.date);

  // Calcular diferenças
  const weightDiff = (newer.personal.weight - older.personal.weight).toFixed(1);
  const bodyFatDiff = (
    newer.bioimpedance.bodyFatPercent - older.bioimpedance.bodyFatPercent
  ).toFixed(1);
  const muscleMassDiff = (
    newer.bioimpedance.muscleMassPercent - older.bioimpedance.muscleMassPercent
  ).toFixed(1);
  const visceralFatDiff = (
    newer.bioimpedance.visceralFat - older.bioimpedance.visceralFat
  ).toFixed(1);
  const bmiDiff = (newer.bioimpedance.bmi - older.bioimpedance.bmi).toFixed(1);
  const waistDiff = (newer.perimeters.waist - older.perimeters.waist).toFixed(
    1
  );
  const chestDiff = (newer.perimeters.chest - older.perimeters.chest).toFixed(
    1
  );
  const neckDiff = (
    (newer.perimeters.neck || 0) - (older.perimeters.neck || 0)
  ).toFixed(1);
  const thighRightDiff = (
    (newer.perimeters.thighRight || 0) - (older.perimeters.thighRight || 0)
  ).toFixed(1);
  const thighLeftDiff = (
    (newer.perimeters.thighLeft || 0) - (older.perimeters.thighLeft || 0)
  ).toFixed(1);
  const armRelaxedRightDiff = (
    (newer.perimeters.armRelaxedRight || 0) -
    (older.perimeters.armRelaxedRight || 0)
  ).toFixed(1);
  const armRelaxedLeftDiff = (
    (newer.perimeters.armRelaxedLeft || 0) -
    (older.perimeters.armRelaxedLeft || 0)
  ).toFixed(1);
  const calfRightDiff = (
    (newer.perimeters.calfRight || 0) - (older.perimeters.calfRight || 0)
  ).toFixed(1);
  const calfLeftDiff = (
    (newer.perimeters.calfLeft || 0) - (older.perimeters.calfLeft || 0)
  ).toFixed(1);

  // Função para formatar diferença com seta
  const formatDiff = (diff, unit = "", inverse = false) => {
    const numDiff = parseFloat(diff);
    if (numDiff === 0) return `<span class="diff-neutral">0${unit}</span>`;

    const isPositive = numDiff > 0;
    const isGood = inverse ? !isPositive : isPositive;
    const arrow = isPositive ? "↑" : "↓";
    const cssClass = isGood ? "diff-positive" : "diff-negative";

    return `<span class="${cssClass}">${arrow} ${Math.abs(
      numDiff
    )}${unit}</span>`;
  };

  let html = `
    <div class="comparison-table">
      <div class="comparison-header">
        <div class="comparison-col">
          <h4>📅 ${date1}</h4>
          <span class="comparison-label">(Anterior)</span>
        </div>
        <div class="comparison-col">
          <h4>Métrica</h4>
        </div>
        <div class="comparison-col">
          <h4>📅 ${date2}</h4>
          <span class="comparison-label">(Atual)</span>
        </div>
        <div class="comparison-col">
          <h4>Diferença</h4>
        </div>
      </div>
      
      <div class="comparison-section">
        <h4 class="section-title">📋 Dados Pessoais</h4>
        <div class="comparison-row">
          <div class="comparison-col">${older.personal.weight} kg</div>
          <div class="comparison-col comparison-metric">Peso</div>
          <div class="comparison-col">${newer.personal.weight} kg</div>
          <div class="comparison-col">${formatDiff(weightDiff, " kg")}</div>
        </div>
      </div>
      
      <div class="comparison-section">
        <h4 class="section-title">⚡ Bioimpedância</h4>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.bioimpedance.bodyFatPercent
          }%</div>
          <div class="comparison-col comparison-metric">% Gordura</div>
          <div class="comparison-col">${
            newer.bioimpedance.bodyFatPercent
          }%</div>
          <div class="comparison-col">${formatDiff(
            bodyFatDiff,
            "%",
            true
          )}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.bioimpedance.muscleMassPercent
          }%</div>
          <div class="comparison-col comparison-metric">% Massa Muscular</div>
          <div class="comparison-col">${
            newer.bioimpedance.muscleMassPercent
          }%</div>
          <div class="comparison-col">${formatDiff(muscleMassDiff, "%")}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${older.bioimpedance.visceralFat}</div>
          <div class="comparison-col comparison-metric">Gordura Visceral</div>
          <div class="comparison-col">${newer.bioimpedance.visceralFat}</div>
          <div class="comparison-col">${formatDiff(
            visceralFatDiff,
            "",
            true
          )}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${older.bioimpedance.bmi}</div>
          <div class="comparison-col comparison-metric">IMC</div>
          <div class="comparison-col">${newer.bioimpedance.bmi}</div>
          <div class="comparison-col">${formatDiff(bmiDiff)}</div>
        </div>
      </div>
      
      <div class="comparison-section">
        <h4 class="section-title">📏 Perímetros</h4>
        <div class="comparison-row">
          <div class="comparison-col">${older.perimeters.chest} cm</div>
          <div class="comparison-col comparison-metric">Peitoral</div>
          <div class="comparison-col">${newer.perimeters.chest} cm</div>
          <div class="comparison-col">${formatDiff(chestDiff, " cm")}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${older.perimeters.waist} cm</div>
          <div class="comparison-col comparison-metric">Cintura</div>
          <div class="comparison-col">${newer.perimeters.waist} cm</div>
          <div class="comparison-col">${formatDiff(
            waistDiff,
            " cm",
            true
          )}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${older.perimeters.neck || 0} cm</div>
          <div class="comparison-col comparison-metric">Pescoço</div>
          <div class="comparison-col">${newer.perimeters.neck || 0} cm</div>
          <div class="comparison-col">${formatDiff(neckDiff, " cm")}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.perimeters.thighRight || 0
          } cm</div>
          <div class="comparison-col comparison-metric">Coxa Direita</div>
          <div class="comparison-col">${
            newer.perimeters.thighRight || 0
          } cm</div>
          <div class="comparison-col">${formatDiff(thighRightDiff, " cm")}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.perimeters.thighLeft || 0
          } cm</div>
          <div class="comparison-col comparison-metric">Coxa Esquerda</div>
          <div class="comparison-col">${
            newer.perimeters.thighLeft || 0
          } cm</div>
          <div class="comparison-col">${formatDiff(thighLeftDiff, " cm")}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.perimeters.armRelaxedRight || 0
          } cm</div>
          <div class="comparison-col comparison-metric">Braço Relaxado Direito</div>
          <div class="comparison-col">${
            newer.perimeters.armRelaxedRight || 0
          } cm</div>
          <div class="comparison-col">${formatDiff(
            armRelaxedRightDiff,
            " cm"
          )}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.perimeters.armRelaxedLeft || 0
          } cm</div>
          <div class="comparison-col comparison-metric">Braço Relaxado Esquerdo</div>
          <div class="comparison-col">${
            newer.perimeters.armRelaxedLeft || 0
          } cm</div>
          <div class="comparison-col">${formatDiff(
            armRelaxedLeftDiff,
            " cm"
          )}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${
            older.perimeters.calfRight || 0
          } cm</div>
          <div class="comparison-col comparison-metric">Panturrilha Direita</div>
          <div class="comparison-col">${
            newer.perimeters.calfRight || 0
          } cm</div>
          <div class="comparison-col">${formatDiff(calfRightDiff, " cm")}</div>
        </div>
        <div class="comparison-row">
          <div class="comparison-col">${older.perimeters.calfLeft || 0} cm</div>
          <div class="comparison-col comparison-metric">Panturrilha Esquerda</div>
          <div class="comparison-col">${newer.perimeters.calfLeft || 0} cm</div>
          <div class="comparison-col">${formatDiff(calfLeftDiff, " cm")}</div>
        </div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// Carregar dados pessoais salvos (para preencher automaticamente)
function loadPersonalData() {
  if (assessments.length > 0) {
    const lastAssessment = [...assessments].sort(
      (a, b) => b.timestamp - a.timestamp
    )[0];
    document.getElementById("userName").value =
      lastAssessment.personal.name || "";
    document.getElementById("userAge").value =
      lastAssessment.personal.age || "";
    document.getElementById("userHeight").value =
      lastAssessment.personal.height || "";
  }
}

// ==========================================
// MODAL DE DADOS DO DIA
// ==========================================

let currentDayShareData = null;
let shareImageData = null;

function openDayDataModal(dateKey) {
  const dateObj = new Date(dateKey + "T12:00:00");
  const dayWorkoutStatus = dailyWorkoutStatus[dateKey];
  const dayMeals = meals.filter(
    (m) => new Date(m.date).toISOString().split("T")[0] === dateKey
  );
  const dayWater = waterRecords.filter(
    (w) => new Date(w.date).toISOString().split("T")[0] === dateKey
  );

  // Armazenar dados para compartilhamento
  currentDayShareData = {
    dateKey,
    dateObj,
    workoutStatus: dayWorkoutStatus,
    meals: dayMeals,
    water: dayWater,
  };

  const contentContainer = document.getElementById("dayDataContent");
  let html = "";

  // Seção de Treino
  html += `
    <div class="day-section">
      <h4>💪 Treino do Dia</h4>
  `;

  if (dayWorkoutStatus && dayWorkoutStatus.completed) {
    html += `
      <div class="day-info-item">
        <span class="info-label">⏱️ Tempo de Treino:</span>
        <span class="info-value">${
          dayWorkoutStatus.duration || 0
        } minutos</span>
      </div>
      <div class="day-info-item">
        <span class="info-label">🔥 Calorias Gastas:</span>
        <span class="info-value">${dayWorkoutStatus.calories || 0} kcal</span>
      </div>
      <div class="day-exercises">
        <h5>Exercícios:</h5>
    `;

    if (dayWorkoutStatus.exercises && dayWorkoutStatus.exercises.length > 0) {
      dayWorkoutStatus.exercises.forEach((ex) => {
        html += `
          <div class="exercise-row">
            <span class="exercise-check">${ex.completed ? "✅" : "❌"}</span>
            <span class="exercise-name">${ex.name}</span>
            <span class="exercise-details">${ex.details}</span>
          </div>
        `;
      });
    }

    html += `
        </div>
    `;
  } else {
    html += `<p class="empty-info">Sem treino neste dia</p>`;
  }

  html += `</div>`;

  // Seção de Água
  html += `
    <div class="day-section">
      <h4>💧 Consumo de Água</h4>
  `;

  if (dayWater.length > 0) {
    const totalWater = dayWater.reduce((sum, w) => sum + w.amount, 0);
    html += `
      <div class="day-info-item">
        <span class="info-label">Total:</span>
        <span class="info-value">${totalWater} ml</span>
      </div>
      <div class="water-records">
    `;

    dayWater.forEach((w) => {
      const time = new Date(w.date).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      html += `
        <div class="water-record-item">
          <span>${time}</span>
          <span class="amount">+${w.amount}ml</span>
        </div>
      `;
    });

    html += `</div>`;
  } else {
    html += `<p class="empty-info">Sem registros de água</p>`;
  }

  html += `</div>`;

  // Seção de Alimentação
  html += `
    <div class="day-section">
      <h4>🍽️ Alimentação</h4>
  `;

  if (dayMeals.length > 0) {
    const totalCalories = dayMeals.reduce(
      (sum, m) => sum + (m.calories || 0),
      0
    );
    const totalProtein = dayMeals.reduce((sum, m) => sum + (m.protein || 0), 0);
    const totalCarbs = dayMeals.reduce((sum, m) => sum + (m.carbs || 0), 0);
    const totalFat = dayMeals.reduce((sum, m) => sum + (m.fat || 0), 0);

    html += `
      <div class="nutrition-summary">
        <div class="nutrition-item">
          <span class="nutrition-label">🔥 Calorias:</span>
          <span class="nutrition-value">${totalCalories} kcal</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">🥩 Proteína:</span>
          <span class="nutrition-value">${totalProtein}g</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">🍚 Carbs:</span>
          <span class="nutrition-value">${totalCarbs}g</span>
        </div>
        <div class="nutrition-item">
          <span class="nutrition-label">🧈 Gordura:</span>
          <span class="nutrition-value">${totalFat}g</span>
        </div>
      </div>
      <div class="meals-list">
    `;

    dayMeals.forEach((meal) => {
      const time = new Date(meal.date).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      html += `
        <div class="meal-record-item">
          <div class="meal-header">
            <span class="meal-type">${meal.type}</span>
            <span class="meal-time">${time}</span>
          </div>
          <p class="meal-description">${meal.description}</p>
          ${
            meal.calories || meal.protein || meal.carbs || meal.fat
              ? `
              <div class="meal-macros-mini">
                ${meal.calories ? `<span>🔥 ${meal.calories}kcal</span>` : ""}
                ${meal.protein ? `<span>🥩 ${meal.protein}g</span>` : ""}
                ${meal.carbs ? `<span>🍚 ${meal.carbs}g</span>` : ""}
                ${meal.fat ? `<span>🧈 ${meal.fat}g</span>` : ""}
              </div>
            `
              : ""
          }
        </div>
      `;
    });

    html += `</div>`;
  } else {
    html += `<p class="empty-info">Sem registros de alimentação</p>`;
  }

  html += `</div>`;

  contentContainer.innerHTML = html;
  document.getElementById("modalDayDate").textContent =
    dateObj.toLocaleDateString("pt-BR");
  document.getElementById("dayDataModal").classList.add("active");
}

function closeDayDataModal() {
  document.getElementById("dayDataModal").classList.remove("active");
  currentDayShareData = null;
  shareImageData = null;
}

// ==========================================
// MODAL DE COMPARTILHAMENTO
// ==========================================

function openShareModal() {
  if (!currentDayShareData) {
    alert("Dados do dia não carregados");
    return;
  }

  const { dateObj, workoutStatus, water, meals } = currentDayShareData;
  const dateStr = dateObj.toLocaleDateString("pt-BR");

  // Criar preview de compartilhamento
  let previewHTML = `
    <div class="share-content">
      <div class="share-header">
        <h3>📊 Resumo do Dia - ${dateStr}</h3>
        <p class="share-subtitle">Desafio 365 Dias</p>
      </div>

      <div class="share-section">
        <h4>💪 Treino</h4>
  `;

  if (workoutStatus && workoutStatus.completed) {
    previewHTML += `
      <div class="share-data">
        <div class="share-item">
          <span class="share-icon">⏱️</span>
          <span class="share-text">Tempo: ${workoutStatus.duration}min</span>
        </div>
        <div class="share-item">
          <span class="share-icon">🔥</span>
          <span class="share-text">Calorias: ${workoutStatus.calories}kcal</span>
        </div>
      </div>
    `;
  } else {
    previewHTML += `<p>Sem treino registrado</p>`;
  }

  previewHTML += `</div>`;

  // Água
  const totalWater = water.reduce((sum, w) => sum + w.amount, 0);
  previewHTML += `
    <div class="share-section">
      <h4>💧 Água</h4>
      <div class="share-data">
        <div class="share-item">
          <span class="share-icon">💧</span>
          <span class="share-text">Total: ${totalWater}ml</span>
        </div>
      </div>
    </div>
  `;

  // Alimentação
  const totalCalories = meals.reduce((sum, m) => sum + (m.calories || 0), 0);
  const totalProtein = meals.reduce((sum, m) => sum + (m.protein || 0), 0);
  const totalCarbs = meals.reduce((sum, m) => sum + (m.carbs || 0), 0);
  const totalFat = meals.reduce((sum, m) => sum + (m.fat || 0), 0);

  previewHTML += `
    <div class="share-section">
      <h4>🍽️ Alimentação</h4>
      <div class="share-data">
        <div class="share-item">
          <span class="share-icon">🔥</span>
          <span class="share-text">Calorias: ${totalCalories}kcal</span>
        </div>
        <div class="share-item">
          <span class="share-icon">🥩</span>
          <span class="share-text">Proteína: ${totalProtein}g</span>
        </div>
        <div class="share-item">
          <span class="share-icon">🍚</span>
          <span class="share-text">Carbs: ${totalCarbs}g</span>
        </div>
        <div class="share-item">
          <span class="share-icon">🧈</span>
          <span class="share-text">Gordura: ${totalFat}g</span>
        </div>
      </div>
    </div>
  `;

  previewHTML += `</div>`;

  document.getElementById("sharePreview").innerHTML = previewHTML;
  document.getElementById("shareImage").value = "";
  document.getElementById("imagePreviewContainer").innerHTML = "";
  shareImageData = null;

  document.getElementById("shareModal").classList.add("active");
}

function closeShareModal() {
  document.getElementById("shareModal").classList.remove("active");
  shareImageData = null;
}

function handleShareImageUpload(e) {
  const file = e.target.files[0];

  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("A imagem deve ter no máximo 5MB");
    e.target.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = (event) => {
    shareImageData = event.target.result;

    // Mostrar preview
    const container = document.getElementById("imagePreviewContainer");
    container.innerHTML = `
      <div class="share-image-preview">
        <img src="${shareImageData}" alt="Imagem do dia">
        <button type="button" class="btn-remove-photo" onclick="removeShareImage()">❌ Remover</button>
      </div>
    `;
  };

  reader.readAsDataURL(file);
}

function removeShareImage() {
  document.getElementById("shareImage").value = "";
  document.getElementById("imagePreviewContainer").innerHTML = "";
  shareImageData = null;
}

async function downloadShareData() {
  if (!currentDayShareData) return;

  const { dateObj } = currentDayShareData;
  const dateStr = dateObj.toLocaleDateString("pt-BR");

  try {
    // Usar html2canvas para capturar a tela
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";

    script.onload = () => {
      const shareContent = document.getElementById("sharePreview");
      html2canvas(shareContent, {
        backgroundColor: "#ffffff",
        scale: 2,
      }).then((canvas) => {
        downloadCanvas(canvas, dateStr);
      });
    };

    document.head.appendChild(script);
  } catch (error) {
    alert("Erro ao gerar imagem. Tente copiar o texto.");
  }
}

function downloadCanvas(canvas, dateStr) {
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `desafio365_${dateStr.replace(/\//g, "-")}.png`;
  link.click();
  showNotification("Imagem baixada com sucesso! 📥");
}

function copyShareText() {
  if (!currentDayShareData) return;

  const { dateObj, workoutStatus, water, meals } = currentDayShareData;
  const dateStr = dateObj.toLocaleDateString("pt-BR");

  const totalWater = water.reduce((sum, w) => sum + w.amount, 0);
  const totalCalories = meals.reduce((sum, m) => sum + (m.calories || 0), 0);
  const totalProtein = meals.reduce((sum, m) => sum + (m.protein || 0), 0);
  const totalCarbs = meals.reduce((sum, m) => sum + (m.carbs || 0), 0);
  const totalFat = meals.reduce((sum, m) => sum + (m.fat || 0), 0);

  let text = `📊 Resumo do Dia - ${dateStr}\n`;
  text += `Desafio 365 Dias\n\n`;

  text += `💪 Treino\n`;
  if (workoutStatus && workoutStatus.completed) {
    text += `⏱️ Tempo: ${workoutStatus.duration}min\n`;
    text += `🔥 Calorias: ${workoutStatus.calories}kcal\n`;
  } else {
    text += `Sem treino registrado\n`;
  }

  text += `\n💧 Água\n`;
  text += `Total: ${totalWater}ml\n`;

  text += `\n🍽️ Alimentação\n`;
  text += `🔥 Calorias: ${totalCalories}kcal\n`;
  text += `🥩 Proteína: ${totalProtein}g\n`;
  text += `🍚 Carbs: ${totalCarbs}g\n`;
  text += `🧈 Gordura: ${totalFat}g\n`;

  navigator.clipboard.writeText(text).then(() => {
    showNotification("Texto copiado para a área de transferência! 📋");
  });
}

// Inicializar perfil
function initProfile() {
  renderAssessmentHistory();
  updateComparisonSelects();
  loadPersonalData();

  // Event listeners para modal de dados do dia
  document
    .getElementById("dayDataClose")
    .addEventListener("click", closeDayDataModal);
  document
    .getElementById("closeDayDataBtn")
    .addEventListener("click", closeDayDataModal);
  document
    .getElementById("shareDayDataBtn")
    .addEventListener("click", openShareModal);

  // Event listeners para modal de compartilhamento
  document
    .getElementById("shareModalClose")
    .addEventListener("click", closeShareModal);
  document
    .getElementById("cancelShareBtn")
    .addEventListener("click", closeShareModal);
  document
    .getElementById("downloadShareBtn")
    .addEventListener("click", downloadShareData);
  document
    .getElementById("copyShareBtn")
    .addEventListener("click", copyShareText);

  // Listener para upload de imagem
  document
    .getElementById("shareImage")
    .addEventListener("change", handleShareImageUpload);

  // Event listeners
  document
    .getElementById("saveProfileBtn")
    .addEventListener("click", saveProfileAssessment);
  document
    .getElementById("compareBtn")
    .addEventListener("click", compareAssessments);

  // Calcular IMC automaticamente quando altura ou peso mudar
  document.getElementById("userHeight").addEventListener("input", calculateBMI);
  document.getElementById("userWeight").addEventListener("input", calculateBMI);

  // Inicializar handlers de upload de fotos
  handlePhotoUpload("photoFront", "photoFrontPreview");
  handlePhotoUpload("photoBack", "photoBackPreview");
  handlePhotoUpload("photoSide", "photoSidePreview");
}
