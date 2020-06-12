const express = require('express')
const bodyParser = require('body-parser')

const nano = require('nano')('http://localhost:5984')
const iTube = nano.db.use('itube');

const cors = require('cors')
const router = express.Router();

router.use(cors()) //Cross-Origin Resource Sharing (CORS)
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//============ GET VIDEOS ============//
router.get('/api/videos', (req, res) => {
  iTube.view('videos', 'video-view',{
   include_docs:true
  }).then(body=>{
    let toSend = body.rows.map(body=>{
      return body.doc
    })
      res.send(toSend)
  }) 
})


//============ GET TAGS ============//

router.get('/api/tags', (req, res) => {
  iTube.view('videos', 'video-view',{
   include_docs:true
  }).then(body=>{
    let toSend = body.rows.map(body=>{
      return body.doc
    })
      res.send(toSend)
  }) 
})


























// //======== upload image ==========//
// const multer = require('multer');
// const storage = multer.diskStorage(
//   {
//     destination:'./uploads',
//     filename: function (req, file, cb) {
//       let d = new Date();
//       cb(null, d.getHours()+""+d.getMinutes() + "-" + file.originalname)
//     } 
//   }
// )
 
// var upload = multer({ storage: storage })
// router.post('/uploadSingleFile', upload.single("file"), (req, res)=>{
//   console.log(req.file)
// })
// //========= end of upload image ==============//

// router.use(cors()) //Cross-Origin Resource Sharing (CORS)
// router.use(bodyParser.urlencoded({ extended: false }))
// router.use(bodyParser.json())

// // ========== U S E R S ===========//
// router.get('/masterlist/id2/:val',(req,res)=>{
//   let val = req.params.val
//   MasterList.view('delo', 'byEmployeeCode', {
//     'key': val
//   }).then(body => {
//     res.send(body.rows[0].value)
//   }).catch(err => {
//     console.log(err.message)
//   })
// })

// //========= S U M M A R Y  O F  P R O J E C T S =========//
// //update for presentation
// router.post('/updateForPresentation', (req,res)=> {
//   MasterProject.insert(req.body).then(body => {
//     res.send(body)
//   })
// })




// // ========== P R O J E C T S ===========//
// //soft delete project
// router.post('/deleteProject', (req, res) => {
//   MasterProject.insert(req.body).then(body=>{
//     res.send(body._rev)
//   })
// })

// //add New Record
// router.post('/addNewProject', (req, res) => {
//   MasterProject.insert(req.body).then(body => {
//       console.log(body);
//       res.send(body)
//   })
// })

// router.get('/getAllDepartmentProjectRecords/:department', (req, res)=>{
//   const department = req.params.department
//   MasterProject.view('hazel', 'all_records',{
//    include_docs:true
//   }).then(body=>{
//     let toSend = body.rows.map(body=>{
//       return body.doc
//     }).filter(rec => {
//       return rec.developer_department === department
//     })
//       res.send(toSend)
//   }) 
// })


// router.get('/getAllDepartmentSectionProjectRecords/:department/:section', (req, res)=>{
//   const department = req.params.department
//   const section = req.params.section
//   MasterProject.view('hazel', 'all_records',{
//    include_docs:true
//   }).then(body=>{
//     let toSend = body.rows.map(body=>{
//       return body.doc
//     }).filter(rec => {
//       return rec.developer_department === department && rec.developer_section === section
//     })
//       res.send(toSend)
//   }) 
// })



// //get all records
// router.get('/getAllProjectRecords/:department/:section', (req, res)=>{
//   const department = req.params.department
//   const section = req.params.section
//   MasterProject.view('hazel', 'all_records',{
//    include_docs:true
//   }).then(body=>{
//     let toSend = body.rows.map(body=>{
//       return body.doc
//     }).filter(rec => {
//       return rec.developer_section === section && rec.developer_department === department
//     })
//       res.send(toSend)
//   }) 
// })

// router.get('/getAllProjectRecordsForPresentation/:department/:section', (req, res)=>{
//   // const team = req.params.team
//   const department = req.params.department
//   const section = req.params.section
//   MasterProject.view('hazel', 'all_records',{
//    include_docs:true
//   }).then(body=>{
//     let toSend = body.rows.map(body=>{
//       return body.doc
//     }).filter(rec => {
//       return rec.developer_section === section && rec.developer_department === department
//     })
//       res.send(toSend)
//   }) 
// })

// // ========== F U N C T I O N S ============//
// //update request
// router.post('/updateRequestFunction', (req, res) => {
//   MasterProject.insert(req.body).then(body => {
//     console.log(body)
//     res.send(body)
//   })
// })

// //add request
// router.post('/saveRequestFunction', (req, res) => {
//   MasterProject.insert(req.body).then(body => {
//       console.log(body); 
//       res.send(body)    
//     })
// })

// //HARD delete request
// router.post('/deleteFunction', (req, res) => {
//   MasterProject.insert(req.body).then(body => {
//       console.log(body); 
//       res.send(body)
//   })
// })

//chaar lang
router.get('/',(req,res)=>{
 res.send('hi Zhell - api from project monitoring system')
})
module.exports = router;
