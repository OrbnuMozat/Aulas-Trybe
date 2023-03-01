"use strict";
var mesureUnit;
(function (mesureUnit) {
    mesureUnit[mesureUnit["km"] = 1000] = "km";
    mesureUnit[mesureUnit["hm"] = 100] = "hm";
    mesureUnit[mesureUnit["dam"] = 10] = "dam";
    mesureUnit[mesureUnit["m"] = 1] = "m";
    mesureUnit[mesureUnit["dm"] = 0.1] = "dm";
    mesureUnit[mesureUnit["cm"] = 0.01] = "cm";
    mesureUnit[mesureUnit["mm"] = 0.001] = "mm";
})(mesureUnit || (mesureUnit = {}));
function convertS(value, unitBase, unitConvert) {
    return (value * mesureUnit[unitBase]) / mesureUnit[unitConvert];
}
;
console.log(`Conversão de 10000m para km: ${convertS(10000, 'm', 'km')}km`);
