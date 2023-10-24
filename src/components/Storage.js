import { state } from '../common.js';

// check local storage contents
const storedJobItems = localStorage.getItem('bookmarkJobItems');
if (storedJobItems) {
	state.bookmarkJobItems = JSON.parse(storedJobItems);
}
