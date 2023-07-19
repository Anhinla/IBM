// user pop-up

const userBtn = document.querySelector('.user-btn');
const user = document.querySelector('.user-pop-up');
userBtn.addEventListener('click',function(){
    user.classList.toggle('show-user-info');
})

// search pop up

const searchBtn = document.querySelector('.search-btn');
const exitBtn = document.querySelector('.exit');
const search = document.querySelector('.search-pop-up');
searchBtn.addEventListener('click',function(){
    search.classList.add('show-search-pop-up');
});
exitBtn.addEventListener('click',function(){
    search.classList.remove('show-search-pop-up');
});

//feedback popup

const feedback = document.querySelector('.feedback-btn');
const form = document.querySelector('.feedback-form');
feedback.addEventListener('click',function(){
    form.classList.add('show-feedback-form');
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click',function(){
    form.classList.remove('show-feedback-form');
});

//
const blogBtn = document.querySelector('.blog-btn');
const blog = document.querySelector('.blog');
blogBtn.addEventListener('click',function(){
    blog.classList.toggle('style-blog')
});