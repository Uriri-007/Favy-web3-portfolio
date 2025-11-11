const allText = document.querySelector("section.content")
const copyTextBtn = document.getElementById("copy-text")

function copyText() {
  const firstText = allText.innerText;
  navigator.clipboard.writeText(firstText)
    .then(() => {
      return
    })
    .catch(err => {
      alert(`Unable to copy
      ${err}`)
    })
}

copyTextBtn.addEventListener("click", () => {
  copyText()
})