window.addEventListener('load', ()=>{
    let form= document.querySelector("#new-task-form");
    let input= document.querySelector("#new-task-input");
    let list_el= document.querySelector("#tasks");
    
    form.addEventListener('submit', (e)=>{
     e.preventDefault();
     const task=input.value;
     if(!task){
             alert("Please Put an Task In the box");
             return;
             //document.getElementById("error").innerHTML="Put a value first";
           
        }
        
        const task_el= document.createElement("div");
        task_el.classList.add("task");
        const task_content_el= document.createElement("div");
        task_content_el.classList.add("content");
        task_el.appendChild(task_content_el);
       
        
        

        const task_input_el= document.createElement("input");
        task_input_el.classList.add("text");
        const taske=document.querySelector(".text");
        task_input_el.type="text";
        task_input_el.value=task;
        task_input_el.setAttribute("readonly", "readonly");
        task_content_el.appendChild(task_input_el);
        
//action div create
        const task_actions_el= document.createElement("div");
        task_actions_el.classList.add("actions");
        //edit button create
        const task_edit_el= document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML="Edit";
        //delete button create
        const task_delete_el= document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML="Delete";
        //Adding edit button to show, in the actions class
        task_actions_el.appendChild(task_edit_el);
         //Adding delete button to show, in the actions class
        task_actions_el.appendChild(task_delete_el);
        //Adding edit and delete buttons with the input tasks
        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        input.value="";

        //designing the button's functionality
        task_edit_el.addEventListener('click', ()=>{
            if(task_edit_el.innerText.toLowerCase()=="edit"){
            task_input_el.removeAttribute("readonly");
            task_input_el.focus();
            task_edit_el.innerText="Save";
        }else{
            task_input_el.setAttribute("readonly", "readonly");
            task_edit_el.innerText="Edit";
        }

        });
        task_delete_el.addEventListener('click', ()=>{
            list_el.removeChild(task_el);
        })

        
    })
        


    

    })
