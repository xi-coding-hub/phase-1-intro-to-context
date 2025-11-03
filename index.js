let employees = ['Gray', 'Worm', 'security']

function createEmployeeRecord (arr) {
    
    let firstNm = arr[0]
    console.log(firstNm)
    let familyNm = arr[1]
    let titleData = arr[2]
    let payRate = arr[3]

    let employeeRecord = {
       firstName: firstNm,
       familyName: familyNm,
       title:  titleData,
       payPerHour: payRate,
       timeInEvents: [],
       timeOutEvents:[]
    }
    return employeeRecord
}

function createEmployeeRecords (){
    
}
createEmployeeRecord(employees)