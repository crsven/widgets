const fs = require("fs");

const fetchWidget = async () => {
  const response = await fetch(process.env.ANIMAL_WIDGET_VAL_URL);
  const json = await response.json();
  return json.data;
};

fetchWidget().then((widget) => {
  try {
    fs.writeFileSync("./output/animal-widget.json", JSON.stringify(widget));
  } catch (err) {
    console.error(err);
  }
});
