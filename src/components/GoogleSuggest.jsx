
import axios from "axios"
import React from "react"

const GoogleSuggest = () => {

    // const [search, setSearch] = useState([])
    // const [data, setData] = useState("");

    window.process = function (source) {
        console.log(source);
        console.log(source.id);
        console.log(source.title);

        document.getElementById("searchBox").value=source.textContent;
        //UNOPTIMISE CODE
        //document.getElementById("searchBox").value=source.title;
        document.getElementById("result").innerHTML="";
    }

    const handleInputChange = (e) => {

        let searchKeyword = e.target.value;
        axios.get(`http://192.168.3.113:8080/QuestyTasks/query.jsp?q=${searchKeyword}`)
            .then(e => {
                // collecting data from RESTFul API's
                var p = e.data;
                // iterating through number of data objects dynamically
                var result = "";
                for (var i = 0; i < p.length; i++) {
                    // you should remember the attributes ur sending
                    // any wron attribute u will encounter undefined error
                    // we have two attributes ename and id
                    // using only ename
                    console.log(p[i].ename);
                    //renderring 

                    result += "<table style= background-color:white;width:80%;margin-left:10%;border-radius:5px><td style=text-align:left><a style=text-decoration:none;color:grey href='#' onClick='process(this);'>"+p[i].ename+" "+""+"</a></td></table>"
                    
                    //UNOPTIMIISE CODE 
                    //result += "<table style= background-color:white;width:80%;margin-left:10%;border-radius:5px><td style=text-align:left><a style=text-decoration:none;color:grey href='#' id='r"+i+"' title='"+p[i].ename+"' onClick='process(this);'>"+p[i].ename+"</a></td></table>"
                    
                    //result += "<a  href='#' id='r"  + i +  "'  title='" + p[i].ename + "' onClick='process(this); ' >" + p[i].ename + "</a><br/>";
                    //result += <a href='#' title={p[i].ename} onClick={process}>{p[i].ename}</a>
                }
                document.getElementById('result').innerHTML = result;
            }

            );
    }
    return (
        <div>
          
            <div className="continer">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <input type="Search" id="searchBox" style={{ border: "none", fontSize: "20px",width:"80%",borderRadius:"5px",marginTop:"10px" }}
                            placeholder="Search..."
                            onKeyUp={handleInputChange}
                        />
                        <span id="result" 
                        ></span>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoogleSuggest;
