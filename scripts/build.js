const shell = require("shelljs");

function runCommand(command, description) {
  shell.echo(description); // Display the description of the command
  const result = shell.exec(command); // Run the command synchronously
  if (result.code !== 0) { // Check for errors
    shell.echo(`Error occurred while running the command: "${command}". Exiting...`);
    shell.echo(result.stdout); // Print stdout to see the output
    shell.echo(result.stderr); // Print stderr to see any errors
    shell.exit(1); // Exit the script on failure
  }
}

runCommand("git submodule update --init", "Initializing submodules...");
runCommand("git submodule update --remote", "Updating submodules to the latest remote versions...");
shell.echo("Entering the protobuf-javascript directory...");
shell.cd("protobuf-javascript");
runCommand("npm install", "Installing npm packages...");
runCommand("npm run build", "Running the protobuf-javascript build process...");
shell.echo("Entering the protobuf directory...")
shell.cd("../protobuf");
runCommand("npm install", "Installing npm packages in the protobuf directory...");
runCommand("bazel build :protoc --cxxopt=-static --linkopt=-static", "Running protobuf Bazel build...");
shell.echo("done");