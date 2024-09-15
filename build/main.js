'use strict';

// 1. Optional properties
// TODO: Create a user object using the defined interface. Add all properties
const user = {
    username: "Olli Opiskelija",
    email: "ollio@gmail.com",
    bio: "Liibalaaba",
};
// TODO: Create another user object using the defined interface. Don't add bio
const matti = {
    username: "Matti Meikäläinen",
    email: "MM@gmail.com",
};
// Function to display user information
function displayUserInfo(user) {
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
const blogPost = {
    title: "Getting Started with TypeScript",
    content: "Learn the basics of TypeScript and its powerful features.",
    tags: ["TypeScript", "Programming", "Web Development"],
};
// Function to display tags of a blog post
function displayTags(post) {
    console.log(`Tags: ${post.tags.join(", ")}`);
}
// Display tags of the blog post
displayTags(blogPost);
console.log("");
const examResult = {
    name: "Alice",
    scores: [
        ["Math", 85],
        ["Science", 92],
        ["History", 78],
    ],
    totalScore: 255,
};
// Function to calculate and display average score
function displayAverageScore(result) {
    const totalSubjects = result.scores.length;
    const totalScore = result.totalScore;
    const averageScore = totalScore / totalSubjects;
    console.log(`Average Score for ${result.name}: ${averageScore.toFixed(2)}`);
}
// Display average score
displayAverageScore(examResult);
