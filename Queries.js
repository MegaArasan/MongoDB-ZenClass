//  1.Find all the topics and tasks which are thought in the month of October

db.tasks.find({ task_date: { $eq: "october" } }).toArray()
db.topics.find({ month: { $eq: "october" } }).toArray()

// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drive.find({ date: { $gt: "10/15/2021", $lt: "10/30/2021" } }).toArray()

// 3.Find all the company drives and students who are appeared for the placement.

db.attendance.aggregate([
  { $match: { attendance: "present" } },
  {
    $lookup: {
      from: "users",
      localField: "user-id",
      foreignField: "user-id",
      as: "user-id",
    },
  },
  {
      $lookup:{
          from:"company_drive",
          localField:"company-1",
          foreignField:"company_id",
          as:"company-1",
      }
  },
  {
      $lookup:{
          from:"company_drive",
          localField:"company-2",
          foreignField:"company_id",
          as:"company-2",
      }
  },
  {
    $lookup:{
        from:"company_drive",
        localField:"company-3",
        foreignField:"company_id",
        as:"company-3",
    }
},
{
    $lookup:{
        from:"company_drive",
        localField:"company-4",
        foreignField:"company_id",
        as:"company-4",
    }
},
{
    $lookup:{
        from:"company_drive",
        localField:"company-5",
        foreignField:"company_id",
        as:"company-5",
    }
},
{
    $lookup:{
        from:"company_drive",
        localField:"company-6",
        foreignField:"company_id",
        as:"company-6",
    }
},
]).toArray()

// 4.Find the number of problems solved by the user in codekata
    db.codekata.aggregate([
        {
            $lookup:{
                from:"users",
                localField:"user-id",
                foreignField:"user-id",
                as:"user"
            }
        },        
    ]).toArray()

// 5.Find all the mentors with who has the mentee's count more than 15
    db.mentors.find({Students_assign:{$gt:15}}).toArray()

// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
