import { iNamadaNetwork } from "@network/namada_network";

export class MainViewModel {
    namadaNetwork: iNamadaNetwork
    constructor(namadaNetwork: iNamadaNetwork) {
        this.namadaNetwork = namadaNetwork
    }

    init(): void {
        const namadaNetwork = this.namadaNetwork;
        (async function () {
            await namadaNetwork.init()
        })();
    }
}