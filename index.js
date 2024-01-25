confirm("Website ini dibuat oleh Joshua Gara, mau coba ?");
alert("Mohon menekan abjad Q terlebih dahulu. Thanks")

let numberOfButtons = document.querySelectorAll(".btn").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "Q":
        let q = new Audio("sounds/Q.mp3");
        q.play();
        break;

      case "A":
        let a = new Audio("sounds/A.mp3");
        a.play();
        break;

      default:
        console.log(buttonInnerHTML);
    }
  });
}