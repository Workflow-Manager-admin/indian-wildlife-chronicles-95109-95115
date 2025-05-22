#!/bin/bash
cd /home/kavia/workspace/code-generation/indian-wildlife-chronicles-95109-95115/main_container_for_indian_wildlife_chronicles
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

