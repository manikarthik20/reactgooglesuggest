
import axios from "axios"
import React, { useState } from "react"

const Example = () => {

    // const [search, setSearch] = useState([])
     const [data, setData] = useState([]);

    // window.process = function (source) {
    //     console.log(source);
    //     console.log(source.id);
    //     console.log(source.title);
    // }

    const process = (e) => {
        console.log(e);
        console.log(e.id);
        console.log(e.title);
    }


    const handleInputChange = (e) => {

        let searchKeyword = e.target.value;
        axios.get(`http://192.168.3.113:8080/QuestyTasks/query.jsp?q=${searchKeyword}`)
            .then(e => {
                // collecting data from RESTFul API's
                var p = e.data;
                setData(p);
                console.log(data);
                // iterating through number of data objects dynamically
                var result = "<br/>";

                for (var i = 0; i < data.length; i++) {
                    // you should remember the attributes ur sending
                    // any wron attribute u will encounter undefined error
                    // we have two attributes ename and id
                    // using only ename
                    console.log(data[i].ename);
                    //renderring 
                    result += "<table><td>"+ p[i].ename +"</td></table>"
                    //result += "<a href='#' id='r" + "style='color:white;text-align:left;width:80%'" + i + "' title='" + p[i].ename + "' onClick='process(this);'>" + p[i].ename + "</a><br/>";
                    //result += <a href='#' title={data[i].ename} onClick={process} >{data[i].ename}</a>
                }
                console.log(JSON.stringify(result));
                document.getElementById('result').innerHTML = JSON.stringify(result);
            }

            );
    }
    return (
        <div>
            {/* <input type="text"
                placeholder="Search a location"
                onKeyUp={handleInputChange}
            />
            <span id="result"></span> */}
            <div className="continer">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <input type="Search" style={{ border: "none", fontSize: "20px", width: "80%" }}
                            placeholder="Search a location"
                            onKeyUp={handleInputChange}
                        />
                        <span id="result" style={{ border: "none", backgroundColor: "white", width: "80%" }}
                        ></span>
                        {/* <label for="image">Image:</label> */}
                        {/* <input type="file" name="image" class="form-control" id="image" value="" onchange="OnFileValidation()"/><br/> */}
                        {/* <button type="submit" class="btn btn-success">Submit</button>         */}
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Example;


{/* <body class="bg-dark">
    <div class="continer">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <h5>File Size Validation Using Javascript Example</h5>
                    </div>
                    <div class="card-body">
                        <form method="post" name="frmAdd" id="frmAdd">
                            <label for="image">Image:</label>
                            <input type="file" name="image" class="form-control" id="image" value="" onchange="OnFileValidation()"><br/>
                            <button type="submit" class="btn btn-success">Submit</button>        
                       </form>
                    </div>
            </div>
        </div>
    </div>
</div> */}