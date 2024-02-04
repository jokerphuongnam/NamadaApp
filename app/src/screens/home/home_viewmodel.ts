import { iNamadaNetwork } from "@network/namada_network"

export class HomeViewModel {
    namadaNetwork: iNamadaNetwork
    constructor(namadaNetwork: iNamadaNetwork) {
        this.namadaNetwork = namadaNetwork
    }
}