const quizzes = {
  coffee: {
    title: "Какой ты вид кофе?",
    questions: [
      { q: "Как ты обычно просыпаешься?", options: [{t:"Резко, как от удара током", type:"espresso"}, {t:"Плавно, под приятную музыку", type:"latte"}, {t:"С трудом, нужно время на раскачку", type:"raf"}, {t:"По будильнику, сразу в режим работы", type:"americano"}, {t:"В зависимости от настроения", type:"mocha"}] },
      { q: "Твой стиль общения с друзьями?", options: [{t:"Коротко и по делу", type:"espresso"}, {t:"Душевные разговоры часами", type:"latte"}, {t:"Веселые шутки и приколы", type:"raf"}, {t:"Обсуждение важных новостей", type:"americano"}, {t:"Непредсказуемые темы", type:"mocha"}] },
      { q: "Что для тебя идеальный отдых?", options: [{t:"Активный спорт или прогулка", type:"espresso"}, {t:"Уютное кафе с книгой", type:"latte"}, {t:"Вечеринка с танцами", type:"raf"}, {t:"Планирование будущих проектов", type:"americano"}, {t:"Поездка в новое место", type:"mocha"}] },
      { q: "Как ты реагируешь на стресс?", options: [{t:"Действую быстро и решительно", type:"espresso"}, {t:"Ищу поддержки у близких", type:"latte"}, {t:"Пытаюсь разрядить обстановку юмором", type:"raf"}, {t:"Анализирую ситуацию холодно", type:"americano"}, {t:"Могу вспылить, но быстро отхожу", type:"mocha"}] },
      { q: "Твоя главная черта характера?", options: [{t:"Энергичность", type:"espresso"}, {t:"Заботливость", type:"latte"}, {t:"Креативность", type:"raf"}, {t:"Надежность", type:"americano"}, {t:"Яркость", type:"mocha"}] },
      { q: "Какой подарок ты бы хотел?", options: [{t:"Сертификат на экстрим", type:"espresso"}, {t:"Плед и набор чая", type:"latte"}, {t:"Билет на концерт", type:"raf"}, {t:"Полезный гаджет", type:"americano"}, {t:"Что-то необычное и редкое", type:"mocha"}] },
      { q: "Твое отношение к правилам?", options: [{t:"Правила нужны, чтобы их нарушать", type:"espresso"}, {t:"Главное — комфорт всех участников", type:"latte"}, {t:"Правила — это скучно", type:"raf"}, {t:"Порядок во всем", type:"americano"}, {t:"Зависит от ситуации", type:"mocha"}] }
    ],
    results: {
      espresso: { icon: "☕", title: "Ты — Эспрессо!", desc: "Концентрат энергии. Ты быстр, решителен и всегда знаешь, чего хочешь." },
      latte: { icon: "🥛", title: "Ты — Латте!", desc: "Мягкость и уют. Ты создаешь вокруг себя атмосферу тепла и спокойствия." },
      raf: { icon: "", title: "Ты — Раф!", desc: "Сладкий бунтарь. Ты любишь эксперименты и нестандартные решения." },
      americano: { icon: "⬛", title: "Ты — Американо!", desc: "Классика жанра. Ты надежен, прям и честен. На тебя можно положиться." },
      mocha: { icon: "🍫", title: "Ты — Мокко!", desc: "Яркая индивидуальность. Ты сочетаешь в себе несочетаемое и умеешь удивлять." }
    }
  },
  fantasy: {
    title: "Кто ты из мира фэнтези?",
    questions: [
      { q: "Твое любимое время суток?", options: [{t:"Раннее утро, когда мир еще спит", type:"elf"}, {t:"Полдень, время свершений", type:"warrior"}, {t:"Глубокая ночь, время тайн", type:"mage"}, {t:"Закат, время романтики", type:"bard"}, {t:"Любое, если есть приключения", type:"rogue"}] },
      { q: "Что для тебя важнее всего?", options: [{t:"Мудрость и знания", type:"mage"}, {t:"Честь и долг", type:"warrior"}, {t:"Свобода и природа", type:"elf"}, {t:"Слава и богатство", type:"rogue"}, {t:"Искусство и эмоции", type:"bard"}] },
      { q: "Как ты решаешь конфликты?", options: [{t:"Магией или хитростью", type:"mage"}, {t:"Силой оружия", type:"warrior"}, {t:"Дипломатией и словами", type:"elf"}, {t:"Ухожу в тень и действую скрытно", type:"rogue"}, {t:"Шуткой или песней", type:"bard"}] },
      { q: "Где бы ты построил свой дом?", options: [{t:"В высокой башне", type:"mage"}, {t:"В каменной крепости", type:"warrior"}, {t:"На дереве в лесу", type:"elf"}, {t:"В шумном портовом городе", type:"rogue"}, {t:"В дороге, в повозке", type:"bard"}] },
      { q: "Твое тотемное животное?", options: [{t:"Сова", type:"mage"}, {t:"Лев", type:"warrior"}, {t:"Олень", type:"elf"}, {t:"Ворон", type:"rogue"}, {t:"Лиса", type:"bard"}] },
      { q: "Какой артефакт ты бы выбрал?", options: [{t:"Книга бесконечных заклинаний", type:"mage"}, {t:"Неразрушимый щит", type:"warrior"}, {t:"Лук, который никогда не мажет", type:"elf"}, {t:"Кинжал невидимости", type:"rogue"}, {t:"Флейта, управляющая эмоциями", type:"bard"}] },
      { q: "Твоя слабость?", options: [{t:"Чрезмерная задумчивость", type:"mage"}, {t:"Упрямство", type:"warrior"}, {t:"Отстраненность от людей", type:"elf"}, {t:"Жадность", type:"rogue"}, {t:"Влюбчивость", type:"bard"}] }
    ],
    results: {
      elf: { icon: "‍♂️", title: "Ты — Высший Эльф", desc: "Мудрый и близкий к природе. Ты видишь красоту там, где другие её не замечают." },
      warrior: { icon: "️", title: "Ты — Благородный Воин", desc: "Защитник слабых. Твоя сила не только в мышцах, но и в несгибаемой воле." },
      mage: { icon: "🔮", title: "Ты — Верховный Маг", desc: "Хранитель древних знаний. Ты предпочитаешь решать проблемы умом, а не кулаками." },
      rogue: { icon: "🗡️", title: "Ты — Ловкий Плут", desc: "Мастер теней. Ты умеешь находить выход из любых, даже самых безвыходных ситуаций." },
      bard: { icon: "", title: "Ты — Странствующий Бард", desc: "Душа компании. Твои истории и песни способны вдохновить целые армии." }
    }
  },
  personality: {
    title: "Какой у тебя тип личности?",
    questions: [
      { q: "На вечеринке ты обычно...", options: [{t:"В центре внимания, знакомлюсь со всеми", type:"extrovert"}, {t:"Общаюсь только с близкими друзьями", type:"introvert"}, {t:"Наблюдаю за людьми со стороны", type:"analyst"}, {t:"Забочусь, чтобы всем было комфортно", type:"diplomat"}, {t:"Ищу, чем бы полезным заняться", type:"sentinel"}] },
      { q: "При принятии решений ты опираешься на...", options: [{t:"Интуицию и чувства", type:"diplomat"}, {t:"Логику и факты", type:"analyst"}, {t:"Опыт прошлого", type:"sentinel"}, {t:"Советы других людей", type:"extrovert"}, {t:"Свое внутреннее чутье", type:"introvert"}] },
      { q: "Как ты относишься к переменам?", options: [{t:"Обожаю, это драйв!", type:"extrovert"}, {t:"Предпочитаю стабильность", type:"sentinel"}, {t:"Интересно, если это ведет к развитию", type:"analyst"}, {t:"Боюсь, но принимаю", type:"introvert"}, {t:"Если перемены к лучшему — я за", type:"diplomat"}] },
      { q: "Твой рабочий стол...", options: [{t:"Творческий беспорядок", type:"extrovert"}, {t:"Идеальный порядок", type:"sentinel"}, {t:"Завален книгами и заметками", type:"analyst"}, {t:"Уютный, с фотографиями семьи", type:"diplomat"}, {t:"Минималистичный", type:"introvert"}] },
      { q: "В споре ты чаще...", options: [{t:"Доказываешь свою точку зрения громко", type:"extrovert"}, {t:"Ищешь компромисс", type:"diplomat"}, {t:"Приводишь железные аргументы", type:"analyst"}, {t:"Молча уходишь, если не согласен", type:"introvert"}, {t:"Ссылаешься на правила", type:"sentinel"}] },
      { q: "Что тебя больше всего мотивирует?", options: [{t:"Признание и успех", type:"extrovert"}, {t:"Гармония в отношениях", type:"diplomat"}, {t:"Понимание устройства мира", type:"analyst"}, {t:"Личный комфорт и покой", type:"introvert"}, {t:"Выполнение долга", type:"sentinel"}] },
      { q: "Твой идеальный отпуск?", options: [{t:"Шумный курорт с тусовками", type:"extrovert"}, {t:"Домашний отдых с семьей", type:"sentinel"}, {t:"Поездка в страну с древней историей", type:"analyst"}, {t:"Ретрит на природе в тишине", type:"introvert"}, {t:"Волонтерский тур", type:"diplomat"}] }
    ],
    results: {
      extrovert: { icon: "🌟", title: "Экстраверт-Лидер", desc: "Ты заряжаешься от людей. Энергия бьет ключом, и ты умеешь вести за собой." },
      introvert: { icon: "🌙", title: "Глубокий Интроверт", desc: "Твой внутренний мир богат и интересен. Ты ценишь глубину, а не ширину общения." },
      analyst: { icon: "", title: "Аналитик-Стратег", desc: "Ты видишь систему там, где другие видят хаос. Логика — твое главное оружие." },
      diplomat: { icon: "🤝", title: "Дипломат-Медиатор", desc: "Ты чувствуешь эмоции других лучше, чем свои. Твоя сила — в эмпатии." },
      sentinel: { icon: "🛡️", title: "Хранитель-Опора", desc: "Надежность и ответственность. Ты тот человек, на котором держится весь мир." }
    }
  },
  movie: {
    title: "Кто ты из легендарных фильмов?",
    questions: [
      { q: "Если бы началась зомби-апокалипсис, ты бы...", options: [{t:"Стал лидером группы выживших", type:"leader"}, {t:"Изобрел вакцину в лаборатории", type:"genius"}, {t:"Скрылся в бункере с запасами еды", type:"survivor"}, {t:"Пытался спасти всех, даже рискуя собой", type:"hero"}, {t:"Снимал бы все это на камеру", type:"observer"}] },
      { q: "Твой любимый жанр кино?", options: [{t:"Боевик", type:"hero"}, {t:"Научная фантастика", type:"genius"}, {t:"Триллер/Детектив", type:"survivor"}, {t:"Драма", type:"leader"}, {t:"Комедия", type:"observer"}] },
      { q: "Какую суперспособность ты бы выбрал?", options: [{t:"Суперсила", type:"hero"}, {t:"Чтение мыслей", type:"genius"}, {t:"Невидимость", type:"survivor"}, {t:"Управление людьми", type:"leader"}, {t:"Путешествие во времени", type:"observer"}] },
      { q: "Твоя роль в команде?", options: [{t:"Капитан", type:"leader"}, {t:"Мозговой центр", type:"genius"}, {t:"Разведчик", type:"survivor"}, {t:"Защитник", type:"hero"}, {t:"Летописец", type:"observer"}] },
      { q: "Что для тебя значит победа?", options: [{t:"Когда все живы и здоровы", type:"hero"}, {t:"Когда задача выполнена идеально", type:"genius"}, {t:"Когда я остался в выигрыше", type:"survivor"}, {t:"Когда команда достигла цели", type:"leader"}, {t:"Когда было интересно", type:"observer"}] },
      { q: "Твой главный враг?", options: [{t:"Несправедливость", type:"hero"}, {t:"Глупость", type:"genius"}, {t:"Неопределенность", type:"survivor"}, {t:"Хаос", type:"leader"}, {t:"Скука", type:"observer"}] },
      { q: "Какой финал фильма тебе ближе?", options: [{t:"Героическая жертва", type:"hero"}, {t:"Научное открытие", type:"genius"}, {t:"Неожиданный поворот", type:"survivor"}, {t:"Воссоединение команды", type:"leader"}, {t:"Открытый финал", type:"observer"}] }
    ],
    results: {
      hero: { icon: "🦸", title: "Супергерой", desc: "Как Человек-паук или Супермен. Ты готов прийти на помощь в любую секунду." },
      genius: { icon: "👨‍", title: "Гений-Изобретатель", desc: "Как Тони Старк или Шерлок. Твой интеллект спасает мир чаще, чем кулаки." },
      survivor: { icon: "🧟", title: "Выживший", desc: "Как герои 'Ходячих мертвецов'. Ты адаптируешься к любым условиям." },
      leader: { icon: "🎬", title: "Лидер-Режиссер", desc: "Как Нео или Дамблдор. Ты видишь картину целиком и ведешь других." },
      observer: { icon: "📸", title: "Наблюдатель", desc: "Как Форрест Гамп. Ты видишь суть вещей и остаешься самим собой." }
    }
  },
  relationship: {
    title: "Какой ты в отношениях?",
    questions: [
      { q: "Как ты проявляешь любовь?", options: [{t:"Подарками и сюрпризами", type:"giver"}, {t:"Заботой и помощью в делах", type:"caretaker"}, {t:"Словами поддержки и комплиментами", type:"romantic"}, {t:"Временем, проведенным вместе", type:"partner"}, {t:"Физической близостью и объятиями", type:"passionate"}] },
      { q: "Что для тебя важнее всего в партнере?", options: [{t:"Щедрость", type:"giver"}, {t:"Надежность", type:"caretaker"}, {t:"Романтичность", type:"romantic"}, {t:"Общие интересы", type:"partner"}, {t:"Страсть", type:"passionate"}] },
      { q: "Как ты ведешь себя в ссоре?", options: [{t:"Пытаюсь загладить вину подарком", type:"giver"}, {t:"Ищу практическое решение проблемы", type:"caretaker"}, {t:"Пишу длинные сообщения о чувствах", type:"romantic"}, {t:"Предлагаю спокойно обсудить", type:"partner"}, {t:"Могу горячо вспылить, но быстро прощаю", type:"passionate"}] },
      { q: "Идеальное свидание — это...", options: [{t:"Поход в дорогой ресторан", type:"giver"}, {t:"Совместная готовка ужина", type:"caretaker"}, {t:"Прогулка под луной", type:"romantic"}, {t:"Поход в кино или на выставку", type:"partner"}, {t:"Танцы до утра", type:"passionate"}] },
      { q: "Твой язык любви?", options: [{t:"Получение подарков", type:"giver"}, {t:"Акты служения", type:"caretaker"}, {t:"Слова поощрения", type:"romantic"}, {t:"Качественное время", type:"partner"}, {t:"Тактильность", type:"passionate"}] },
      { q: "Что может разрушить твои отношения?", options: [{t:"Скупость партнера", type:"giver"}, {t:"Безответственность", type:"caretaker"}, {t:"Равнодушие", type:"romantic"}, {t:"Отсутствие общих тем", type:"partner"}, {t:"Охлаждение чувств", type:"passionate"}] },
      { q: "Как ты воспринимаешь ревность?", options: [{t:"Как знак того, что мной дорожат", type:"giver"}, {t:"Как недоверие, которое нужно заслужить", type:"caretaker"}, {t:"Как часть романтической драмы", type:"romantic"}, {t:"Как проблему, которую надо обсудить", type:"partner"}, {t:"Как искру, разжигающую страсть", type:"passionate"}] }
    ],
    results: {
      giver: { icon: "🎁", title: "Щедрый Даритель", desc: "Ты выражаешь любовь через материальные знаки внимания. Тебе важно баловать своего человека." },
      caretaker: { icon: "🏠", title: "Заботливый Хранитель", desc: "Для тебя любовь — это глагол. Ты показываешь чувства делами: вкусным ужином и помощью." },
      romantic: { icon: "💌", title: "Вечный Романтик", desc: "Ты живешь эмоциями и красивыми жестами. Тебе нужны признания в любви." },
      partner: { icon: "🤝", title: "Надежный Партнер", desc: "Ты ищешь друга и соратника. Для тебя важны общие цели, уважение и диалог." },
      passionate: { icon: "🔥", title: "Страстный Любовник", desc: "Ты живешь чувствами на полную катушку. Тебе важна химия и эмоциональный накал." }
    }
  }
};

let currentQuiz = null;
let currentQ = 0;
let scores = {};

function initQuiz(quizId) {
  currentQuiz = quizzes[quizId];
  if (!currentQuiz) return;

  scores = {};
  Object.keys(currentQuiz.results).forEach(key => scores[key] = 0);
  
  currentQ = 0;
  loadQuestion();
}

function loadQuestion() {
  const q = currentQuiz.questions[currentQ];
  document.getElementById('question-text').textContent = q.q;
  const container = document.getElementById('options-container');
  container.innerHTML = '';
  
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.t;
    btn.onclick = () => selectOption(opt.type);
    container.appendChild(btn);
  });

  const progress = ((currentQ) / currentQuiz.questions.length) * 100;
  document.getElementById('progress').style.width = `${progress}%`;
}

function selectOption(type) {
  scores[type]++;
  currentQ++;
  
  if (currentQ < currentQuiz.questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const res = currentQuiz.results[winner];

  document.getElementById('result-icon').textContent = res.icon;
  document.getElementById('result-title').textContent = res.title;
  document.getElementById('result-desc').textContent = res.desc;
  document.getElementById('progress').style.width = '100%';

  document.getElementById('question-block').classList.add('hidden');
  document.getElementById('result-block').classList.remove('hidden');

  //  ОТПРАВКА ЦЕЛИ В ЯНДЕКС.МЕТРИКУ (раскомментируй, когда добавишь код метрики)
  // if (typeof yaCounter !== 'undefined') {
  //   yaCounter.reachGoal('quiz_complete');
  // }
}

// 🔗 Функции шеринга
function share(platform) {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.getElementById('result-title').textContent);
  const text = encodeURIComponent(`Я прошел тест "${currentQuiz.title}" и мой результат: ${title}. Узнай и ты! `);
  
  let link = '';
  if (platform === 'vk') link = `https://vk.com/share.php?url=${url}&title=${title}&comment=${text}`;
  if (platform === 'tg') link = `https://t.me/share/url?url=${url}&text=${text}`;
  
  window.open(link, '_blank', 'width=600,height=400');
}

function copyLink() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    const btn = document.querySelector('.copy');
    const oldText = btn.textContent;
    btn.textContent = '✅ Ссылка скопирована!';
    setTimeout(() => btn.textContent = oldText, 2000);
  });
}