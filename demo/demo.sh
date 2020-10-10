#!/bin/bash


cd demo/producer
npm install -s
cd -
cd demo/subscriber
npm install -s
cd -

cd demo/producer
for i in $(seq 50)
do
    node index.js
    echo $i
    sleep 1
done &



cd -
cd demo/subscriber
node index.js
