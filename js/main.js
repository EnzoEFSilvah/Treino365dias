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
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Supino Reto (Barra ou Halter)",
        details: "3 séries de 8-10 reps",
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
        details: "3 séries de 12 reps",
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
        details: "4 séries de 8-12 reps",
        completed: false,
      },
      {
        name: "Remada Curvada (Barra ou Máquina)",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Crucifixo Inverso (Máquina ou Halteres)",
        details: "3 séries de 15 reps",
        completed: false,
      },
      {
        name: "Rosca Direta (Barra ou Halteres)",
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
        name: "Panturrilha em Pé",
        details: "4 séries de 15-20 reps",
        completed: false,
      },
    ],
  },
  4: {
    // Quinta-feira
    name: "Peito, Ombro e Tríceps",
    exercises: [
      {
        name: "Supino Inclinado com Halteres",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Supino Reto (Barra ou Halter)",
        details: "3 séries de 8-10 reps",
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
        details: "3 séries de 12 reps",
        completed: false,
      },
    ],
  },
  5: {
    // Sexta-feira
    name: "Costas, Bíceps e Abdômen",
    exercises: [
      {
        name: "Puxada Alta (Polia)",
        details: "4 séries de 8-12 reps",
        completed: false,
      },
      {
        name: "Remada Curvada (Barra ou Máquina)",
        details: "4 séries de 10-12 reps",
        completed: false,
      },
      {
        name: "Crucifixo Inverso (Máquina ou Halteres)",
        details: "3 séries de 15 reps",
        completed: false,
      },
      {
        name: "Rosca Direta (Barra ou Halteres)",
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

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initDailyWorkout();
  initWorkouts();
  initWater();
  initMeals();
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

  // Exibir dia atual
  const dayNames = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  document.getElementById("currentDay").textContent = dayNames[dayOfWeek];

  // Carregar treino do dia
  const todayPlan = workoutPlans[dayOfWeek];
  document.getElementById("workoutDayName").textContent = todayPlan.name;

  // Carregar estado dos exercícios
  if (!dailyWorkoutStatus[dateKey]) {
    dailyWorkoutStatus[dateKey] = {
      exercises: JSON.parse(JSON.stringify(todayPlan.exercises)),
      completed: false,
    };
    saveDailyWorkoutStatus();
  }

  renderDailyExercises();

  // Botão de editar treino
  document
    .getElementById("editWorkoutBtn")
    .addEventListener("click", openEditModal);

  // Botão de concluir treino
  document
    .getElementById("completeWorkoutBtn")
    .addEventListener("click", completeWorkout);

  // Modal
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

function toggleExercise(index) {
  const today = new Date();
  const dateKey = today.toISOString().split("T")[0];

  dailyWorkoutStatus[dateKey].exercises[index].completed =
    !dailyWorkoutStatus[dateKey].exercises[index].completed;

  saveDailyWorkoutStatus();
  renderDailyExercises();
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

  // Marcar como concluído
  dailyWorkoutStatus[dateKey].completed = true;

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

  showNotification("🎉 Treino concluído! Parabéns! 💪");

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
    <div class="edit-exercise-item" data-index="${index}">
      <div class="edit-exercise-header">
        <div class="edit-exercise-number">Exercício ${index + 1}</div>
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
  const year = 2025;
  const today = new Date();

  let calendarHTML = "";

  const monthNames = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  for (let month = 0; month < 12; month++) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    calendarHTML += `
      <div class="calendar-month">
        <div class="calendar-month-name">${monthNames[month]}</div>
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

      calendarHTML += `<div class="${classes}" title="${date.toLocaleDateString(
        "pt-BR"
      )}">${day}</div>`;
    }

    calendarHTML += `
        </div>
      </div>
    `;
  }

  calendar.innerHTML = calendarHTML;

  // Atualizar estatísticas
  const yearCount = completedWorkoutDates.filter((date) =>
    date.startsWith("2025")
  ).length;
  const currentMonth = today.getMonth() + 1;
  const monthPrefix = `2025-${String(currentMonth).padStart(2, "0")}`;
  const monthCount = completedWorkoutDates.filter((date) =>
    date.startsWith(monthPrefix)
  ).length;

  document.getElementById("yearWorkoutCount").textContent = yearCount;
  document.getElementById("monthWorkoutCount").textContent = monthCount;
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
  document.getElementById("waterPercent").textContent = Math.round(percentage);
}

function renderWaterRecords() {
  const list = document.getElementById("waterList");

  if (waterRecords.length === 0) {
    list.innerHTML =
      '<div class="empty-state">Nenhum registro de água ainda. Hidrate-se!</div>';
    return;
  }

  const today = new Date().toDateString();

  list.innerHTML = waterRecords
    .map((record) => {
      const recordDate = new Date(record.date);
      const isToday = recordDate.toDateString() === today;

      return `
            <div class="record-item">
                <div class="record-info">
                    <div class="record-title">💧 ${record.amount}ml ${
        isToday ? "(Hoje)" : ""
      }</div>
                    <div class="record-time">${formatDateTime(
                      record.date
                    )}</div>
                </div>
                <div class="record-actions">
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
  const form = document.getElementById("mealForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const meal = {
      id: Date.now(),
      type: document.getElementById("mealType").value,
      description: document.getElementById("mealDescription").value,
      calories: parseInt(document.getElementById("mealCalories").value) || 0,
      protein: parseInt(document.getElementById("mealProtein").value) || 0,
      date: new Date().toISOString(),
    };

    meals.unshift(meal);
    Storage.set("meals", meals);

    form.reset();
    renderMeals();
    updateStats();
    updateNutritionGoals();

    showNotification("Refeição registrada! 🍽️");
  });

  renderMeals();
  updateNutritionGoals();
}

function renderMeals() {
  const list = document.getElementById("mealList");
  const today = new Date().toDateString();

  if (meals.length === 0) {
    list.innerHTML =
      '<div class="empty-state">Nenhuma refeição registrada ainda. Comece agora!</div>';
    return;
  }

  list.innerHTML = meals
    .map((meal) => {
      const mealDate = new Date(meal.date);
      const isToday = mealDate.toDateString() === today;

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
                    </div>
                    <div class="record-time">${formatDateTime(meal.date)}</div>
                </div>
                <div class="record-actions">
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

  // Meta de calorias: 2600-2800 (usando 2700 como média)
  const caloriesTarget = 2700;
  const caloriesPercent = Math.min((totalCalories / caloriesTarget) * 100, 100);

  // Meta de proteína: 130-140g (usando 135 como média)
  const proteinTarget = 135;
  const proteinPercent = Math.min((totalProtein / proteinTarget) * 100, 100);

  // Atualizar displays
  document.getElementById("currentCalories").textContent = totalCalories;
  document.getElementById("caloriesProgress").style.width =
    caloriesPercent + "%";

  document.getElementById("currentProtein").textContent = totalProtein;
  document.getElementById("proteinProgress").style.width = proteinPercent + "%";

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
