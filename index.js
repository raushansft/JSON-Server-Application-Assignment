let container=document.getElementById("container");

async function updateDom(){
    let table=document.createElement("table");

    let thead=document.createElement("thead");

    let theadRow=document.createElement("tr");

    let th1=document.createElement("th");
    th1.textContent="ID";
    let th2=document.createElement("th");
    th2.textContent="NAME";
    let th3=document.createElement("th");
    th3.textContent="AGE";
    let th4=document.createElement("th");
    th4.textContent="GENDER";
    let th5=document.createElement("th");
    th5.textContent="MARK";
    let th6=document.createElement("th");
    th6.textContent="COHORT";
    let th7=document.createElement("th");
    th7.textContent="DELETE";

    theadRow.append(th1,th2,th3,th4,th5,th6,th7);
    thead.append(theadRow);


    let res=await fetch(" http://localhost:3000/students");
    let data=await res.json();

    let tbody=document.createElement("tbody");

    data.forEach(student => {
        let {id,name,age,gender,mark,cohort}=student;
        let row=document.createElement("tr");

        let td1=document.createElement("td");
        td1.textContent=id;
        
        let td2=document.createElement("td");
        td2.textContent=name;
        
        let td3=document.createElement("td");
        td3.textContent=age;
        
        let td4=document.createElement("td");
        td4.textContent=gender;
        
        let td5=document.createElement("td");
        td5.textContent=mark;
        
        let td6=document.createElement("td");
        td6.textContent=cohort;
        let td7=document.createElement("td");
        let deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.onclick= async function(){
            let res=await fetch(`http://localhost:3000/students/${id}`,{
                method:"delete"
            });
            // updateDom();
        }
        td7.append(deleteButton);

        
        row.append(td1,td2,td3,td4,td5,td6,td7);
        tbody.append(row);

        
        
    });

    table.append(thead,tbody);
    container.append(table);
}

updateDom();
console.log("hello")