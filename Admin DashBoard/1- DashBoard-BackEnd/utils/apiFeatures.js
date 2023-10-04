const { match } = require("assert");

module.exports = class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  //1)) Filter:
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["sort", "page", "limit"];
    excludedFields.forEach((el) => delete queryObj[el]);
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );
    this.query = this.query.find(JSON.parse(queryString));
    return this;
  }

  //2))sort:
  sort() {
    if (this.queryString.sort) {
      const queryObj = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(queryObj);
    } else {
      this.query = this.query.sort("price");
    }
    return this;
  }

  //3))Pagination:

  pagination() {
    const page = +this.queryString.page || 1;

    const limit = +this.queryString.limit || 100;

    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
};
