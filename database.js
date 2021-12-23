// ----create user in db----
db.users.insertMany([
    {
        "user-id":1,
        "name":"Mega",
        "email":"mega@gmail.com",
    },
     {
        "user-id":2,
        "name":"Bhavan",
        "email":"bhavan@gmail.com",
    },
     {
        "user-id":3,
        "name":"Mani",
        "email":"mani@gmail.com",
    },
     {
        "user-id":4,
        "name":"Sandy",
        "email":"sandy@gmail.com",
    },
     {
        "user-id":5,
        "name":"Raju",
        "email":"raju@gmail.com",   
    }
    ])

// ----create codekata problems----
db.codekata.insertMany([
    {
        "user-id":1,
        "problems":80
    },
     {
        "user-id":2,
        "problems":110
    },
     {
        "user-id":3,
        "problems":95
    },
     {
        "user-id":4,
        "problems":55
    },
     {
        "user-id":5,
        "problems":75
    }
    ])  
    // -----create collection topics----
    db.topics.insertMany([
    {   
        "topic-id":1,
        "topic":"HTML",
        "month":"september",
    },
     {
         "topic-id":2,
        "topic":"CSS",
        "month":"september",
    },
     {
         "topic-id":3,
        "topic":"Bootstrap",
        "month":"october",
    },
     {
         "topic-id":4,
        "topic":"JavaScript",
        "month":"october",
    },
     {
         "topic-id":5,
        "topic":"React JS",
        "month":"november",
    }
    ])

    // -----mentor data----
    db.mentors.insertMany([
    {
        "Mentor_Name" : "Raghav",
        "Email_id" :"raghav345@gmail.com",
        "Students_assign": 50
    },
     {
        "Mentor_Name" : "Shirhaan",
        "Email_id" :"shirhaan56@gmail.com",
        "Students_assign": 10
    },
     {
        "Mentor_Name" : "Maniarasu",
        "Email_id" :"mani23@gmail.com",
        "Students_assign": 15
    },
     {
        "Mentor_Name" : "Rohit",
        "Email_id" :"rohit432@gmail.com",
        "Students_assign": 12
    },
     {
        "Mentor_Name" : "Pranav",
        "Email_id" :"panya098@gmail.com",
        "Students_assign": 18
    },
     {
        "Mentor_Name" : "Rajesh",
        "Email_id" :"rajesh76@gmail.com",
        "Students_assign": 10
    }])


// ------company drives-------
db.company_drive.insertMany([
    {
        "company_id": 1,
        "company_name": "SCAPIC",
        "date": "10/15/2021",
    },
    {
        "company_id": 2,
        "company_name": "FRESHWORKS",
        "date": "1/10/2021",
    },
    {
        "company_id": 3,
        "company_name": "PAYPAL",
        "date": "10/19/2021",
    },
    {
        "company_id": 4,
        "company_name": "FLIPKART",
        "date": "10/25/2021",
    },
    {
        "company_id": 5,
        "company_name": "AMAZON",
        "date": "10/20/2021",
    },
    {
        "company_id": 6,
        "company_name": "ZOHO",
        "date": "10/10/2021",
    }
])

// --------attendance--------

db.attendance.insertMany([
    {
        "user-id": 1,
        "company-1": 1,
        "company-2": 2,
        "company-3": 0,
        "company-4": 5,
        "company-5": 2,
        "company-6": 1,
        "attendance": "present"
    },
    {
        "user-id": 2,
        "company-1": 3,
        "company-2": 4,
        "company-3": 4,
        "company-4": 0,
        "company-5": 1,
        "company-6": 2,
        "attendance": "present"
    },
    {
        "user-id": 3,
        "company-1": 3,
        "company-2": 6,
        "company-3": 2,
        "company-4": 0,
        "company-5": 1,
        "company-6": 2,
        "attendance": "absent"
    },
    {
        "user-id": 4,
        "company-1": 4,
        "company-2": 5,
        "company-3": 7,
        "company-4": 2,
        "company-5": 0,
        "company-6": 1,
        "attendance": "present"
    },
    {
        "user-id": 5,
        "company-1": 1,
        "company-2": 6,
        "company-3": 3,
        "company-4": 6,
        "company-5": 0,
        "company-6": 7,
        "attendance": "absent"
    },
])
// -----tasks data-----
db.tasks.insertMany([
   {
	"id" : "1",
	"task_name" : "Task-1-HTML",
	 "month":"september",
},
{
	"id" : "2",
	"task_name" : "Task-2-CSS",
	"task_date":"september",
},
{
	"id" : "3",
	"task_name" : "Task-3-",
	" topic_date":"october",
},
{
	"id" : "4",
	"task_name" : "Task-4-JavaScript",
	"task_date":"october",
},
{
	"id" : "5",
	"task_name" : "Task-5-React JS",
	"task_date":"november",
},
    ])
