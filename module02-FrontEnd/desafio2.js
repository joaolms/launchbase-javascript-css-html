const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.card-course-content');

for (let course of courses) {
    course.addEventListener("click", function() {
        const courseName = course.getAttribute("id");
        modalOverlay.classList.add('active');
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseName}`;
    })
}

document.querySelector(".close-icon").addEventListener("click", function() {
    modalOverlay.classList.remove('active');
    modalOverlay.querySelector("iframe").src = "";
});

