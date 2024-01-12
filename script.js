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
}

    // 공유 버튼 표시
    if (navigator.share) {
        document.getElementById('share-button').style.display = 'block';
    }
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
    }
});
    function getTypeDescription(type) {
        var typeDescriptions = {
            "혁신가": "항상 새로운 아이디어로 모두를 놀라게 하는 당신은 직장의 스파크!",
            "전략가": "체스 게임의 마스터처럼 모든 상황을 예측하며 최고의 결과를 끌어냅니다.",
            "조화로운 중재자": "모두가 화목하게 일할 수 있도록 돕는 평화의 사자!",
            "명확한 커뮤니케이터": "말은 은은한 소리, 결과는 큰 울림.",
            "창의적 사상가": "늘 독특한 생각으로 모두를 놀라게 하는 창의력의 아이콘.",
            "성실한 팀 플레이어": "믿음직스럽고 성실한 당신은 팀의 든든한 버팀목.",
            "열정적 리더": "불타는 열정으로 모두를 이끌어, 리더십의 귀감이 됩니다.",
            "실용적 해결사": "문제 앞에서 당황하지 않고, 실용적인 해결책을 제시.",
            "조직적 관리자": "모든 것을 체계적으로, 질서 정연한 관리의 달인.",
            "분석적 사고자": "데이터와 사실로 무장한, 분석의 달인.",
            "조용한 관찰자": "말 없이 모든 것을 지켜보며, 섬세한 통찰력을 발휘.",
            "침착한 조력자": "위기 상황에서도 침착함을 잃지 않는, 믿음직한 동료.",
            "독립적 혁신가": "자유로운 영혼, 자신만의 길을 개척하는 독립적인 존재.",
            "사려 깊은 계획가": "미래를 위한 계획은 언제나 철저하게, 계획의 달인.",
            "효율적 실행자": "말보다는 행동으로 보여주는 실천력의 대가.",
            "평화로운 조율자": "모두가 조화롭게 일할 수 있게 하는, 평화의 메신저."
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
