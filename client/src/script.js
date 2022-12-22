let htmlString =
  "<div><div><p><form><h1><div><div><div><p><form><h1><div><div><div><p><form><h1><div>";
// let htmlString = "<div><div><div><div>";
const getClosingTags = function (string) {
  let answer = [];

  string.split(">").forEach((part) => answer.push(part + ">"));

  let tags = answer.map((tag) =>
    tag.split("<").join(" ").split(">").join(" ").trim()
  );

  answer.pop();
  tags.pop();

  console.log(tags);

  for (let i = tags.length - 1; i >= 0; i--) {
    console.log(tags[i]);

    answer.push("</" + tags[i] + ">");
  }

  return answer.join("");
};

console.log(getClosingTags(htmlString));
