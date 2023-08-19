const roulette = [
    "고백받아주지 않을 것 같은 이성에게 고백하기",
    "하루 동안 상대방에게 존댓말 하기",
    "지금 당장 형제에게 존댓말 한번 쓰기 (인증)",
    "가장 최근에 카톡한 사람에게 .만 보내고 아무말 하지 않고 반응보기",
    "이상형 말하기",
    "개소리를 인스타 스토리에 올리기"
];

document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.getElementById('spin-button');
    const resultContainer = document.getElementById('result');
    const rouletteResult = document.getElementById('roulette-result');

    let spinning = false;

    spinButton.addEventListener('click', () => {
        if (!spinning) {
            spinning = true;
            spinButton.disabled = true;
            // resultContainer.classList.add('hidden');

            let currentIteration = 0;
            const totalIterations = 100; // 랜덤 돌릴 횟수
            const interval = 50; // 각 회전 간격 (밀리초)
            let lastChoice;

            const spinInterval = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * roulette.length);
                const randomChoice = roulette[randomIndex];
                lastChoice = randomChoice;
                rouletteResult.textContent = randomChoice;
                currentIteration++;

                if (currentIteration === totalIterations) {
                    clearInterval(spinInterval);
                    setTimeout(() => {
                        // resultContainer.classList.remove('hidden');
                        spinButton.disabled = false;
                        rouletteResult.textContent = lastChoice;
                        spinning = false;
                        alert("벌칙은: " + rouletteResult.textContent+"입니다.")
                    }, interval);
                }
            }, interval);
        }
    });
});
