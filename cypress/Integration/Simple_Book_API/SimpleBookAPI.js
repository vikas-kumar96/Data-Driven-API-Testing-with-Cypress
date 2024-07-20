///<reference types="Cypress"/>
describe('Simple Books API', () => {
    const baseurl = "https://simple-books-api.glitch.me";
    let vk;
    let ID;
    const randomEmail = Math.random().toString(2).substring(5);
    it('Status', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/status",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });

    it('List of books', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/books",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });

    it('Get a single book', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/books/2",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });

    it('API Authentication', ()=>{
        cy.request({
            method:'POST',
            url:baseurl+"/api-clients/",
            body:{
                "clientName": "vikas",
             "clientEmail": "VikasB"+randomEmail+"@gamil.com"
            },
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(201);
             vk = Response.body.accessToken
            cy.log(vk)
        });
    });

    // {"accessToken":"81c4079c64ccd6c36dead567c3be7f5d972e4c1597462747f6dc1491ea5fd484"}

    it('Submit an Order', ()=>{
        cy.request({
            method:'POST',
            url:baseurl+"/orders",
            body:{
                "bookId": 1,
                "customerName": "John"
              },
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+vk
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(201);
            const vk = JSON.parse(JSON.stringify(Response.body))
            cy.log(vk)
        });
    });

    it('Get all Order', ()=>{
        cy.request({
            method:'GET',
            url:baseurl+"/orders",
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+vk
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
            const vk = JSON.parse(JSON.stringify(Response.body))
            ID = vk[0].id
            cy.log(vk)
         });
    });

    it('Get an order', ()=>{
        cy.request({
            method:'GET',
            url:baseurl+"/orders/"+ ID,
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+vk
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
            const vk = JSON.parse(JSON.stringify(Response.body))
            cy.log(vk)
         });
    });

    it('Update an order', ()=>{
        cy.request({
            method:'PATCH',
            url:baseurl+"/orders/"+ ID,
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+vk
            },
            body:{
                "customerName": "Vikas"
              }
        }).then((Response)=>{
            expect(Response.status).to.equal(204);
            const vk = (JSON.stringify(Response.body))
            cy.log(vk)
         });
    });

    it('Delete an order', ()=>{
        cy.request({
            method:'DELETE',
            url:baseurl+"/orders/"+ ID,
            headers:{
                "Content-Type": "application/json",
                "Authorization": "Bearer "+vk
            },
            body:{
                "customerName": "Vikas"
              }
        }).then((Response)=>{
            expect(Response.status).to.equal(204);
            const vk = (JSON.stringify(Response.body))
            cy.log(vk)
         });
    });
});