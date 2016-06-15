
/** AccessToken indexes **/
db.getCollection("AccessToken").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** Product indexes **/
db.getCollection("Product").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** User indexes **/
db.getCollection("User").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** AccessToken records **/
db.getCollection("AccessToken").insert({
  "_id": "FA9JUJUBjnWspAMRBa5q3t3EBmn16dCzrfTQzwRg5Si6MZBvtogmqTIX39B1EHxr",
  "ttl": NumberInt(1209600),
  "created": ISODate("2016-06-14T03:26:54.655Z"),
  "userId": ObjectId("575f7910530962b40bbb8162")
});

/** Product records **/
db.getCollection("Product").insert({
  "_id": ObjectId("575f7b5a530962b40bbb8163"),
  "name": "iPhone 6s",
  "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "price": NumberInt(499),
  "created": ISODate("2016-06-14T00:00:00.0Z")
});

/** User records **/
db.getCollection("User").insert({
  "_id": ObjectId("575f7910530962b40bbb8162"),
  "username": "vietna",
  "password": "$2a$10$NkynY2IvCbfKZQpDCbK5ZeC6Pt8B7onBsk.9H4pi0KT3YrduZV38a",
  "email": "mr.nav90@gmail.com",
  "created": ISODate("2016-06-14T00:00:00.0Z"),
  "displayname": "Ngo Anh Viet"
});
