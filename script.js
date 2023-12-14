document.addEventListener("DOMContentLoaded", function () {
    const terminal = document.getElementById("terminal");
    const output = document.getElementById("output");
    const input = document.getElementById("input");

    input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            const command = input.value.trim();
            executeCommand(command);
            input.value = "";
        }
    });

    function executeCommand(command) {
        const parts = command.split(" ");
        const cmd = parts[0];
        const args = parts.slice(1);

        switch (cmd) {
            case "mkdir":
                // Implement mkdir logic
                outputCommandResult("mkdir: Not implemented");
                break;

            case "cd":
                // Implement cd logic
                outputCommandResult("cd: Not implemented");
                break;

            case "ls":
                // Implement ls logic
                outputCommandResult("ls: Not implemented");
                break;

            case "grep":
                // Implement grep logic
                outputCommandResult("grep: Not implemented");
                break;

            case "cat":
                // Implement cat logic
                outputCommandResult("cat: Not implemented");
                break;

            case "touch":
                // Implement touch logic
                outputCommandResult("touch: Not implemented");
                break;

            case "echo":
                // Implement echo logic
                outputCommandResult("echo: Not implemented");
                break;

            case "mv":
                // Implement mv logic
                outputCommandResult("mv: Not implemented");
                break;

            case "cp":
                // Implement cp logic
                outputCommandResult("cp: Not implemented");
                break;

            case "rm":
                // Implement rm logic
                outputCommandResult("rm: Not implemented");
                break;

            default:
                outputCommandResult(`Command not recognized: ${command}`);
                break;
        }
    }

    function outputCommandResult(result) {
        output.innerText += `\n${result}`;
        terminal.scrollTop = terminal.scrollHeight;
    }
});
