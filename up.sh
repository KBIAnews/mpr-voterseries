#!/bin/bash
aws s3 cp public s3://apps.kbia.org/2018-beyond-the-ballot --recursive --profile kbia
aws s3 cp public/static s3://apps.kbia.org/static --recursive --profile kbia