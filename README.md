# kzolti/protobuf-javascript-with-from-object
Google Protocol Buffers for JavaScript with fromObject method

## Diferencies with upstream 
This is a fork of [protocolbuffers/protobuf-javascript](https://github.com/protocolbuffers/protobuf-javascript) with the following changes:

###  Changes Made

    Added a fromObject method to the generated JavaScript protobuf classes.
    Referenced changes made in js_generator.cc to enable fromObject functionality.


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


## Building from source

```
git clone https://github.com/kzolti/protobuf-javascript-with-from-object.git
cd protobuf-javascript-with-from-object                                     
git submodule update --init
git submodule update --remote
cd protobuf-javascript
npm install
npm run build
cd ..
npm pack
```
## Installation
```
npm install kzolti/protobuf-javascript-with-from-object --save
```    
## Usage
Add the following to package.json:
```
 "overrides": {
    "google-protobuf": "protobuf-javascript-with-from-object"
  },
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


    
 
