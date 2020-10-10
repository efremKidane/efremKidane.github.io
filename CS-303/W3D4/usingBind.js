 "use stric"
 let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],
  showList() {
  this.students.forEach(function(student) {
  // Error: Cannot read property 'title' of undefined
  alert(this.title + ': ' + student)
  });
  }
 };
 group.showList.bind(group);