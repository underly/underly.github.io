import {
	RESULTS_PER_PAGE,
	paginationBtnBackEl,
	paginationBtnNextEl,
	paginationEl,
	paginationNumberBackEl,
	paginationNumberNextEl,
	state,
} from '../common.js';
import renderJobList from './JobList.js';

const renderPaginationButtons = () => {
	// render back button on page > 2
	if (state.currentPage >= 2) {
		paginationBtnBackEl.classList.remove('pagination__button--hidden');
	} else {
		paginationBtnBackEl.classList.add('pagination__button--hidden');
	}

	// render next button if there are more job items to be shown
	if (
		state.searchJobItems.length - state.currentPage * RESULTS_PER_PAGE <=
		0
	) {
		paginationBtnNextEl.classList.add('pagination__button--hidden');
	} else {
		paginationBtnNextEl.classList.remove('pagination__button--hidden');
	}

	// update page numbers
	paginationNumberNextEl.textContent = state.currentPage + 1;
	paginationNumberBackEl.textContent = state.currentPage - 1;

	// unfocus buttons
	paginationBtnNextEl.blur();
	paginationBtnBackEl.blur();
};

const clickHandler = (e) => {
	const clickedButtonEl = e.target.closest('.pagination__button');

	if (!clickedButtonEl) return;

	const nextPage = clickedButtonEl.className.includes('--next') ? true : false;

	// update state
	nextPage ? state.currentPage++ : state.currentPage--;

	renderPaginationButtons();
	renderJobList();
};

paginationEl.addEventListener('click', clickHandler);

export default renderPaginationButtons;
