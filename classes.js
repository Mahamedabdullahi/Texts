 export class Visitors {
    constructor(name, email, password, address, phone,dataTime, ){
        this.name = name;
        this.email = email;
        this.password = password;
        this.address = address;
        this.phone = phone;
        this.dataTime = dataTime;
    }

  getVisitoors() {
    return `name:${this.name} email:${this.email} password:${this.password} address:${thi.address} phone:${this.phone} dataTime:${this}`
  }
}

const visitor1 = new Visitors('cabdallah','cabdallah@gmail.com','admin','123main',9876543,new Date())
console.log(visitor1)
