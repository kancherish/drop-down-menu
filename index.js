export default function dropDown(handeler,target,ToggleClass,event="click"){
    document.querySelector(handeler).addEventListener(event,()=>{
        document.querySelector(target).classList.toggle(ToggleClass);
    });
}

