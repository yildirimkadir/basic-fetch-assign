fetch('https://api.github.com/users')
.then((res) => {
    if(!res.ok) {
        throw new Error(`Somthing went wrong: ${res.status}`)
    }
    return res.json();
})
.then((data) => updateDom(data))
.catch((err) => console.log(err));

const updateDom = (users) => {
    const userDiv = document.querySelector(".users");
    users.forEach((user) => {
        const {login, avatar_url, html_url} = user;
        
        userDiv.innerHTML += `
        <h1 class="text-dark">Name: ${login} </h1>
        <img src=${avatar_url} width="50%" class"mt-2" alt="user_img" />
        <h3>Html_Url:${html_url}</h3>`;
    });
        
};
