export function runJS(js, outputEl, errorEl) {
    const logs = [];
    const originalLog = console.log;
    try {
        console.log = (...args) => {
            const line = args
                .map(arg => typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg))
                .join(" ");
            logs.push(line);
        };
        const sandbox = new Function(js);
        sandbox();
        outputEl.textContent = logs.length
            ? logs.join("\n")
            : "(No console output)";
        errorEl.textContent = "";
    }
    catch (err) {
        outputEl.textContent = logs.length ? logs.join("\n") : "";
        errorEl.textContent = `Runtime error: ${err.message}`;
    }
    finally {
        console.log = originalLog;
    }
}
