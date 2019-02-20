const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
export const Capitalize = (value) => {
    if (value == null) {
        return "";
    }
    const words = value.split(" ");
    const capitalizedWords = words.map(word => {
        const wordLower = word.toLowerCase();
        if (wordLower === 'e' ||
            wordLower === 'em' ||
            wordLower === 'da' ||
            wordLower === 'de' ||
            wordLower === 'do' ||
            wordLower === 'das' ||
            wordLower === 'dis' ||
            wordLower === 'dos' ||
            wordLower === 'el') {
            return word.toLowerCase();
        }
        return capitalizeFirstLetter(word);
    });
    return capitalizedWords.join(" ");
};
