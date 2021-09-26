const removeClass = (classToRemove, searchClass) => {
    let $domElements = document.getElementsByClassName(searchClass);
    for (let item of $domElements) {
      item.classList.remove(classToRemove);
    }
  };

export default removeClass