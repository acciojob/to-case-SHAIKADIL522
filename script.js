function toCase(text) {
  // write your code her
        if (text === null || text === undefined || text === "") {
        return "-";
    }

    return text.toLowerCase() + "-" + text.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
