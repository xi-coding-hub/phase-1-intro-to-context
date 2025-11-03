let employees = ['Gray', 'Worm']

function createEmployeeRecord (arr) {
    
    let firstNm = arr[0]
    console.log(firstNm)
    let familyNm = arr[1]
    // return (firstNm,familyNm)
    let employeeRecord = {
       firstName: firstNm,
       familyName: familyNm 
    }
    return employeeRecord
}

createEmployeeRecord(employees)