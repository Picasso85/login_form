// skript for bouncing letters 


const labels = document.querySelectorAll(".form_control label")

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 100}ms">${letter}</span>`
    )
    .join("")
})
