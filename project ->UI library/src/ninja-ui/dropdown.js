import '/src/ninja-ui/styles/dropdown.css';

class Dropdown{
    constructor(container){
        this.container=container;
        this.tigger=container.querySelector('.trigger');
        this.content=container.querySelector('.content');
    }
    init(){
        this.tigger.addEventListener('click',()=>{
            this.tigger.classList.toggle('active');
            this.content.classList.toggle('active');
        })
    }
}

export { Dropdown as default };
