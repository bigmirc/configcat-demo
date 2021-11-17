let configcatClient = configcat.createClient(
  "VKjZCKsQDEOARlF8tTjlfQ/FID-1rd9EUK384xlMCNA_w"
);

configcatClient.getValue("isMyFirstFeatureEnabled", false, (darkMode) => {
  let contentDiv = document.getElementById("content");

  if (darkMode) {
    contentDiv.classList.add("darkMode");
    contentDiv.innerHTML = "We are in dark mode!";
  } else {
    contentDiv.classList.add("lightMode");
    contentDiv.innerHTML = "We are in light mode!";
  }
});
