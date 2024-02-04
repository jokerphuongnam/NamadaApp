import { NamadaImpl } from "../data/network/namada_network";
import { DIContainer } from "./di";
import { Query } from '@namada/shared/src';

export function diContainer(): DIContainer {
    const queryEndpoint = 'https://rpc.luminara.icu:443'
    const query = new Query(queryEndpoint);
    return {
        namadaNetwork: new NamadaImpl(query)
    };
}