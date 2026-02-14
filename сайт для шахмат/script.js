const DEBUTS_DATABASE = {
    italian: {
        name: "Итальянская партия",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bc4"],
        type: "Открытый дебют",
        difficulty: "Средняя",
        popularity: "Очень высокая",
        description: "Один из старейших и самых популярных открытых дебютов.",
        history: "Разработана итальянскими шахматистами в XVI веке.",
        ideas: `<ul><li>Быстрое развитие фигур</li><li>Атака на f7</li></ul>`,
        variations: `<div class="variation"><strong>Гамбит Эванса:</strong> 4.b4</div>`,
        famousGames: `<div class="game"><strong>Андерсен – Дюфрен, 1852</strong></div>`,
        tips: `<ul><li>Сначала развитие, потом атака</li></ul>`,
        videoId: "18441928943564092755",
        related: ["ruy_lopez", "scotch"]
    },

    sicilian: {
        name: "Сицилианская защита",
        moves: ["e4", "c5"],
        type: "Полуоткрытый дебют",
        difficulty: "Высокая",
        popularity: "Самая популярная",
        description: "Агрессивный ответ на 1.e4 с богатой теорией.",
        history: "Популярна с XX века.",
        ideas: `<ul><li>Контригра</li><li>Асимметрия</li></ul>`,
        variations: `<div class="variation"><strong>Дракон:</strong> ...g6</div>`,
        famousGames: `<div class="game"><strong>Фишер – Спасский</strong></div>`,
        tips: `<ul><li>Изучайте одну систему глубоко</li></ul>`,
        videoId: "18441928943564092756",
        related: ["caro_kann", "french"]
    },

    queens_gambit: {
        name: "Ферзевый гамбит",
        moves: ["d4", "d5", "c4"],
        type: "Закрытый дебют",
        difficulty: "Средняя",
        popularity: "Очень высокая",
        description: "Классика с борьбой за центр.",
        history: "Известен с XV века.",
        ideas: `<ul><li>Давление в центре</li></ul>`,
        variations: `<div class="variation"><strong>Принятый:</strong> ...dxc4</div>`,
        famousGames: `<div class="game"><strong>Капабланка – Алехин</strong></div>`,
        tips: `<ul><li>Не торопитесь с атакой</li></ul>`,
        videoId: "18441928943564092757",
        related: ["nimzo_indian"]
    },

    caro_kann: {
        name: "Защита Каро-Канн",
        moves: ["e4", "c6"],
        type: "Полуоткрытый дебют",
        difficulty: "Средняя",
        popularity: "Высокая",
        description: "Надёжная защита против 1.e4.",
        history: "XIX век.",
        ideas: `<ul><li>Прочная пешечная структура</li></ul>`,
        variations: `<div class="variation"><strong>Классика:</strong> d5</div>`,
        famousGames: `<div class="game"><strong>Карлсен – Непомнящий</strong></div>`,
        tips: `<ul><li>Развивайте слона</li></ul>`,
        videoId: "18441928943564092758",
        related: ["sicilian", "french"]
    },

    scandinavian: {
        name: "Скандинавская защита",
        moves: ["e4", "d5"],
        type: "Полуоткрытый дебют",
        difficulty: "Лёгкая",
        popularity: "Средняя",
        description: "Прямолинейный и простой дебют.",
        history: "XIX век.",
        ideas: `<ul><li>Раннее вскрытие центра</li></ul>`,
        variations: `<div class="variation"><strong>Главная:</strong> exd5</div>`,
        famousGames: `<div class="game"><strong>Каспаров – Топалов</strong></div>`,
        tips: `<ul><li>Не бойтесь размена дам</li></ul>`,
        videoId: "18441928943564092759",
        related: ["caro_kann"]
    },

    english: {
        name: "Английское начало",
        moves: ["c4"],
        type: "Фланговый дебют",
        difficulty: "Средняя",
        popularity: "Высокая",
        description: "Гибкое и стратегическое начало.",
        history: "XIX век.",
        ideas: `<ul><li>Контроль центра с фланга</li></ul>`,
        variations: `<div class="variation"><strong>Симметрия:</strong> ...c5</div>`,
        famousGames: `<div class="game"><strong>Каспаров – Карпов</strong></div>`,
        tips: `<ul><li>Играйте гибко</li></ul>`,
        videoId: "18441928943564092760",
        related: ["queens_gambit"]
    },

    birds: {
        name: "Дебют Берда",
        moves: ["f4"],
        type: "Фланговый дебют",
        difficulty: "Средняя",
        popularity: "Средняя",
        description: "Редкий и агрессивный дебют.",
        history: "Генри Бёрд.",
        ideas: `<ul><li>Атака короля</li></ul>`,
        variations: `<div class="variation"><strong>Противостояние:</strong> ...d5</div>`,
        famousGames: `<div class="game"><strong>Бёрд – Гунсберг</strong></div>`,
        tips: `<ul><li>Слон на g2</li></ul>`,
        videoId: "18441928943564092761",
        related: ["dutch"]
    },

    ruy_lopez: {
        name: "Испанская партия",
        moves: ["e4", "e5", "Nf3", "Nc6", "Bb5"],
        type: "Открытый дебют",
        difficulty: "Высокая",
        popularity: "Очень высокая",
        description: "Один из самых глубоких дебютов.",
        history: "1561 год.",
        ideas: `<ul><li>Давление на c6</li></ul>`,
        variations: `<div class="variation"><strong>Закрытая:</strong> ...a6</div>`,
        famousGames: `<div class="game"><strong>Фишер – Спасский</strong></div>`,
        tips: `<ul><li>Терпение</li></ul>`,
        videoId: "18441928943564092762",
        related: ["italian"]
    },

    french: {
        name: "Французская защита",
        moves: ["e4", "e6"],
        type: "Полуоткрытый дебют",
        difficulty: "Средняя",
        popularity: "Высокая",
        description: "Закрытый центр и контратака.",
        history: "XIX век.",
        ideas: `<ul><li>Подрыв d4</li></ul>`,
        variations: `<div class="variation"><strong>Винья:</strong> Nc3</div>`,
        famousGames: `<div class="game"><strong>Корчной – Карпов</strong></div>`,
        tips: `<ul><li>Активизируйте фигуры</li></ul>`,
        videoId: "18441928943564092763",
        related: ["caro_kann"]
    },


    nimzo_indian: {
        name: "Защита Нимцовича",
        moves: ["d4", "Nf6", "c4", "e6", "Nc3", "Bb4"],
        type: "Закрытый дебют",
        difficulty: "Высокая",
        popularity: "Высокая",
        description: "Один из самых глубоких дебютов.",
        history: "Разработана Ароном Нимцовичем в 1920-х годах.",
        ideas: `<ul><li>Давление на центр фигурами</li><li>Связка коня c3</li><li>Препятствие e4</li></ul>`,
        variations: `<div class="variation"><strong>Классический:</strong> 4.e3</div><div class="variation"><strong>Земиша:</strong> 4.a3</div>`,
        famousGames: `<div class="game"><strong>Алехин – Нимцович, 1930</strong></div><div class="game"><strong>Каспаров – Карпов, 1985</strong></div>`,
        tips: `<ul><li>Не меняйте слона без причины</li><li>Ищите контригру на ферзевом фланге</li></ul>`,
        videoId: "18441928943564092762",
        related: ["queens_gambit", "bogo_indian"]
    },

    dutch: {
        name: "Голландская защита",
        moves: ["d4", "f5"],
        type: "Полуоткрытый дебют",
        difficulty: "Высокая",
        popularity: "Средняя",
        description: "Агрессивный дебют с атакой на королевском фланге.",
        history: "Разработана в XIX веке.",
        ideas: `<ul><li>Атака короля</li><li>Контроль e4</li></ul>`,
        variations: `<div class="variation"><strong>Ленинградская:</strong> ...g6</div><div class="variation"><strong>Каменная стена:</strong> ...d5</div>`,
        famousGames: `<div class="game"><strong>Ботвинник – Керес, 1948</strong></div><div class="game"><strong>Корчной – Карпов, 1978</strong></div>`,
        tips: `<ul><li>Следите за ослабленным королём</li><li>Атакуйте на королевском фланге</li></ul>`,
        videoId: "18441928943564092764",
        related: ["birds"]
    },
    alekhine: {
        name: "Защита Алехина",
        moves: ["1.e4", "Nf6"],
        type: "Полуоткрытый дебют",
        difficulty: "Высокая",
        popularity: "Средняя",
        description: "Гипермодернистский дебют: черные позволяют белым занять центр пешками, чтобы позже их атаковать.",
        history: "Введен в широкую практику Александром Алехиным в 1921 году.",
        ideas: "<ul><li>Провокация пешечного наступления белых</li><li>Подрыв центра ходами d6 и c5</li><li>Фигурное давление на пешку e4</li></ul>",
        variations: "<div class='variation'><strong>Разменный вариант:</strong> 3.d4 d6 4.c4</div><div class='variation'><strong>Атака четырех пешек:</strong> 3.d4 d6 4.c4 Nb6 5.f4</div>",
        famousGames: "<div class='game'><strong>Спасский – Фишер, 1972</strong></div><div class='game'><strong>Алехин – Микенас, 1937</strong></div>",
        tips: "<ul><li>Не бойтесь отступать конем</li><li>Своевременно подрывайте центр</li><li>Остерегайтесь нехватки пространства</li></ul>",
        videoId: "18441928943564092764",
        related: ["kings-pawn", "scandinavian"]
    },
    kings_indian: {
        name: "Староиндийская защита",
        moves: ["1.d4", "Nf6", "2.c4", "g6", "3.Nc3", "Bg7"],
        type: "Закрытый дебют",
        difficulty: "Очень высокая",
        popularity: "Высокая",
        description: "Гипермодернистская защита, где черные позволяют белым захватить центр, чтобы позже нанести сокрушительный удар.",
        history: "Стала популярной в 1940-х годах благодаря усилиям советских мастеров: Бронштейна и Болеславского.",
        ideas: "<ul><li>Атака на королевском фланге при закрытом центре</li><li>Фианкетто слона на g7</li><li>Подрыв центра ходами e5 или c5</li></ul>",
        variations: "<div class='variation'><strong>Классический вариант:</strong> 4.e4 d6 5.Nf3 O-O 6.Be2 e5</div><div class='variation'><strong>Вариант Земиша:</strong> 4.e4 d6 5.f3</div>",
        famousGames: "<div class='game'><strong>Глигорич – Фишер, 1970</strong></div><div class='game'><strong>Каспаров – Пикет, 1989</strong></div>",
        tips: "<ul><li>Не бойтесь отдавать пространство в центре</li><li>Следите за мощью своего «староиндийского» слона g7</li></ul>",
        related: ["nimzo_indian"]
    },

    grunfeld: {
        name: "Защита Грюнфельда",
        moves: ["1.d4", "Nf6", "2.c4", "g6", "3.Nc3", "d5"],
        type: "Закрытый дебют",
        difficulty: "Высокая",
        popularity: "Высокая",
        description: "Активный и конкретный дебют, направленный на немедленный подрыв белого центра.",
        history: "Впервые применена Эрнстом Грюнфельдом в 1922 году против Альберта Беккера.",
        ideas: "<ul><li>Контратака центра d4 фигурами</li><li>Использование давления по большой диагонали</li><li>Жертва пространства ради активности</li></ul>",
        variations: "<div class='variation'><strong>Разменная система:</strong> 4.cxd5 Nxd5 5.e4</div><div class='variation'><strong>Система с Bf4:</strong> 4.Nf3 Bg7 5.Bf4</div>",
        famousGames: "<div class='game'><strong>Дональд Бирн – Роберт Фишер, 1956 («Партия века»)</strong></div>",
        tips: "<ul><li>Тщательно учите форсированные варианты</li><li>Не позволяйте белым укрепить центр безнаказанно</li></ul>",
        related: ["kings_indian"]
    },

    vienna: {
        name: "Венская партия",
        moves: ["1.e4", "e5", "2.Nc3"],
        type: "Открытый дебют",
        difficulty: "Средняя",
        popularity: "Средняя",
        description: "Крепкий дебют, который часто переходит в агрессивные атаки, наподобие Королевского гамбита.",
        history: "Разработана в середине XIX века Карлом Хампе в венских кофейнях.",
        ideas: "<ul><li>Развитие коня на c3 перед f4</li><li>Контроль центральных полей</li><li>Возможность быстрой атаки на f7</li></ul>",
        variations: "<div class='variation'><strong>Гамбит Хампе-Муцио:</strong> 2.Nc3 Nc6 3.f4 exf4 4.Nf3 g5 5.Bc4 g4 6.O-O</div>",
        famousGames: "<div class='game'><strong>Стейниц – Блэкберн, 1876</strong></div>",
        tips: "<ul><li>Используйте эффект неожиданности (редкий ход на топ-уровне)</li><li>Будьте готовы к переходу в атаку</li></ul>",
        related: ["italian", "ruy_lopez"]
    },

    scotch: {
        name: "Шотландская партия",
        moves: ["1.e4", "e5", "2.Nf3", "Nc6", "3.d4"],
        type: "Открытый дебют",
        difficulty: "Средняя",
        popularity: "Высокая",
        description: "Классический дебют, в котором белые немедленно захватывают центр, вынуждая черных к конкретным решениям.",
        history: "Получил название после матча по переписке Эдинбург — Лондон в 1824 году. Огромный вклад в теорию внес Гарри Каспаров.",
        ideas: "<ul><li>Немедленный захват центра пешкой d4</li><li>Освобождение линий для слонов</li><li>Создание открытой, динамичной позиции</li></ul>",
        variations: "<div class='variation'><strong>Классический вариант:</strong> 3...exd4 4.Nxd4 Bc5</div><div class='variation'><strong>Вариант Шмидта:</strong> 3...exd4 4.Nxd4 Nf6</div><div class='variation'><strong>Шотландский гамбит:</strong> 3...exd4 4.Bc4</div>",
        famousGames: "<div class='game'><strong>Каспаров – Карпов, 1990 (Матч на первенство мира)</strong></div>",
        tips: "<ul><li>Белым важно сохранять инициативу, так как центр вскрыт</li><li>Черным нужно быстро развивать фигуры, чтобы не попасть под атаку</li></ul>",
        related: ["italian", "ruy_lopez"]
    }


}




let currentGame = null;
let currentBoard = null;
let currentMoveIndex = 0;
let currentMoves = [];
let isTrainingMode = false;
let currentDebutId = null;

document.addEventListener('DOMContentLoaded', function () {
    initEventListeners();
});

function initEventListeners() {
    document.querySelectorAll('.debute-card').forEach(card => {
        card.addEventListener('click', function () {
            const debutId = this.getAttribute('data-debute-id');
            loadDebut(debutId);
        });
    });


    document.getElementById('backToMapBtn').addEventListener('click', showDebutMap);


    document.getElementById('prevMoveBtn').addEventListener('click', prevMove);
    document.getElementById('nextMoveBtn').addEventListener('click', nextMove);
    document.getElementById('resetBtn').addEventListener('click', resetBoard);

    document.getElementById('trainBtn').addEventListener('click', startTraining);
    document.getElementById('stopTrainBtn').addEventListener('click', stopTraining);
}

function loadDebut(debutId) {
    currentDebutId = debutId;
    const debut = DEBUTS_DATABASE[debutId];

    if (!debut) {
        alert('Дебют не найден');
        return;
    }
    document.getElementById('studyTitle').textContent = `Изучение: ${debut.name}`;

    document.getElementById('debuteDescription').textContent = debut.description;
    document.getElementById('debuteHistory').textContent = debut.history;
    document.getElementById('debuteType').textContent = debut.type;
    document.getElementById('debuteDifficulty').textContent = debut.difficulty;
    document.getElementById('debutePopularity').textContent = debut.popularity;

    const movesDisplay = document.getElementById('debuteMoves');
    movesDisplay.textContent = debut.moves.join(' ');
    movesDisplay.innerHTML = formatMoves(debut.moves);

    document.getElementById('debuteIdeas').innerHTML = debut.ideas;
    document.getElementById('debuteVariations').innerHTML = debut.variations;
    document.getElementById('famousGames').innerHTML = debut.famousGames;
    document.getElementById('debuteTips').innerHTML = debut.tips;


    const videoContainer = document.getElementById('videoContainer');
    if (debut.videoId) {
        videoContainer.innerHTML = `
                    <div class="video-wrapper">
<iframe
  src="https://rutube.ru/play/embed/9e74db8e65c841cfe20790e945b2faa8"
  width="100%"
  height="315"
  frameborder="0"
  allowfullscreen>
</iframe>
  
                    </div>
                `;
    } else {
        videoContainer.innerHTML = '<p>Видеоурок скоро будет добавлен</p>';
    }


    document.getElementById('debuteMap').style.display = 'none';
    document.getElementById('studyArea').style.display = 'block';


    initChessBoard(debut.moves);


    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function formatMoves(moves) {
    let result = '';
    let moveNumber = 1;

    for (let i = 0; i < moves.length; i += 2) {
        result += `${moveNumber}. ${moves[i]}`;
        if (moves[i + 1]) {
            result += ` ${moves[i + 1]}`;
        }
        result += '<br>';
        moveNumber++;
    }

    return result;
}

function initChessBoard(moves) {

    if (currentBoard) {
        currentBoard.destroy();
    }


    currentBoard = Chessboard2('board', {
        position: 'start',
        draggable: true,
        moveSpeed: 'slow',
        sparePieces: false,
        onDrop: onDrop,
        orientation: 'white'
    });


    currentGame = new Chess();
    currentMoves = moves;
    currentMoveIndex = 0;


    document.getElementById('currentMove').textContent = '0';
    document.getElementById('totalMoves').textContent = moves.length;
}

function onDrop(source, target) {

    if (isTrainingMode) {
        const correctMove = currentMoves[currentMoveIndex];
        const move = currentGame.move({
            from: source,
            to: target,
            promotion: 'q'
        });

        if (move === null) return 'snapback';


        const moveNotation = move.san;
        const expectedMove = correctMove;

        if (moveNotation === expectedMove || move.from + move.to === expectedMove) {

            currentMoveIndex++;
            document.getElementById('currentMove').textContent = currentMoveIndex;

            if (currentMoveIndex >= currentMoves.length) {
                alert('🎉 Отлично! Вы правильно воспроизвели все ходы дебюта!');
                stopTraining();
            }
        } else {

            alert(`Неправильно! Ожидался ход: ${expectedMove}`);
            currentGame.undo();
            currentBoard.position(currentGame.fen());
            return 'snapback';
        }
    } else {

        const move = currentGame.move({
            from: source,
            to: target,
            promotion: 'q'
        });

        if (move === null) return 'snapback';
    }

    currentBoard.position(currentGame.fen());
    return true;
}

function prevMove() {
    if (currentMoveIndex > 0) {
        currentGame.undo();
        currentMoveIndex--;
        currentBoard.position(currentGame.fen());
        document.getElementById('currentMove').textContent = currentMoveIndex;
    }
}

function nextMove() {
    if (currentMoveIndex < currentMoves.length) {
        const move = currentMoves[currentMoveIndex];
        currentGame.move(move);
        currentMoveIndex++;
        currentBoard.position(currentGame.fen());
        document.getElementById('currentMove').textContent = currentMoveIndex;
    }
}

function resetBoard() {
    currentGame.reset();
    currentMoveIndex = 0;
    currentBoard.position('start');
    document.getElementById('currentMove').textContent = '0';

    if (isTrainingMode) {
        stopTraining();
    }
}

function startTraining() {
    isTrainingMode = true;
    document.getElementById('trainingTip').style.display = 'block';
    document.getElementById('trainBtn').style.display = 'none';
    resetBoard();


    alert('Тренировка началась! Попробуйте воспроизвести ходы дебюта. При ошибке вы получите подсказку.');
}

function stopTraining() {
    isTrainingMode = false;
    document.getElementById('trainingTip').style.display = 'none';
    document.getElementById('trainBtn').style.display = 'block';
}

function showDebutMap() {
    document.getElementById('studyArea').style.display = 'none';
    document.getElementById('debuteMap').style.display = 'block';


    if (isTrainingMode) {
        stopTraining();
    }
}