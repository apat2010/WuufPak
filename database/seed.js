// const faker = require('faker');
// const db = require('./index.js');
// const Pak = require('./Pak.js');

// // const sampleUsers = [];
// const sampleReviews = [];

// const categories = ['Responsive host', 'Great location', 'Helpful host', 'Comfortable beds', 'Easy check-in', 'Great views', 'A quiet neighborhood', 'Central location', 'Thoughtful touches', 'Friendly host', 'Great restaurants'];

// for (let i = 0; i < 100; i += 1) {
//   const listingId = 30506100 + i;
//   const reviewCategories = [];
//   const reviewCategoriesMap = {};
//   const allReviews = [];

//   const numberReviews = Math.floor(Math.random() * 50) + 10;

//   for (let k = 0; k < numberReviews; k += 1) {
//     const listingCategory = categories[Math.floor(Math.random() * 11)];

//     if (reviewCategoriesMap[listingCategory] === undefined) {
//       reviewCategories.push({
//         title: listingCategory,
//         count: 1,
//       });
//       const index = reviewCategories.length - 1;
//       reviewCategoriesMap[listingCategory] = index;
//     } else if (reviewCategoriesMap[listingCategory]) {
//       const catIndex = reviewCategoriesMap[listingCategory];
//       reviewCategories[catIndex].count += 1;
//     }

//     const userId = 2000 + k;

//     allReviews.push({
//       user_info: {
//         user_id: userId,
//         firstName: faker.name.firstName(),
//         lastName: faker.name.lastName(),
//         email: faker.internet.email(),
//         // eslint-disable-next-line no-useless-concat
//         // eslint-disable-next-line prefer-template
//         pictureUrl: 'https://source.unsplash.com/collection/888146/300x300"+"?dummy=848474' + k,
//         password: faker.internet.password(),
//       },
//       body: faker.lorem.paragraph(),
//       entry_date: faker.date.past(),
//       category: listingCategory,
//     });
//   }

//   sampleReviews.push({

//     listing_id: listingId,
//     num_reviews: numberReviews,
//     all_reviews: allReviews,
//     review_categories: reviewCategories,
//     review_ratings: [
//       { title: 'Cleanliness', rating: faker.random.float({ min: 4.0, max: 5.0, precision: 0.1 }) },
//       { title: 'Communication', rating: faker.random.float({ min: 4.0, max: 5.0, precision: 0.1 }) },
//       { title: 'Check-In', rating: faker.random.float({ min: 4.0, max: 5.0, precision: 0.1 }) },
//       { title: 'Accuracy', rating: faker.random.float({ min: 4.0, max: 5.0, precision: 0.1 }) },
//       { title: 'Location', rating: faker.random.float({ min: 4.0, max: 5.0, precision: 0.1 }) },
//       { title: 'Value', rating: faker.random.float({ min: 4.0, max: 5.0, precision: 0.1 }) },
//     ],
//     overall_rating_avg: faker.random.float({ min: 4.50, max: 5.00, precision: 0.01 }),
//   });
// }

// // const insertSampleReviews = () => Reviews.create(sampleReviews);

// Promise.all([insertSampleReviews()])
//   .then(() => {
//     db.close();
//   })
//   .catch();
