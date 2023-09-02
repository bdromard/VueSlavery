
const findById = async(Model, name) => {
  try {
  const response = await Model.findOne({
    where: {
      name: name
    }
  })
  return response['dataValues']['id']
  }
  catch(error) {
    console.log(error)
  }
}

const helpers = {};
helpers.findById = findById;

module.exports = helpers;
