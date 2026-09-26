export function compileTS(source) {
    try {
        let js = source;
        const preserved = [];
        function preserve(match) {
            preserved.push(match);
            return `__PRESERVED_${preserved.length - 1}__`;
        }
        js = js.replace(/`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/.*$/gm, preserve);
        js = js.replace(/^\s*(?:export\s+)?interface\s+\w+(?:\s+extends\s+\w+)?\s*\{[^}]*\}/gm, "");
        js = js.replace(/^\s*(?:export\s+)?type\s+\w+\s*=\s*[^;]+;/gm, "");
        js = js.replace(/^\s*(?:export\s+)?enum\s+(\w+)\s*\{([^}]*)\}/gm, (_match, name, body) => {
            const entries = body
                .split(",")
                .map(e => e.trim())
                .filter(Boolean)
                .map(entry => {
                const [key, val] = entry.split("=").map(s => s.trim());
                return `  ${key}: ${val || `"${key}"`}`;
            });
            return `const ${name} = {\n${entries.join(",\n")}\n};`;
        });
        js = js.replace(/<[A-Za-z_,\s]+(?:\s+extends\s+[A-Za-z_]+)?>/g, "");
        js = js.replace(/\):\s*[A-Za-z_|&\[\]<>,\s]+(?=\s*\{)/g, ")");
        js = js.replace(/(\w)\s*:\s*[A-Za-z_|&\[\]<>,\s]+(?=\s*[,)])/g, "$1");
        js = js.replace(/((?:const|let|var)\s+\w+)\s*:\s*[A-Za-z_|&\[\]<>,\s]+(?=\s*=)/g, "$1");
        js = js.replace(/\s+as\s+\w+/g, "");
        js = js.replace(/\b(public|private|protected|readonly)\s+/g, "");
        js = js.replace(/\bexport\s+/g, "");
        preserved.forEach((original, i) => {
            js = js.replace(`__PRESERVED_${i}__`, original);
        });
        js = js.replace(/\n{3,}/g, "\n\n").trim();
        return { js, diagnostics: "" };
    }
    catch (err) {
        return {
            js: "",
            diagnostics: `Compilation error: ${err.message}`,
        };
    }
}
