document.addEventListener('DOMContentLoaded', function() {
    var currentQuestionIndex = 0;
    var answers = {};
    var questions = [
        { question: "1. 출근길, 당신의 기분은?", options: ["A. 커피보다 강한 나의 에너지!", "B. 어제와 똑같은 오늘", "C. 잠은 더 필요해...", "D. 집이 최고!"] },
        { question: "2. 동료와의 갈등, 당신의 대처 방법은?", options: ["A. 슈퍼맨처럼 해결!", "B. 관망하는 지혜로운 거북이", "C. 갈등은 무서워, 피할래", "D. 내 마음속에 폭풍이..."] },
        { question: "3. 새 프로젝트, 당신의 첫 느낌은?", options: ["A. 새 모험의 시작!", "B. 조심스레 한 걸음씩", "C. 부담감의 산", "D. 안 돼, 다시는..."] },
        { question: "4. 업무 중 난관에 부딪혔을 때, 당신은?", options: ["A. 문제 해결사 등판", "B. 도와줘, 동료여!", "C. 잠시 숨을 찾자", "D. 스트레스 폭발 직전"] },
        { question: "5. 팀 프로젝트에서 당신의 역할은?", options: ["A. 모두를 이끄는 지휘자", "B. 물 밑에서 힘쓰는 조력자", "C. 행동으로 말하는 실행가", "D. 조용한 관찰자"] },
        { question: "6. 업무의 우선순위를 정할 때, 당신의 기준은?", options: ["A. 중요도와 긴급성", "B. 효율성과 실용성", "C. 편안함과 쉬움", "D. 스트레스와 압박감"] },
        { question: "7. 업무 중 실수가 발생했을 때, 당신의 반응은?", options: ["A. 즉시 해결책을 찾음", "B. 실수를 분석하고 배움", "C. 걱정하고 불안해함", "D. 책임을 회피하려 함"] },
        { question: "8. 승진 기회가 생겼을 때 당신의 태도는?", options: ["A. 적극적으로 도전", "B. 신중하게 고려", "C. 불확실하고 주저함", "D. 관심 없음"] },
        { question: "9. 직장에서의 성공을 어떻게 정의합니까?", options: ["A. 높은 직위와 높은 급여", "B. 존경과 인정", "C. 일과 삶의 균형", "D. 스트레스 없는 환경"] },
        { question: "10. 퇴근 후 당신은 주로 무엇을 합니까?", options: ["A. 개인 발전을 위한 활동", "B. 취미나 여가 활동", "C. 휴식", "D. 다음 날 업무 준비"] }
   // 여기에 나머지 질문들 추가...
    ];

    function showQuestion(index) {
        var questionData = questions[index];
        var questionHtml = '<p>' + questionData.question + '</p>';
        questionData.options.forEach(function(option) {
            questionHtml += '<button class="question-button" onclick="selectOption(\'' + option + '\')">' + option + '</button>';
        });
        document.getElementById('question-container').innerHTML = questionHtml;
        updateProgressBar(index, questions.length);
    }

    window.selectOption = function(option) {
        answers['q' + (currentQuestionIndex + 1)] = option.charAt(0); // Only the first character (e.g., 'A', 'B') is stored
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            showResults();
        }
    };

    function updateProgressBar(currentIndex, total) {
        var progressPercentage = ((currentIndex + 1) / total) * 100;
        document.getElementById('progress-bar').style.width = progressPercentage + '%';
    }

function showResults() {
    var personalityType = determinePersonalityType(answers);
    var description = getTypeDescription(personalityType);
    document.getElementById('personality-type').textContent = personalityType;
    document.getElementById('type-description').textContent = description;

    // 결과 div 표시
    document.getElementById('result').style.display = 'block';

    // 질문 및 프로그레스바 숨기기
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('restart-button').addEventListener('click', function() {
        location.reload();
    });
}

    // 공유 버튼 표시
    if (navigator.share) {
        document.getElementById('share-button').style.display = 'block';
    }


document.getElementById('share-button').addEventListener('click', function() {
    var personalityType = document.getElementById('personality-type').textContent;
    var description = document.getElementById('type-description').textContent;
    
    if (navigator.share) {
        navigator.share({
            title: '직장 생활 심리테스트 결과',
            text: `내 유형: ${personalityType}\n${description}`,
            url: window.location.href
        })
        .then(() => console.log('공유 성공!'))
        .catch((error) => console.log('공유 실패:', error));
    } else {
        console.log('Web Share API를 지원하지 않는 브라우저입니다.');
        // text와 url을 결합한 문자열을 클립보드에 복사
        const textToCopy = `내 유형: ${personalityType}\n${description}\nURL: ${window.location.href}`;
        copyToClipboard(textToCopy);
    }
    
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(function() {
                // 복사 성공 시 처리
                alert('클립보드에 복사되었습니다 붙여넣기 하세요!')
                console.log('텍스트가 클립보드에 복사되었습니다.');
            })
            .catch(function(err) {
                // 복사 실패 시 처리
                console.error('텍스트 복사 중 오류 발생: ', err);
            });
    }
});
    function getTypeDescription(type) {
        var typeDescriptions = {
            "혁신가": "당신은 끝없는 창의력으로 항상 새로운 아이디어를 내놓습니다. 문제 해결에 있어서 당신은 상상력을 적극 활용하며 새로운 길을 개척합니다. 직장에서는 이러한 창의성이 혁신과 성공의 원천이 됩니다. 당신은 새로운 기회를 포착하고 독창적인 방식으로 문제를 해결합니다. 비전을 가지고 팀을 이끄는 리더로서, 다른 이들에게 영감을 주는 역할을 하기도 합니다.",
            "전략가": "당신은 체스 게임의 마스터처럼 모든 상황을 예측하며 최고의 결과를 끌어냅니다. 전략과 계획의 달인으로서, 당신은 팀을 안전하게 이끌고 조직의 목표를 달성합니다. 갈등을 미리 예측하고 방지하는 데 뛰어나며, 장기적인 비전을 효과적으로 실행에 옮깁니다. 당신은 조직의 안정성과 성장을 책임지며 믿음직한 리더로 인정받습니다.",
            "조화로운 중재자": "당신은 모두가 화목하게 일할 수 있도록 돕는 평화의 사자입니다. 갈등 상황에서도 당신은 중재자 역할을 통해 해결책을 찾아내고 조직의 조화를 지킵니다. 민감하고 이해심 깊은 성향 덕분에 동료들과 원활한 협력을 이끌어냅니다. 당신은 조직 내의 긍정적인 분위기와 협력을 촉진하는 주요 인물입니다.",
            "명확한 커뮤니케이터": "말은 은은한 소리, 결과는 큰 울림입니다. 당신은 커뮤니케이션의 달인으로서 아이디어를 명확하게 전달하고 다른 이들에게 이해시킵니다. 당신의 의사 표현 능력은 조직 내에서 중요한 역할을 합니다. 간결하고 효과적인 커뮤니케이션 능력 덕분에 프로젝트가 원활하게 진행되고 협력이 강화됩니다.",
            "창의적 사상가": "늘 독특한 생각으로 모두를 놀라게 하는 창의력의 아이콘입니다. 문제에 독특한 시각으로 접근하여 새로운 해결책을 발견합니다. 당신은 상상력이 풍부하고 흥미로운 아이디어를 생각해내는 데 능숙합니다. 이러한 창의성은 조직에 혁신적인 변화를 가져옵니다.",
            "성실한 팀 플레이어": "믿음직스럽고 성실한 성향으로 팀의 든든한 버팀목입니다. 협력을 통해 목표를 달성하는 것을 중요하게 생각하며 동료들과의 관계를 향상시킵니다. 당신은 팀의 공동 목표 달성을 위해 최선을 다하며 조직의 팀워크를 강화합니다.",
            "열정적 리더": "불타는 열정으로 모두를 이끌며 비전을 실현시키는 역할을 합니다. 당신의 리더십은 동료들에게 영감을 주며 목표를 달성하기 위해 열정적으로 노력합니다. 비전과 목표 설정을 통해 팀원들을 동기화시키는 데 뛰어납니다.",
            "실용적 해결사": "문제 앞에서 당황하지 않고 실용적인 해결책을 제시하는 데 능숙합니다. 빠르게 문제를 진단하고 적절한 조치를 취합니다. 당신의 실용적인 접근은 조직의 원활한 운영을 지원하고 문제를 해결하는 데 도움이 됩니다.",
            "조직적 관리자": "모든 것을 체계적으로, 질서 정연하게 관리하는 당신은 조직의 중심 역할을 합니다. 계획과 조직이 뛰어난데다가 효율적인 리소스 활용 덕분에 조직의 운영이 원활하게 이끌어집니다. 당신은 팀의 프로젝트를 체계적으로 관리하고 성과를 높이기 위해 노력합니다.",
            "분석적 사고자": "데이터와 사실로 무장한 분석의 달인입니다. 복잡한 문제를 체계적으로 분석하고 패턴을 발견하여 문제 해결에 기여합니다. 당신은 조직 내에서 신뢰할 만한 분석가로 인정받습니다.",
            "조용한 관찰자": "말 없이 모든 것을 지켜보며 섬세한 통찰력을 발휘합니다. 상황을 정확하게 파악하고 다른 이들의 감정과 요구사항을 이해합니다. 당신은 조직 내에서 중요한 정보 수집 역할을 하며 문제 해결을 지원합니다.",
            "침착한 조력자": "위기 상황에서도 침착함을 잃지 않는, 믿음직한 동료입니다. 문제를 해결하고 안정성을 제공하여 팀원들에게 안심감을 주며 효과적인 협업을 이끌어냅니다. 당신의 침착함은 조직의 안정성을 유지하는 데 중요한 역할을 합니다.",
            "독립적 혁신가": "자유로운 영혼으로 자신만의 길을 개척하는 독립적인 존재입니다. 독자적으로 문제를 해결하며 독창적인 아이디어를 추구합니다. 당신은 독립적으로 일하는 데 능숙하며 자신만의 방식으로 결과를 이끌어냅니다.",
            "사려 깊은 계획가": "미래를 위한 계획은 언제나 철저하게 준비합니다. 목표 달성을 위한 계획과 전략을 세우는 데 뛰어납니다. 당신은 조직의 장기적인 성공을 위해 신중하게 계획을 수립하고 이행합니다.",
            "효율적 실행자": "말보다는 행동으로 보여주는 실천력의 대가입니다. 목표를 효과적으로 이루기 위해 계획을 실행하고 문제를 신속하게 해결합니다. 당신은 결과를 중시하며 효율적인 작업 스타일을 가지고 있습니다.",
            "평화로운 조율자": "모두가 조화롭게 일할 수 있도록 하는, 평화의 메신저입니다. 갈등 상황에서도 조화롭게 해결책을 찾아내고 조직 내의 분위기를 안정시킵니다. 당신은 갈등을 조화롭게 해결하는 중요한 역할을 하며 조직 내의 협력을 촉진합니다."
            };
        return typeDescriptions[type] || "유형에 대한 설명을 찾을 수 없습니다.";
    }
    function determinePersonalityType(answers) {
        var types = {
            "혁신가": 0,
            "전략가": 0,
            "조화로운 중재자": 0,
            "명확한 커뮤니케이터": 0,
            "창의적 사상가": 0,
            "성실한 팀 플레이어": 0,
            "열정적 리더": 0,
            "실용적 해결사": 0,
            "조직적 관리자": 0,
            "분석적 사고자": 0,
            "조용한 관찰자": 0,
            "침착한 조력자": 0,
            "독립적 혁신가": 0,
            "사려 깊은 계획가": 0,
            "효율적 실행자": 0,
            "평화로운 조율자": 0
        };
    
        var answerKey = {
            'A': ["혁신가", "전략가", "창의적 사상가", "열정적 리더", "조직적 관리자", "분석적 사고자", "독립적 혁신가", "사려 깊은 계획가", "효율적 실행자", "혁신가"],
            'B': ["조화로운 중재자", "명확한 커뮤니케이터", "성실한 팀 플레이어", "실용적 해결사", "조용한 관찰자", "침착한 조력자", "전략가", "창의적 사상가", "열정적 리더", "조화로운 중재자"],
            'C': ["성실한 팀 플레이어", "실용적 해결사", "조용한 관찰자", "침착한 조력자", "독립적 혁신가", "사려 깊은 계획가", "명확한 커뮤니케이터", "성실한 팀 플레이어", "조직적 관리자", "분석적 사고자"],
            'D': ["명확한 커뮤니케이터", "조화로운 중재자", "혁신가", "전략가", "창의적 사상가", "열정적 리더", "조직적 관리자", "분석적 사고자", "독립적 혁신가", "사려 깊은 계획가"]
        };
    
        for (var question in answers) {
            var selectedOption = answers[question];
            if (answerKey[selectedOption]) {
                answerKey[selectedOption].forEach(function(type) {
                    types[type] += 1;
                });
            }
        }
    
        var maxScore = Math.max(...Object.values(types));
        var personalityTypes = Object.keys(types).filter(function(type) {
            return types[type] === maxScore;
        });
    
        return personalityTypes.join(', ');
    }
    showQuestion(0);

});
