# kzolti/protobuf-javascript-with-from-object
Google Protocol Buffers for JavaScript with fromObject method

## kzolti/protobuf-javascript submodule

This project uses a fork of [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript) as a submodule. The fork, located at [kzolti/protobuf-javascript](https://github.com/kzolti/protobuf-javascript.git), includes the following differences compared to the upstream repository:


###  Changes Made

Added a fromObject method to the generated JavaScript protobuf classes.

### Manual check differencies
https://github.com/protocolbuffers/protobuf-javascript/compare/main...kzolti:protobuf-javascript:main?diff=split&w=
```
git clone https://github.com/kzolti/protobuf-javascript.git                           && \ 
cd protobuf-javascript                                                                && \ 
git checkout main                                                                     && \
git remote add upstream https://github.com/protocolbuffers/protobuf-javascript.git    && \
git fetch upstream                                                                    && \
git diff upstream/main main   
```
#### Changes to made in js_generator.cc (2024-06-12)
```
diff --git a/generator/js_generator.cc b/generator/js_generator.cc
index 44d00b1..7b97962 100644
--- a/generator/js_generator.cc
+++ b/generator/js_generator.cc
@@ -1980,7 +1980,7 @@ void Generator::GenerateClass(const GeneratorOptions& options,
   if (!NamespaceOnly(desc)) {
     printer->Print("\n");
     GenerateClassFieldInfo(options, printer, desc);
-
+    GenerateClassFromObject(options, printer, desc);
     GenerateClassToObject(options, printer, desc);
     // These must come *before* the extension-field info generation in
     // GenerateClassRegistration so that references to the binary
```
## Installation and usage
Note: This package only includes the Linux_x86_64 binary. For other platforms, follow the instructions at [Building from Source](#building-from-source).

```
npm install kzolti/protobuf-javascript-with-from-object --save
```
&emsp; If other modules reference the google-protobuf package, add the following to package.json:
```
 "overrides": {
    "google-protobuf": "protobuf-javascript-with-from-object"
  }
```
&emsp; or yarn resolutions.


&emsp; <b>Generate protobuf pb.js file</b>
```
protoc --js_out=import_style=commonjs,binary:. messages.proto
```
&emsp; <b>Generate typescript definition files</b>

&emsp; Install [protoc-gen-ts-with-from-object](https://github.com/kzolti/protoc-gen-ts-with-from-object)
```
npm install protoc-gen-ts-with-from-object --save
protoc --js_out=import_style=commonjs,binary:.  --ts_out=.  messages.proto
```
&emsp; <b>Using latest protoc binary from your project:</b>

&emsp; install [latest-protoc-binary](https://github.com/kzolti/latest-protoc-binary)
```
npm i latest-protoc-binary
npx protoc --version
```


&emsp; <b>If necessary, install and set up module-alias:</b>
```
npm install module-alias --save

```
&emsp;&emsp;In index.js:
```
const moduleAlias = require('module-alias');
moduleAlias.addAlias('google-protobuf', 'protobuf-javascript-with-from-object');
```
## Building from source
**Note:** Bazel runtime environment is required to build the project.
```
git clone https://github.com/kzolti/protobuf-javascript-with-from-object.git
cd protobuf-javascript-with-from-object                                     
npm install
npm run build
npm pack
```
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
