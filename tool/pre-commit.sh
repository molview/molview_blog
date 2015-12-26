#!/bin/bash

# Copyright (c) 2015, Herman Bergwerf. All rights reserved.
# Use of this source code is governed by a GFDL-1.3-style license
# that can be found in the LICENSE file.

# Format all non-html files.
# Do not format css/* because csscomb in molviewfmt does not anticipate the
# double triple dashes to help Jekyll detect Sass files.
molviewfmt -e '**.html' -e 'css/*'

# Add license headers to own files.
molviewfmt -e '**.html' -e 'css/*' -e '_*/*' -c 'Herman Bergwerf' -l 'GFDL-1.3'
