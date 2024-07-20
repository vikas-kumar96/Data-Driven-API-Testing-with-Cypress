///<reference types="Cypress"/>
import RestApi from "../../support/PageObject/SimpleBooksAPI";
describe('Simple books api testing-POM', ()=>{

let burl="https://simple-books-api.glitch.me";

const randomEmail = Math.random().toString(2).substring(5);
    
let RAPI = new RestApi();

    it('auth', () =>{
        RAPI.auth("POST",burl,"/api-clients/", {
                "clientName": "vikas",
             "clientEmail": "VikasB"+randomEmail+"@gamil.com"
            })

        });
    });
