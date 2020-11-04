# CDN assets

This repository is the result of the build of many opensource libraries.
It is the content for a POC around our approach of CDN.

So it contains only opensource libraries.

They are automaticly exposed in gh-pages. For example:

https://jmfrancois.github.io/cdn-assets/dist/react/16.8.0/umd/react.production.min.js

## AWS

Most of the commands rely on AWS cli which must be installed and configured.

## Commands

The following commands are available:

yarn cleanup

This command remove all not wanted content from the resposistory. It goes from bower.json to node_modules, etc..

yarn sync s3://bucket

This command will sync the dist folder with your bucket

yarn diff bucket -o diff.json

this comamnd will genrate diff.json to know what is not present on your cdn

yarn download

this command download all the needed content to build your CDN content on top of @talend/module-to-cdn default supports.

yarn download-talend

this command download all the content from @talend package

yarn build-umds

This command build the given custom package according to umd file.
