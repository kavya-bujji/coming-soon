const data={
    titleSpan:"We're",
    title:" coming soon",
    description:"Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
    inputLabel:"Email Address",
    message:{
        success:  "Thanks! We have received your request!",
        error:  "Provide a valid email"
    },
}
loadData();
function loadData () {
    document.getElementById("title").innerHTML="<span>"+data.titleSpan+"</span> "+data.title;
    document.getElementById("input-text").setAttribute("placeholder",data.inputLabel);
    document.getElementById("description").innerHTML=data.description;
    
}

function addClass (className,elementId){
    const element = document.getElementById(elementId);
    const classes = element.className.split(" ");
    if (classes.indexOf(className) == -1) {
      element.className += " " + className;
    }
}
function removeClass (className,elementId){
    const element = document.getElementById(elementId);
    element.classList.remove(className);
}

function validate(id){
    const input= document.getElementById(id).value;
    const validEmail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = validEmail.test(input);
    if(!isValid){
        removeClass ("hidden","message");
        removeClass ("hidden","message-icon");
        addClass ("input-invalid",id);
        document.getElementById("message").innerHTML=data.message.error;
    }else{
        removeClass ("input-invalid",id);
        removeClass ("hidden","message");
        addClass ("hidden","message-icon");
        document.getElementById("message").innerHTML=data.message.success;
    }


}