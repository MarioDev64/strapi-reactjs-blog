const setElypsis = (string) => {
    let length = string.length;
    let checker = string.endsWith(" ");
    if(checker){
        string = string.substring(0, length - 2);
    }
    return string.concat("...");
}

export default setElypsis;