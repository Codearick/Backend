// Find the users who have joined most recently
[
    {
       $sort: {
         registered: -1
       }
    },
    {
      $limit: 4
    },
    {
      $project: {
        name: 1,
        registered: 1,
        eyeColor: 1
      }
    }
  ]
  
//Categorize the users based on their favourite fruits and with their name.
[
    {
        $group: {
            _id: "$favoriteFruit",
            users: {
                $push: "$name"
            }
        }
    }
]

// Find the numbers of users that have 'ad' as an second tag in their list of tags 
[
    {
        $match: {
            "tags.1": "ad"
        }
    },
    {
        $count: "usersWithAdTags"
    }
]


// Find the users who have both 'enim' and 'id' as their tags.

[
    {
        $match: {
            $and: [
                {"tags": "enim"}, {"tags": "id"}
            ]
        }
    }
] 
// or you can use this: 
[
    {
        $match: {
          tags: {$all: ["enim", "id"]}
        }
    }
]


// List all the companies located in the USA with their corresponding user count. 
[
    {
        $match: {
            "company.location.country" : "USA"
        }
    },
    {
        $group: {
          _id: "$company.title", 
          count: {
            $sum: 1
          }
        }
    }
]
