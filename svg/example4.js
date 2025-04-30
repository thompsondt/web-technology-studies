function setBackground(new_class, original_classes) {
   const canvas_background =  document.querySelector(".background");
   canvas_background.classList = original_classes + " " + new_class;
}

function main() {
  const save_states = {"background_classes": document.querySelector(".background").classList.value};
  const dot_list = document.querySelectorAll(".dot");
  dot_list.forEach((dotItem) => {
    dotItem.addEventListener("click", (e) =>{
        const class_list = e.currentTarget.classList;
        const last_item = class_list.item(class_list.length -1);
        setBackground(last_item, save_states.background_classes);
    });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
    main();
});
