function exclusiveTime(n, logs) {
    const exclusiveTimes = Array(n).fill(0);
    const stack = [];
    let prevTime = 0;

    for (const log of logs) {
        const [functionId, event, timestamp] = log.split(':').map(str => isNaN(str) ? str : parseInt(str));

        if (event === 'start') {
            if (stack.length > 0) {
                exclusiveTimes[stack[stack.length - 1]] += timestamp - prevTime;
            }
            stack.push(functionId);
            prevTime = timestamp;
        } else {
            exclusiveTimes[stack.pop()] += timestamp - prevTime + 1;
            prevTime = timestamp + 1;
        }
    }

    return exclusiveTimes;
}

// Example usage:
const n = 3;
const logs = ["0:start:0", "1:start:2", "1:end:5", "2:start:6", "2:end:9", "0:end:12"];

const result = exclusiveTime(n, logs);
console.log(result);
