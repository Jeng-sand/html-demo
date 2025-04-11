
function getComment(bmi) {
    let Comment, color;
    if (bmi < 18.5) {
        Comment = "「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！";
        color = "cyan";

    } else if (bmi < 24) {
        Comment = "恭喜！「健康體重」，要繼續保持！";
        color = "green";

    } else if (bmi < 27) {
        Comment = "「體重過重」了，要小心囉，趕快力行「健康體重管理」！";
        color = "orange";

    } else {
        Comment = "啊～「肥胖」，需要立刻力行「健康體重管理」囉！";
        color = "red";
    }

    return [Comment, color];
}

function getBmi(height, weight) {
    const bmi = weight / (height / 100) ** 2;
    return bmi.toFixed(2);

}