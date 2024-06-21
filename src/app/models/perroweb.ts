//esta clase representa el objeto recibido del api web de perros
export class Perroweb {

    /**
     * {
    "message": "https://images.dog.ceo/breeds/dingo/n02115641_2701.jpg",
    "status": "success"
}
     */
    message:string;
    status:string;
    
    constructor ()
    {
        this.message="";
        this.status="";

    }
}
