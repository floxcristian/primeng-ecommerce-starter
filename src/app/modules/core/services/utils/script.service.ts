import { Injectable } from "@angular/core";
import { ILoadScriptResponse } from "./load-script-response.interface";

@Injectable()
export class ScriptService {

    loadScript(id: string, url: string): Promise<ILoadScriptResponse> {
        return new Promise((resolve, reject) => {
            if (id && document.getElementById(id)) {
                resolve({ loaded: true, status: 'ALREADY_LOADED' });
            }
            const body = document.body;
            let script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = '';
            script.src = url;
            script.id = id;
            script.onload = () => {
                resolve({ loaded: true, status: 'LOADED' });
            };
            script.onerror = (error: any) => resolve({ loaded: false, status: 'ERROR' });
            script.async = true;
            script.defer = true;
            body.appendChild(script);
        });
    }
}