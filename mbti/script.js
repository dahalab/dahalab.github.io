// 질문과 선택지 데이터
const questions = [
    // 질문 1
    {
        question: "당신이 주말에 가장 좋아하는 활동은 무엇인가요?",
        choices: ["영화 보기", "등산 가기", "친구와 만나기", "책 읽기"],
        scores: [2, 1, 0, -1]
    },
    // 질문 2
    {
        question: "여행을 가려고 합니다. 어떤 여행지를 선호하나요?",
        choices: ["해변 리조트", "산 속 캠핑", "도시 여행", "자연 속 힐링"],
        scores: [2, 1, 0, -1]
    },
    // 질문 3
    {
        question: "당신이 가장 중요하게 생각하는 가치는 무엇인가요?",
        choices: ["자유", "친환경", "성장", "평화"],
        scores: [2, 1, 0, -1]
    },
    // 질문 4
    {
        question: "좋아하는 계절은 어떤 계절인가요?",
        choices: ["봄", "여름", "가을", "겨울"],
        scores: [2, 1, 0, -1]
    },
    // 질문 5
    {
        question: "친구들과 만날 때 주로 무엇을 하나요?",
        choices: ["외식하기", "스포츠 활동", "영화 보기", "집에서 대화하기"],
        scores: [2, 1, 0, -1]
    },
    // 질문 6
    {
        question: "당신이 스트레스를 풀 때 어떤 활동을 하나요?",
        choices: ["운동하기", "음악 듣기", "독서", "요리하기"],
        scores: [2, 1, 0, -1]
    },
    // 질문 7
    {
        question: "자주 참여하는 사회적 활동은 무엇인가요?",
        choices: ["봉사 활동", "스포츠 클럽", "예술 단체", "독서 모임"],
        scores: [2, 1, 0, -1]
    },
    // 질문 8
    {
        question: "당신이 좋아하는 음악 장르는 무엇인가요?",
        choices: ["팝", "락", "재즈", "클래식"],
        scores: [2, 1, 0, -1]
    },
    // 질문 9
    {
        question: "휴가를 가려고 합니다. 어떤 유형의 휴가를 원하나요?",
        choices: ["도시 여행", "자연 속 힐링", "문화 체험", "레저 스포츠"],
        scores: [2, 1, 0, -1]
    },
    // 질문 10
    {
        question: "당신의 성격을 가장 잘 표현하는 단어는 무엇인가요?",
        choices: ["외향적", "내향적", "창의적", "안정적"],
        scores: [2, 1, 0, -1]
    }
];

// 결과 유형 데이터
const results = [
    {
        animal: "사자",
        reason: "리더십과 사회성",
        traits: ["타고난 리더", "자신감 있음", "사교적", "도전을 두려워하지 않음"],
        suitableWith: "호랑이",
        message: "당신의 리더십은 많은 이들에게 영감을 줍니다. 당신의 결단력과 사교성으로 주변 사람들을 이끌어주세요."
    },
    {
        animal: "고릴라",
        reason: "힘과 신중함",
        traits: ["강인함", "똑똑함", "조용한 힘을 가짐", "주변을 보호함"],
        suitableWith: "팬더",
        message: "당신은 힘이 있지만 신중한 성격입니다. 주변을 보호하며 지혜로운 결정을 내립니다."
    },
    {
        animal: "호랑이",
        reason: "용기와 자신감",
        traits: ["용기 있음", "자신감 넘침", "도전을 즐김", "포커스된 태도"],
        suitableWith: "사자",
        message: "당신은 용기와 자신감으로 무장한 사람입니다. 어려운 상황에서도 도전하는 스타일입니다."
    },
    {
        animal: "팬더",
        reason: "평화와 균형",
        traits: ["평화로움", "균형을 유지함", "친화력 있음", "스트레스를 잘 푸는 편"],
        suitableWith: "고릴라",
        message: "당신은 평화와 균형을 추구하는 사람입니다. 친화력으로 주변 사람들과 조화롭게 지내요."
    },
    {
        animal: "물개",
        reason: "창의력과 유연함",
        traits: ["창의력 넘침", "유연함", "높은 호기심", "자유로운 사고"],
        suitableWith: "해마",
        message: "당신은 창의력과 유연성이 뛰어난 사람입니다. 새로운 아이디어와 경험을 즐기세요."
    },
    {
        animal: "해마",
        reason: "지적 호기심과 흥미",
        traits: ["지적 호기심", "다양한 관심사", "끊임없는 학습", "자기 계발 중심"],
        suitableWith: "물개",
        message: "당신은 지적 호기심이 넘치고 학습을 즐기는 사람입니다. 다양한 분야에 관심을 가지세요."
    },
    {
        animal: "코끼리",
        reason: "지혜와 차분함",
        traits: ["지혜로움", "차분함", "다른 사람을 지지함", "장기적인 목표 설정"],
        suitableWith: "기린",
        message: "당신은 지혜로운 성격으로 장기적인 목표를 설정하며 차분하게 나아갑니다."
    },
    {
        animal: "기린",
        reason: "유연성과 민첩함",
        traits: ["유연성", "민첩함", "적응력 있음", "다양한 상황 처리"],
        suitableWith: "코끼리",
        message: "당신은 다양한 상황에서 민첩하게 대처하며 유연성을 갖춘 사람입니다."
    },
    {
        animal: "원숭이",
        reason: "재미와 에너지",
        traits: ["재미있음", "에너지 넘침", "소통 능력", "새로운 경험을 추구"],
        suitableWith: "오리",
        message: "당신은 항상 재미와 에너지를 가득 느끼며 새로운 경험을 즐깁니다."
    },
    {
        animal: "오리",
        reason: "친화력과 신뢰",
        traits: ["친화력", "신뢰성 있음", "사회적 능력", "팀 플레이어"],
        suitableWith: "원숭이",
        message: "당신은 친화력으로 주변 사람들과 어울리며 신뢰를 주고받는 사람입니다."
    },
    {
        animal: "늑대",
        reason: "독립과 자유",
        traits: ["독립적", "자유로움", "판단력 있음", "자기 주도적"],
        suitableWith: "여우",
        message: "당신은 독립적이고 자유로운 성격으로 자기 주도적으로 일을 처리합니다."
    },
    {
        animal: "여우",
        reason: "똑똑함과 계획",
        traits: ["똑똑함", "전략적 사고", "논리적", "목표를 설정하고 추진"],
        suitableWith: "늑대",
        message: "당신은 똑똑하고 전략적인 사고를 가진 사람입니다. 목표를 향해 계획을 세우세요."
    },
    {
        animal: "펭귄",
        reason: "침착함과 인내",
        traits: ["침착함", "인내심", "언제나 차분함", "평온한 성격"],
        suitableWith: "해마",
        message: "당신은 침착하고 인내심이 강한 사람입니다. 어려운 상황에서도 차분하게 대처합니다."
    },
    {
        animal: "하마",
        reason: "창의력과 차분함",
        traits: ["창의적", "차분함", "비판적 사고", "자기반성 능력"],
        suitableWith: "기린",
        message: "당신은 창의적이고 차분한 사람입니다. 비판적 사고로 문제를 해결하세요."
    },
    {
        animal: "앵무새",
        reason: "소통과 다양성",
        traits: ["순발력 있음", "다양한 언어 능력", "타인을 이해함", "소통 능력"],
        suitableWith: "오리",
        message: "당신은 소통 능력이 뛰어나고 다양성을 존중합니다. 타인과의 소통을 즐기세요."
    },
];

// 현재 질문 및 선택지의 인덱스
let currentQuestionIndex = 0;

// 사용자의 선택 저장 배열
const userChoices = [];

// HTML 요소 참조
const startScreen = document.getElementById("start-screen");
const questionScreen = document.getElementById("question-screen");
const resultScreen = document.getElementById("result-screen");
const questionTitle = document.getElementById("question-title");
const choicesContainer = document.getElementById("choices");
const resultImage = document.getElementById("result-image");
const resultDescription = document.getElementById("result-description");
const shareButton = document.getElementById("share-button");
const restartButton = document.getElementById("restart-button");

// 시작 버튼 클릭 이벤트
document.getElementById("start-button").addEventListener("click", startTest);

// 선택지 버튼 클릭 이벤트
choicesContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("choice-button")) {
        const choiceIndex = parseInt(event.target.dataset.choiceIndex);
        userChoices.push(choiceIndex);

        // 다음 질문으로 이동 또는 결과 화면 표시
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion();
        } else {
            showResult();
        }
    }
});

// 결과 화면에서 '테스트 다시하기' 버튼 클릭 이벤트
restartButton.addEventListener("click", restartTest);

// 테스트 시작 함수
function startTest() {
    startScreen.style.display = "none";
    questionScreen.style.display = "block";
    showQuestion();
}

// 다음 질문 표시 함수
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionTitle.textContent = question.question;
    choicesContainer.innerHTML = "";

    question.choices.forEach((choice, index) => {
        const choiceButton = document.createElement("button");
        choiceButton.classList.add("choice-button");
        choiceButton.textContent = choice;
        choiceButton.dataset.choiceIndex = index;
        choicesContainer.appendChild(choiceButton);
    });
}

// 결과 화면 표시 함수
function showResult() {
    questionScreen.style.display = "none";
    resultScreen.style.display = "block";

    // 계산 로직을 사용하여 결과 유형 결정
    const resultIndex = calculateResult();
    const result = results[resultIndex];

    // 결과 이미지, 설명, 공유 기능 설정
    resultImage.src = `result_${resultIndex}.png`;

    // Web Share API를 지원하는 경우 '테스트 공유하기' 버튼 활성화
    if (navigator.share) {
        shareButton.style.display = "block";
        shareButton.addEventListener("click", shareTest);
    } else {
        // Web Share API를 지원하지 않는 경우 클립보드에 복사 기능 활성화
        shareButton.textContent = "테스트 결과 공유하기";
        shareButton.addEventListener("click", copyToClipboard);
    }
}

// 결과 계산 로직 (여기에서 실제 계산을 수행하십시오)
function calculateResult() {
    // 여기에 사용자의 선택을 기반으로 결과를 계산하는 로직을 작성하세요.
    // 예를 들어, userChoices 배열을 분석하여 결과 인덱스를 결정합니다.
    // 이 예제에서는 임의의 결과를 반환합니다.
    return Math.floor(Math.random() * results.length);
}

// 테스트 다시 시작 함수
function restartTest() {
    currentQuestionIndex = 0;
    userChoices.length = 0;
    resultScreen.style.display = "none";
    startScreen.style.display = "block";
}

// 테스트 결과 공유 함수 (Web Share API를 사용하는 경우)
function shareTest() {
    navigator.share({
        title: "내 마음의 동물 찾기 테스트 결과",
        text: `당신은 ${results[userChoices[userChoices.length - 1]].animal}입니다.`,
        url: window.location.href
    })
        .then(() => console.log("테스트 결과 공유 완료"))
        .catch((error) => console.error("테스트 결과 공유 실패:", error));
}

// 테스트 결과 클립보드 복사 함수 (Web Share API를 지원하지 않는 경우)
function copyToClipboard() {
    const textToCopy = `내 마음의 동물 찾기 테스트 결과: ${results[userChoices[userChoices.length - 1]].animal}`;
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("테스트 결과가 클립보드에 복사되었습니다.");
}

// 초기화면 표시
startScreen.style.display = "block";