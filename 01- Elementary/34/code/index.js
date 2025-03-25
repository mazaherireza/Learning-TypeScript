define(["require", "exports", "./teacher"], function (
  require,
  exports,
  teacher_1
) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const teacher = new teacher_1.Teacher(
    "Hassan",
    "Khotanlou",
    "Computer Engineering"
  );
  console.log(teacher.getFullname());
});
