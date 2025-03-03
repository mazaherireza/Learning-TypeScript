interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCouresGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  // return {
  //   title,
  //   description,
  //   completeUntil,
  // };

  // Or
  // ... properties are optional only temporarily.
  const courseGoal: Partial<CourseGoal> = {}; // In the end will be a Coursegoal.
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

const friend: Readonly<string[]> = ["Yousef"];
