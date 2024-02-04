import { init as initShared } from "@namada/shared/src/init";
import wasm from "@namada/shared/src/shared/shared_bg.wasm";
import { Query } from '@namada/shared/src';

export interface iNamadaNetwork {
    init(): void
}

export class NamadaImpl implements iNamadaNetwork {
    query: Query

    constructor(query: Query) {
        this.query = query
    }

    init() {
        (async function () {
            await initShared(wasm)
        })()
    }
}