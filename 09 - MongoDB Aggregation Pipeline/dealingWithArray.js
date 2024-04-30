// Find the average tags for all users.
[
    {
      '$addFields': {
        'totalTags': {
          '$size': {
            '$ifNull': [
              '$tags', []
            ]
          }
        }
      }
    }, {
      '$group': {
        '_id': null, 
        'AvgTags': {
          '$avg': '$totalTags'
        }
      }
    }
]


