function PaperRequirements(firstCopy, secondCopy, thirdCopy) {
    let firstPaperRaquirePages = firstCopy * 100;
    let secondPaperRequirePages = secondCopy * 200;
    let thirdPaperRequirePages = thirdCopy * 300;

    let totalRequirePages = firstPaperRaquirePages + secondPaperRequirePages + thirdPaperRequirePages;

    return totalRequirePages;

}

let totalRequirePagesOut = PaperRequirements(3, 2, 8);

console.log(totalRequirePagesOut);