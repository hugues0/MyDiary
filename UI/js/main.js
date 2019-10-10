function openSlideMenu() {
    document.getElementById('menu').style.width='250px';
    //document.getElementById('content').style.marginLeft ='250px';
    

}
function closeSlideMenu() {
    document.getElementById('menu').style.width = '0';
    //document.getElementById('content').style.marginLeft = '0';
    

}
let dialogbox = message => {
    // Get the modal
    const modal = document.querySelector("#dialogbox");

    const divMsg = document.querySelector(".dialog-content-js");

    divMsg.textContent = message;
    // Display the modal
    modal.style.display = "block";
};

const closeDialog = () => {
    document.querySelector(".modal").style.display = "none";
    const modal = document.querySelector("#dialogbox");
    document.querySelector(".new-entry").style.display = "none";
    document.querySelector(".update-entry").style.display = "none";
    document.querySelector(".view-entry").style.display = "none";
    modal.style.display = "none";
};

const switchbtnauth = () => {
    const authFormElements = document.getElementsByClassName("auth-area");
    Array.from(authFormElements).forEach(form =>
        form.classList.toggle("form-hidden")
    );
};



const showAddNew = () =>{
    document.querySelector(".new-entry").style.display ="block";
}

const showUpdateEntry = () => {
    document.querySelector(".update-entry").style.display = "block";
}

const showViewEntry = () => {
    document.querySelector(".view-entry").style.display = "block";
}



