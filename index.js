class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, "");
  }

  static titleize(sentence) {
    const exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const result = [];
    const words = sentence.split(" ");
    for (let index = 0; index < words.length; index++) {
      if (index == 0) {
        result.push(this.capitalize(words[index]));
      } else {
        if (exceptions.includes(words[index])) {
          result.push(words[index]);
        } else {
          result.push(this.capitalize(words[index]));
        }
      }
    }
    return result.join(" ");
  }
}
