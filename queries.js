// Task 2: Basic CRUD Operations done on the MongoDB Shell----------------


    //Query to Find all books in the Fiction genre
    db.books.find({genre:"Fiction"})

    //Query to find books published after 1950
    db.books.find({published_year:{$gt:1950}})

    //Query to find books by a Harper Lee
    db.books.find({author:"Harper Lee"})

    //Query to update the book whose title is To kill a mockingbirtd from $12.99 to 15.99
    db.books.updateOne({title:"To Kill a Mockingbird"},{$set:{price:15.99}})

    //Query to delete a book by its title
    db.books.deleteOne({title:"Brave New World"})

    //

//Task 3: Advanced Queries----------------


    //Query to find books that are both in stock and published after 2010
    db.books.find({$and:[{in_stock: true},{published_year:{$gt: 2010}}]})

    //Query using projection to return only the title, author, and price fields 
    db.books.find({},{_id:0,title:1,author:1,price:1})

    //Implement sorting to display books by price (both ascending and descending)
        //Ascending Order
        db.books.find().sort({price :1})
        //Descending Order
        db.books.find().sort({price :-1})

    //Use the limit and skip methods to implement pagination (5 books per page)
        //First Page
        db.books.find().limit(5).skip(0)
        //Second Page
        db.books.find().limit(5).skip(5)
        //Third Page
        db.books.find().limit(5).skip(10)
        //Fourth Page
        db.books.find().limit(5).skip(15)
        //Fifth Page
        db.books.find().limit(5).skip(20)



//Task 4: Aggregation Pipeline-----------------


    //Aggregation pipeline to calculate the average price of books by genre
    db.books.aggregate([
        {
            $group:{
                _id:"$genre",
                averagePrice:{$avg:"$price"}
            }
        },
        {
            $project:{
                _id:0,
                genre:"$_id",
                averagePrice: { $round: ["$averagePrice", 2] }
            }
        }
    ])

    //Aggregation pipeline to find the author with the most books in the collection
    db.books.aggregate([
        {
            $group: {
            _id: "$author",          // group by author
            totalBooks: { $sum: 1 }  // count number of books
            }
        },
        {
            $sort: { totalBooks: -1 }  // sort descending by count
        },
        {
            $limit: 1                  // keep only the top author
        },
        {
            $project: {
            _id: 0,
            author: "$_id",
            totalBooks: 1
            }
        }
    ])


    //Pipeline that groups books by publication decade and counts them
    db.books.aggregate([  
        {  
            $project: {  
            title: 1,  
            published_year: 1,  
            // compute decade: e.g., 1999 -> 1990, 2005 -> 2000  
            decade: { $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] }  
            }  
        },  
        {  
            $group: {  
            _id: "$decade",  
            count: { $sum: 1 },  
            books: { $push: { title: "$title", year: "$published_year" } } // optional  
            }  
        },  
        { $sort: { _id: 1 } }  
    ]);  

//Task 5: Indexing-------------------


    //Create an index on the title field for faster searches
    db.books.createIndex({title:1})

    //Create a compound index on author and published_year
    db.books.createIndex({author:1,published_year:1})

    //Use the explain() method to demonstrate the performance improvement with your indexes
    db.books.find({ author: "Gerald Knigh", published_year: 2022 }).explain("executionStats")