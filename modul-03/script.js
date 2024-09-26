let mainContentArea = document.getElementById("main-content-area");

fetchData("/data.json").then((data) => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let author = "";
    let email = "";

    let articleToInsert =
      "<div id='" +
      data[i].id +
      "' class='content'>" +
      "<h1>" +
      data[i].heading +
      "</h1>" +
      "<p class='inner-content'>" +
      data[i].content +
      "</p>" +
      "<p class='author'>" +
      author +
      "</p>" +
      "<p class='contact'>" +
      email +
      "</p>" +
      "</div>";

    mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
  }
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
