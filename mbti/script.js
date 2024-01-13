document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const questionScreen = document.getElementById('question-screen');
    const startScreen = document.getElementById('start-screen');
    const resultScreen = document.getElementById('result-screen');
    const questionTitle = document.getElementById('question-title');
    const choicesContainer = document.getElementById('choices-container');
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    const shareBtn = document.getElementById('share-btn');
    const restartBtn = document.getElementById('restart-btn');

    // MBTI 테스트 데이터 (질문, 선택지, 결과 유형)
    let questions = [
        {
            title: "친구가 파티에 초대했을 때 당신의 반응은?",
            choices: [
                { text: "기다렸던 순간! 바로 준비를 시작한다.", score: { E: 2 } },
                { text: "일정을 체크하고 조용히 계획을 세운다.", score: { I: 2 } },
                { text: "먼저 누가 오는지 알아보고 결정한다.", score: { E: 1, I: 1 } },
                { text: "가급적 피하고 싶다. 집이 최고!", score: { I: 2 } }
            ]
        },
        {
            title: "새로운 취미를 시작할 때 당신의 접근 방식은?",
            choices: [
                { text: "바로 시작! 일단 해보는 거지.", score: { P: 2 } },
                { text: "관련 책이나 자료부터 찾아본다.", score: { J: 2 } },
                { text: "친구나 지인의 추천을 받는다.", score: { F: 2 } },
                { text: "별로 새로운 취미에 관심이 없다.", score: { I: 2 } }
            ]
        },
        {
            title: "주말에 가장 하고 싶은 활동은?",
            choices: [
                { text: "친구들과 야외 활동!", score: { E: 2 } },
                { text: "조용한 카페에서 책 읽기.", score: { I: 2 } },
                { text: "영화나 드라마 시청.", score: { N: 2 } },
                { text: "그냥 푹 쉬고 싶다.", score: { P: 2 } }
            ]
        },
        {
            title: "문제에 부딪혔을 때 당신의 대처 방법은?",
            choices: [
                { text: "즉흥적으로 해결한다.", score: { P: 2 } },
                { text: "체계적으로 단계를 밟아간다.", score: { J: 2 } },
                { text: "다른 사람들의 조언을 구한다.", score: { F: 2 } },
                { text: "가능하면 피하려고 한다.", score: { I: 2 } }
            ]
        },
        {
            title: "친구가 위로가 필요할 때 당신의 반응은?",
            choices: [
                { text: "활기찬 말로 기분을 전환시켜 준다.", score: { E: 2 } },
                { text: "조용히 듣고 공감해 준다.", score: { F: 2 } },
                { text: "실질적인 해결책을 제시한다.", score: { T: 2 } },
                { text: "어떻게 위로해야 할지 모르겠다.", score: { I: 2 } }
            ]
        },
        {
            title: "새로운 아이디어가 떠올랐을 때 당신의 행동은?",
            choices: [
                { text: "바로 실천에 옮긴다.", score: { E: 2 } },
                { text: "장단점을 면밀히 분석한다.", score: { J: 2 } },
                { text: "주변 사람들과 의견을 나눈다.", score: { F: 2 } },
                { text: "아이디어를 고민만 하고 끝낸다.", score: { I: 2 } }
            ]
        },
        {
            title: "휴가 계획을 세울 때 당신의 스타일은?",
            choices: [
                { text: "계획 없이 자유롭게!", score: { P: 2 } },
                { text: "모든 것을 철저히 계획한다.", score: { J: 2 } },
                { text: "다른 사람의 계획에 맞춘다.", score: { F: 2 } },
                { text: "가급적 집에서 휴식을 취한다.", score: { I: 2 } }
            ]
        },
        {
            title: "새로운 사람을 만났을 때 당신의 태도는?",
            choices: [
                { text: "적극적으로 다가가 대화를 시작한다.", score: { E: 2 } },
                { text: "조용히 관찰하며 상황을 파악한다.", score: { I: 2 } },
                { text: "상대방이 먼저 말을 걸기를 기다린다.", score: { I: 1, E: 1 } },
                { text: "새로운 사람 만나는 것을 꺼린다.", score: { I: 2 } }
            ]
        },
        {
            title: "중요한 결정을 내려야 할 때 당신은?",
            choices: [
                { text: "직감을 따른다.", score: { P: 2 } },
                { text: "데이터와 사실에 기반하여 결정한다.", score: { J: 2 } },
                { text: "주변 사람들의 의견을 참고한다.", score: { F: 2 } },
                { text: "결정하기 어려워 미루는 편이다.", score: { I: 2 } }
            ]
        },
        {
            title: "주로 어떤 유형의 책을 선호하나요?",
            choices: [
                { text: "모험과 판타지가 가득한 소설.", score: { N: 2 } },
                { text: "사실과 정보를 담은 교양서적.", score: { S: 2 } },
                { text: "사람들의 이야기가 담긴 자서전.", score: { F: 2 } },
                { text: "가볍게 읽을 수 있는 잡지나 만화.", score: { P: 2 } }
            ]
        }
    ];
    let currentQuestionIndex = 0;
    let score = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

    startBtn.addEventListener('click', function() {
        startScreen.classList.add('hidden');
        questionScreen.classList.remove('hidden');
        showQuestion();
    });

    function showQuestion() {
        let question = questions[currentQuestionIndex];
        questionTitle.textContent = question.title;
        choicesContainer.innerHTML = '';
        question.choices.forEach(function(choice, index) {
            let button = document.createElement('button');
            button.textContent = choice.text;
            button.addEventListener('click', function() {
                updateScore(choice.score);
                if (currentQuestionIndex < questions.length - 1) {
                    currentQuestionIndex++;
                    showQuestion();
                } else {
                    showResult();
                }
            });
            choicesContainer.appendChild(button);
        });
    }

    function updateScore(choiceScore) {
        for (let dimension in choiceScore) {
            score[dimension] += choiceScore[dimension];
        }
    }

    function calculateResult() {
        let result = '';
        result += score['E'] > score['I'] ? 'E' : 'I';
        result += score['N'] > score['S'] ? 'N' : 'S';
        result += score['T'] > score['F'] ? 'T' : 'F';
        result += score['J'] > score['P'] ? 'J' : 'P';
        return result;
    }

    function showResult() {
        let mbtiType = calculateResult();
        questionScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        resultTitle.textContent = `당신의 MBTI 유형: ${mbtiType}`;
        resultDescription.textContent = mbtiDescriptions[mbtiType]; // mbtiDescriptions는 각 MBTI 유형에 대한 설명을 담은 객체
    }

    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: 'MBTI 테스트 결과',
                text: `내 MBTI 유형: ${resultTitle.textContent}\n${resultDescription.textContent}`,
                url: window.location.href
            }).then(() => console.log('공유 성공!'))
            .catch((error) => console.log('공유 실패', error));
        } else {
            navigator.clipboard.writeText(`내 MBTI 유형: ${resultTitle.textContent}\n${resultDescription.textContent}\n${window.location.href}`)
                .then(() => alert('결과가 클립보드에 복사되었습니다!'));
        }
    });

    restartBtn.addEventListener('click', function() {
        window.location.reload();
    });
});

// MBTI 유형별 설명 객체 (예시)
const mbtiDescriptions = {
    'ISTJ': '책임감이 강하고 현실적인 ISTJ. 신뢰성이 높고 조직적으로 일을 처리하는 당신은 철저한 계획가입니다.',
    'ISFJ': '따뜻하고 세심한 ISFJ. 안정과 조화를 중시하며, 주변 사람들을 배려하는 보호자의 성격을 가졌습니다.',
    'INFJ': '이상주의적이고 통찰력 있는 INFJ. 사람들의 감정을 잘 이해하고, 높은 도덕적 가치를 추구합니다.',
    'INTJ': '전략적 사고가 뛰어난 INTJ. 독립적이고 창의적인 해결책을 제시하며, 비전을 현실로 만드는 데 능숙합니다.',
    'ISTP': '융통성 있고 분석적인 ISTP. 호기심이 많고 실용적인 해결책을 찾는 데 능숙한 현실주의자입니다.',
    'ISFP': '온화하고 예술적인 ISFP. 현재에 집중하며, 감각적 경험을 중시하는 평화로운 탐험가입니다.',
    'INFP': '이상적이고 창의적인 INFP. 내면의 가치에 따라 살며, 영감을 주는 소통을 중요시합니다.',
    'INTP': '논리적이고 호기심 많은 INTP. 이론적 탐구를 즐기며, 복잡한 문제를 해결하는 데 탁월한 능력을 가졌습니다.',
    'ESTP': '활동적이고 사교적인 ESTP. 실용적인 해결책을 즉시 찾아내며, 도전을 즐기는 에너지 넘치는 사람입니다.',
    'ESFP': '재기발랄하고 활동적인 ESFP. 즉흥적이고 사교적으로, 주변 사람들과 즐거운 시간을 보내는 것을 좋아합니다.',
    'ENFP': '열정적이고 창의적인 ENFP. 새로운 가능성을 탐구하며, 주변 사람들을 격려하는 영감의 원천입니다.',
    'ENTP': '발명적이고 끊임없이 새로운 아이디어를 창조하는 ENTP. 독창적인 사고와 도전적인 자세를 가지고 있습니다.',
    'ESTJ': '결단력 있고 체계적인 ESTJ. 사물을 명확하고 논리적으로 처리하며, 효율적인 관리자의 특성을 지니고 있습니다.',
    'ESFJ': '사교적이고 친절한 ESFJ. 타인의 필요와 감정에 민감하게 반응하며, 조화로운 관계 유지를 중요시합니다.',
    'ENFJ': '열정적이고 카리스마 있는 ENFJ. 사람들을 격려하고 영감을 주며, 긍정적인 변화를 이끌어내는 리더입니다.',
    'ENTJ': '대담하고 지도력이 있는 ENTJ. 자신감과 야심이 있으며, 효과적인 계획과 조직을 통해 목표를 달성합니다.'
};