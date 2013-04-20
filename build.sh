#!/bin/bash
out=jquery.stylist.min.js
banner="/*! jquery.stylist.js | https://github.com/diy/jquery-stylist | Apache License (v2) */"

curl -s -d compilation_level=SIMPLE_OPTIMIZATIONS \
        -d output_format=text \
        -d output_info=compiled_code \
        --data-urlencode "js_code@jquery.stylist.js" \
        http://closure-compiler.appspot.com/compile \
        > $out

echo "$banner" | cat - $out > temp && mv temp $out