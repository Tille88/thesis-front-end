import "../style/page-useraccept.scss";
import {cfg} from "./cfg";
import {ClientStorage} from "./clientstorage";

const formElement = document.querySelector("form");
const submitButton = document.querySelector(".submit");

document.body.addEventListener("submit", function(event) {
    event.preventDefault();
});   

submitButton.addEventListener("click", function(e){
    e.preventDefault();
    const data = {};
    for (const pair of new FormData(formElement)) {
        data[pair[0]] = pair[1];
    }

    fetch(`${cfg.fetchBaseURL}${cfg.accExt}`, {
        method: 'post',
        body: JSON.stringify(Object.assign(data, {uuid: ClientStorage().UUID()})),
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(function(){
        window.location.href = "./thankyou.html";
    });
});





