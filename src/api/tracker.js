import axios from "axios";

export default axios.create({

    //ngrok : va ouvrire une cnx directe à partir de votre
    //API Express et vous donner une URL publique
    //pour que vous pouvez connectez avec votre smartphone
    baseURL:'http://5a3f-197-244-167-53.ngrok.io'

    
});