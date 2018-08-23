# ex5 - Extra exercise: School Tool
Create a management tool for the teachers.
Be sure to use some logging in the process. 

The students have a set of courses they follow.
For each course, the students gets grades.

Both have a similar model but differentiate.
* Create me both a Student and Teacher class and apply the OCP pattern to it.

# The Course Class
* Create a course class
* Name it
* Link a teacher to it
* Link a list of students
* Make a service class to apply CRUD operations on Course

# The Grade Class
* Create a grade class
* Add points attribute
* link to course 
* link to student
* Make a service class to apply CRUD operations on Grade

# Bonus: Make the service generic

# The Teachers Role
* The teacher can lookup all students in his class (HTML & TS)
* The teacher can add a new student (HTML & TS)
    * When a new student is added, be sure the student has added the course to his list
* The teacher can remove a student (HTML & TS)
    * When a student is removed, be sure the student has removed the course to his list
* The teacher can grade a student of his class only on his own course (HTML & TS)


# Application
* Create dummy data at start for teachers and students
* Create a drop down list of teachers you can choose from. (HTML & TS)
* Once chosen, you are logged in as that teacher. (HTML & TS)
* When logged in, you can see all your students (HTML & TS)
* With the provided implementation of the teachers role, you can create a management tool for the students.


# Bonus exercises
* When I press a button, I want to see a sorted list of the logged in teachers students.
* When I press a button, I want to see who has the highest grades of my course