export let courseName = "ReactJS";
let course = {
  getCourseName: function () {
    return courseName;
  },
  setCourseName: function (newCourseName) {
    courseName = newCourseName;
  }
};

export default course;
