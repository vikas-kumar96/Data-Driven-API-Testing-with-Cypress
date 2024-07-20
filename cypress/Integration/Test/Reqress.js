///<reference types="Cypress"/>
describe('Reqress Rest API Testing', () => {
    const baseurl = "https://reqres.in/";
    it('List of User', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"api/users?page=2",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });
});

describe('Reqress Rest API Testing', () => {
    const baseurl = "https://reqres.in";
    it('Single User', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/api/users/2",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });
});

describe('Reqress Rest API Testing', () => {
    const baseurl = "https://reqres.in";
    it('SINGLE USER NOT FOUND', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/api/users/23",
            headers:{
                "Content-Type": "application/json"
            }, failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(404);
        })
    });
});

describe('Reqress Rest API Testing', () => {
    const baseurl = "https://reqres.in";
    it('LIST of RESOURCE', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/api/unknown",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });
});

describe('Reqress Rest API Testing', () => {
    const baseurl = "https://reqres.in";
    it('SINGLE RESOURCE', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/api/unknown/2",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });
});

describe('Reqress Rest API Testing', () => {
    const baseurl = "https://reqres.in";
    it('SINGLE RESOURCE NOT FOUND', () =>{
        cy.request({
            method:'GET',
            url:baseurl+"/api/unknown/23",
            headers:{
                "Content-Type": "application/json"
            }, failOnStatusCode: false
        }).then((Response)=>{
            expect(Response.status).to.equal(404);
        })
    });
    it('POST CREATE USER', () =>{   
        cy.request({
            method:'POST',
            url:baseurl+"/api/users",
            headers:{
                "Content-Type": "application/json"
            }, body: {
                name: "morpheus",
                job: "leader"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(201);
        })
});

    it('PUT UPDATE USER', () =>{
        cy.request({
            method:'PUT',
            url:baseurl+"/api/users/2",
            headers:{
                "Content-Type": "application/json"
            }, body: {
                name: "morpheus updated",
                job: "new leader"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });
    it('patch', ()=>{
        cy.request({
            method:'PATCH',
            url:baseurl+"/api/users/2",
            headers:{
                "Content-Type": "application/json"
            }, body: {
                job: "updated leader"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });

    it('DELETE USER', () =>{
        cy.request({
            method:'DELETE',
            url:baseurl+"/api/users/2",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(204);
        })
    });

    it('GET LIST OF POSTS', ()=>{
        cy.request({
            method:'GET',
            url:baseurl+"/api/posts",
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(200);
        })
    });
});
