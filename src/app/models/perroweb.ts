//esta clase representa el objeto recibido del api web de perros
export class Perroweb {

    /**
     * {
    "message": "https://images.dog.ceo/breeds/dingo/n02115641_2701.jpg",
    "status": "success"
}
     */
    id:number;
    message:string;
    status:string;
    raza:string;
    
    constructor ()
    {
        this.id= 0;
        this.message="";
        this.status="";
        this.raza="";

    }
}
