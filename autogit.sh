#!/bin/bash

while true
do
  if [[ -n $(git status --porcelain) ]]; then

    echo "Mudanças detectadas..."

    git add .

    git commit -m "auto-save $(date '+%Y-%m-%d %H:%M:%S')"

    CURRENT_BRANCH=$(git branch --show-current)

    git push origin $CURRENT_BRANCH

    echo "Push enviado para $CURRENT_BRANCH!"
  fi

  sleep 30
done