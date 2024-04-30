// Find users with "Enim" tag using $Match: 
[
    {
      $match:{
        tags: "enim"
      }
    },
    {
      $count: "userWithEnimTag"
    }
  ]


  // What are the name and age of users who are inactive and have velit as a tag:
  [
    {
      $match:{
        isActive: false,
        tags: "velit"
      },
    },
    {
      $project: {
        name: 1,
        age: 1,
        tags: 1
      }
    }
  ]

  
// How many users have a phone number starting with +1 (940)
