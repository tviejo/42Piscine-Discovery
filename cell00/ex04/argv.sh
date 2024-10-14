#!/bin/bash
x=0
while [[ "$1" != "" && "$x" != 3 ]];
do
    echo $1
    shift
    x=$((x+1))
done