export function runJS(
  js: string,
  outputEl: HTMLPreElement,
  errorEl: HTMLDivElement
): void {
  const logs: string[] = [];
  const originalLog = console.log;

  try {
    console.log = (...args: unknown[]) => {
      const line = args
        .map(arg =>
          typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
        )
        .join(" ");
      logs.push(line);
    };

    const sandbox = new Function(js);
    sandbox();

    outputEl.textContent = logs.length
      ? logs.join("\n")
      : "(No console output)";
    errorEl.textContent = "";
  } catch (err) {
    outputEl.textContent = logs.length ? logs.join("\n") : "";
    errorEl.textContent = `Runtime error: ${(err as Error).message}`;
  } finally {
    console.log = originalLog;
  }
}
