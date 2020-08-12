const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  //we select all from the projects table
  res.locals.connection.query(`SELECT * FROM projects`, function(error, results, fields) {
    if(error) {
      throw error
    } else {
      res.send(results)
    }
  })

  //we send that data to the front-end
})

router.post('/upload', function(req, res, next) {
  //we make a variable that contains the name, picture, summary, array of technology objects, repo link, and app link
  console.log("YOU LOOK CONFUSED BOI", req.body.projectDetails)
  const {
    projectName, 
    projectImage,
    projectLink, 
    repoLink, 
    description, 
    languages, 
    framework_frontend, 
    framework_backend, 
    libraries, 
    testing
  } = req.body.projectDetails
  
  console.log(languages)

  //We make a connection to our MySQL DB and implant the values of the newProject into the database
  res.locals.connection.query(`INSERT INTO projects (name, picture, summary, repolink, projectlink, backgroundpic, languages, framework_frontend, framework_backend, libraries, testing) 
  VALUES ('${projectName}', '${projectImage}', '${description}', '${repoLink}', '${projectLink}', ${null}, JSON_ARRAY('${languages}'), JSON_ARRAY('${framework_frontend}'), JSON_ARRAY('${framework_backend}'), JSON_ARRAY('${libraries}'), JSON_ARRAY('${testing}'))`, function(error, results, fields) {
    if(error) {
      throw error
    } else {
      res.send(results)
    }
  })
  //we make sure the project has an id number too

  //If successful we send a 200 

  //If there is an error we send a 401 
})

//can we make this router.delete('/') ?????
router.post('/delete', function(req, res) {
  console.log('Yahooo', req.body)

  res.locals.connection.query(`DELETE FROM projects WHERE project_id=${req.body.project_id}`, function(error, results, fields) {
    if(error) {
      throw error
    } else { 
      res.send(results)
    }
  })
  //we get the id for the specific project from the request body
  // const projectToDeleteID = ''
  //we make a connection to our MySQL DB and tell it to wipe out the row in the database with the given id

  //we return a 200

  //if there's an error we return a 401
})

module.exports = router