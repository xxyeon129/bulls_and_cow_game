// 중복 없는 랜덤 숫자 3개
let i = 0;
let randomArr = [];
while (i < 3) {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomArr.indexOf(randomNum) === -1) {
        // 중복이 없을 경우
        randomArr.push(randomNum);
        i++;
    }
}

// 랜덤 숫자 string
let randomNum = "" + randomArr[0] + randomArr[1] + randomArr[2];
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

// 사용자 입력 모듈
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 정답을 맞추기까지 횟수 카운트
let count = 1;

// 사용자 입력
const questionFunc = () => {
    rl.question(`${count}번째 시도: `, (input) => {
        // 사용자가 입력한 input값이 랜덤값과 일치하면
        if (input === randomNum) {
            console.log(`${count}번만에 맞히셨습니다.\n게임을 종료합니다.`);
            return rl.close();
        }

        let sCount = 0;
        let bCount = 0;

        // 사용자가 틀리게 입력했을 경우
        for (let i = 0; i < 3; i++) {
            // 값이 일치한다면
            let sameNumIdx = input.search(randomNum[i]);
            // search() 일치하는 인덱스 리턴, 찾지 못하면 -1 리턴
            // 사용자가 입력한 input 값에서 랜덤 숫자와 일치하는 숫자의 index를 리턴

            if (sameNumIdx > -1) {
                // 일치하는 값이 input에 존재할 경우
                if (input[sameNumIdx] === randomNum[sameNumIdx]) {
                    // 일치하는 값이 있으면서 + 인덱스도 일치할 경우
                    sCount++;
                } else {
                    // 일치하는 값이 있는데, 인덱스는 일치하지 않을 경우
                    bCount++;
                }
            }
        }
        console.log(`${bCount}B${sCount}S`);
        count++;
        questionFunc();
    });
};

questionFunc();
