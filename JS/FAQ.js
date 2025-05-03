document.addEventListener('DOMContentLoaded', () => {
    const expandButtons = document.querySelectorAll('.faq-item .question .expand-button');
    const faqBoard = document.querySelector('.kanban-board'); // For potential background blur

    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const faqItem = this.closest('.faq-item');
            const answer = faqItem.querySelector('.answer');
            const isExpanded = faqItem.classList.contains('expanded');

            if (isExpanded) {
                // Minimize
                faqItem.classList.remove('expanded');
                answer.style.display = 'none';
                this.textContent = '+'; // Change button text back to "+"
                if (faqBoard) {
                    faqBoard.classList.remove('blurred');
                }
            } else {
                // Expand
                faqItem.classList.add('expanded');
                answer.style.display = 'block';
                this.textContent = '-'; // Change button text to "-"
                if (faqBoard) {
                    faqBoard.classList.add('blurred');
                }
            }
        });
    });
});