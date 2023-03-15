const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      age: 30,
      city: "New York"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      age: 25,
      city: "Los Angeles"
    },
    {
      id: 3,
      name: "David Lee",
      email: "david.lee@example.com",
      age: 40,
      city: "Chicago"
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@example.com",
      age: 27,
      city: "Houston"
    },
    {
      id: 5,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      age: 32,
      city: "Philadelphia"
    },
    {
      id: 6,
      name: "Jessica Kim",
      email: "jessica.kim@example.com",
      age: 29,
      city: "San Francisco"
    },
    {
      id: 7,
      name: "William Chen",
      email: "william.chen@example.com",
      age: 35,
      city: "Seattle"
    },
    {
      id: 8,
      name: "Emma Wilson",
      email: "emma.wilson@example.com",
      age: 23,
      city: "Boston"
    },
    {
      id: 9,
      name: "Daniel Lee",
      email: "daniel.lee@example.com",
      age: 28,
      city: "Dallas"
    },
    {
      id: 10,
      name: "Olivia Rodriguez",
      email: "olivia.rodriguez@example.com",
      age: 31,
      city: "Miami"
    }
  ];
  
  const newUser = [...users ,  {
    id: 11,
    name: "John mia",
    email: "john.mia@example.com",
    age: 10,
    city: "New Bangla"
  },]
console.log(newUser)
console.log(JSON.stringify(users))

const getUsers = () => {
    users.map((user) => {
        console.log(user)
    })
}

getUsers()