import { ScriptLoader, enableHotReload } from 'crx-esm';

enableHotReload();

const loader = new ScriptLoader();
loader.contentScript = 'content.js';
