function skillsMember() {
  // 1. Create a new object
  var member = {};

  // 2. Add properties and methods to the object
  member.name = 'John';
  member.age = 30;
  member.skills = ['JavaScript', 'Node.js', 'React'];

  member.getSkills = function() {
    return member.skills;
  };

  // 3. Return the object
  return member;
}