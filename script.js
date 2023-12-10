const img = document.querySelector("#image");
const userName = document.querySelector("#user_name");
const userDetails = document.querySelector("#user_details");
const repoCount = document.querySelector("#repos");
const btn = document.querySelector("#url-btn");
const generateCardBtn = document.querySelector("#card");
const conatiner = document.querySelector(".container");
const message = document.querySelector(".message");


generateCardBtn.addEventListener("click", () => {
  const userGitUrl = document.querySelector("#git-url").value;
  const url = `https://api.github.com/users/${userGitUrl}`;
  // console.log(userGitUrl)
  conatiner.classList.remove("hide");
  message.classList.add("hide");
  callApi(url);
});

async function callApi(url) {
  const res = await fetch(url);
  const data = await res.json();
  img.src = `${data.avatar_url}`;
  userName.innerHTML = `${data.login}`;
  userDetails.innerHTML = `${data.bio}`
  repoCount.innerHTML = `Your Public Repositories: ${data.public_repos}`;
  btn.addEventListener("click", () => {
    window.open(`${data.html_url}`, '_blank');
  });
}

// callApi();



