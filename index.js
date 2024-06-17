export default function dropDown(handeler,target,ToggleClass,event){
    document.querySelector(handeler).addEventListener(event,()=>{
        document.querySelector(target).classList.toggle(ToggleClass);
    });
}

