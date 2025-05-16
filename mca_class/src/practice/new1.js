// const getUserData = (callback) =>{
//     setTimeout(()=>{
//         console.log("getdata");
//         callback();
//     },2000)
// }
// const validateUserData =(callback)=>{
//     setTimeout(()=>{
//         console.log("validating the data");
//         // kfdssrExportAllKey;
//         callback();

//     },2000)
// }
// const updateUserData=(callback)=>{
//     setTimeout(()=>{
//         console.log("update the data");
//         callback();
//     },2000)
// }

// getUserData(()=>{
//     validateUserData(()=>{
//         updateUserData(()=>{
//             console.log("completed");
//         })
//     })
// })


// ================================================================

// const mypromise = new Promise((resolve, reject)=>{
//     let flag = false;
//     if(flag){
//         resolve("success");
//     }
//     else{
//         reject("failed");
//     }
// });

// mypromise.then((result) =>console.log(result))
//         .catch((er)=>console.log("error:",er));


// ================================

const getUserData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("sucess");
        },2000)
    })
}
const validUserData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            // reject();
           console.log("validating")
        },2000)
    })
}
const updateUserData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("await");
            console.log("updating");
            // reject("rejected");
        },2000)
    })
}

// getUserData().then(updateUserData())
//              .then(()=>console.log("completed task"))
//              .catch((er)=>console.log(er));

const Mytask = async()=>{
    // await updateUserData()


    // try{
    //     await updateUserData();
    // }
    // catch(er){
    //     console.log("error",er);
    //     }

    // await updateUserData()
    //       .then((result)=>console.log(result))
    //       .catch((er)=>console.log("error",er))

   try{
    const dt = await updateUserData();  // until execute it waits
    console.log(dt);       
    console.log("getting");
   }
   catch(er){
    console.log("error",er);
   }
}
Mytask();

// =============================================================================================




