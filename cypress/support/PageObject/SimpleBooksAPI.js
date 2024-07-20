class RestApi{

   auth(method, burl, endpoints, data){
   
        cy.request({
            method:method,
            url:burl+endpoints,
            body:data,
            headers:{
                "Content-Type": "application/json"
            }
        }).then((Response)=>{
            expect(Response.status).to.equal(201);
             let vk = Response.body.accessToken
             cy.log(vk);
        });
    }
}
export default RestApi;