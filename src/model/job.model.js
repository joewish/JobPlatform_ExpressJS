export const jobs = [
  {
    id: 1,
    status: "Actively Hiring",
    company: "Coding Ninja",
    role: "Tech SDE",
    location: "india",
    salary: "15-16 LPA",
    skills: ["HTML", "CSS", "JS", "Mongo DB", "SQL", "AWS"],
    openings: 3,
    apllied: 5,
    applyBy:"04/06/2025"
  },
  {
    id:2,
    status: "Actively Hiring",
    company: "Go digit",
    role: "Tech Angular developer",
    location: "Pune IND On-site",
    salary: "6-10 LPA",
    skills: ["HTML", "CSS", "JS", "Mongo DB", "SQL", "AWS"],
    openings: 3,
    apllied: 5,
    applyBy:"04/06/2025"
  },
  {
    id:3,
    status: "Actively Hiring",
    company: "Juspay",
    role: "Tech SDE",
    location: "Bangalore, remote",
    salary: "20-26 LPA",
    skills: ["HTML", "CSS", "JS", "Mongo DB", "SQL", "AWS"],
    openings: 3,
    apllied: 5,
    applyBy:"04/06/2025"
  },
];
export const Users = [{id:1,name:"test1","email":"test1@example.com",password:"test1password"}];
export const getJob =(id)=> jobs.filter(job => {if (job.id==id){return job}})

export const getUser = (reqUser) => {
    // Write your code here
    const existingUser = Users.find((user) => {
      if (user.email=== reqUser.email){
        if(user.password===reqUser.password){
          return true;
        }
      }else{
        return false;
      }});
    return existingUser  
  };

// Function to generate a unique ID
const generateId = () => {
  return Math.max(...jobs.map((job) => job.id), ...Users.map((user) => user.id)) + 1;
};

export const addUser = (user) => {
  // Check for missing properties
  if (!user.name || !user.email || !user.password) {
    throw new Error("Missing required user properties: name, email, password");
  }

  // Check for existing email
  const existingUser = Users.find((u) => u.email === user.email);
  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Generate a unique ID
  user.id = generateId();

  // Add the user to the Users array
  Users.push(user);

  return user; // Return the added user object
};

export const updateUser = (user) => {
  // Check if user ID exists
  const existingUserIndex = Users.findIndex((u) => u.id === user.id);
  if (existingUserIndex === -1) {
    throw new Error("User with that ID does not exist");
  }

  // Update existing user properties
  Users[existingUserIndex] = { ...Users[existingUserIndex], ...user };

  return Users[existingUserIndex]; // Return the updated user object
};

export const removeUser = (userId) => {
  // Check if user ID exists
  const existingUserIndex = Users.findIndex((u) => u.id === userId);
  if (existingUserIndex === -1) {
    throw new Error("User with that ID does not exist");
  }

  // Remove user from Users array
  Users.splice(existingUserIndex, 1);

  return true; // Return true on successful removal
};

export const addJob = (job) => {
  // Check for missing properties
  const requiredProps = ["status", "company", "role", "location", "salary", "skills", "openings", "applyBy"];
  const missingProps = requiredProps.filter((prop) => !job[prop]);
  if (missingProps.length > 0) {
    throw new Error(`Missing required job properties: ${missingProps.join(", ")}`);
  }

  // Generate a unique ID
  job.id = generateId();

  // Add the job to the jobs array
  jobs.push(job);

  return job; // Return the added job object
};

export const updateJob = (job) => {
  // Check if job ID exists
  const existingJobIndex = jobs.findIndex((j) => j.id === job.id);
  if (existingJobIndex === -1) {
    throw new Error("Job with that ID does not exist");
  }

  // Update existing job properties
  jobs[existingJobIndex] = { ...jobs[existingJobIndex], ...job };

  return jobs[existingJobIndex]; // Return the updated job object
};

export const removeJob = (jobId) => {
  // Check if job ID exists
  const existingJobIndex = jobs.findIndex((j) => j.id === jobId);
  if (existingJobIndex === -1) {
    throw new Error("Job with that ID does not exist");
  }

  // Remove job from jobs array
  jobs.splice(existingJobIndex, 1);

  return true; // Return true on successful removal
};
