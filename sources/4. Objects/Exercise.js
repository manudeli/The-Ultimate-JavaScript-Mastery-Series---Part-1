{
  const address = {
    street: "Kyeonlidan-Gil",
    city: "Seoul",
    zipCode: 123456,
  };
  {
    // 1. Address Object
    // street
    // city
    // zipCode
    // showAddress(address)

    function showAddress() {
      for (let key in this) console.log(this[key]);
    }

    showAddress.call(address);
  }
  {
    // 2. Factory and Constructor
    const addressByFactory = createAddress("Kyeonlidan-Gil", "Seoul", 123456);
    const addressByConstructor = new Address("Kyeonlidan-Gil", "Seoul", 123456);
    console.log(addressByFactory);
    console.log(addressByConstructor);

    // a. Factory
    function createAddress(street, city, zipCode) {
      return { street, city, zipCode };
    }
    // b. Constructor
    function Address(street, city, zipCode) {
      this.street = street;
      this.city = city;
      this.zipCode = zipCode;
    }

    // 3. Object Equality
    const address1 = new Address("Kyeonlidan-Gil", "Seoul", 123456);
    const address2 = new Address("Kyeonlidan-Gil", "Seoul", 123456);
    const address3 = address2;

    console.log(areSameProperties(address1, address2));
    console.log(areSameReference(address1, address2));
    console.log(areSameReference(address3, address2));

    // Same properties
    function areSameProperties(address1, address2) {
      let areSame = true;
      for (let key in address1) {
        areSame = address1[key] !== address2[key] ? false : true;
      }
      return areSame;
    }
    // Same reference
    function areSameReference(address1, address2) {
      return address1 === address2;
    }
  }
}
{
  // 4. Blog Post Object
  // title
  // body
  // author
  // views
  // comments
  // (author, body)
  // isLive
  const post = {
    title: "a",
    body: "b",
    author: "c",
    views: 12,
    comments: [
      { author: "a", body: "b" },
      { author: "c", body: "d" },
      { author: "e", body: "f" },
    ],
    isLive: true,
  };
  console.log(post);

  // Post constructor for initializing a real Post of Blog
  const postByConstructor = new Post("a", "b", "c");
  console.log(postByConstructor);

  function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
  }
}
{
  // Price Range Object
  const priceRanges = [
    { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
    { label: "$$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
    { label: "$$$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
  ];

  let restaurants = [
    {
      averagePerPerson: 5,
    },
  ];
}
