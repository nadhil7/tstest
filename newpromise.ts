 function getall(num:number,num1:number):Promise<number>{
 return new Promise <number>((resolve,reject)=>{
     setTimeout(()=>{
     const result =num+num1;
     const success  = false;
     const erer :string ="just checking the promise";
     
     if(success){
         resolve(result);
     }
     else{
         reject(erer)
     }
 },2000);
 });
}
getall(56,44).then((sum)=>{
    console.log("sum is :",sum)})
    .catch((err)=>{
        console.log("err occurd :",err)
})