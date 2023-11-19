// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");
// const buttons = document.getElementById("button");
// // let li = document.createElement("li");
// // let span = document.createElement("span");

// buttons.addEventListener("click", () => {
//   if (inputBox.value == "") {
//     alert("Enter Your Text");
//   } else {
//     let li = document.createElement("li");
//     li.innerHTML = inputBox.value;
//     inputBox.value = "";
//     listContainer.appendChild(li);
//     let span = document.createElement("span");
//     span.innerHTML = " &#10006";
//     span.classList.add("span1");
//     li.appendChild(span);
//     let span2 = document.createElement("p");
//     span2.innerHTML = "&#9998";
//     li.appendChild(span2);
//     span2.classList.add("span2");
//   }
// });
// listContainer.addEventListener(
//   "click",
//   function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//     } else if (e.target.tagName === "SPAN") {
//       e.target.parentElement.remove();
//     } else if (e.target.tagName === "P") {
//       e.target.classList.add("para");
//     }
//   },
//   false
// );
