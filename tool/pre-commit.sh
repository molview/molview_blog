#!/bin/bash

# Copyright (c) 2015, Herman Bergwerf. All rights reserved.
# Use of this source code is governed by a GFDL-1.3-style license
# that can be found in the LICENSE file.

# Format all non-html files.
molviewfmt -e '**.html'

# Add license headers to own files.
molviewfmt -e '**.html' -e '_*/*' -e 'css/main.scss' -e 'css/pixyll.scss' -c 'Herman Bergwerf' -l 'GFDL-1.3'
