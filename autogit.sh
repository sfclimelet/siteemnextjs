#!/bin/bash

while true
do
  if [[ -n $(git status --porcelain) ]]; then

    echo "Mudanças detectadas..."

    git add .

    git commit -m "auto-save $(date '+%Y-%m-%d %H:%M:%S')"

    git push origin main

    echo "Push enviado!"
  fi

  sleep 30
done