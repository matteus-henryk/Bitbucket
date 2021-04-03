const startAccordion = () => {
  // const listDescriptionAccordion = document.querySelectorAll('.slide-know-more .description');
  const listBtnAccordion = document.querySelectorAll('.slide-know-more .btn-accordion');


  listBtnAccordion.forEach(button => {
    button.addEventListener('click', function() {
      toggleAccordion(this);
    });
  })
  
};

function toggleAccordion(button) {
  const imgContainer = button.closest('div');
  const accordion = imgContainer.nextElementSibling;
  accordion.classList.toggle("active");
}

export default startAccordion;