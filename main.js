const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem() {

    tabContentItems.forEach(item => {
		item.classList.remove('show');
	}); 

    tabItems.forEach(item => {
		item.classList.remove('active');
	});

    this.classList.add('active');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
    
	tabContentItem.classList.add('show');
}
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});