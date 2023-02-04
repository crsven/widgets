const fs = require("fs");

const fetchWidget = async () => {
  const response = await fetch(process.env.WIDGET_VAL_URL);
  const json = await response.json();
  return json.data;
};

fetchWidget().then((widget) => {
  try {
    fs.writeFileSync("./output/widget.json", JSON.stringify(widget));
  } catch (err) {
    console.error(err);
  }
});
