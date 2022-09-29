const dropArea = document.querySelector(".drag-area"),
      dragText = dropArea.querySelector("header"),
      button = dropArea.querySelector("button"),
      input = dropArea.querySelector("input");
let file;

button.onclick = () => {
      input.click();
}

input.addEventListener("change", function () {
      file = this.files[0];
      dropArea.classList.add("active");
      showFile();
});


dropArea.addEventListener("dragover", (event) => {
      event.preventDefault();
      dropArea.classList.add("active");
      dragText.textContent = "Release to Upload File";
});


dropArea.addEventListener("dragleave", () => {
      dropArea.classList.remove("active");
      dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop", (event) => {
      event.preventDefault();
      file = event.dataTransfer.files[0];
      showFile();
});

function showFile() {
      let fileType = file.type;
      let validExtensions = ["image/jpeg", "image/jpg", "image/png", "application/pdf",
            ".doc", ".docx", ".xml", "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      console.log(fileType)
      if (validExtensions.includes(fileType)) {
            let fileReader = new FileReader();
            fileReader.onload = () => {
                  let fileURL = fileReader.result;
                  dropArea.classList.remove("active");
                  dragText.textContent = "The file is successfully uploaded."
                  setTimeout(() => {
                        dragText.textContent = "Drag & Drop to Upload File"
                  }, 2000)
            }
            fileReader.readAsDataURL(file);



      } else {
            alert("This is not an valid file!");
            dropArea.classList.remove("active");
            dragText.textContent = "Drag & Drop to Upload File";
      }
}