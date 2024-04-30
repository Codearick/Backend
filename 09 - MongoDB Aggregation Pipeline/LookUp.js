// Get the details of authors from authors collection in books collection
[
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_Details"
      }
    },
    {
      $addFields: {
        author_Details: {
          $first: "$author_Details"
        }
      }
    }
  ]
// Alternative way: 
[
    {
      $lookup: {
        from: "authors",
        localField: "author_id",
        foreignField: "_id",
        as: "author_Details"
      }
    },
    {
      $addFields: {
        author_Details: {
          $arrayElemAt: ["$author_Details", 0]
        }
      }
    }
  ]