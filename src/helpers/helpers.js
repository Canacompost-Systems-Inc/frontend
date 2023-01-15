export const handleTitles = (val) => {
    if (val.includes("_")) {
        const textArray = val.split("_");
        
        return textArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    } else {
        return val.charAt(0).toUpperCase() + val.slice(1);
    }
}
