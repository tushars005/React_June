
import React,{useState, useEffect} from 'react';
import axios from "axios"
import styles from "./Table.module.css"


const Table = () => {

    const [content, setcontent] = useState([])
    const [display, setdisplay] = useState([])
    const [active, setactive] = useState("")
    const [detail, setdetail] = useState({
        id:"",
        firstName:"",
        lastName:"",
        
        address:"",
        city:"",
        state:"",
        zip:"",
        description:""

    })
    const [input , setinput] = useState("")
    useEffect(()=>{
        axios("http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D")
        .then(res=>{
            setcontent(res.data);
            setdisplay(res.data);
        })
        debugger
    },[])

    // const handleclick=(item)=>{
    //     setdetail(item);
    // }

    let all=[]
    const handlesearch=()=>{
        let arr=[]
        content.map((item)=>{
            if(item.firstName.toLowerCase().includes(input)||item.lastName.toLowerCase().includes(input)||item.email.toLowerCase().includes(input)||item.phone.toLowerCase().includes(input)){
                arr = [...arr,item]
            }
        }
        )
        setdisplay(arr)
        
    }
    return ( <>

        <div id="overlay">
        <img src="./img/preloader.gif" alt="Preloader icon" />
    </div>
    
    
    <main>

        <div id="table-section">

            

                <input type="text" placeholder="Enter something" name="search-box" id="search-box" onChange={(e)=>{setinput(e.target.value)}} />
                <button onClick={handlesearch}>search</button>
            <div id="table-wrapper">

                <div id="table-headers">
                    <table>
                        <thead>
                            <tr>
                                <th class="column1">Id</th>
                                <th class="column2">FirstName</th>
                                <th class="column3">LastName</th>
                                <th class="column4">Email</th>
                                <th class="column5">Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>

                <div id="table-data">
                    <table>
                        <tbody>

                            {display&&display.length&&display.map((item)=>(
                                
                                
                                    <tr class="data-row" style={
                                        active==item.id?{background:"pink"}:{background:""}
                                    } onClick={(e)=>{
                                        // all = document.getElementsByClassName(styles.highlight)[0]
                                        // all&&all.classList.remove(styles.highlight)
                                        // // all&&all.length&&all.map(item=>{
                                        // //     item.classList.remove(styles.highlight)
                                        // // })
                                        // e.target.className = styles.highlight
                                        setactive(item.id)
                                        setdetail({
                                        id :item.id,
                                        firstName: item.firstName,
                                        lastName: item.lastName,
                                        
                                        address:item.address.streetAddress,
                                        city:item.address.city,
                                        state:item.address.state,
                                        zip:item.address.zip ,
                                        description: item.description,
                                    })}}>
                                        <td class="column1">{item.id}</td>
                                        <td class="column2">{item.firstName}</td>
                                        <td class="column3">{item.lastName}</td>
                                        <td class="column4">{item.email}</td>
                                        <td class="column5">{item.phone}</td>
                                    </tr>
                                
                                
                            ))}
                            

                        </tbody>
                    </table>
                </div>

            </div>

        </div>


       

        <div id="info-wrapper">
            
            <h1>Details</h1>
            <p>Click on a table item to get detailed information</p>
                {detail?(
                    <div id="info-content">
                    <div><b>User selected:</b> {`${detail.firstName} ${detail.lastName}`}</div>
                    <div>
                        <b>Description: </b>
                        <textarea cols="50" rows="5" readonly value={detail.description}>
                            
                        </textarea>
                        
                    </div>
                    <div><b>Address:</b> {detail.address}</div>
                    <div><b>City:</b> {detail.city}</div>
                    <div><b>State:</b> {detail.state}</div>
                    <div><b>Zip:</b> {detail.zip}</div>
                </div>
                ):(
                    <div></div>
                )}
                
                
            
                
            
            
        </div>

    </main>
    </> );
}
 
export default Table;