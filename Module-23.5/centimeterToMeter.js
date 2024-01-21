function CentimeterToMeter(centimeter) {
    let meter = centimeter / 100;

    return meter;
}

let meterOut = CentimeterToMeter(125);
console.log(meterOut);