def exclusive_time(n, logs):
    exclusive_times = [0] * n
    stack = []

    for log in logs:
        log_info = log.split(":")
        function_id, event, timestamp = int(log_info[0]), log_info[1], int(log_info[2])

        if event == "start":
            if stack:
                # If there is a function currently running, update its exclusive time
                exclusive_times[stack[-1][0]] += timestamp - stack[-1][1]
            stack.append([function_id, timestamp])
        else:
            # Function has ended, update its exclusive time
            exclusive_times[stack[-1][0]] += timestamp - stack[-1][1] + 1
            stack.pop()
            if stack:
                # If there is a function on the stack, update its start time
                stack[-1][1] = timestamp + 1

    return exclusive_times

# Example usage:
n = 2
logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]
result = exclusive_time(n, logs)
print(result)
