let mainContentArea = document.getElementById("main-content-area");

fetchData("Data/data.json").then((data) => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    //ØVELSE 1
    /*
    if (data[i].author == "Jane Doe") {
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
        data[i].author +
        "</p>" +
        "<p class='contact'>" +
        data[i].email +
        "</p>" +
        "</div>";

      mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
    }
      */

    //ØVELSE 2

    /*
    let articleToInsert = "";

    if (data[i].author == "Foo Bar") {
      articleToInsert =
        "<div id='" +
        data[i].id +
        "' class='content'>" +
        "<h1>" +
        data[i].heading +
        "</h1>" +
        "<p class='inner-content'>" +
        "CENSURERET" +
        "</p>" +
        "</div>";
    } else {
      articleToInsert =
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
        data[i].author +
        "</p>" +
        "<p class='contact'>" +
        data[i].email +
        "</p>" +
        "</div>";
    }
    mainContentArea.innerHTML = mainContentArea.innerHTML + articleToInsert;
    */

    //ØVELSE 3:
    /*
    let author = "";
    let email = "";

    if (data[i].author === "John Doe") {
      author = "Anonymous";
    } else {
      author = data[i].author;
      email = data[i].email;
    }

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
*/

    //ØVELSE 3.1 - BONUS:

    let author = "";
    let email = "";
    let content = "";

    if (data[i].author === "John Doe") {
      author = "Anonymous";
      content = data[i].content;
    } else if (data[i].author === "Foo Bar") {
      content = "Censored";
    } else {
      author = data[i].author;
      email = data[i].email;
      content = data[i].content;
    }

    let articleToInsert =
      "<div id='" +
      data[i].id +
      "' class='content'>" +
      "<h1>" +
      data[i].heading +
      "</h1>" +
      "<p class='inner-content'>" +
      content +
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

  //ØVELSE 3.2 - BONUS - BONUS

  let authors = document.getElementsByClassName("author");

  for (let i = 0; i < authors.length; i++) {
    if (authors[i].innerHTML === "Anonymous") {
      console.log(authors[i]);
      authors[i].style.color = "darkblue";
    }
  }
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
