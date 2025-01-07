const shell = require("shelljs");

shell.rm("-rf", "dist");
shell.mkdir("-p", "google");
shell.mkdir("-p", "bin");
shell.cp("-R", "protobuf-javascript/google/", ".");
shell.cp("-R", "protobuf-javascript/google-protobuf.js", "google-protobuf.js");
shell.cp("-R", "protobuf-javascript/bazel-bin/generator/protoc-gen-js", "bin/");
shell.cp("-f","protobuf/bazel-bin/protoc", "bin/protoc")
