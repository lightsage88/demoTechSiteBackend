module.exports = (sequelize, Sequelize) => {
  const Project = sequelize.define('project', {
    project_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    //TODO: may not use this for now but lets keep it anyways
    //TODO: Blob may not be long in this case
    picture: {
      type: Sequelize.BLOB('long')
    },
    summary: {
      type: Sequelize.STRING
    },
    repolink: {
      type: Sequelize.STRING
    },
    projectlink: {
      type: Sequelize.STRING
    },
    backgroundpic: {
      type: Sequelize.BLOB('long')
    },
    languages: {
      type: Sequelize.STRING,
      get: function() {
        const rawValue = this.getDataValue('languages')
        //We use Object.values(---) because rawValue saves as an object
        return rawValue ? Object.values(rawValue) : null
      },
      // set: function(val) {
      //   const rawValue = val
      //   console.log('whats up val?', val, typeof(val))
      //   console.log(rawValue.join(','))
      //   // return rawValue ? Object.values(rawValue) : null
      //   return this.setDataValue(rawValue.join(','))
      // }
    },
    framework_frontend: {
      type: Sequelize.STRING
    },
    framework_backend: {
      type: Sequelize.STRING
    },
    testing: {
      type: Sequelize.STRING
    },
    libraries: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  })

  return Project
}