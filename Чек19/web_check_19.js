function task(name, familyname, login = '1153307') {
  this.name = name;
  this.familyname = familyname;
  this.login = login;
}

task.prototype.getFullName = function() {
  return this.name + this.familyname + '!';
};
