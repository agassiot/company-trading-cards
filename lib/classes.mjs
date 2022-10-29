 var Employee = {
    setInfo(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    },
    setRole() {
        this.role = 'Employee';
    }
}

 var Engineer = Object.assign(
    Object.create(Employee),
    {
        setGit(github) {
            this.github = github;
        },
        setRole(){
            this.role = 'Engineer';
        },

       setCard() {
            this.htmlCard = `
    <div class="card border-info mb-3 rounded-lg" style="width: 18rem;">
    <div class="card-header text-info">
       ${this.name} : ${this.role}
    </div>
    <div class="card-body">
     <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id:  ${this.id} </li>
        <li class="list-group-item">Email:  ${this.email} </li>
        <li class="list-group-item">Github:  ${this.github} </li>
     </ul>
    </div>
  </div>`;
        }

    }
);

 var Intern = Object.assign(
    Object.create(Employee),
    {
        setSchool(school) {
            this.school = school;
        },
        setRole() {
            this.role = 'Intern';
        },

         setCard() {
            this.htmlCard = `
    <div class="card border-info mb-3 rounded-lg" style="width: 18rem;">
    <div class="card-header text-info">
       ${this.name} : ${this.role}
    </div>
    <div class="card-body">
     <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id:  ${this.id} </li>
        <li class="list-group-item">Email:  ${this.email} </li>
        <li class="list-group-item">School:  ${this.school} </li>
     </ul>
    </div>
  </div>`;
        }

    }
);

 var Manager = Object.assign(
    Object.create(Employee),
    {
        setOffice(officeNum) {
            this.officeNum = officeNum;
        },
        setRole() {
            this.role = 'Team Manager';
        },

        setCard() {
            this.htmlCard = `
    <div class="card border-info mb-3 rounded-lg" style="width: 18rem;">
    <div class="card-header text-info">
       ${this.name} : ${this.role}
    </div>
    <div class="card-body">
     <ul class="list-group list-group-flush">
        <li class="list-group-item">Employee Id:  ${this.id} </li>
        <li class="list-group-item">Email:  ${this.email} </li>
        <li class="list-group-item">Office #:  ${this.officeNum} </li>
     </ul>
    </div>
  </div>`;
        }

    }
);

module.exports = {Employee,Engineer,Intern,Manager};
