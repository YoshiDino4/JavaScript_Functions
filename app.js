console.log("Hello World!\n==========\n");

// Exercise 1: Print Odds Continued
function printOdds(count) {
    if (count < 0) {
        console.log("Negative count provided, looping backwards.");
    }

    for (let i = 1; Math.abs(i) <= Math.abs(count); i += 2) {
        console.log(i * Math.sign(count)); // Accounts for negative count.
    }
}

console.log("Exercise 1:\n==========\n");
printOdds(10);
printOdds(-10);

// Exercise 2: Legal?
function checkAge(userName = "User", age) {
    if (age === undefined) {
        console.log("Please provide both a name and age.");
        return;
    }

    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    console.log(age >= 16 ? aboveSixteen : belowSixteen);
}

console.log("\nExercise 2:\n==========\n");
checkAge("Megatron", 20);
checkAge("Bumblebee", 12);
checkAge("Sentinel"); // Missing age

// Exercise 3: Which Quadrant?
function whichQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("(0, 0) is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

console.log("\nExercise 3:\n==========\n");
whichQuadrant(1, 2);
whichQuadrant(-6, 18);
whichQuadrant(-3, -5);
whichQuadrant(0, 2);
whichQuadrant(0, 0);

// Exercise 4: What type of triangle?
function triangleType(side1, side2, side3) {
    if (
        side1 + side2 <= side3 ||
        side1 + side3 <= side2 ||
        side2 + side3 <= side1
    ) {
        return "Invalid triangle.";
    }

    if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle.";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle.";
    } else {
        return "Scalene triangle.";
    }
}

console.log("\nExercise 4:\n==========\n");
console.log(triangleType(1, 2, 2)); // Isosceles
console.log(triangleType(1, 1, 2)); // Invalid
console.log(triangleType(3, 4, 5)); // Scalene
console.log(triangleType(3, 3, 3)); // Equilateral

// BONUS Exercise 5: Data Plan Status
function dataPlanStatus(planLimit, day, usage) {
    const daysRemaining = 30 - day;
    const averageDailyUse = usage / day;
    const recommendedDailyUse = planLimit / 30;
    const projectedUsage = averageDailyUse * 30;
    const excess = projectedUsage - planLimit;
    const adjustedDailyUse = (planLimit - usage) / daysRemaining;

    console.log(
        `${day} days used, ${daysRemaining} days remaining`
    );
    console.log(`Average daily use: ${averageDailyUse.toFixed(2)} GB/day`);

    if (usage > planLimit) {
        console.log(`You are EXCEEDING your data plan. You have used more data than allocated.`);
    } else if (averageDailyUse > recommendedDailyUse) {
        console.log(
            `You are EXCEEDING your average daily use (${averageDailyUse.toFixed(
                2
            )} GB/day). Continuing this high usage, you'll exceed your data plan by ${excess.toFixed(
                2
            )} GB. To stay below your plan, use no more than ${adjustedDailyUse.toFixed(
                2
            )} GB/day.`
        );
    } else {
        console.log(
            `You are within your data plan. You can use up to ${adjustedDailyUse.toFixed(
                2
            )} GB/day.`
        );
    }
}

console.log("\nExercise 5:\n==========\n");
dataPlanStatus(100, 15, 56); // Example usage
dataPlanStatus(50, 20, 45); // Near end of plan
dataPlanStatus(150, 10, 30); // Plenty of data left
