const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const NoBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const NoBtnRect = NoBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
	question.innerHTML = "I Love You Too!😍";
});

NoBtn.addEventListener('mouseover', () => {
	const i = Math.floor(Math.random() * (wrapperRect.width - NoBtnRect.width)) + 1;
	const j = Math.floor(Math.random() * (wrapperRect.height - NoBtnRect.height)) + 1;
	NoBtn.style.left = i + "px";
	NoBtn.style.top = j + "px";
});