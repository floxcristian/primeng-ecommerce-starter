export type LoadedStatus = 'ALREADY_LOADED' | 'LOADED' | 'ERROR';

export interface ILoadScriptResponse {
    status: LoadedStatus,
    loaded: boolean;
}