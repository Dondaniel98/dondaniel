var typed = new Typed(".text",{
    strings:["Frontend Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

const form = document.querySelector('contact');
function sendEmail(){
    Email.send({
        Host : "s1.maildns.net",
        Username : "dondanielymofficial@gmail.com",
        Password : "3A1DB8EF87CF94E60676021DA3CE7A15B5D5",
        To : 'dondanielymofficial@gmail.com',
        From : "dondanielymofficial@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});
