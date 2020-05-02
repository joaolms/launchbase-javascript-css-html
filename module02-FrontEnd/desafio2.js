const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.card-course-content');
const modal = document.querySelector('.modal');


for (let course of courses) {
    course.addEventListener("click", function() {
        const courseName = course.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseName}`;
    })
}

// Close
document.querySelector(".close-icon").addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
});

// Maximize
document.querySelector(".resize-icon").addEventListener("click", function() {
    if (modal.classList.contains('large')) {
        modal.classList.remove('large');
    } else {
        modal.classList.add('large');
    }
});