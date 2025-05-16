import react from "react"

const Child=(props)=>{
    const{myname,myarr}=props;
    console.log(myarr);
    return(
        <>
        <h2>Name:{props.myname} </h2>

        {/*<p>Name:{myarr[0].name}</p>
        <p>Cost:{myarr[0].cost}</p>
        <p>Colour:{myarr[0].colour}</p>
        <p>Name:{myarr[1].name}</p>
        <p>Cost:{myarr[1].cost}</p>
        <p>Colour:{myarr[1].colour}</p>
        <p>Name:{myarr[2].name}</p>
        <p>Cost:{myarr[2].cost}</p>
        <p>Colour:{myarr[2].colour}</p>*/}

       {
        myarr.map((item)=>{
              console.log(item);
              return <div>
                <p>Name:{item.name}</p>
                <p>Colour:{item.colour}</p>
                <p>Cost:{item.cost}</p>
              </div>
        })
       }

        {/* <p>{myarr[2]}</p> */}
        </>
    )
}
export default Child