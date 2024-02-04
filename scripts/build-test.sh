#!/bin/sh

SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd -P)

cd $SCRIPT_DIR/../namada/crypto && yarn wasm:build:node
cd $SCRIPT_DIR/../namada/shared && yarn wasm:build:node
