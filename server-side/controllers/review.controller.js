const reviewServices = require('../services/reviews.service')

module.exports = {
  postReview: async (req, res, next) => {
    try {
      const { body } = req
      const review = reviewServices.addReview
      res.send({id: newId})  
    } catch(err) {
      next(ERR_SERVER)
    }
  }
}