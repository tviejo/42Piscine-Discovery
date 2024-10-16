#!/bin/bash
x=0
while [[ "$1" != "" && "$x" != 3 ]];
do
    echo $1
    shift
    x=$((x+1))
done
if [ "$x" == 0 ];
then
    echo "No arguments supplied"
fi