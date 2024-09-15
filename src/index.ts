// 1. Optional properties

// TODO: Define the interface User with username, email, and optional bio
interface User {
  username: string;
  email: string;
  bio?: string;
}

// TODO: Create a user object using the defined interface. Add all properties

const user: User = {
  username: "Olli Opiskelija",
  email: "ollio@gmail.com",
  bio: "Liibalaaba",
};

// TODO: Create another user object using the defined interface. Don't add bio
const matti: User = {
  username: "Matti Meikäläinen",
  email: "MM@gmail.com",
};
// Function to display user information
function displayUserInfo(user: User): void {
  // TODO: console log all properties of a user separately. Example: console.log(user.email)
  console.log(`Nimi: ${user.username}`);
  console.log(`Email: ${user.email}`);
  if (user.bio) {
    console.log(`Bio: ${user.bio}`);
  }
}

// Display user information
displayUserInfo(user);
displayUserInfo(matti);
console.log("");

// 2. Array types

// Construct an interface for a blog post. Each post should have a title, content, and an array of tags. Write a function that displays the tags of a blog post.

// TODO: Define the interface BlogPost with title, content, and tags array

interface BlogPost {
  title: string;
  content: string;
  tags: string[];
}

const blogPost: BlogPost = {
  title: "Getting Started with TypeScript",
  content: "Learn the basics of TypeScript and its powerful features.",
  tags: ["TypeScript", "Programming", "Web Development"],
};

// Function to display tags of a blog post
function displayTags(post: BlogPost): void {
  console.log(`Tags: ${post.tags.join(", ")}`);
}

// Display tags of the blog post
displayTags(blogPost);
console.log("");

/* 3. Tuples.

Develop an interface for a student's exam result. Each result should include the student's name, an array of subject scores as a tuple (subject name and score), and the total score. Write a function that calculates and displays the average score. */

// TODO: Define the interface ExamResult with name, subject scores tuple, and total score
interface ExamResult {
  name: string;
  scores: [[string, number], [string, number], [string, number]];
  totalScore: number;
}

const examResult: ExamResult = {
  name: "Alice",
  scores: [
    ["Math", 85],
    ["Science", 92],
    ["History", 78],
  ],
  totalScore: 255,
};

// Function to calculate and display average score
function displayAverageScore(result: ExamResult): void {
  const totalSubjects = result.scores.length;
  const totalScore = result.totalScore;
  const averageScore = totalScore / totalSubjects;
  console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
}

// Display average score
displayAverageScore(examResult);
