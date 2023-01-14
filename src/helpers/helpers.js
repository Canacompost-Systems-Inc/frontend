export const handleTitles = (val) => {
    if (val.includes("_")) {
        const textArray = val.split("_");
        
        return textArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } else {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
}

export const constrainNumber = (val) => {
    // Cast to floating point
    var x = +val;
    if (x >= 1000000000) {
        return Math.floor(x / 1000000000) + "b";
    } else if (x >= 1000000) {
        return Math.floor(x / 1000000) + "k";
    } else if (x >= 1000) {
        return Math.floor(x / 1000) + "k";
    } else if (x >= 100) {
        return Math.floor(x);
    }
    return (Math.floor(x * 10) / 10).toFixed(1);
}