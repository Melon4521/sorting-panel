import myJson from '../api/demoDataTires.json' assert { type: 'json' };

import selectGenerate from './sorting-panel/selectGenerate/script.js';
import cardGenerate from "./cards/cardGenerate/script.js";

selectGenerate(myJson);
cardGenerate(myJson);